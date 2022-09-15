import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import styles from '../../../styles';
import Card from 'UIToolkit/Card';
import YesNoButtons from 'Modules/Antibiotics/components/YesNoButtons';
import { NavigationProp } from '@react-navigation/native';
import { PNEUMONIA_ALLERGY_ASSESMENT, PNEUMONIA_TREATMENT_EFFUSION } from 'Modules/Antibiotics/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const EffusionAssesment = React.memo(({navigation}: Props) => {
  const onYes = () => {
    navigation.navigate(PNEUMONIA_TREATMENT_EFFUSION);
  }

  const onNo = () => {
    navigation.navigate(PNEUMONIA_ALLERGY_ASSESMENT, {effusion: true})
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.pneumonia.effisionAssesment}
    >
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text style={[styles.centeredTitle, {marginBottom: 16}]}>
            {antibioticsText.pneumonia.effusionQuestion}
          </Text>
          <Text style={styles.boldTitle}>
            {antibioticsText.shared.notes}
          </Text>
          <Text style={[styles.text, {marginBottom: 12}]}>
            <Text style={styles.underline}>{antibioticsText.pneumonia.moderateEffusion}</Text>
            {antibioticsText.pneumonia.moderateEffusionInfo}
          </Text>
          <Text style={[styles.text, {marginBottom: 16}]}>
            <Text style={styles.underline}>{antibioticsText.pneumonia.largeEffusion}</Text>
            {antibioticsText.pneumonia.largeEffusionInfo}
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

export default EffusionAssesment;
