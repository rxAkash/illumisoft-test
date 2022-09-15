import { NavigationProp } from '@react-navigation/native';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import { ROUTINE_INSULIN_CARB_3_HOURS, ROUTINE_INSULIN_DOSE, ROUTINE_INSULIN_FINISH, ROUTINE_INSULIN_KETONES_DOSAGE } from 'Modules/Diabetes/navigation/routes';
import React from 'react';
import { Text, View } from 'react-native';
import CardNavigationButton from 'UIToolkit/CardNavigationButton';
import styles from '../../styles';

interface Props {
  navigation: NavigationProp<any>;
  route: {
    params?: {
      fromGlucose?: boolean;
      shortVersion?: boolean;
    }
  }
}

const RoutineInsulinKetones = React.memo(({navigation, route}: Props) => {
  const onYes = () => {
    if(!route.params?.fromGlucose) {
      navigation.navigate(ROUTINE_INSULIN_DOSE)
    } else {
      navigation.navigate(ROUTINE_INSULIN_KETONES_DOSAGE, {fromGlucose: true, shortVersion: route.params?.shortVersion})
    }
  }

  const onNo = () => {
    if(!route.params?.fromGlucose) {
      navigation.navigate(ROUTINE_INSULIN_FINISH)
    } else {
      navigation.navigate(ROUTINE_INSULIN_CARB_3_HOURS, {fromGlugose: true, shortVersion: route.params?.shortVersion})
    }
  }
  
  return (
    <DiabetesLayout
      title={diabetesText.rapidInsulin.title}
      showPatientDetailsHeader
    >
      <View style={styles.verticalContainer}>
        <View style={[styles.sectionTitleContainer, {marginBottom: 12}]}>
          <Text style={styles.sectionTitle}>
            {diabetesText.rapidInsulin.areKetonesPresent}
          </Text>
        </View>
        <CardNavigationButton
          title={diabetesText.ketoacidosis.yes}
          onPress={onYes}
        />
        <CardNavigationButton
          title={diabetesText.ketoacidosis.no}
          onPress={onNo}
        />
        <Text style={[styles.sectionSubtitle, {margin: 16}]}>
          {diabetesText.rapidInsulin.bloodKetones}
        </Text>
      </View>
    </DiabetesLayout>
  )
})

export default RoutineInsulinKetones;
