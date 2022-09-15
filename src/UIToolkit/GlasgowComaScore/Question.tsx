import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

interface Props {
  title: string;
  options: {
    lable: string,
    value: number | string;
  }[];
  answer: number | string;
  onAnswer: (question: string, answer: string | number) => void;
}

const Question = React.memo(({title, options, answer, onAnswer}: Props) => {
  return (
    <View style={styles.questionContainer}>
      <View style={styles.row}>
        <View style={[styles.title, styles.headerCell]}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
        <View style={[styles.section, styles.headerCell]}>
          <Text style={styles.headerText}>Score</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.hiddenText}>.</Text>
        </View>
      </View>
      {options.map((item, index) => (
        <View style={[
          styles.row,
          index === options.length - 1 && styles.lastRow,
          answer === item.value && styles.answerRow
        ]} key={item.lable}>
          <View style={styles.title}>
            <Text style={styles.questionText}>{item.lable}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.questionText}>{item.value}</Text>
          </View>
          <View style={styles.section}>
            <Pressable style={styles.answerButton} onPress={() => onAnswer(title, item.value)}>
              {answer === item.value && <View style={styles.bullet} />}
            </Pressable>
          </View>
        </View>
      ))}
    </View>
  )
})

export default Question;
