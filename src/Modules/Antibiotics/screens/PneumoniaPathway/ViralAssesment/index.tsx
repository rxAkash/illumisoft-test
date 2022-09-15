import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import styles from '../../../styles';
import Card from 'UIToolkit/Card';
import YesNoButtons from 'Modules/Antibiotics/components/YesNoButtons';
import { NavigationProp } from '@react-navigation/native';
import { PNEUMONIA_ATYPICAL_ASSESMENT, PNEUMONIA_VIRAL_TREATMENT } from 'Modules/Antibiotics/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const ViralAssesment = React.memo(({navigation}: Props) => {
  const onYes = () => {
    navigation.navigate(PNEUMONIA_VIRAL_TREATMENT);
  }

  const onNo = () => {
    navigation.navigate(PNEUMONIA_ATYPICAL_ASSESMENT);
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.pneumonia.viralAssesment}
    >
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text style={[styles.text, {marginBottom: 12}]}>
            {antibioticsText.pneumonia.viralAssesmentInfo}
          </Text>
          <Text style={[styles.text, {marginBottom: 12}]}>
            {antibioticsText.pneumonia.viralAssesmentSubinfo}
          </Text>
          <Text style={[styles.centeredTitle, {marginBottom: 16}]}>
            {antibioticsText.pneumonia.viralAssesmentQuestion}
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

export default ViralAssesment;
