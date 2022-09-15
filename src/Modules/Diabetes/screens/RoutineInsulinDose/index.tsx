import React from 'react';
import { Text, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { inject, observer } from 'mobx-react';
import { DiabetesStore } from 'Modules/Diabetes/stores/DiabetesStore';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import styles from '../../styles';
import InsulinInput from 'Modules/Diabetes/components/InsulinInput';
import ResultDisplayBottomPanel from 'UIToolkit/ResultDisplayBottomPanel';
import { ROUTINE_INSULIN_KETONES_DOSAGE } from 'Modules/Diabetes/navigation/routes';

interface Props {
  diabetesStore: DiabetesStore;
  navigation: NavigationProp<any>;
}

const RoutineInsulinDose = inject('diabetesStore')(observer(({
  diabetesStore,
  navigation
}: Props) => {

  const onNext = () => {
    diabetesStore.preferInsulin();
    navigation.navigate(ROUTINE_INSULIN_KETONES_DOSAGE)
  }

  const renderBottomPanel = () => (
    <ResultDisplayBottomPanel
      buttonDisabled={!diabetesStore.insulin}
      onNext={onNext}
    />
  )
  return (
    <DiabetesLayout
      title={diabetesText.rapidInsulin.title}
      renderBottomPanel={renderBottomPanel}
      showPatientDetailsHeader
    >
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>{diabetesText.rapidInsulin.insulinDose}</Text>
        <InsulinInput
          value={diabetesStore.insulin}
          setInsulin={(v) => diabetesStore.setInsulin(v)}
        />
      </View>
    </DiabetesLayout>
  )
}))

export default RoutineInsulinDose;
