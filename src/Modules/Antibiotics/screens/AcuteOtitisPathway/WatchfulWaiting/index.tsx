import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import Card from 'UIToolkit/Card';
import styles from '../../../styles';
import BulletList from 'UIToolkit/BulletList';
import { WAITING_LIST } from './conf';
import ColoredNavButton from 'UIToolkit/Buttons/ColoredNavButton';
import { primaryColor } from 'UIToolkit/theme/colors';
import HomeButton from 'Modules/Antibiotics/components/HomeButton';
import { NavigationProp } from '@react-navigation/native';
import { ACUTE_OTITIS_ALLERGY_ASSESMENT } from 'Modules/Antibiotics/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const WatchfulWaiting = React.memo(({navigation}: Props) => {
  const onNav = () => {
    navigation.navigate(ACUTE_OTITIS_ALLERGY_ASSESMENT)
  }
  
  return (
    <AntibioticsLayout
      title={antibioticsText.acuteOtitis.watchfulWaiting}
    >
      <View style={styles.container}>
        <Card>
          <View style={styles.cardSection}>
            <Text style={[styles.text, {marginBottom: 8}]}>
              {antibioticsText.acuteOtitis.waitingInfoFirst}
            </Text>
            <BulletList
              items={WAITING_LIST}
            />
            <Text style={styles.text}>
              {antibioticsText.acuteOtitis.waitingInfoSecond}
            </Text>
          </View>
          <View style={styles.cardSection}>
            <ColoredNavButton
              style={styles.button}
              backgroundColor={primaryColor}
              title={antibioticsText.acuteOtitis.antibioticsAreIndicated}
              onPress={onNav}
              center
            />
            <HomeButton />
          </View>
        </Card>
      </View>
    </AntibioticsLayout>
  )
})

export default WatchfulWaiting;
