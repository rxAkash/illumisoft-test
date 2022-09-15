import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import { ACUTE_OTITIS_ADDITIONAL_FEATURES, ACUTE_OTITIS_TREATMENT_PENICILLIN } from 'Modules/Antibiotics/navigation/routes';
import YesNoButtons from 'Modules/Antibiotics/components/YesNoButtons';
import { NavigationProp } from '@react-navigation/native';
import styles from '../../../styles';
import Card from 'UIToolkit/Card';

interface Props {
  navigation: NavigationProp<any>;
}

const AllergyAssesment = React.memo(({navigation}: Props) => {

  const onYes = () => {
    navigation.navigate(ACUTE_OTITIS_TREATMENT_PENICILLIN);
  }

  const onNo = () => {
    navigation.navigate(ACUTE_OTITIS_ADDITIONAL_FEATURES);
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.acuteOtitis.allergyAssesment}
    >
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text style={[styles.centeredTitle, {marginBottom: 12}]}>
            {antibioticsText.acuteOtitis.allergyQuestion}
          </Text>
          <YesNoButtons
            onNo={onNo}
            onYes={onYes}
          />
        </Card>
      </View>
    </AntibioticsLayout>
  )
})

export default AllergyAssesment;
