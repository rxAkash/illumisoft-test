import { NavigationProp } from '@react-navigation/native';
import Analytics from 'appcenter-analytics';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AnswerButton from 'UIToolkit/Inputs/AnswerButton';
import YesNoQuestion from 'UIToolkit/YesNoQuestion';
import DiabetesLayout from '../../components/DiabetesLayout';
import { diabetesText } from '../../config/strings';
import { LABORATORY_RESULTS_QUESTIONS } from './conf';
import styles from '../../styles';
import ResultDisplayBottomPanel from 'UIToolkit/ResultDisplayBottomPanel';
import { dkaTransparentIc } from 'assets/img';
import { CEREBRAL_EDEMA, DIABETES_HOME, PAITENT_INFO_INPUT, ROUTINE_RAPID_INSULIN_DOING } from 'Modules/Diabetes/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const LaboratoryResults = React.memo(({navigation}: Props) => {
  const [answers, setAnswers] = useState<{[key: string]: number}>({});
  
  useEffect(() => {
    const clearListener = navigation.addListener('focus', () => {
      setAnswers({})
    })
    return () => {
      navigation.removeListener('focus', clearListener)
    }
  }, [])

  const onAnswer = (id: number, answer: number) => {
    const newAnswers = {
      ...answers,
      [id.toString()]: answer
    }
    setAnswers(newAnswers)
  }

  const isDKALikely = () => {
    return haveInputs() && answers[1] === 1 && (answers[2] === 1 || answers[3] === 1 || answers[4] === 1)
  }

  const showGoHome = () => haveInputs() && answers[1] === 0;

  const needLabsToProceed = () => {
    if(answers[1] === 0) {
      return false;
    }
    if(answers[1] === -1) {
      return true
    }
    if(isDKALikely()) {
      return false;
    }
    if(answers[2] === -1 || answers[3] === -1 || answers[4] === -1) {
      return true
    }
    return false;
  }

  const renderNotObtainedButton = (id: number) => (
    <AnswerButton
      onAnswer={() => onAnswer(id, -1)}
      text='Not Obtained'
      selected={answers[id] === -1}
      style={styles.wideButton}
    />
  )

  const haveInputs = () => Object.keys(answers).length === LABORATORY_RESULTS_QUESTIONS.length

  const getBottomPanelText = () => {
    if(!haveInputs()) {
      return '--'
    }
    if(needLabsToProceed()) {
      return diabetesText.laboratoryResults.needLabs
    }
    if(isDKALikely()) {
      return diabetesText.laboratoryResults.dkaLikely
    }
    return diabetesText.laboratoryResults.dkaNotLikely
  }

  const onNext = () => {
    if(showGoHome()) {
      Analytics.trackEvent("Guideline Restart", {guideline: 'Diabetes'})
      navigation.reset({
        routes: [{name: DIABETES_HOME}],
        routeNames: [DIABETES_HOME]
      })
    } else if(isDKALikely()) {
      navigation.navigate(PAITENT_INFO_INPUT, {nextScreen: CEREBRAL_EDEMA, showWarning: true})
    } else {
      navigation.navigate(PAITENT_INFO_INPUT, {nextScreen: ROUTINE_RAPID_INSULIN_DOING})
    }
  }

  const renderBottomPanel = () => (
    <ResultDisplayBottomPanel
      onNext={onNext}
      text={getBottomPanelText()}
      buttonDisabled={!haveInputs() || needLabsToProceed()}
      buttonTextOverrride={showGoHome() ?
        diabetesText.diagnosisSupport.home
        : undefined}
      subinfo={diabetesText.home.diabetesDiagnosis}
      icon={showGoHome() ? dkaTransparentIc : undefined}
      infoText={showGoHome() ? diabetesText.laboratoryResults.dkaNotLikelySubinfo
        : !isDKALikely() && !needLabsToProceed() ? diabetesText.laboratoryResults.correctionDose : undefined}
      column={showGoHome()}
    />
  )

  return (
    <DiabetesLayout
      title={diabetesText.laboratoryResults.title}
      renderBottomPanel={renderBottomPanel}
    >
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>{diabetesText.laboratoryResults.question}</Text>
        {LABORATORY_RESULTS_QUESTIONS.map(item => (
          <YesNoQuestion
            questionText={item.question}
            id={item.id}
            key={item.id}
            answer={answers[item.id]}
            onAnswer={onAnswer}
            customButton={renderNotObtainedButton}
          />
        ))}
      </View>
    </DiabetesLayout>
  )
})

export default LaboratoryResults;
