import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { DiabetesStore } from 'Modules/Diabetes/stores/DiabetesStore';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import styles from '../../styles';
import { Text, View } from 'react-native';
import GlucoseInput from 'Modules/Diabetes/components/GlucoseInput';
import { inject, observer } from 'mobx-react';
import ResultDisplayBottomPanel from 'UIToolkit/ResultDisplayBottomPanel';
import { MAX_GLUCOSE } from '../InsulinDripAndIVFTitration/conf';
import { dkaTransparentIc } from 'assets/img';
import { DIABETES_HOME, HYPOGLYCEMIA_MANAGEMENT_GLUCOSE, ROUTINE_INSULIN_CARB_3_HOURS, ROUTINE_INSULIN_CARB_RATIO, ROUTINE_INSULIN_FINISH, ROUTINE_INSULIN_KETONES, ROUTINE_INSULIN_NO_ACTION } from 'Modules/Diabetes/navigation/routes';

interface Props {
  diabetesStore: DiabetesStore;
  navigation: NavigationProp<any>;
  route: {
    params?: {
      aboutToEat?: boolean;
    }
  }
}

const RoutineInsulinGlucose = inject('diabetesStore')(observer(({
  diabetesStore,
  navigation,
  route
}: Props) => {

  const onNav = () => {
    if(parseFloat(diabetesStore.glucose) > MAX_GLUCOSE) {
      navigation.reset({
        routes: [{name: DIABETES_HOME}],
        routeNames: [DIABETES_HOME]
      })
      return;
    }
    
    if(route.params?.aboutToEat) {
      if(parseFloat(diabetesStore.glucose) >= 70 && parseFloat(diabetesStore.glucose) < 140) {
        navigation.navigate(ROUTINE_INSULIN_CARB_RATIO);
        return;
      }
      if(parseFloat(diabetesStore.glucose) >= 140 && parseFloat(diabetesStore.glucose) < 240) {
        navigation.navigate(ROUTINE_INSULIN_CARB_3_HOURS);
        return;
      }
      if(parseFloat(diabetesStore.glucose) >= 240) {
        navigation.navigate(ROUTINE_INSULIN_KETONES, {fromGlucose: true});
        return;
      }
    } else if(route.params?.aboutToEat === false) {
      if(parseFloat(diabetesStore.glucose) >= 70 && parseFloat(diabetesStore.glucose) < 140) {
        navigation.navigate(ROUTINE_INSULIN_NO_ACTION);
        return;
      }
      if(parseFloat(diabetesStore.glucose) >= 140 && parseFloat(diabetesStore.glucose) < 240) {
        navigation.navigate(ROUTINE_INSULIN_CARB_3_HOURS, {shortVersion: true});
        return;
      }
      if(parseFloat(diabetesStore.glucose) >= 240) {
        navigation.navigate(ROUTINE_INSULIN_KETONES, {fromGlucose: true, shortVersion: true});
        return;
      }
    }

    if(parseFloat(diabetesStore.glucose) < 70) {
      navigation.navigate(HYPOGLYCEMIA_MANAGEMENT_GLUCOSE);
    } else if(parseFloat(diabetesStore.glucose) >= 70 && parseFloat(diabetesStore.glucose) < 240) {
      navigation.navigate(ROUTINE_INSULIN_FINISH);
    } else {
      navigation.navigate(ROUTINE_INSULIN_KETONES);
    }
  }

  const renderBottomPanel = () => (
    <ResultDisplayBottomPanel
      onNext={onNav}
      buttonDisabled={!diabetesStore.glucose}
      icon={parseFloat(diabetesStore.glucose) > MAX_GLUCOSE ? dkaTransparentIc : undefined}
      text={parseFloat(diabetesStore.glucose) > MAX_GLUCOSE ? diabetesText.insulinDrip.maxGlucose : undefined}
      buttonTextOverrride={parseFloat(diabetesStore.glucose) > MAX_GLUCOSE ? diabetesText.diagnosisSupport.home : undefined}
      column={parseFloat(diabetesStore.glucose) > MAX_GLUCOSE}
    />
  )

  return (
    <DiabetesLayout
      title={diabetesText.rapidInsulin.title}
      showPatientDetailsHeader
      renderBottomPanel={renderBottomPanel}
    >
      <View style={styles.verticalContainer}>
        <View style={[styles.sectionTitleContainer, {marginBottom: 12}]}>
          <Text style={styles.sectionTitle}>{diabetesText.rapidInsulin.glucoseTitle}</Text>
          <GlucoseInput
            value={diabetesStore.glucose}
            setGlucose={(v) => diabetesStore.setGlucose(v)}
          />
        </View>
      </View>
    </DiabetesLayout>
  )
}))

export default RoutineInsulinGlucose;
