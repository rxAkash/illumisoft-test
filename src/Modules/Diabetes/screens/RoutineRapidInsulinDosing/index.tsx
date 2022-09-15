import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import styles from '../../styles';
import { Text, View } from 'react-native';
import CardNavigationButton from 'UIToolkit/CardNavigationButton';
import { ROUTINE_INSULIN_HAVE_ACCESS, ROUTINE_INSULIN_PUMP_WORKING } from 'Modules/Diabetes/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const RoutineRapidInsulinDosing = React.memo(({navigation}: Props) => {
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
          <Text style={styles.sectionTitle}>{diabetesText.rapidInsulin.isPatientOnInsulinPump}</Text>
        </View>
        <CardNavigationButton
          title={diabetesText.ketoacidosis.yes}
          onPress={() => onNav(ROUTINE_INSULIN_PUMP_WORKING)}
        />
        <CardNavigationButton
          title={diabetesText.ketoacidosis.no}
          onPress={() => onNav(ROUTINE_INSULIN_HAVE_ACCESS)}
        />
      </View>
    </DiabetesLayout>
  )
})

export default RoutineRapidInsulinDosing;
