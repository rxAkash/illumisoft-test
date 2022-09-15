import QuizMatrix from 'Modules/Resuscitation/screens/BurnManagment/components/QuizMatrix';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import styles from '../styles';
import { BURN_MANAGEMENT_ANSWERS, BURN_MANAGEMENT_OPTIONS } from '../conf';
import { resusText } from 'Modules/Resuscitation/config/strings';

interface Props {
  age: number;
  onResultChange: (res: number) => void;
  setRef: (ref: {reset: () => void}) => void;
}

interface Results {
  [question: string]: number
}

const BurnManagementQuiz = React.memo(({age, onResultChange, setRef}: Props) => {
  const [results, setResults] = useState<Results>({});

  const initResults = () => {
    const resultMap = new Map(getOptions()?.content.map(item => ([
      item.label, 0
    ])))
    setResults(Object.fromEntries(resultMap))
    onResultChange(calculateResult());
  }

  useEffect(() => {
    initResults();
    setRef({
      reset
    })
  }, [])

  const reset = () => {
    initResults();
    onResultChange(0);
  }

  const getOptions = () => {
    return BURN_MANAGEMENT_OPTIONS.find(item => item.minAge <= age && item.maxAge > age);
  }

  const getQuestionsConfig = () => {
    const conf = getOptions()?.content.map(item => item.label);
    return conf || [];
  }

  const onAnswerChange = (question: string, answer: number | string) => {
    const newResults = {
      ...results,
      [question]: parseFloat(answer.toString())
    }
    setResults(newResults);
    calculateResult();
  }

  const calculateResult = () => {
    const keys = Object.keys(results);
    let result = 0;
    keys.forEach(key => {
      const questionValue = getOptions()?.content.find(item => item.label === key)?.text
      if(questionValue) {
        result += Math.ceil(parseFloat(questionValue) * results[key])
      }
    })
    
    onResultChange(result);
    return result;
  }

  return (
    <View>
      <QuizMatrix
        questions={getQuestionsConfig()}
        answers={BURN_MANAGEMENT_ANSWERS}
        results={results}
        onAnswerChange={onAnswerChange}
      />
      <View style={styles.resultsSection}>
        <Text style={styles.warning}>{resusText.burnManagment.resultsWarning1}</Text>
        <Text style={styles.subwarning}>{resusText.burnManagment.resultsWarning2}</Text>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{calculateResult().toFixed(2)} %</Text>
        </View>
      </View>
    </View>
  )
})

export default BurnManagementQuiz;
