import React, { useState } from 'react';
import { Text, View } from 'react-native';
import TwentyNineSixtyLayout from '../TwentyNineSixtyLayout';
import styles from '../../../styles';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import { DISPOSITIONS_RECOMMENDATIONS_LOW_ANSWER_SETS, DISPOSITION_RECOMMENDATIONS_LOW_QUESTIONS, FIRST_ITEM_ID } from './conf';
import YesNoQuestion from 'UIToolkit/YesNoQuestion';
import { compareArrays } from 'utils/compareArray';

const DispositionRecommendationsLow = React.memo(() => {
  const [answers, setAnswers] = useState<any>([]);
  const [displayedQuestions, setDisplayedQuestions] = useState(1);
  const [resultButton, setResultButton] = useState<any>()

  const updateAnswers = (id: number, answer: number) => {
    let newAnswers = [...answers];
    const answerIndex = newAnswers.findIndex(item => item.id === id);
    if(answerIndex >= 0) {
      newAnswers[answerIndex] = { id, answer };
      newAnswers = newAnswers.slice(0, answerIndex + 1);
    } else {
      newAnswers.push({ id, answer })
    }
    return newAnswers;
  }

  const findResultFromAnswers = (newAnswers: {id: number, answer: number}[]) => {
    const answerValues = newAnswers.map((item: any) => item.answer);
    return DISPOSITIONS_RECOMMENDATIONS_LOW_ANSWER_SETS.find(item => compareArrays(item.answers, answerValues));
  }

  const onAnswer = (id: number, answer: number) => {
    const newAnswers = updateAnswers(id, answer);
    const result = findResultFromAnswers(newAnswers);
    setAnswers(newAnswers); 
    if(result) {
      setResultButton(result)
      setDisplayedQuestions(result.answers.length);
    } else {
      setDisplayedQuestions(newAnswers.length + 1)
      setResultButton(undefined);
    }
  }

  return (
    <TwentyNineSixtyLayout
      hideButton={!resultButton}
      bottomButtonTitle={resultButton && resultButton.routeTitle}
      bottomButtonRoute={resultButton && resultButton.routeName}
    >
      <View>
        <Text style={styles.titleText}>{febrileText.sevenTwentyEight.dispositionRecommendations}</Text>
        {DISPOSITION_RECOMMENDATIONS_LOW_QUESTIONS.slice(0, displayedQuestions).map((item, index) => (
          <View key={item.id.toString()}>
            <YesNoQuestion
              id={item.id}
              questionText={item.question}
              onAnswer={onAnswer}
              answer={answers[index]?.answer}
            />
          </View>
        ))}
      </View>
    </TwentyNineSixtyLayout>
  )
})

export default DispositionRecommendationsLow;
