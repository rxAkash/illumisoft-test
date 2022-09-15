import React, { useState } from 'react';
import { View } from 'react-native';
import YesNoQuestion from 'UIToolkit/YesNoQuestion';
import { compareArrays } from 'utils/compareArray';

interface Props {
  questions: {
    id: number;
    question: string;
    customUICondition?: number;
    customUI?: React.ReactElement<any>;
    answers?: {
      first: string;
      second: string;
    }
  }[],
  answerSets: {
    answers: number[],
    result: any
  }[],
  onResult: (result: any) => void;
}

const QuestionsFlow = React.memo(({questions, answerSets, onResult}: Props) => {
  const [answers, setAnswers] = useState<any>([]);
  const [displayedQuestions, setDisplayedQuestions] = useState(1);

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

  const findMatchingAnswerSet = (newAnswers: {id: number, answer: number}[]) => {
    const answerValues = newAnswers.map((item: any) => item.answer);
    return answerSets.find(item => compareArrays(item.answers, answerValues));
  }

  const onAnswer = (id: number, answer: number) => {
    const newAnswers = updateAnswers(id, answer);
    const matchingSet = findMatchingAnswerSet(newAnswers);
    setAnswers(newAnswers); 
    if(matchingSet) {
      onResult(matchingSet.result)
      setDisplayedQuestions(matchingSet.answers.length);
    } else {
      setDisplayedQuestions(newAnswers.length + 1)
      onResult(undefined);
    }
  }

  return (
    <View>
      {questions.slice(0, displayedQuestions).map((item, index) => (
        <View key={item.id.toString()}>
          <YesNoQuestion
            id={item.id}
            questionText={item.question}
            onAnswer={onAnswer}
            answer={answers[index]?.answer}
            answers={item.answers}
          />
          {item.customUICondition === answers[index]?.answer && item.customUI}
        </View>
      ))}
    </View>
  )
})

export default QuestionsFlow;
