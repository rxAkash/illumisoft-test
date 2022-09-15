import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';

interface Props {
  questions: string[];
  answers: {
    title: string,
    value: string | number
  }[];
  results: {
    [question: string]: string | number;
  };
  onAnswerChange: (question: string, answer: number | string) => void;
}

const QuizMatrix = React.memo(({questions, answers, results, onAnswerChange}: Props) => {
  return (
    <View>
      {questions.map((question, index) => (
        <View key={index.toString()} style={styles.row}>
          <Text style={styles.text}>{question}</Text>
          <View style={styles.answersContainer}>
            {answers.map((answer, index) => (
              <View key={index.toString()} style={styles.optionContainer}>
                <Pressable
                  style={styles.optionButton}
                  onPress={() => onAnswerChange(question, answer.value)}
                >
                  {results[question] === answer.value && (
                    <View style={styles.bullet} />
                  )}
                </Pressable>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  )
})

export default QuizMatrix;
