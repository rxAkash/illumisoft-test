import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import styles from '../../../styles';
import Card from 'UIToolkit/Card';
import YesNoButtons from 'Modules/Antibiotics/components/YesNoButtons';
import { NavigationProp } from '@react-navigation/native';
import { PNEUMONIA_ATYPICAL_BACTERIA_TREATMENT, PNEUMONIA_SEVERITY_ASSESMENT } from 'Modules/Antibiotics/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const AtypicalAssessment = React.memo(({navigation}: Props) => {
  const onYes = () => {
    navigation.navigate(PNEUMONIA_ATYPICAL_BACTERIA_TREATMENT);
  }

  const onNo = () => {
    navigation.navigate(PNEUMONIA_SEVERITY_ASSESMENT)
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.pneumonia.atypicalAssessment}
    >
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text style={[styles.text, {marginBottom: 12}]}>
            {antibioticsText.pneumonia.atypicalAssessmentInfo}
          </Text>
          <Text style={[styles.centeredTitle, {marginBottom: 16}]}>
            {antibioticsText.pneumonia.atypicalAssessmentQuestion}
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

export default AtypicalAssessment;
