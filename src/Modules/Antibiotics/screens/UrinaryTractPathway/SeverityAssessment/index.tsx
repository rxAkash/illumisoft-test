import React, { useState } from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import styles from '../../../styles';
import CheckboxGroup from 'UIToolkit/Inputs/CheckboxGroup';
import { ILL_APPEARING_VALUE, SEVRITY_QUESTIONS } from './conf';
import { handleAnswerWithNone } from 'Modules/Antibiotics/utils';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import { NONE_VALUE } from 'Modules/Antibiotics/config/noneValue';
import { NavigationProp } from '@react-navigation/native';
import { URINARY_TRACT_IV_TREATMENT, URINARY_TRACT_ORAL_ASSESSMENT, URINARY_TRACT_SEVERITY_ASSESSMENT, URINARY_TRACT_TREATMENT_UNCOMPLICATED } from 'Modules/Antibiotics/navigation/routes';
import { reportOptionsSelected } from 'analytics';

interface Props {
  navigation: NavigationProp<any>;
}

const UrinaryTractSeverityAssesment = React.memo(({navigation}: Props) => {
  const [answers, setAnswers] = useState<string[]>([]);

  const onAnswer = (values: string[]) => {
    const result = handleAnswerWithNone(values, answers);
    setAnswers(result);
  }

  const onNav = async () => {
    await reportOptionsSelected(URINARY_TRACT_SEVERITY_ASSESSMENT, answers, SEVRITY_QUESTIONS)
    if(answers.includes(NONE_VALUE)) {
      navigation.navigate(URINARY_TRACT_TREATMENT_UNCOMPLICATED);
    } else if(answers.length === 1 && answers.includes(ILL_APPEARING_VALUE)) {
      navigation.navigate(URINARY_TRACT_IV_TREATMENT);
    } else {
      navigation.navigate(URINARY_TRACT_ORAL_ASSESSMENT);
    }
  }
  
  return (
    <AntibioticsLayout
      title={antibioticsText.urinaryTract.severityAssesment}
    >
      <View style={styles.container}>
        <Text style={styles.centeredTitle}>
          {antibioticsText.shared.anyOfFollowingTrue}
        </Text>
        <CheckboxGroup
          options={SEVRITY_QUESTIONS}
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

export default UrinaryTractSeverityAssesment;
