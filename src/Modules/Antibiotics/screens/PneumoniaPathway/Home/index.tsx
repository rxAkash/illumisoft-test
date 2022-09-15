import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import styles from '../../../styles';
import Card from 'UIToolkit/Card';
import ColoredNavButton from 'UIToolkit/Buttons/ColoredNavButton';
import { primaryColor } from 'UIToolkit/theme/colors';
import { NavigationProp } from '@react-navigation/native';
import { PNEUMONIA_VIRAL_ASSESMENT } from 'Modules/Antibiotics/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const PneumoniaHome = React.memo(({navigation}: Props) => {
  const onNav = () => {
    navigation.navigate(PNEUMONIA_VIRAL_ASSESMENT);
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.pneumonia.info}
    >
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text style={[styles.text, {marginBottom: 12}]}>
            <Text style={styles.boldUnderlineTitle}>{antibioticsText.shared.definition}</Text>
            {antibioticsText.pneumonia.definition}
          </Text>
          <Text style={[styles.text, {marginBottom: 12}]}>
            <Text style={styles.boldUnderlineTitle}>{antibioticsText.shared.signsAndSymptoms}</Text>
            {antibioticsText.pneumonia.signsAndSymptoms}
          </Text>
          <Text style={[styles.text, {marginBottom: 12}]}>
            <Text style={styles.boldUnderlineTitle}>{antibioticsText.shared.testing}</Text>
            {antibioticsText.pneumonia.testing}
          </Text>
          <Text style={[styles.text, {marginBottom: 12}]}>
            <Text style={styles.boldUnderlineTitle}>{antibioticsText.shared.commonBacteria}</Text>
            {antibioticsText.pneumonia.commonBacteria}
          </Text>
          <View style={styles.disclaimerContainer}>
            <Text style={styles.boldTitle}>
              {antibioticsText.shared.guidelineExceptions}
            </Text>
            <Text style={styles.text}>
              {antibioticsText.pneumonia.exceptions}
            </Text>
          </View>
        </Card>
        <View style={styles.bottomButtonContainer}>
          <ColoredNavButton
            center
            title={antibioticsText.shared.antibioticDecitionSupport}
            onPress={onNav}
            backgroundColor={primaryColor}
          />
        </View>
      </View>
    </AntibioticsLayout>
  )
})

export default PneumoniaHome;
