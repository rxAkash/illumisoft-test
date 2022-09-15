import { NavigationProp } from '@react-navigation/native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import { ACUTE_OTITIS_SEVERITY_ASSESMENTS } from 'Modules/Antibiotics/navigation/routes';
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

const AcuteOtitisHome = React.memo(({navigation}: Props) => {

  const onNav = () => {
    navigation.navigate(ACUTE_OTITIS_SEVERITY_ASSESMENTS);
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.acuteOtitis.info}
    >
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text style={[styles.text, styles.textSection]}>
            <Text style={styles.boldUnderlineTitle}>
              {antibioticsText.shared.definition}
            </Text>
            {antibioticsText.acuteOtitis.definition}
          </Text>
          <Text style={[styles.text, styles.textSection]}>
            <Text style={styles.boldUnderlineTitle}>
              {antibioticsText.shared.signsAndSymptoms}
            </Text>
            {antibioticsText.acuteOtitis.signsAndSymptoms}
            <BulletList
              items={SIGNS_AND_SYMPTOMS}
              style={{paddingTop: 10}}
            />
          </Text>
          <Text style={[styles.text, styles.textSection]}>
            <Text style={styles.boldUnderlineTitle}>
              {antibioticsText.shared.testing}
            </Text>
            {antibioticsText.acuteOtitis.testing}
          </Text>
          <Text style={[styles.text, styles.textSection]}>
            <Text style={styles.boldUnderlineTitle}>
              {antibioticsText.shared.commonBacteria}
            </Text>
            {antibioticsText.acuteOtitis.commonBacteria}
          </Text>
          <View style={styles.disclaimerContainer}>
            <Text style={[styles.text, styles.boldTitle]}>
              {antibioticsText.shared.guidelineExceptions}
            </Text>
            <Text style={styles.text}>
              {antibioticsText.acuteOtitis.exceptions}
            </Text>
          </View>
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

export default AcuteOtitisHome;
