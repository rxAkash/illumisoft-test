import React, { useState } from 'react';
import { View } from 'react-native';
import { CEREBRAL_EDEMA_LIKELY, CEREBRAL_EDEMA_NOT_LIKELY } from 'Modules/Diabetes/navigation/routes';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import YesNoQuestion from 'UIToolkit/YesNoQuestion';
import ResultDisplayBottomPanel from 'UIToolkit/ResultDisplayBottomPanel';
import { NavigationProp } from '@react-navigation/native';
import { MINOR_CRITERIA } from './conf';
import styles from '../../styles';

interface Props {
  route: {
    params: {
      majorAnswers?: {[key: number]: number}
    }
  },
  navigation: NavigationProp<any>;
}

const CerebralEdemaMinorCriteria = React.memo(({route, navigation}: Props) => {
  const [answers, setAnswers] = useState<{[key: number]: number}>({});

  const onAnswer = (id: number, answer: number) => {
    setAnswers({
      ...answers,
      [id]: answer
    })
  }

  const allAnswersPresent = () => Object.keys(answers).length === MINOR_CRITERIA.length

  const isCerebralEdemaLikely = () => allAnswersPresent()
    && Object.values(answers).reduce((acc, item) => acc += item) >= 2

  const getBottomText = () => {
    if(!allAnswersPresent()) {
      return '--'
    }
    if(isCerebralEdemaLikely()) {
      return diabetesText.cerebralEdemaDiagnosis.cerebralEdemaLikely
    } else {
      return diabetesText.cerebralEdemaDiagnosis.cerebralEdemaNotLikely
    }
  }

  const onNext = () => {
    if(isCerebralEdemaLikely()) {
      navigation.navigate(CEREBRAL_EDEMA_LIKELY, {
        majorAnswers: route.params?.majorAnswers,
        minorAnswers: answers
      })
    } else {
      navigation.navigate(CEREBRAL_EDEMA_NOT_LIKELY, {
        majorAnswers: route.params?.majorAnswers,
        minorAnswers: answers
      })
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
      title={diabetesText.cerebralEdemaDiagnosis.minorCriteria}
      showPatientDetailsHeader
      renderBottomPanel={renderBottomPanel}
    >
      <View style={styles.body}>
        {MINOR_CRITERIA.map((item) => (
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

export default CerebralEdemaMinorCriteria;
