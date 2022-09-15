import React from 'react';
import { Text, View } from 'react-native';
import Card from 'UIToolkit/Card';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import styles from '../../../styles';
import YesNoButtons from 'Modules/Antibiotics/components/YesNoButtons';
import { NavigationProp } from '@react-navigation/native';
import { ACUTE_OTITIS_ALLERGY_ASSESMENT, ACUTE_OTITIS_WATCHFUL_WAITING } from 'Modules/Antibiotics/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const BilateralDeseaseAssesment = React.memo(({navigation}: Props) => {
  const onYes = () => {
    navigation.navigate(ACUTE_OTITIS_ALLERGY_ASSESMENT)
  }

  const onNo = () => {
    navigation.navigate(ACUTE_OTITIS_WATCHFUL_WAITING);
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.acuteOtitis.bilateralDesease}
    >
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text style={[styles.centeredTitle, {marginBottom: 12}]}>
            {antibioticsText.acuteOtitis.deseaseQuestion}
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

export default BilateralDeseaseAssesment;
