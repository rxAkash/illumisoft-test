import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface Props {
  title: string;
  answers: string[];
}

const QuizMatrixHeader = React.memo(({title, answers}: Props) => {
  return (
    <View style={[styles.row, styles.header]}>
      <Text style={styles.answerText}>{title}</Text>
      <View style={styles.answersContainer}>
        {answers.map(item => (
          <View key={item} style={styles.headerAnswerCell}>
            <Text style={styles.answerText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  )
})

export default QuizMatrixHeader;
