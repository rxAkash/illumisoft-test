import React from 'react';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import styles from '../../styles';
import { Linking, Text, View } from 'react-native';
import Card from 'UIToolkit/Card';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';

const MEDTRONIC_LINK = 'https://www.medtronicdiabetes.com/customer-support';
const TANDEM_SUPPORT = 'https://www.tandemdiabetes.com/support/';
const INSULET_SUPPORT = 'https://www.omnipod.com/podder-support';

const NavigatingPumpSettings = React.memo(() => {
  const onLink = (link: string) => {
    Linking.openURL(link)
  }

  return (
    <DiabetesLayout
      title={diabetesText.pumpMalfunction.navigatingSettings}
    >
      <View style={styles.body}>
        <Card>
          <View style={styles.infoSection}>
            <Text style={styles.sectionSubtitle}>{diabetesText.pumpMalfunction.settingsInfo}</Text>
          </View>
          <View style={styles.infoSection}>
            <FullWidthButton
              text={diabetesText.pumpMalfunction.medtronic}
              onPress={() => onLink(MEDTRONIC_LINK)}
            />
            <FullWidthButton
              style={styles.cardGroupButton}
              text={diabetesText.pumpMalfunction.tandem}
              onPress={() => onLink(TANDEM_SUPPORT)}
            />
            <FullWidthButton
              style={styles.cardGroupButton}
              text={diabetesText.pumpMalfunction.insulet}
              onPress={() => onLink(INSULET_SUPPORT)}
            />
          </View>
        </Card>
      </View>
    </DiabetesLayout>
  )
})

export default NavigatingPumpSettings;
