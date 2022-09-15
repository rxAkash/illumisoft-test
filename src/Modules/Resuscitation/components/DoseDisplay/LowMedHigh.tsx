import { resusText } from 'Modules/Resuscitation/config/strings';
import React from 'react';
import { Text, View } from 'react-native';
import { calculatePatientDose, calculateVolumeOnly } from './doseCalculators';
import { getCustomModerateDose } from './logicExceptions';
import styles from './styles';
interface Props {
  drugRoute: any;
  patientWeight: number;
  customLowDose?: number;
  drugName: string
}

const LowMedHigh = React.memo(({drugRoute, patientWeight, customLowDose, drugName}: Props) => {
  let lowDose = drugRoute.LowDose ? calculatePatientDose(patientWeight, drugRoute.LowDose, drugRoute.MaxDose) : null
  if(customLowDose) {
    lowDose = calculatePatientDose(patientWeight, customLowDose, drugRoute.MaxDose)
  }
  const lowVolume = lowDose ? calculateVolumeOnly(
    lowDose.dose,
    drugRoute.Concentration,
    drugRoute.PtDose_Volume_Units,
    drugRoute.Concentration_Units
  ) : null

  const customModDose = getCustomModerateDose(drugName, patientWeight, drugRoute.MaxDose);

  let modDose = drugRoute.ModerateDose ? calculatePatientDose(patientWeight, drugRoute.ModerateDose, drugRoute.MaxDose) : null
  if(customModDose) { modDose = customModDose}
  const modVolume = modDose ? calculateVolumeOnly(
    modDose.dose,
    drugRoute.Concentration,
    drugRoute.PtDose_Volume_Units,
    drugRoute.Concentration_Units
  ) : null

  const highDose = drugRoute.HighDose ? calculatePatientDose(patientWeight, drugRoute.HighDose, drugRoute.MaxDose) : null
  const highVolume = highDose ? calculateVolumeOnly(
    highDose.dose,
    drugRoute.Concentration,
    drugRoute.PtDose_Volume_Units,
    drugRoute.Concentration_Units
  ) : null
  

  return (
    <View>
      <Text style={[styles.doseText, {textAlign: 'center'}]}>
        {resusText.drugDosing.doseRange} {drugRoute.LowDose} - {drugRoute.HighDose || drugRoute.ModerateDose}{drugRoute.DoseUnits}
      </Text>
      {lowDose?.dose && lowVolume ? (
        <View style={styles.doseContainer}>
          <Text style={styles.doseGradeText}>
            *{resusText.drugDosing.lowDose}
          </Text>
          <Text style={styles.subdoseText}>
            {resusText.drugDosing.patientDose}{' '}
            <Text style={styles.blueText}>
              {lowDose.dose}
              {drugRoute.PtDose_Mass_Units}
              {lowDose.max ? ' (Max)' : ''}
            </Text>
          </Text>
          <Text style={styles.subdoseText}>
            {resusText.drugDosing.patientVolume}{' '}
            <Text style={styles.blueText}>
              {lowVolume}
              {lowDose.max ? ' (Max)' : ''}
            </Text>
          </Text>
        </View>
      ) : null}
      {modDose?.dose && modVolume ? (
        <View style={styles.doseContainer}>
          <Text style={styles.doseGradeText}>
            {resusText.drugDosing.medDose}
          </Text>
          <Text style={styles.subdoseText}>
            {resusText.drugDosing.patientDose}{' '}
            <Text style={styles.blueText}>
              {modDose.dose}
              {drugRoute.PtDose_Mass_Units}
              {modDose.max ? ' (Max)' : ''}
            </Text>
          </Text>
          <Text style={styles.subdoseText}>
            {resusText.drugDosing.patientVolume}{' '}
            <Text style={styles.blueText}>
              {modVolume}
              {modDose.max ? ' (Max)' : ''}
            </Text>
          </Text>
        </View>
      ) : null}
      {highDose?.dose && highVolume ? (
        <View style={styles.doseContainer}>
          <Text style={styles.doseGradeText}>
            {resusText.drugDosing.highDose}
          </Text>
          <Text style={styles.subdoseText}>
            {resusText.drugDosing.patientDose}{' '}
            <Text style={styles.blueText}>
              {highDose.dose}
              {drugRoute.PtDose_Mass_Units}
              {highDose.max ? ' (Max)' : ''}
            </Text>
          </Text>
          <Text style={styles.subdoseText}>
            {resusText.drugDosing.patientVolume}{' '}
            <Text style={styles.blueText}>
              {highVolume}
              {highDose.max ? ' (Max)' : ''}
            </Text>
          </Text>
        </View>
      ) : null}
    </View>
    
  )
})

export default LowMedHigh;
