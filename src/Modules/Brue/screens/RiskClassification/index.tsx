import { NavigationProp } from '@react-navigation/native';
import { brueText } from 'Modules/Brue/config/strings';
import { DIAGNOSIS_CLASSIFICATION, HIGH_RISK_PATHWAYS } from 'Modules/Brue/navigation/routes';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import RadioSelect from 'UIToolkit/Inputs/RadioSelect';
import YesNoButtons from 'UIToolkit/Inputs/YesNoButtons';
import ResultDisplayBottomPanel from 'UIToolkit/ResultDisplayBottomPanel';
import styles from '../../styles';
import { ADDITIONAL_QUESTION, AGE_OPTIONS, FIRST_OPTION_VALUE, SECOND_OPTION_VALUE } from './conf';

interface Props {
  navigation: NavigationProp<any>;
}

const RiskClassification = React.memo(({navigation} :Props) => {
  const [answer, setAnswer] = useState<string>("");
  const [additionalAnswer, setAdditionalAnswer] = useState<number>();

  const renderAdditionalStep = (value: string) => {
    if(value === SECOND_OPTION_VALUE && answer === SECOND_OPTION_VALUE) {
      return (
        <View style={styles.container}>
          <Text style={styles.regularText}>{ADDITIONAL_QUESTION}</Text>
          <YesNoButtons
            answer={additionalAnswer}
            onAnswer={setAdditionalAnswer}
          />
        </View>
      )
    }
    return null;
  }

  const onNext = () => {
    if(isHighRisk()) {
      navigation.navigate(HIGH_RISK_PATHWAYS)
    } else {
      navigation.navigate(DIAGNOSIS_CLASSIFICATION)
    }
  }

  const isHighRisk = () => {
    if(answer === FIRST_OPTION_VALUE) {
      return true;
    }
    if(answer === SECOND_OPTION_VALUE && additionalAnswer === 1) {
      return true
    }
    return false;
  }

  const getIsButtonDisabled = () => {
    if(answer === SECOND_OPTION_VALUE) {
      if(additionalAnswer !== undefined) {
        return false
      }
      return true
    } else if(answer) {
      return false
    }
    return true
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBackHeader />
      <Text style={styles.title}>{brueText.riskClassification}</Text>
      <ScrollView style={styles.noPaddingContainer}>
        <RadioSelect
          options={AGE_OPTIONS}
          title={brueText.selectAge}
          onChange={setAnswer}
          value={answer}
          active
          renderAdditionalStep={renderAdditionalStep}
        />
      </ScrollView>
      <ResultDisplayBottomPanel
        onNext={onNext}
        text={getIsButtonDisabled() ? '--' : isHighRisk() ? 'High Risk' : 'Next'}
        buttonDisabled={getIsButtonDisabled()}
        subinfo={brueText.title}
      />
    </SafeAreaView>
  )
})

export default RiskClassification;
