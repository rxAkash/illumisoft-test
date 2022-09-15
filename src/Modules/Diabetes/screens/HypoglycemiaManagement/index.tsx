import React, { useEffect, useState } from 'react';
import Analytics from 'appcenter-analytics';
import { NavigationProp } from '@react-navigation/native';
import { inject, observer } from 'mobx-react';
import { DiabetesStore } from 'Modules/Diabetes/stores/DiabetesStore';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import styles from '../../styles';
import { Text, View } from 'react-native';
import Card from 'UIToolkit/Card';
import { FURTHER_INSTRUCTIONS } from './conf';
import BulletList from 'UIToolkit/BulletList';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import { dkaTransparentIc } from 'assets/img';
import HollowButton from 'UIToolkit/Buttons/HollowButton';
import { DIABETES_HOME } from 'Modules/Diabetes/navigation/routes';
import { getSuggestedRatesCalculations } from 'Modules/Diabetes/config/calculators';

interface Props {
  diabetesStore: DiabetesStore;
  navigation: NavigationProp<any>;
}

const HypoglycemiaManagement = inject('diabetesStore')(observer(({
  diabetesStore,
  navigation
}: Props) => {
  const [calculations, setCalculations] = useState<any>(null);

  useEffect(() => {
    const calc = getSuggestedRatesCalculations(
      parseFloat(diabetesStore.weight),
      parseFloat(diabetesStore.glucose)
    )
    setCalculations(calc);
  }, [])

  const onHome = () => {
    Analytics.trackEvent("Guideline Restart", {guideline: 'Diabetes'})
    navigation.reset({
      routes: [{name: DIABETES_HOME}],
      routeNames: [DIABETES_HOME]
    })
  }

  const onBack = () => {
    navigation.goBack();
  }

  return (
    <DiabetesLayout
      title={diabetesText.hypoglycemia.title}
      showPatientDetailsHeader
    >
      <View style={styles.body}>
        <Card
          title={diabetesText.hypoglycemia.cardTitle}
          blackTitle
        >
          {calculations && (
            <View>
              <View style={styles.infoSection}>
                <Text style={styles.medInfoTitle}>{diabetesText.hypoglycemia.nsBag}</Text>
                <Text style={styles.medValue}>
                  {calculations.nsBagRate.result} {calculations.nsBagRate.suffix}
                </Text>
              </View>
              <View style={styles.infoSection}>
                <Text style={styles.medInfoTitle}>{diabetesText.hypoglycemia.d10Bag}</Text>
                <Text style={styles.medValue}>
                  {calculations.d10BagRate.result} {calculations.d10BagRate.suffix}
                </Text>
              </View>
              <View style={styles.infoSection}>
                <Text style={styles.medInfoTitle}>{diabetesText.hypoglycemia.finalConcentration}</Text>
                <Text style={styles.medValue}>
                  {calculations.finalDextroseConcentration.result} {calculations.finalDextroseConcentration.suffix}
                </Text>
              </View>
              <View style={styles.infoSection}>
                <Text style={styles.sectionTitle}>{diabetesText.hypoglycemia.furtherInstructions}</Text>
                <BulletList
                  items={FURTHER_INSTRUCTIONS}
                />
              </View>
              <View style={styles.infoSection}>
                <FullWidthButton
                  text={diabetesText.diagnosisSupport.home}
                  icon={dkaTransparentIc}
                  onPress={onHome}
                />
                <HollowButton
                  text={diabetesText.insulinDrip.backToTitration}
                  style={{marginTop: 14}}
                  onPress={onBack}
                />
              </View>
            </View>
          )}
        </Card>
      </View>
    </DiabetesLayout>
  )
}))

export default HypoglycemiaManagement;
