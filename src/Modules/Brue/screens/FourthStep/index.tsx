import { NavigationProp } from '@react-navigation/core';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import ResultDisplayBottomPanel from 'UIToolkit/ResultDisplayBottomPanel';
import YesNoQuestion from 'UIToolkit/YesNoQuestion';
import { FOURTH_STEP_QUESTIONS } from '../../config/questions';
import { brueText } from '../../config/strings';
import { NOT_A_BRUE, POSSIBLE_DIAGNOSIS } from '../../navigation/routes';
import styles from '../../styles';

interface Props {
  navigation: NavigationProp<any>;
}

const FourthStep = React.memo(({navigation}: Props) => {
  const [answers, setAnswers] = useState<{[key: string]: number}>({});

  const onAnswer = (id: number, answer: number) => {
    const newAnswers = {
      ...answers,
      [id.toString()]: answer
    }
    setAnswers(newAnswers)
  }

  const allQuestionsAnswered = () => Object.keys(answers).length === FOURTH_STEP_QUESTIONS.length

  const allAnswersAreNegative = () => {
    const summ = Object.values(answers).reduce((acc, val) => acc += val);
    return summ === 0;
  }

  const isABrue = () => allQuestionsAnswered() && allAnswersAreNegative();

  const onNext = () => {
    if(isABrue()) {
      navigation.navigate(POSSIBLE_DIAGNOSIS);
    } else {
      navigation.navigate(NOT_A_BRUE);
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBackHeader />
      <Text style={styles.title}>{brueText.briefResolvedTitle}</Text>
      <ScrollView style={styles.container}>
        <Text style={styles.infoText}>{brueText.fourthStepInfo}</Text>
        {FOURTH_STEP_QUESTIONS.map(item => (
          <YesNoQuestion
            questionText={item.title}
            key={item.id}
            onAnswer={onAnswer}
            answer={answers[item.id.toString()]}
            id={item.id}
            leadText={item.leadText}
          />
        ))}
      </ScrollView>
      <ResultDisplayBottomPanel
        text={!allQuestionsAnswered() ? "--" : isABrue() ? "Possible BURE Diagnosis" : "Not a BRUE"}
        onNext={onNext}
        buttonDisabled={!allQuestionsAnswered()}
        subinfo={brueText.title}
      />
    </SafeAreaView>
  )
})

export default FourthStep;
