import React, { useState } from 'react';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import { View } from 'react-native';
import styles from '../../styles';
import { MAJOR_CRITERIA } from './conf';
import YesNoQuestion from 'UIToolkit/YesNoQuestion';
import ResultDisplayBottomPanel from 'UIToolkit/ResultDisplayBottomPanel';
import { NavigationProp } from '@react-navigation/native';
import { CEREBRAL_EDEMA_LIKELY, CEREBRAL_EDEMA_MINOR_CRITERIA, CEREBRAL_EDEMA_NOT_LIKELY } from 'Modules/Diabetes/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const CerebralEdemaMajorCriteria = React.memo(({navigation}: Props) => {
  const [answers, setAnswers] = useState<{[key: number]: number}>({});

  const onAnswer = (id: number, answer: number) => {
    setAnswers({
      ...answers,
      [id]: answer
    })
  }

  const allAnswersPresent = () => Object.keys(answers).length === MAJOR_CRITERIA.length

  const isCerebralEdemaLikely = () => allAnswersPresent()
    && Object.values(answers).reduce((acc, item) => acc += item) >= 2

  const isCerebralEdemaNotLikely = () => allAnswersPresent()
    && Object.values(answers).reduce((acc, item) => acc += item) === 0

  const isCriteriaNotMet = () => allAnswersPresent()
    && Object.values(answers).reduce((acc, item) => acc += item) === 1

  const getBottomText = () => {
    if(!allAnswersPresent()) {
      return '--'
    }
    if(isCerebralEdemaLikely()) {
      return diabetesText.cerebralEdemaDiagnosis.cerebralEdemaLikely
    }
    if(isCerebralEdemaNotLikely()) {
      return diabetesText.cerebralEdemaDiagnosis.cerebralEdemaNotLikely
    }
    if(isCriteriaNotMet()) {
      return diabetesText.cerebralEdemaDiagnosis.criteriaNotMet
    }
  }

  const onNext = () => {
    if(isCriteriaNotMet()) {
      navigation.navigate(CEREBRAL_EDEMA_MINOR_CRITERIA, {majorAnswers: answers});
    }
    if(isCerebralEdemaLikely()) {
      navigation.navigate(CEREBRAL_EDEMA_LIKELY, {majorAnswers: answers})
    }
    if(isCerebralEdemaNotLikely()) {
      navigation.navigate(CEREBRAL_EDEMA_NOT_LIKELY);
    }
  }

  const renderBottomPanel = () => (
    <ResultDisplayBottomPanel
      text={getBottomText()}
      subinfo={diabetesText.cerebralEdemaDiagnosis.bottomText}
      onNext={onNext}
      buttonDisabled={!allAnswersPresent()}
    />
  )
  
  return (
    <DiabetesLayout
      title={diabetesText.cerebralEdemaDiagnosis.majorCriteria}
      showPatientDetailsHeader
      renderBottomPanel={renderBottomPanel}
    >
      <View style={styles.body}>
        {MAJOR_CRITERIA.map((item) => (
          <YesNoQuestion
            questionText={item.question}
            answer={answers[item.id]}
            id={item.id}
            onAnswer={onAnswer}
            key={item.id}
          />
        ))}
      </View>
    </DiabetesLayout>
  )
})

export default CerebralEdemaMajorCriteria;
