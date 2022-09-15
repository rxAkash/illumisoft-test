import React, { useState } from 'react';
import Analytics from 'appcenter-analytics';
import { Text, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { inject, observer } from 'mobx-react';
import { DiabetesStore } from 'Modules/Diabetes/stores/DiabetesStore';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import YesNoQuestion from 'UIToolkit/YesNoQuestion';
import GlucoseInput from 'Modules/Diabetes/components/GlucoseInput';
import { FIRST_QUESTION, MAX_GLUCOSE, SECOND_QUESTIONS } from './conf';
import styles from '../../styles';
import ResultDisplayBottomPanel from 'UIToolkit/ResultDisplayBottomPanel';
import { dkaTransparentIc } from 'assets/img';
import { CEREBRAL_EDEMA_TREATMENT, DIABETES_HOME, HYPOGLYSEMIA_MANAGEMENT, TITRATION_RATES } from 'Modules/Diabetes/navigation/routes';

interface Props {
  diabetesStore: DiabetesStore;
  navigation: NavigationProp<any>;
}

const InsulinDripAndIVFTitration = inject('diabetesStore')(observer(({
  diabetesStore,
  navigation
}: Props) => {
  const [firstQuestionAnser, setFirstQuestionAnser] = useState<number>();
  const [secondAnswers, setSecondAnswers] = useState<{[key: number]: number}>({});

  const onSecondAnswer = (id: number, answer: number) => {
    setSecondAnswers({
      ...secondAnswers,
      [id]: answer
    })
  }

  const onFirstAnswer = (_: number, ans: number) => {
    setFirstQuestionAnser(ans);
    setSecondAnswers({});
    diabetesStore.setGlucose('');
  }

  const showGlucoseInput = () => firstQuestionAnser == 0
    && Object.keys(secondAnswers).length === SECOND_QUESTIONS.length
    && Object.values(secondAnswers).reduce((acc, item) => acc + item) !== 2

  const onNext = () => {
    if(firstQuestionAnser === 1) {
      navigation.navigate(CEREBRAL_EDEMA_TREATMENT)
    } else if(isDKAResolved()) {
      Analytics.trackEvent("Guideline Restart", {guideline: 'Diabetes'})
      navigation.reset({
        routes: [{name: DIABETES_HOME}],
        routeNames: [DIABETES_HOME]
      })
    } else if(firstQuestionAnser === 0 
      && Object.keys(secondAnswers).length === SECOND_QUESTIONS.length
      && Object.values(secondAnswers).reduce((acc, item) => acc + item) !== 2) {
      if(parseFloat(diabetesStore.glucose) < 80) {
        navigation.navigate(HYPOGLYSEMIA_MANAGEMENT)
      } else {
        navigation.navigate(TITRATION_RATES)
      }
    } 
  }
  
  const isDKAResolved = () => firstQuestionAnser === 0
    && Object.keys(secondAnswers).length === SECOND_QUESTIONS.length
    && Object.values(secondAnswers).reduce((acc, item) => acc + item) === 2

  const getButtonDisabled = () => {
    if(firstQuestionAnser === 1) {
      return false
    }
    if(firstQuestionAnser === 0
      && Object.keys(secondAnswers).length === SECOND_QUESTIONS.length
      && diabetesStore.glucose
    ) {
      return false
    }
    if(isDKAResolved()) {
      return false;
    }
    return true
  }

  const maxGlucoseLevel = () => parseFloat(diabetesStore.glucose) > MAX_GLUCOSE

  const renderBottomPanel = () => (
    <ResultDisplayBottomPanel
      onNext={onNext}
      buttonDisabled={getButtonDisabled()}
      icon={isDKAResolved() || maxGlucoseLevel() ? dkaTransparentIc : undefined}
      text={isDKAResolved() ? diabetesText.insulinDrip.dkaResolved
        : maxGlucoseLevel() ? '' : undefined}
      infoText={isDKAResolved()
        ? diabetesText.insulinDrip.infoText
        : maxGlucoseLevel() ? diabetesText.insulinDrip.maxGlucose : undefined}
      buttonTextOverrride={isDKAResolved() || maxGlucoseLevel() ? diabetesText.diagnosisSupport.home : 'Next'}
      column={isDKAResolved() || maxGlucoseLevel()}
    />
  )

  return (
    <DiabetesLayout
      title={diabetesText.insulinDrip.titrationTitle}
      showPatientDetailsHeader
      renderBottomPanel={renderBottomPanel}
    >
      <View style={styles.sectionTitleContainer}>
        <YesNoQuestion
          questionText={FIRST_QUESTION}
          onAnswer={onFirstAnswer}
          answer={firstQuestionAnser}
          id={0}
        />
        {SECOND_QUESTIONS.map(item => (
          <YesNoQuestion
            questionText={item.question}
            onAnswer={onSecondAnswer}
            answer={secondAnswers[item.id]}
            id={item.id}
            key={item.id}
            disabled={firstQuestionAnser !== 0}
          />
        ))}
        {showGlucoseInput() && (
          <View style={[styles.verticalContainer, {alignItems: 'baseline'}]}>
            <Text style={styles.sectionSubtitle}>{diabetesText.insulinDrip.enterBG}</Text>
            <GlucoseInput
              value={diabetesStore.glucose}
              setGlucose={(value: string) => diabetesStore.setGlucose(value)}
            />
          </View>
        )}
      </View>
    </DiabetesLayout>
  )
}))

export default InsulinDripAndIVFTitration;
