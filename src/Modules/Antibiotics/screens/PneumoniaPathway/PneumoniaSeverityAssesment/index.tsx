import React, { useState } from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import styles from '../../../styles';
import CheckboxGroup from 'UIToolkit/Inputs/CheckboxGroup';
import { SEVERITY_ASSESMENT_CONF } from './conf';
import { handleAnswerWithNone } from 'Modules/Antibiotics/utils';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import { NavigationProp } from '@react-navigation/native';
import { NONE_VALUE } from 'Modules/Antibiotics/config/noneValue';
import { PNEUMONIA_ALLERGY_ASSESMENT, PNEUMONIA_EFFUSION_ASSESMENT, PNEUMONIA_SEVERITY_ASSESMENT } from 'Modules/Antibiotics/navigation/routes';
import { reportOptionsSelected } from 'analytics';

interface Props {
  navigation: NavigationProp<any>;
}

const PneumoniaSeverityAssesment = React.memo(({navigation}: Props) => {
  const [answers, setAnswers] = useState<string[]>([]);

  const onAnswer = (values: string[]) => {
    const result = handleAnswerWithNone(values, answers);
    setAnswers(result);
  }

  const onNav = async () => {
    await reportOptionsSelected(PNEUMONIA_SEVERITY_ASSESMENT, answers, SEVERITY_ASSESMENT_CONF)
    if(answers.includes(NONE_VALUE)) {
      navigation.navigate(PNEUMONIA_ALLERGY_ASSESMENT);
    } else {
      navigation.navigate(PNEUMONIA_EFFUSION_ASSESMENT);
    }
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.pneumonia.severityAssesment}
    >
      <View style={styles.container}>
        <Text style={[styles.centeredTitle, {marginBottom: 12}]}>
          {antibioticsText.shared.anyOfFollowingTrue}
        </Text>
        <CheckboxGroup
          options={SEVERITY_ASSESMENT_CONF}
          onChange={onAnswer}
          values={answers}
          active
        />
        <View style={styles.rightButtonContainer}>
          <FullWidthButton
            text={antibioticsText.shared.submit}
            style={styles.submitButton}
            disabled={answers.length === 0}
            onPress={onNav}
          />
        </View>
      </View>
    </AntibioticsLayout>
  )
})

export default PneumoniaSeverityAssesment;
