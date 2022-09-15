import React, { useState } from 'react';
import {Text } from 'react-native';
import {ADMISSION_RECOMMENDATIONS } from './routes';
import SevenTwentyEightLayout from './SevenTwentyEightLayout';
import YesNoQuestion from 'UIToolkit/YesNoQuestion';
import { useFocusEffect } from '@react-navigation/native';

const UrinalysisQuestions = React.memo(() => {
  const [answers, setAnswers] = useState<{[key: string]: number}>({});
  const [message,setMessage] = useState<string>();

  useFocusEffect(
    React.useCallback(() => {
      const clear = ()=>{
        setAnswers({});
        setMessage('');
      }

      return () => clear();
    }, [])
  );


    const onAnswer = (id: number, answer: number) => {
      const newAnswers = {
        ...answers,
        [id.toString()]: answer
      }
      setAnswers(newAnswers)
      if(answer == 0){
        setMessage('It is not necessary to obtain a urine catheter specimen for ongoing treatment');
      }
      if(answer == 1){
        setMessage('Send bladder cath or suprapubic aspiration for urine culture prior to empiric antibiotic treatment')
      }
    }

    return (
      <SevenTwentyEightLayout
        bottomButtonTitle={"Proceed to Hospital Admission Recommendations"}
        bottomButtonRoute={ADMISSION_RECOMMENDATIONS}
      >
        <YesNoQuestion 
         id={1} 
         answer={answers[1]}
         key={1}
         onAnswer={onAnswer} 
         questionText='Was the urine specimen obtained by bag?'></YesNoQuestion>
        <Text>{message}</Text>
      </SevenTwentyEightLayout>
    )
  })
  
  export default UrinalysisQuestions;
  