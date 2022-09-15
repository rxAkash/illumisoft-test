import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';
import YesNoButtons from 'UIToolkit/Inputs/YesNoButtons';
import styles from './styles';

interface Props {
  questionText: string;
  onAnswer: (id: number, answer: number) => void;
  answer?: number;
  id: number;
  leadText?: string;
  customButton?: (id: number) => ReactElement;
  disabled?: boolean;
  answers?: {
    first: string;
    second: string;
  }
}

const YesNoQuestion = React.memo(({
  questionText, onAnswer, answer, id, leadText, customButton, disabled, answers
}: Props) => {
  return (
    <View style={[styles.container, disabled && styles.disabled]}>
      <Text style={styles.text}>{leadText ? (
        <Text style={styles.boldText}>{leadText} </Text>
      ) : null}{questionText}</Text>
      <YesNoButtons
        answer={answer}
        onAnswer={(ans) => !disabled && onAnswer(id, ans)}
        customButton={customButton && customButton(id)}
        text1={answers?.first}
        text2={answers?.second}
      />
    </View>
  )
})

export default YesNoQuestion;
