import React from 'react';
import { Pressable, Text } from 'react-native';
import { buttonPressed } from 'UIToolkit/theme/styles';
import styles from './styles';

interface Props {
  selected?: boolean;
  onAnswer: () => void;
  text: string;
  style?: any;
}

const AnswerButton = React.memo(({selected, onAnswer, text, style}: Props) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.answer,
        styles.leftAnswer,
        style ? style : null,
        pressed && buttonPressed,
        selected && styles.answerAnswered,
      ]}
      onPress={onAnswer}
    >
      <Text style={[styles.answerText, selected && styles.answeredText]}>{text}</Text>
    </Pressable>
  )
})

export default AnswerButton;
