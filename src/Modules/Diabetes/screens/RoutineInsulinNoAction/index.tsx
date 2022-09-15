import { NavigationProp } from '@react-navigation/native';
import Analytics from 'appcenter-analytics'
import { dkaTransparentIc } from 'assets/img';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import { DIABETES_HOME } from 'Modules/Diabetes/navigation/routes';
import React from 'react';
import { Text, View } from 'react-native';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import Card from 'UIToolkit/Card';
import styles from '../../styles';

interface Props {
  navigation: NavigationProp<any>;
}

const RoutineInsulinNoAction = React.memo(({navigation}: Props) => { 
  const onNav = () => {
    Analytics.trackEvent("Guideline Restart", {guideline: 'Diabetes'})
    navigation.reset({
      routes: [{name: DIABETES_HOME}],
      routeNames: [DIABETES_HOME]
    })
  }
  
  return (
    <DiabetesLayout
      title={diabetesText.rapidInsulin.title}
      showPatientDetailsHeader
    >
      <View style={styles.body}>
        <Card>
          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>{diabetesText.rapidInsulin.noAction}</Text>
            <Text style={styles.sectionSubtitle}>{diabetesText.rapidInsulin.noActionInfo}</Text>
          </View>
          <View style={styles.infoSection}>
            <FullWidthButton
              text={diabetesText.diagnosisSupport.home}
              icon={dkaTransparentIc}
              onPress={onNav}
            />
          </View>
        </Card>
      </View>
    </DiabetesLayout>
  )
})

export default RoutineInsulinNoAction;
