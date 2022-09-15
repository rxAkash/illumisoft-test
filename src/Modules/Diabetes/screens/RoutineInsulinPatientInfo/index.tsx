import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { inject, observer } from 'mobx-react';
import { DiabetesStore } from 'Modules/Diabetes/stores/DiabetesStore';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import styles from '../../styles';
import InlineSelect from 'UIToolkit/Inputs/InlineSelect';
import { AGE_WEIGHT, DAILY_DOSE, INFO_TYPE_OPTIONS, BASAL_INSULIN } from './conf';
import { SelectOption } from 'UIToolkit/Inputs/@types';
import InsulinInput from 'Modules/Diabetes/components/InsulinInput';
import InfoSectionHeader from 'Modules/Diabetes/components/InfoSectionHeader';
import { ROUTINE_INSULIN_ABOUT_TO_EAT } from 'Modules/Diabetes/navigation/routes';
import { AGE_OPTIONS } from 'Modules/Diabetes/config/dkaTreament';
import WeightInput from 'Modules/Diabetes/components/WeightInput';
import ResultDisplayBottomPanel from 'UIToolkit/ResultDisplayBottomPanel';

interface Props {
  diabetesStore: DiabetesStore;
  navigation: NavigationProp<any>;
}

const RoutineInsulinPatientInfo = inject('diabetesStore')(observer(({
  diabetesStore,
  navigation
}: Props) => {
  const [selectedInfoType, setSelectedInfoType] = useState<SelectOption>();
  
  const buttonDisabled = () => {
    switch(selectedInfoType?.value) {
      case DAILY_DOSE: return diabetesStore.insulin === '';
      case BASAL_INSULIN: return diabetesStore.basalInsulin === '';
      case AGE_WEIGHT: return diabetesStore.weight === '' || diabetesStore.age === ''
      case undefined: return true;
    }
    return false;
  }

  const onNext = () => {
    if(selectedInfoType && selectedInfoType.value === DAILY_DOSE) {
      diabetesStore.preferInsulin();
    }
    if(selectedInfoType && selectedInfoType.value === BASAL_INSULIN) {
      diabetesStore.preferBasalInsulin();
    }
    if(selectedInfoType && selectedInfoType.value === AGE_WEIGHT) {
      diabetesStore.preferAgeWeight();
    }
    navigation.navigate(ROUTINE_INSULIN_ABOUT_TO_EAT)
  }

  const renderBottomPanel = () => (
    <ResultDisplayBottomPanel
      buttonDisabled={buttonDisabled()}
      onNext={onNext}
    />
  )

  const renderSelectedInput = () => {
    if(selectedInfoType && selectedInfoType.value === DAILY_DOSE) {
      return (
        <View>
          <InfoSectionHeader
            title={selectedInfoType.title}
            info={diabetesText.rapidInsulin.totalDoseInfo}
            lightText
            infoTitle={diabetesText.rapidInsulin.totalDailyDose}
          />
          <InsulinInput
            value={diabetesStore.insulin}
            setInsulin={(v) => diabetesStore.setInsulin(v)}
            fullWidth
          />
        </View>
      )
    } else if(selectedInfoType && selectedInfoType.value === BASAL_INSULIN) {
      return (
        <View>
          <InfoSectionHeader
            title={selectedInfoType.title}
            info={diabetesText.rapidInsulin.totalDoseInfo}
            lightText
            infoTitle={diabetesText.rapidInsulin.totalDailyDose}
          />
          <InsulinInput
            value={diabetesStore.basalInsulin}
            setInsulin={(v) => diabetesStore.setBasalInsulin(v)}
            fullWidth
          />
        </View>
      )
    } else if(selectedInfoType && selectedInfoType.value === AGE_WEIGHT) {
      return (
        <View>
          <Text style={[styles.sectionTitle, {fontWeight: '300'}]}>Age</Text>
          <InlineSelect
            options={AGE_OPTIONS}
            placeholder={diabetesText.rapidInsulin.select}
            onChange={(item) => diabetesStore.setAge(item.value)}
            selected={{
              title: diabetesStore.age,
              value: diabetesStore.age
            }}
          />
          <Text style={[styles.sectionTitle, {fontWeight: '300', marginTop: 12}]}>Weight</Text>
          <WeightInput
            value={diabetesStore.weight}
            setWeight={(v) => diabetesStore.setWeight(v)}
          />
        </View>
      )
    }
    return null;
  }

  return (
    <DiabetesLayout
      title={diabetesText.rapidInsulin.title}
      showPatientDetailsHeader
      renderBottomPanel={renderBottomPanel}
    >
      <View style={styles.body}>
        <View style={styles.grayBox}>
          <Text style={styles.sectionSubtitle}>
            <Text style={styles.warningText}>
              {diabetesText.rapidInsulin.caution}
            </Text>
            {diabetesText.rapidInsulin.warning}
          </Text>
        </View>
        <View style={styles.verticalContainer}>
          <Text style={[styles.sectionTitle, {marginBottom: 0}]}>{diabetesText.rapidInsulin.tellUsSomething}</Text>
        </View>
        <InlineSelect
          options={INFO_TYPE_OPTIONS}
          placeholder={diabetesText.rapidInsulin.select}
          onChange={setSelectedInfoType}
          selected={selectedInfoType}
        />
        {selectedInfoType ? (
          <View style={styles.inputSection}>
            {renderSelectedInput()}
          </View>
        ) : null}
        
      </View>
    </DiabetesLayout>
  )
}))

export default RoutineInsulinPatientInfo;
