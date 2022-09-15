import { NavigationProp } from '@react-navigation/native';
import BottomRestart from 'Modules/Brue/components/BottomRestart';
import { POSSIBLE_DIAGNOSIS_QUESTION } from 'Modules/Brue/config/questions';
import { brueText } from 'Modules/Brue/config/strings';
import { RISK_CLASSIFICATION } from 'Modules/Brue/navigation/routes';
import React, { useState } from 'react';
import { SafeAreaView, Text, ScrollView, View } from 'react-native';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import ResultDisplayBottomPanel from 'UIToolkit/ResultDisplayBottomPanel';
import YesNoQuestion from 'UIToolkit/YesNoQuestion';
import styles from '../../styles';

interface Props {
  navigation: NavigationProp<any>;
}

const PossibleDiagnosis = React.memo(({navigation}: Props) => {
  const [answer, setAnswer] = useState<number>();

  const onAnswer = (id: number, answer: number) => {
    setAnswer(answer);
  }

  const onNext = () => {
    navigation.navigate(RISK_CLASSIFICATION)
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBackHeader />
      <Text style={styles.title}>{brueText.possibleDiagnosis}</Text>
      <ScrollView style={styles.container}>
        <YesNoQuestion
          questionText={POSSIBLE_DIAGNOSIS_QUESTION.title}
          key={POSSIBLE_DIAGNOSIS_QUESTION.id}
          onAnswer={onAnswer}
          answer={answer}
          id={POSSIBLE_DIAGNOSIS_QUESTION.id}
        />
        <View style={styles.recommendationsContainer}>
          {answer === 1 && (
            <Text style={styles.regularText}>
              <Text style={styles.infoText}>{brueText.recommendation}{'\n'}</Text>
              {brueText.positiveRecommendation}
            </Text>
          )}
          {answer === 0 && (
            <Text style={styles.regularText}>
              <Text style={styles.infoText}>{brueText.recommendation}{'\n'}</Text>
              {brueText.negativeRecommendation}
            </Text>
          )}
        </View>
      </ScrollView>
      {answer === 0 && (
        <BottomRestart />
      )}
      {answer === 1 && (
        <ResultDisplayBottomPanel
          onNext={onNext}
          buttonTextOverrride={brueText.startRiskClassification}
          buttonDisabled={false}
          subinfo={brueText.title}
        />
      )}
    </SafeAreaView>
  )
})

export default PossibleDiagnosis;
