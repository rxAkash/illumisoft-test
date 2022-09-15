import { NavigationProp } from '@react-navigation/core';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import ResultDisplayBottomPanel from 'UIToolkit/ResultDisplayBottomPanel';
import YesNoQuestion from 'UIToolkit/YesNoQuestion';
import { THIRD_STEP_QUESTIONS } from '../../config/questions';
import { brueText } from '../../config/strings';
import { FOURTH_STEP, NOT_A_BRUE } from '../../navigation/routes';
import styles from '../../styles';

interface Props {
  navigation: NavigationProp<any>;
}

const ThirdStep = React.memo(({navigation}: Props) => {
  const [answers, setAnswers] = useState<{[key: string]: number}>({});

  const onAnswer = (id: number, answer: number) => {
    const newAnswers = {
      ...answers,
      [id.toString()]: answer
    }
    setAnswers(newAnswers)
  }

  const allQuestionsAnswered = () => Object.keys(answers).length === THIRD_STEP_QUESTIONS.length

  const allAnswersAreNegative = () => {
    const summ = Object.values(answers).reduce((acc, val) => acc += val);
    return summ === 0;
  }

  const isABrue = () => allQuestionsAnswered() && allAnswersAreNegative();

  const onNext = () => {
    if(isABrue()) {
      navigation.navigate(FOURTH_STEP);
    } else {
      navigation.navigate(NOT_A_BRUE);
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBackHeader />
      <Text style={styles.title}>{brueText.exclutionTitle}</Text>
      <ScrollView style={styles.container}>
        <Text style={styles.infoText}>{brueText.thirdStepInfo}</Text>
        {THIRD_STEP_QUESTIONS.map(item => (
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
        text={!allQuestionsAnswered() ? "--" : isABrue() ? "Proceed" : "Not a BRUE"}
        onNext={onNext}
        buttonDisabled={!allQuestionsAnswered()}
        subinfo={brueText.title}
      />
    </SafeAreaView>
  )
})

export default ThirdStep;
