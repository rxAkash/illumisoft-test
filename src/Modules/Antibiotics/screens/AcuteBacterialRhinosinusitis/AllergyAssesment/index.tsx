import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import { ACUTE_BACTERIAL_TREATMENT_ALLERGY, ACUTE_BACTERIAL_TREATMENT_NO_ALLERGY } from 'Modules/Antibiotics/navigation/routes';
import YesNoButtons from 'Modules/Antibiotics/components/YesNoButtons';
import { NavigationProp } from '@react-navigation/native';
import styles from '../../../styles';
import Card from 'UIToolkit/Card';

interface Props {
  navigation: NavigationProp<any>;
}

const AllergyAssesmentABR = React.memo(({navigation}: Props) => {

  const onYes = () => {
    navigation.navigate(ACUTE_BACTERIAL_TREATMENT_ALLERGY);
  }

  const onNo = () => {
    navigation.navigate(ACUTE_BACTERIAL_TREATMENT_NO_ALLERGY);
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.acuteBacterial.allergyAssesment}
    >
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text style={[styles.centeredTitle, {marginBottom: 12}]}>
            {antibioticsText.acuteBacterial.allergyQuestion}
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

export default AllergyAssesmentABR;
