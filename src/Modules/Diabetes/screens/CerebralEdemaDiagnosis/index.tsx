import React, { useState } from 'react';
import { View } from 'react-native';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import styles from '../../styles';
import { DIAGNOSIS_QUESTIONS } from './conf';
import YesNoQuestion from 'UIToolkit/YesNoQuestion';
import ResultDisplayBottomPanel from 'UIToolkit/ResultDisplayBottomPanel';
import { NavigationProp } from '@react-navigation/native';
import { CEREBRAL_EDEMA_LIKELY, CEREBRAL_EDEMA_MAJOR_CRITERIA } from 'Modules/Diabetes/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const CerebralEdemaDiagnosis = React.memo(({navigation}: Props) => {
  const [answers, setAnswers] = useState<{[key: number]: number}>({});

  const onAnswer = (id: number, answer: number) => {
    setAnswers({
      ...answers,
      [id]: answer
    })
  }

  const allAnswersPresent = () => Object.keys(answers).length === DIAGNOSIS_QUESTIONS.length

  const onNext = () => {
    if(allAnswersNegative()) {
      navigation.navigate(CEREBRAL_EDEMA_MAJOR_CRITERIA)
    } else {
      navigation.navigate(CEREBRAL_EDEMA_LIKELY, {diagnosisAnswers: answers});
    }
  }

  const allAnswersNegative = () => {
    return allAnswersPresent() && Object.values(answers).reduce((acc, item) => acc += item) === 0;
  }

  const renderBottomPanel = () => (
    <ResultDisplayBottomPanel
      text={allAnswersNegative() || !allAnswersPresent()
        ? '--' : diabetesText.cerebralEdemaDiagnosis.cerebralEdemaLikely}
      subinfo={diabetesText.cerebralEdemaDiagnosis.bottomText}
      onNext={onNext}
      buttonDisabled={!allAnswersPresent()}
    />
  )

  return (
    <DiabetesLayout
      title={diabetesText.cerebralEdemaDiagnosis.title}
      showPatientDetailsHeader
      renderBottomPanel={renderBottomPanel}
    >
      <View style={styles.body}>
        {DIAGNOSIS_QUESTIONS.map((item) => (
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

export default CerebralEdemaDiagnosis;
