import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import Card from 'UIToolkit/Card';
import styles from '../../../styles';
import YesNoButtons from 'Modules/Antibiotics/components/YesNoButtons';
import { NavigationProp } from '@react-navigation/native';
import { ACUTE_OTITIS_BILATERAL_DESEASE, ACUTE_OTITIS_WATCHFUL_WAITING } from 'Modules/Antibiotics/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const AgeAssesment = React.memo(({navigation}: Props) => {
  const onYes = () => {
    navigation.navigate(ACUTE_OTITIS_BILATERAL_DESEASE);
  }

  const onNo = () => {
    navigation.navigate(ACUTE_OTITIS_WATCHFUL_WAITING);
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.acuteOtitis.ageAssesment}
    >
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text style={[styles.centeredTitle, {marginBottom: 12}]}>
            {antibioticsText.acuteOtitis.ageQuestion}
          </Text>
          <YesNoButtons
            onYes={onYes}
            onNo={onNo}
            yesOverride={antibioticsText.acuteOtitis.ageFirst}
            noOverride={antibioticsText.acuteOtitis.ageSecond}
          />
        </Card>
      </View>
    </AntibioticsLayout>
  )
})

export default AgeAssesment;
