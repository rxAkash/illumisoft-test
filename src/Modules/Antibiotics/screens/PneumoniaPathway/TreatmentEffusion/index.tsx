import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import Card from 'UIToolkit/Card';
import styles from '../../../styles';
import ColoredNavButton from 'UIToolkit/Buttons/ColoredNavButton';
import { primaryColor } from 'UIToolkit/theme/colors';
import { NavigationProp } from '@react-navigation/native';
import { PNEUMONIA_ALLERGY_ASSESMENT } from 'Modules/Antibiotics/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const TreatmentEffusion = React.memo(({navigation}: Props) => {
  const onNav = () => {
    navigation.navigate(PNEUMONIA_ALLERGY_ASSESMENT, {effusion: true})
  }
  return (
    <AntibioticsLayout
      title={antibioticsText.pneumonia.treatmentEffusion}
    >
      <View style={styles.container}>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.text}>
              {antibioticsText.pneumonia.treatmentEffusionInfo}
            </Text>
          </View>
          <View style={styles.cardSection}>
            <ColoredNavButton
              center
              title={antibioticsText.pneumonia.antibioticReccomendations}
              backgroundColor={primaryColor}
              onPress={onNav}
            />
          </View>
        </Card>
      </View>
    </AntibioticsLayout>
  )
})

export default TreatmentEffusion;
