import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { getVitalScoresByAge } from './conf';
import Question from './Question';

interface Props {
  age: number;
}

interface Answer {
  [question: string]: string | number;
}

const GlasgowCommaCalculator = React.memo(({age}: Props) => {
  const [conf, setConf] = useState<any>(null);
  const [answers, setAnswers] = useState<Answer>({});
  useEffect(() => {
    getConf()
  }, [])

  const getConf = () => {
    const result = getVitalScoresByAge(age);
    setConf(result)
  }

  const onAnswer = (question: string, answer: string | number) => {
    setAnswers({
      ...answers,
      [question]: answer
    })
  }

  const getResults = () => {
    const keys = Object.keys(answers)
    let tIsAnswer = false;
    if(keys.length === 3) {
      let res = 0;
      keys.forEach(item => {
        if(answers[item] !== 'T') {
          res += parseInt(answers[item].toString());
        } else {
          tIsAnswer = true;
        }
      })
      if(tIsAnswer) {
        return res + 'T'
      }
      return res;
    }
    return 0;
  }

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.calculatorTitle}>{conf?.titlehead} = </Text>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{getResults() && getResults()}</Text>
      </View>
      {conf && conf.content.map((item: any) => (
        <Question
          title={item.title}
          key={item.title}
          options={item.listData}
          onAnswer={onAnswer}
          answer={answers[item.title]}
        />
      ))}
      <Text style={styles.calculatorTitle}>{conf?.titlehead} = </Text>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{getResults() && getResults()}</Text>
      </View>
    </View>
  )
})

export default GlasgowCommaCalculator;
