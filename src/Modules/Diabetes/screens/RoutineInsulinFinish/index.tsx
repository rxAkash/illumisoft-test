import React from 'react';
import Analytics from 'appcenter-analytics';
import { Text, View } from 'react-native';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import styles from '../../styles';
import Card from 'UIToolkit/Card';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import { dkaTransparentIc } from 'assets/img';
import { NavigationProp } from '@react-navigation/native';
import { DIABETES_HOME } from 'Modules/Diabetes/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const RoutineInsulinFinish = React.memo(({navigation}: Props) => {
  const onHome = () => {
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
            <Text style={[styles.sectionTitle, {marginBottom: 14}]}>
              {diabetesText.rapidInsulin.calculateDosage}
            </Text>
            <Text style={[styles.sectionSubtitle, {marginBottom: 12}]}>
              {diabetesText.rapidInsulin.usePump}
            </Text>
            <Text style={[styles.sectionSubtitle, {marginBottom: 12}]}>
              {diabetesText.rapidInsulin.itWillCalculate}
            </Text>
          </View>
          <View style={styles.infoSection}>
            <FullWidthButton
              icon={dkaTransparentIc}
              text={diabetesText.diagnosisSupport.home}
              onPress={onHome}
            />
          </View>
        </Card>
      </View>
    </DiabetesLayout>
  )
})

export default RoutineInsulinFinish;
