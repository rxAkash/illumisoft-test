import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import styles from '../../styles';
import { Text, View } from 'react-native';
import CardNavigationButton from 'UIToolkit/CardNavigationButton';
import { PUMP_MALFUNCTION, ROUTINE_INSULIN_GLUCOSE } from 'Modules/Diabetes/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const RoutineInsulinPumpWorking = React.memo(({navigation}: Props) => {
  const onNav = (route: string) => {
    navigation.navigate(route);
  }

  return (
    <DiabetesLayout
      title={diabetesText.rapidInsulin.title}
      showPatientDetailsHeader
    >
      <View style={styles.verticalContainer}>
        <View style={[styles.sectionTitleContainer, {marginBottom: 12}]}>
          <Text style={styles.sectionTitle}>{diabetesText.rapidInsulin.isPumpWorking}</Text>
        </View>
        <CardNavigationButton
          title={diabetesText.ketoacidosis.yes}
          onPress={() => onNav(ROUTINE_INSULIN_GLUCOSE)}
        />
        <CardNavigationButton
          title={diabetesText.ketoacidosis.no}
          onPress={() => onNav(PUMP_MALFUNCTION)}
        />
      </View>
    </DiabetesLayout>
  )
})

export default RoutineInsulinPumpWorking;
