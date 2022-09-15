import React, { useEffect, useState } from 'react';
import Analytics from 'appcenter-analytics';
import { NavigationProp } from '@react-navigation/native';
import { inject, observer } from 'mobx-react';
import { DiabetesStore } from 'Modules/Diabetes/stores/DiabetesStore';
import styles from '../../styles';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { Text, View } from 'react-native';
import Card from 'UIToolkit/Card';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import { getSuggestedRatesCalculations } from 'Modules/Diabetes/config/calculators';
import HollowButton from 'UIToolkit/Buttons/HollowButton';
import { dkaTransparentIc } from 'assets/img';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import { DIABETES_HOME } from 'Modules/Diabetes/navigation/routes';

interface Props {
  diabetesStore: DiabetesStore;
  navigation: NavigationProp<any>;
}

const TitrationRates = inject('diabetesStore')(observer(({
  diabetesStore,
  navigation
}: Props) => {
  const [calculations, setCalculations] = useState<any>(null);

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

  useEffect(() => {
    const calc = getSuggestedRatesCalculations(
      parseFloat(diabetesStore.weight),
      parseFloat(diabetesStore.glucose)
    )
    setCalculations(calc);
  }, [])

  return (
    <DiabetesLayout
      title={diabetesText.titrationRates.title}
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
                <Text style={styles.medInfoTitle}>{diabetesText.titrationRates.regularInsulin}</Text>
                <Text style={styles.medValue}>
                  {calculations.regularInsulinRateOver79kg.result} {calculations.regularInsulinRateOver79kg.suffix}
                </Text>
              </View>
              <View style={styles.infoSection}>
                <Text style={styles.medInfoTitle}>{diabetesText.titrationRates.regularInsulin}</Text>
                <Text style={styles.medValue}>
                  {calculations.regularInsulinRate.result} {calculations.regularInsulinRate.suffix}
                </Text>
                <Text style={styles.sectionHint}>{diabetesText.titrationRates.regulatInsulinHint}</Text>
              </View>
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

export default TitrationRates;
