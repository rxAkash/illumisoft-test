import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import styles from '../../styles';
import { Text, View } from 'react-native';
import CardNavigationButton from 'UIToolkit/CardNavigationButton';
import { ROUTINE_INSULIN_ABOUT_TO_EAT, ROUTINE_INSULIN_PATIENT_INFO } from 'Modules/Diabetes/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const RoutineInsulinHaveAccess = React.memo(({navigation}: Props) => {
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
          <Text style={styles.sectionTitle}>{diabetesText.rapidInsulin.doYouHaveAccessToDosing}</Text>
        </View>
        <CardNavigationButton
          title={diabetesText.ketoacidosis.yes}
          onPress={() => onNav(ROUTINE_INSULIN_ABOUT_TO_EAT)}
        />
        <CardNavigationButton
          title={diabetesText.ketoacidosis.no}
          onPress={() => onNav(ROUTINE_INSULIN_PATIENT_INFO)}
        />
      </View>
    </DiabetesLayout>
  )
})

export default RoutineInsulinHaveAccess;
