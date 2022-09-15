import React from 'react';
import { Text, View } from 'react-native';
import Card from 'UIToolkit/Card';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import styles from '../../../styles';
import { TREATMENT_LIST } from './conf';
import ColoredNavButton from 'UIToolkit/Buttons/ColoredNavButton';
import { primaryColor } from 'UIToolkit/theme/colors';
import HomeButton from 'Modules/Antibiotics/components/HomeButton';
import { NavigationProp } from '@react-navigation/native';
import { PNEUMONIA_SEVERITY_ASSESMENT } from 'Modules/Antibiotics/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const PneumoniaViralTreatment = React.memo(({navigation}: Props) => {
  const onNav = () => {
    navigation.navigate(PNEUMONIA_SEVERITY_ASSESMENT);
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.pneumonia.viralTreatment}
    >
      <View style={styles.container}>
        <Card>
          <View style={styles.cardSection}>
            <Text style={[styles.text, {marginBottom: 16}]}>
              {antibioticsText.pneumonia.viralTreatmentInfo}
            </Text>
            <Text style={styles.text}>
              {antibioticsText.pneumonia.viralTreatmentSubinfo}
            </Text>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.boldTitle}>
              {antibioticsText.pneumonia.viralTreatmentTitle}
            </Text>
            <Text style={styles.boldTitle}>
              {antibioticsText.pneumonia.viralTreatmentSubtitle}
            </Text>
            {TREATMENT_LIST.map(item => (
              <Text style={[styles.text, {marginVertical: 8}]} key={item.text}>
                <Text style={styles.boldTitle}>{item.text}</Text>
                {item.info}
              </Text>
            ))}
          </View>
          <View style={styles.cardSection}>
            <ColoredNavButton
              title={antibioticsText.pneumonia.coInfection}
              center
              backgroundColor={primaryColor}
              onPress={onNav}
              style={styles.button}
            />
            <HomeButton />
          </View>
        </Card>
      </View>
    </AntibioticsLayout>
  )
})

export default PneumoniaViralTreatment;
