import { NavigationProp } from '@react-navigation/native';
import { dkaIc } from 'assets/img';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import Card from 'UIToolkit/Card';
import CardNavigationButton from 'UIToolkit/CardNavigationButton';
import ModuleLogo from 'UIToolkit/ModuleLogo';
import { diabetesText } from './config/strings';
import { CEREBRAL_EDEMA, DIABETES_DIAGNOSIS_PATHWAY, DIABETES_KETOACIDOSIS_DIAGNOSIS, PAITENT_INFO_INPUT, INSULIN_DRIP_AND_TITRATION, PUMP_MALFUNCTION, ROUTINE_RAPID_INSULIN_DOING, DIABETIC_KETOACIDOSIS_TREATMENT, CEREBRAL_EDEMA_TREATMENT } from './navigation/routes';
import { DiabetesStore } from './stores/DiabetesStore';
import styles from './styles';

interface Props {
  navigation: NavigationProp<any>;
  diabetesStore: DiabetesStore;
}

const DiabetesHome = inject('diabetesStore')(observer(({
  diabetesStore,
  navigation
}: Props) => {

  const onNav = (route: string, params?: any) => {
    diabetesStore.clear();
    navigation.navigate(route, params)
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container} contentContainerStyle={styles.listContent}>
        <ModuleLogo
          icon={dkaIc}
          title={diabetesText.home.title}
        />
        <Card title={diabetesText.home.diagnostic}>
          <CardNavigationButton
            title={diabetesText.home.diabetesDiagnosis}
            onPress={() => onNav(DIABETES_DIAGNOSIS_PATHWAY)}
          />
          <CardNavigationButton
            title={diabetesText.home.diabeticKetoacidosis}
            onPress={() => onNav(DIABETES_KETOACIDOSIS_DIAGNOSIS)}
          />
          <CardNavigationButton
            title={diabetesText.home.cerebralEdema}
            onPress={() => onNav(PAITENT_INFO_INPUT, {nextScreen: CEREBRAL_EDEMA})}
          />
        </Card>
        <Card title={diabetesText.home.treatment}>
          <CardNavigationButton
            title={diabetesText.home.initialDKATreatment}
            onPress={() => onNav(PAITENT_INFO_INPUT, {nextScreen: DIABETIC_KETOACIDOSIS_TREATMENT})}
          />
          <CardNavigationButton
            title={diabetesText.home.dkaInsulin}
            onPress={() => onNav(PAITENT_INFO_INPUT, {nextScreen: INSULIN_DRIP_AND_TITRATION})}
          />
          <CardNavigationButton
            title={diabetesText.home.cerebralEdemaTreatment}
            onPress={() => onNav(PAITENT_INFO_INPUT, {nextScreen: CEREBRAL_EDEMA_TREATMENT})}
          />
          <CardNavigationButton
            title={diabetesText.home.routineInsulineDosing}
            onPress={() => onNav(PAITENT_INFO_INPUT, {nextScreen: ROUTINE_RAPID_INSULIN_DOING})}
          />
        </Card>
        <Card title={diabetesText.home.other}>
          <CardNavigationButton
            title={diabetesText.home.pumpMalfunction}
            onPress={() => onNav(PUMP_MALFUNCTION)}
          />
        </Card>
        <Card style={styles.disclaimerCard}>
          <Text style={styles.disclaimerText}>
            <Text style={styles.disclaimerTitle}>{diabetesText.home.disclaimer}</Text>
            {diabetesText.home.disclaimerStart}
            <Text style={styles.italicText}>{diabetesText.home.disclaimerItalic}</Text>
            {diabetesText.home.disclaimerFinish}
          </Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  )
}))

export default DiabetesHome;
