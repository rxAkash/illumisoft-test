import { NavigationProp } from '@react-navigation/native';
import { DIAGNOSIS_QUESTIONS } from 'Modules/Brue/config/questions';
import { brueText } from 'Modules/Brue/config/strings';
import { HIGH_RISK_PATHWAYS, LOW_RISK_RECOMMENDATIONS } from 'Modules/Brue/navigation/routes';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import ResultDisplayBottomPanel from 'UIToolkit/ResultDisplayBottomPanel';
import YesNoQuestion from 'UIToolkit/YesNoQuestion';
import styles from '../../styles';

interface Props {
  navigation: NavigationProp<any>;
}

const DiagnosisClassification = React.memo(({navigation}: Props) => {
  const [answers, setAnswers] = useState<{[key: string]: number}>({});

  useEffect(() => {
    const clearListener = navigation.addListener('focus', () => {
      setAnswers({})
    })
    return () => {
      navigation.removeListener('focus', clearListener)
    }
  }, [])

  const onAnswer = (id: number, answer: number) => {
    const newAnswers = {
      ...answers,
      [id.toString()]: answer
    }
    setAnswers(newAnswers)
  }

  const allQuestionsAnswered = () => Object.keys(answers).length === DIAGNOSIS_QUESTIONS.length

  const hasPositiveAnswer = () => {
    const summ = Object.values(answers).reduce((acc, val) => acc += val);
    return summ > 0;
  }
  const isHighRisk = () => allQuestionsAnswered() && hasPositiveAnswer();

  const onNext = () => {
    if(isHighRisk()) {
      navigation.navigate(HIGH_RISK_PATHWAYS);
    } else {
      navigation.navigate(LOW_RISK_RECOMMENDATIONS);
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBackHeader />
      <Text style={styles.title}>{brueText.title}</Text>
      <ScrollView style={styles.container}>
        <Text style={styles.infoText}>{brueText.info}</Text>
        {DIAGNOSIS_QUESTIONS.map(item => (
          <YesNoQuestion
            questionText={item.title}
            key={item.id}
            onAnswer={onAnswer}
            answer={answers[item.id.toString()]}
            id={item.id}
          />
        ))}
      </ScrollView>
      <ResultDisplayBottomPanel
        text={!allQuestionsAnswered() ? "--" : isHighRisk() ? "High Risk" : "Low Risk"}
        onNext={onNext}
        buttonDisabled={!allQuestionsAnswered()}
        subinfo={brueText.title}
      />
    </SafeAreaView>
  )
})

export default DiagnosisClassification;
