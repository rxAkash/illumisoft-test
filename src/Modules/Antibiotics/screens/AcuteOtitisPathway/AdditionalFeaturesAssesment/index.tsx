import { NavigationProp } from '@react-navigation/native';
import { reportOptionsSelected } from 'analytics';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { NONE_VALUE } from 'Modules/Antibiotics/config/noneValue';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import { ACUTE_OTITIS_ADDITIONAL_FEATURES, ACUTE_OTITIS_TREATMENT_NO_ALLERGY, ACUTE_OTITIS_TREATMENT_RECENT_USE } from 'Modules/Antibiotics/navigation/routes';
import { handleAnswerWithNone } from 'Modules/Antibiotics/utils';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import CheckboxGroup from 'UIToolkit/Inputs/CheckboxGroup';
import styles from '../../../styles';
import { ADDITIONAL_FEATURES_ASSESMENTS } from './conf';

interface Props {
  navigation: NavigationProp<any>;
}

const AdditionalFeaturesAssesment = React.memo(({navigation}: Props) => {
  const [answers, setAnswers] = useState<string[]>([]);

  const onAnswer = (values: string[]) => {
    const result = handleAnswerWithNone(values, answers);
    setAnswers(result);
  }

  const onNav = async () => {
    await reportOptionsSelected(ACUTE_OTITIS_ADDITIONAL_FEATURES, answers, ADDITIONAL_FEATURES_ASSESMENTS)
    if(!answers.includes(NONE_VALUE)) {
      navigation.navigate(ACUTE_OTITIS_TREATMENT_RECENT_USE);
    } else {
      navigation.navigate(ACUTE_OTITIS_TREATMENT_NO_ALLERGY);
    }
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.acuteOtitis.additionalFeaturesAssesment}
    >
      <View style={styles.container}>
        <Text style={styles.centeredTitle}>
          {antibioticsText.acuteOtitis.anyOfFollowingTrue}
        </Text>
        <CheckboxGroup
          options={ADDITIONAL_FEATURES_ASSESMENTS}
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

export default AdditionalFeaturesAssesment;
