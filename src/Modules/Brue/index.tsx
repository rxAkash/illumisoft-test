import { NavigationProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import ResultDisplayBottomPanel from 'UIToolkit/ResultDisplayBottomPanel';
import YesNoQuestion from 'UIToolkit/YesNoQuestion';
import { FIRST_STEP_QUESTIONS } from './config/questions';
import { brueText } from './config/strings';
import { NOT_A_BRUE, SECOND_STEP } from './navigation/routes';
import styles from './styles';

interface Props {
  navigation: NavigationProp<any>;
}

const BrueHome = React.memo(({navigation}: Props) => {
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

  const allQuestionsAnswered = () => Object.keys(answers).length === FIRST_STEP_QUESTIONS.length

  const allAnswersPositive = () => {
    const summ = Object.values(answers).reduce((acc, val) => acc += val);
    return summ === FIRST_STEP_QUESTIONS.length
  }

  const isABrue = () => allQuestionsAnswered() && allAnswersPositive();

  const onNext = () => {
    if(isABrue()) {
      navigation.navigate(SECOND_STEP);
    } else {
      navigation.navigate(NOT_A_BRUE);
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBackHeader />
      <Text style={styles.title}>{brueText.title}</Text>
      <ScrollView style={styles.container}>
        <Text style={styles.infoText}>{brueText.info}</Text>
        {FIRST_STEP_QUESTIONS.map(item => (
          <YesNoQuestion
            questionText={item.title}
            key={item.id}
            onAnswer={onAnswer}
            answer={answers[item.id.toString()]}
            id={item.id}
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

export default BrueHome;
