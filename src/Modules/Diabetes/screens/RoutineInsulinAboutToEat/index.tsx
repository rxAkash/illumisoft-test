import React from 'react';
import { Text, View } from 'react-native';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import styles from '../../styles';
import CardNavigationButton from 'UIToolkit/CardNavigationButton';
import { ROUTINE_INSULIN_GLUCOSE } from 'Modules/Diabetes/navigation/routes';
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

const RoutineInsulinAboutToEat = React.memo(({navigation}: Props) => {

  const onNav = (answer: boolean) => {
    navigation.navigate(ROUTINE_INSULIN_GLUCOSE, {aboutToEat: answer})
  }

  return (
    <DiabetesLayout
      title={diabetesText.rapidInsulin.title}
      showPatientDetailsHeader
    >
      <View style={styles.verticalContainer}>
        <View style={[styles.sectionTitleContainer, {marginBottom: 12}]}>
          <Text style={styles.sectionTitle}>
            {diabetesText.rapidInsulin.isThePatientAboutToEat}
          </Text>
        </View>
        <CardNavigationButton
          title={diabetesText.ketoacidosis.yes}
          onPress={() => onNav(true)}
        />
        <CardNavigationButton
          title={diabetesText.ketoacidosis.no}
          onPress={() => onNav(false)}
        />
      </View>
    </DiabetesLayout>
  )
})

export default RoutineInsulinAboutToEat;
