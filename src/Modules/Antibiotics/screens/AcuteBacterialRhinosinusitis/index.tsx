import { NavigationProp } from '@react-navigation/native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import { ACUTE_BACTERIAL_ALLERGY_ASSESMENT } from 'Modules/Antibiotics/navigation/routes';
import React from 'react';
import { Text, View } from 'react-native';
import ColoredNavButton from 'UIToolkit/Buttons/ColoredNavButton';
import Card from 'UIToolkit/Card';
import { primaryColor } from 'UIToolkit/theme/colors';

import styles from '../../styles';

interface Props {
  navigation: NavigationProp<any>;
}

const AcuteBacterialRhinosinusitis = React.memo(({navigation}: Props) => {
  const onNav = () => {
    navigation.navigate(ACUTE_BACTERIAL_ALLERGY_ASSESMENT);
  }
  return (
    
    <AntibioticsLayout title={antibioticsText.acuteBacterial.info}>
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={[styles.text, styles.textSection]}>
          <Text style={styles.boldUnderlineTitle}>
            {antibioticsText.shared.definition}
          </Text>
          {antibioticsText.acuteBacterial.definition}
        </Text>
        <Text style={[styles.text, styles.textSection]}>
          <Text style={styles.boldUnderlineTitle}>
            {antibioticsText.shared.signsAndSymptoms}
          </Text>
          {antibioticsText.acuteBacterial.signsAndSymptoms}
        </Text>
        <Text style={[styles.text, styles.textSection]}>
          <Text>
            {antibioticsText.acuteBacterial.symptomOne}
          </Text>
        </Text>
        <Text style={[styles.text, styles.textSection]}>
          <Text>
            {antibioticsText.acuteBacterial.symptomTwo}
          </Text>
        </Text>
        <Text style={[styles.text, styles.textSection]}>
          <Text>
            {antibioticsText.acuteBacterial.symptomThree}
          </Text>
        </Text>
        <Text style={[styles.text, styles.textSection]}>
          <Text>
            {antibioticsText.acuteBacterial.note}
          </Text>
        </Text>
        <Text style={[styles.text, styles.textSection]}>
          <Text style={styles.boldUnderlineTitle}>
            {antibioticsText.shared.testing}
          </Text>
          {antibioticsText.acuteBacterial.testing}
        </Text>
        <Text style={[styles.text, styles.textSection]}>
          <Text style={styles.boldUnderlineTitle}>
            {antibioticsText.shared.commonBacteria}
          </Text>
          {antibioticsText.acuteBacterial.commonBacteria}
        </Text>
      </Card>
              <View style={styles.bottomButtonContainer}>
          <ColoredNavButton
            title={antibioticsText.acuteOtitis.antibioticDecitionSupport}
            onPress={onNav}
            backgroundColor={primaryColor}
            center
          />
        </View>
    </View>
  </AntibioticsLayout>
  )
})

export default AcuteBacterialRhinosinusitis;
