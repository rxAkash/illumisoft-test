import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import styles from '../../../styles';
import Card from 'UIToolkit/Card';
import YesNoButtons from 'Modules/Antibiotics/components/YesNoButtons';
import { NavigationProp } from '@react-navigation/native';
import { PHARYNGITIS_NO_ALLERGY, PHARYNGITIS_TREATMENT_ALLERGY } from 'Modules/Antibiotics/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const PharyngitisAllergyAssesment = React.memo(({navigation}: Props) => {
  const onYes = () => {
    navigation.navigate(PHARYNGITIS_TREATMENT_ALLERGY);
  }

  const onNo = () => {
    navigation.navigate(PHARYNGITIS_NO_ALLERGY)
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.pharyngitis.allergyAssesment}
    >
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text style={[styles.centeredTitle, {marginBottom: 16}]}>
            {antibioticsText.pharyngitis.allergyQuestion}
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

export default PharyngitisAllergyAssesment;
