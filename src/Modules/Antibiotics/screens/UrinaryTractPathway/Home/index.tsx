import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import styles from '../../../styles';
import Card from 'UIToolkit/Card';
import BulletList from 'UIToolkit/BulletList';
import { EXCEPTIONS_LIST, STEWARDSHIP_LIST } from './conf';
import ColoredNavButton from 'UIToolkit/Buttons/ColoredNavButton';
import { primaryColor } from 'UIToolkit/theme/colors';
import { NavigationProp } from '@react-navigation/native';
import { URINARY_TRACT_SEVERITY_ASSESSMENT } from 'Modules/Antibiotics/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const UrinaryTractHome = React.memo(({navigation}: Props) => {
  const onNav = () => {
    navigation.navigate(URINARY_TRACT_SEVERITY_ASSESSMENT);
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.urinaryTract.home}
    >
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text style={[styles.text, {marginBottom: 12}]}>
            <Text style={styles.boldUnderlineTitle}>
              {antibioticsText.shared.definition}
            </Text>
            {antibioticsText.urinaryTract.definition}
          </Text>
          <Text style={[styles.text, {marginBottom: 12}]}>
            <Text style={styles.boldUnderlineTitle}>
              {antibioticsText.shared.signsAndSymptoms}
            </Text>
            {antibioticsText.urinaryTract.signsAndSymptoms}
          </Text>
          <Text style={[styles.text, {marginBottom: 12}]}>
            <Text style={styles.boldUnderlineTitle}>
              {antibioticsText.shared.testing}
            </Text>
            {antibioticsText.urinaryTract.testing}
          </Text>
          <Text style={[styles.text, {marginBottom: 12}]}>
            <Text style={styles.boldUnderlineTitle}>
              {antibioticsText.shared.commonBacteria}
            </Text>
            {antibioticsText.urinaryTract.commonBacteria}
            <Text style={styles.italic}>
              {antibioticsText.urinaryTract.commonBacteriaItalic}
            </Text>
          </Text>
          <View style={styles.disclaimerContainer}>
            <Text style={[styles.boldTitle, {marginBottom: 8}]}>
              {antibioticsText.shared.guidelineExceptions}
            </Text>
            <BulletList
              items={EXCEPTIONS_LIST}
              numberRoot
            />
            <Text style={[styles.boldTitle, {marginBottom: 8}]}>
              {antibioticsText.urinaryTract.stewardshipNotes}
            </Text>
            <BulletList
              items={STEWARDSHIP_LIST}
              numberRoot
            />
          </View>
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
    </AntibioticsLayout>
  )
})

export default UrinaryTractHome;
