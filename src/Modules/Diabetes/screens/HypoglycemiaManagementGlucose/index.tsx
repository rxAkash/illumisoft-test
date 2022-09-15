import React from 'react';
import Analytics from 'appcenter-analytics';
import { View } from 'react-native';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import styles from '../../styles';
import Card from 'UIToolkit/Card';
import BulletList from 'UIToolkit/BulletList';
import { HYPOGLYCEMIA_ITEMS } from './conf';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import { dkaTransparentIc } from 'assets/img';
import { NavigationProp } from '@react-navigation/native';
import { DIABETES_HOME } from 'Modules/Diabetes/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const HypoglycemiaManagementGlucose = React.memo(({navigation}: Props) => {
  const onHome = () => {
    Analytics.trackEvent("Guideline Restart", {guideline: 'Diabetes'})
    navigation.reset({
      routes: [{name: DIABETES_HOME}],
      routeNames: [DIABETES_HOME]
    })
  }

  return (
    <DiabetesLayout
      title={diabetesText.hypoglycemia.title}
      showPatientDetailsHeader
    >
      <View style={styles.body}>
        <Card>
          <View style={styles.infoSection}>
            <BulletList
              items={HYPOGLYCEMIA_ITEMS}
              numberRoot
            />
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

export default HypoglycemiaManagementGlucose;
