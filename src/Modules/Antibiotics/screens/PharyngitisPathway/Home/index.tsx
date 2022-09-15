import React from 'react';
import { Text, View } from 'react-native';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import AnibioticsLayout from '../../../components/AntibioticsLayout';
import styles from '../../../styles';
import Card from 'UIToolkit/Card';
import BulletList from 'UIToolkit/BulletList';
import { SIGNS_LIST } from './conf';
import ColoredNavButton from 'UIToolkit/Buttons/ColoredNavButton';
import { primaryColor } from 'UIToolkit/theme/colors';
import { NavigationProp } from '@react-navigation/native';
import { PHARYNGITIS_ALLERGY_ASSESMENT } from 'Modules/Antibiotics/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const PharyngitisHome = React.memo(({navigation}: Props) => {
  const onNav = () => {
    navigation.navigate(PHARYNGITIS_ALLERGY_ASSESMENT)
  }
  
  return (
    <AnibioticsLayout
      title={antibioticsText.pharyngitis.info}
    >
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text style={[styles.text, {marginBottom: 12}]}>
            <Text style={styles.boldUnderlineTitle}>
              {antibioticsText.shared.definition}
            </Text>
            {antibioticsText.pharyngitis.definition}
          </Text>
          <Text style={[styles.text, {marginBottom: 12}]}>
            <Text style={styles.boldUnderlineTitle}>
              {antibioticsText.shared.signsAndSymptoms}
            </Text>
            {antibioticsText.pharyngitis.signsAndSymptoms}
          </Text>
          <BulletList
            items={SIGNS_LIST}
          />
          <Text style={[styles.text, {marginBottom: 12}]}>
            {antibioticsText.pharyngitis.signsAndSymptomsSecond}
          </Text>
          <Text style={[styles.text, {marginBottom: 12}]}>
            <Text style={styles.boldUnderlineTitle}>
              {antibioticsText.shared.testing}
            </Text>
            {antibioticsText.pharyngitis.testing}
          </Text>
          <Text style={[styles.text, {marginBottom: 12}]}>
            <Text style={styles.boldUnderlineTitle}>
              {antibioticsText.shared.commonBacteria}
            </Text>
            {antibioticsText.pharyngitis.commonBacteria}
          </Text>
        </Card>
        <View style={styles.bottomButtonContainer}>
          <ColoredNavButton
            center
            title={antibioticsText.shared.antibioticDecitionSupport}
            backgroundColor={primaryColor}
            onPress={onNav}
          />
        </View>
      </View>
    </AnibioticsLayout>
  )
})

export default PharyngitisHome;
