import React, { ReactElement } from 'react';
import { View } from 'react-native';
import AnswerButton from '../AnswerButton';
import styles from './styles';

interface Props {
  answer?: number;
  onAnswer: (answer: number) => void;
  customButton?: ReactElement;
  answerButtonStyle?: any;
  text1?: string;
  text2?: string;
}

const YesNoButtons = React.memo(({answer, onAnswer, customButton, answerButtonStyle, text1, text2} :Props) => {
  return (
    <View style={styles.ansewrsContainer}>
      <AnswerButton
        onAnswer={() => onAnswer(1)}
        text={text1 ? text1 :  'Yes' } 
        selected={answer === 1}
        style={answerButtonStyle}
      />
      <AnswerButton
        onAnswer={() => onAnswer(0)}
        text={text2 ? text2 : 'No'}
        selected={answer === 0}
        style={answerButtonStyle}
      />
      {customButton && customButton}
    </View>
  )
})

export default YesNoButtons;
