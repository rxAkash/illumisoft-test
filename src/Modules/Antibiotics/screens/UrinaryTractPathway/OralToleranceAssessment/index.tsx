import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import styles from '../../../styles';
import Card from 'UIToolkit/Card';
import YesNoButtons from 'Modules/Antibiotics/components/YesNoButtons';
import { NavigationProp } from '@react-navigation/native';
import { URINARY_TRACT_IV_TREATMENT, URINARY_TRACT_ORAL_TREATMENT } from 'Modules/Antibiotics/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const OralToleranceAssessment = React.memo(({navigation}: Props) => {
  const onYes = () => {
    navigation.navigate(URINARY_TRACT_IV_TREATMENT);
  }

  const onNo = () => {
    navigation.navigate(URINARY_TRACT_ORAL_TREATMENT);
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.urinaryTract.oralTolerance}
    >
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text style={[styles.centeredTitle, {marginBottom: 16}]}>
            {antibioticsText.urinaryTract.oralToleranceQuestion}
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

export default OralToleranceAssessment;
