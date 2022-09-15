import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import styles from '../../../styles';
import Card from 'UIToolkit/Card';
import YesNoButtons from 'Modules/Antibiotics/components/YesNoButtons';
import { NavigationProp } from '@react-navigation/native';
import { PNEUMONIA_IV_TREATMENT, PNEUMONIA_ORAL_TREATMENT, PNEUMONIA_TREATMENT_PENICILLIN } from 'Modules/Antibiotics/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
  route: {
    params?: {
      effusion?: boolean;
    }
  }
}

const PneumoniaAllergyAssesment = React.memo(({navigation, route}: Props) => {
  const onYes = () => {
    const params = route.params?.effusion ? {effusion: route.params.effusion} : undefined;
    navigation.navigate(PNEUMONIA_TREATMENT_PENICILLIN, params);
  }

  const onNo = () => {
    if(!route.params?.effusion) {
      navigation.navigate(PNEUMONIA_ORAL_TREATMENT);
    } else {
      navigation.navigate(PNEUMONIA_IV_TREATMENT);
    }
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.pneumonia.allergyAssesment}
    >
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text style={[styles.centeredTitle, {marginBottom: 16}]}>
            {antibioticsText.pneumonia.allergyQuestion}
          </Text>
          <YesNoButtons
            onYes={onYes}
            onNo={onNo}
          />
        </Card>
      </View>
    </AntibioticsLayout>
  )
})

export default PneumoniaAllergyAssesment;
