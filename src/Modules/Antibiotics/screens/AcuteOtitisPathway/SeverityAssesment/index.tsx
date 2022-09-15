import React, { useState } from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import styles from '../../../styles';
import CheckboxGroup from 'UIToolkit/Inputs/CheckboxGroup';
import { SEVERITY_ASSESMENTS } from './conf';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import { NavigationProp } from '@react-navigation/native';
import { ACUTE_OTITIS_AGE_ASSESMENT, ACUTE_OTITIS_ALLERGY_ASSESMENT, ACUTE_OTITIS_SEVERITY_ASSESMENTS } from 'Modules/Antibiotics/navigation/routes';
import { handleAnswerWithNone } from 'Modules/Antibiotics/utils';
import { NONE_VALUE } from 'Modules/Antibiotics/config/noneValue';
import { reportOptionsSelected } from 'analytics';

interface Props {
  navigation: NavigationProp<any>;
}

const SeverityAssesment = React.memo(({navigation}: Props) => {
  const [answers, setAnswers] = useState<string[]>([]);

  const onAnswer = (values: string[]) => {
    const result = handleAnswerWithNone(values, answers);
    setAnswers(result);
  }

  const onNav = async () => {
    await reportOptionsSelected(ACUTE_OTITIS_SEVERITY_ASSESMENTS, answers, SEVERITY_ASSESMENTS)
    if(!answers.includes(NONE_VALUE)) {
      navigation.navigate(ACUTE_OTITIS_ALLERGY_ASSESMENT)
    } else {
      navigation.navigate(ACUTE_OTITIS_AGE_ASSESMENT);
    }
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.acuteOtitis.severityAssesment}
    >
      <View style={styles.container}>
        <Text style={styles.centeredTitle}>
          {antibioticsText.acuteOtitis.anyOfFollowingTrue}
        </Text>
        <CheckboxGroup
          options={SEVERITY_ASSESMENTS}
          onChange={onAnswer}
          active
          values={answers}
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

export default SeverityAssesment;
