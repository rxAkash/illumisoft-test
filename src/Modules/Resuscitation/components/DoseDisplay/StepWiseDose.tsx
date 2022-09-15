import { resusText } from 'Modules/Resuscitation/config/strings';
import React from 'react';
import { Text, View } from 'react-native';
import { calculatePatientDose, calculateVolumeOnly } from './doseCalculators';
import styles from './styles';
interface Props {
  drugRoute: any;
  patientWeight: number;
}

const StepWiseDose = React.memo(({drugRoute, patientWeight}: Props) => {
  const lowDose = drugRoute.LowDose ? calculatePatientDose(patientWeight, drugRoute.LowDose, drugRoute.MaxDose) : null
  const lowVolume = drugRoute.LowDose ? calculateVolumeOnly(
    lowDose?.dose,
    drugRoute.Concentration,
    drugRoute.PtDose_Volume_Units,
    drugRoute.Concentration_Units
  ) : null

  const modDose = drugRoute.ModerateDose ? calculatePatientDose(patientWeight, drugRoute.ModerateDose, drugRoute.MaxDose) : null
  const modVolume = drugRoute.ModerateDose ? calculateVolumeOnly(
    modDose?.dose,
    drugRoute.Concentration,
    drugRoute.PtDose_Volume_Units,
    drugRoute.Concentration_Units
  ) : null
  
  return (
    <View>
      {lowDose?.dose && (
        <View style={styles.doseContainer}>
          <Text style={styles.doseGradeText}>
            *{resusText.drugDosing.initial}
          </Text>
          <Text style={styles.subdoseText}>
            {resusText.drugDosing.initialDose}{' '}
            <Text style={styles.blueText}>
              {drugRoute.LowDose}{' '}
              {drugRoute.DoseUnits}
            </Text>
          </Text>
          <Text style={styles.subdoseText}>
            {resusText.drugDosing.patientDose}{' '}
            <Text style={styles.blueText}>
              {lowDose.dose}
              {drugRoute.PtDose_Mass_Units}
            </Text>
          </Text>
          <Text style={styles.subdoseText}>
            {resusText.drugDosing.patientVolume}{' '}
            <Text style={styles.blueText}>
              {lowVolume}
            </Text>
          </Text>
        </View>
      )}
      {modDose?.dose && (
        <View style={styles.doseContainer}>
          <Text style={styles.doseGradeText}>
            {resusText.drugDosing.repeat}
          </Text>
          <Text style={styles.subdoseText}>
            {resusText.drugDosing.repeatDose}{' '}
            <Text style={styles.blueText}>
              {drugRoute.ModerateDose}{' '}
              {drugRoute.DoseUnits}
            </Text>
          </Text>
          <Text style={styles.subdoseText}>
            {resusText.drugDosing.patientDose}{' '}
            <Text style={styles.blueText}>
              {modDose.dose}
              {drugRoute.PtDose_Mass_Units}
            </Text>
          </Text>
          <Text style={styles.subdoseText}>
            {resusText.drugDosing.patientVolume}{' '}
            <Text style={styles.blueText}>
              {modVolume}
            </Text>
          </Text>
        </View>
      )}
    </View>
    
  )
})

export default StepWiseDose;
