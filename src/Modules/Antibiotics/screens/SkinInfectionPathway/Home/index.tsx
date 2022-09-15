import { NavigationProp } from '@react-navigation/native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import { SKIN_INFECTION_SELECT } from 'Modules/Antibiotics/navigation/routes';
import React from 'react';
import { Text, View } from 'react-native';
import BulletList from 'UIToolkit/BulletList';
import ColoredNavButton from 'UIToolkit/Buttons/ColoredNavButton';
import Card from 'UIToolkit/Card';
import { primaryColor } from 'UIToolkit/theme/colors';
import styles from '../../../styles';
import { SIGNS_AND_SYMPTOMS } from './conf';

interface Props {
  navigation: NavigationProp<any>;
}

const SkinInfectionHome = React.memo(({navigation}: Props) => {
  const onNav = () => {
    navigation.navigate(SKIN_INFECTION_SELECT);
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.skinInfection.info}
    >
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text style={[styles.text, styles.textSection]}>
            <Text style={styles.boldUnderlineTitle}>
              {antibioticsText.shared.definition}
            </Text>
            {antibioticsText.skinInfection.definition}
          </Text>
          <Text style={[styles.text, styles.textSection]}>
            <Text style={styles.boldUnderlineTitle}>
              {antibioticsText.shared.signsAndSymptoms}
            </Text>
            {antibioticsText.skinInfection.signsAndSymptoms}
            <BulletList
              items={SIGNS_AND_SYMPTOMS}
              style={{paddingTop: 10}}
            />
          </Text>
          <Text style={[styles.text, styles.textSection]}>
            <Text style={styles.boldUnderlineTitle}>
              {antibioticsText.shared.testing}
            </Text>
            {antibioticsText.skinInfection.testing}
          </Text>
          <Text style={[styles.text, styles.textSection]}>
            <Text style={styles.boldUnderlineTitle}>
              {antibioticsText.shared.commonBacteria}
            </Text>
            {antibioticsText.skinInfection.commonBacteria}
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

export default SkinInfectionHome;
