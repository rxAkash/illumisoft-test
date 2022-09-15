import { resusText } from 'Modules/Resuscitation/config/strings';
import React, { useState } from 'react';
import Analytics from 'appcenter-analytics';
import { Text, View } from 'react-native';
import { CARDIOVASCULAR_DRIPS, CONCENT_UNIT_DUMMY_OPTION, DOSE_UNIT_DUMMY_OPTION } from './cardivascularConf';
import { calculateResults } from './cardvascularCalculator';
import DripsInput from './DripsInput';
import Formula from './Formula';
import styles from './styles';

const CONSTANT = 60;

interface Props {
  patientWeightKg: number;
  preselectedDrug?: string;
}

const CardiovascularDrips = React.memo(({patientWeightKg, preselectedDrug}: Props) => {
  const [selectedDrug, setSelectedDrug] = useState(preselectedDrug || '');
  const [selectedDose, setSelectedDose] = useState('');
  const [selectedConcentration, setSelectedConcentration] = useState('');

  const getDoseOptions = () => {
    if(selectedDrug) {
      const doseContent = CARDIOVASCULAR_DRIPS.find(item => item.drugText === selectedDrug)?.doseContent
      if(doseContent) {
        const keys = Object.keys(doseContent)
        return keys.map(item => ({
          title: item,
          value: item
        }))
      } 
    }
    return undefined;
  }

  const getConcentrationOptions = () => {
    if(selectedDrug) {
      const doseConcentration = CARDIOVASCULAR_DRIPS.find(item => item.drugText === selectedDrug)?.concentration
      if(doseConcentration) {
        const keys = Object.keys(doseConcentration)
        return keys.map(item => ({
          title: item,
          value: item
        }))
      } 
    }
    return undefined;
  }

  const onDrugChange = (value: string) => {
    setSelectedDrug(value);
    setSelectedDose('');
    setSelectedConcentration('');
  }

  const getResult = () => {
    if(selectedDose && selectedConcentration) {
      const roundedResult = calculateResults(selectedDose, patientWeightKg, selectedConcentration);
      Analytics.trackEvent('CDD', {
        drug: selectedDrug,
        dose: selectedDose,
        concentration: selectedConcentration,
        calculatedValue: roundedResult.toString()
      })
      return roundedResult;
    }
    return ''
  }

  return (
    <View style={styles.drips}>
      <DripsInput
        title={resusText.circulaton.selectDrug}
        value={selectedDrug}
        onValueChange={onDrugChange}
        options={CARDIOVASCULAR_DRIPS.map(item => ({
          title: item.drugText,
          value: item.drugText
        })).sort((i1, i2) => i1.title > i2.title ? 1 : -1)}
        wideInput
        disabled={preselectedDrug !== undefined}
      />
      <DripsInput
        title={resusText.circulaton.selectDose}
        value={selectedDose}
        onValueChange={setSelectedDose}
        options={getDoseOptions()}
        secondaryOptions={DOSE_UNIT_DUMMY_OPTION}
        unit={DOSE_UNIT_DUMMY_OPTION[0].title}
      />
      <DripsInput
        title={resusText.circulaton.selectConcentration}
        value={selectedConcentration}
        onValueChange={setSelectedConcentration}
        options={getConcentrationOptions()}
        secondaryOptions={CONCENT_UNIT_DUMMY_OPTION}
        unit={CONCENT_UNIT_DUMMY_OPTION[0].title}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.boldTitle}>{resusText.circulaton.mlhr}</Text>
        <View style={styles.input}>
          <Text style={styles.boldTitle}>{getResult()} {getResult() !== '' && (
            <Text>{resusText.circulaton.mlhr}</Text>
          )}</Text>
        </View>
      </View>
      <Formula />
    </View>
  )
})

export default CardiovascularDrips;
