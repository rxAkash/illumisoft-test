import React from 'react';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import styles from '../../styles';
import { Text, View } from 'react-native';
import Card from 'UIToolkit/Card';
import BulletList from 'UIToolkit/BulletList';
import { PUMP_MALFUNCTION_STEPS } from './conf';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import { NavigationProp } from '@react-navigation/native';
import { CEREBRAL_EDEMA, PAITENT_INFO_INPUT, NAVIGATING_PUMP_SETTINGS, ROUTINE_INSULIN_HAVE_ACCESS } from 'Modules/Diabetes/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const PumpMalfunction = React.memo(({navigation}: Props) => {
  const onNav = (route: string, params?: any) => {
    navigation.navigate(route, params)
  }

  return (
    <DiabetesLayout title={diabetesText.pumpMalfunction.title}>
      <View style={styles.body}>
        <Card>
          <View style={styles.infoSection}> 
            <Text style={styles.sectionTitle}>{diabetesText.pumpMalfunction.sectionTitle}</Text>
            <Text style={[styles.sectionSubtitle, {marginBottom: 12}]}>{diabetesText.pumpMalfunction.subtitle}</Text>
            <BulletList
              items={PUMP_MALFUNCTION_STEPS}
              numberRoot
            />
          </View>
          <View style={styles.infoSection}>
            <FullWidthButton
              text={diabetesText.pumpMalfunction.navigatingSettings}
              onPress={() => onNav(NAVIGATING_PUMP_SETTINGS)}
            />
            <FullWidthButton
              text={diabetesText.pumpMalfunction.dosingInsulin}
              style={styles.cardGroupButton}
              onPress={() => onNav(ROUTINE_INSULIN_HAVE_ACCESS)}
            />
            <FullWidthButton
              text={diabetesText.pumpMalfunction.suspectedDKA}
              style={styles.cardGroupButton}
              onPress={() => onNav(PAITENT_INFO_INPUT, {nextScreen: CEREBRAL_EDEMA})}
            />
          </View>
        </Card>
      </View>
    </DiabetesLayout>
  )
})

export default PumpMalfunction;
