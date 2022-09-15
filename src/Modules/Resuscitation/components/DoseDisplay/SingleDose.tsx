import { resusText } from 'Modules/Resuscitation/config/strings';
import React from 'react';
import { Text, View } from 'react-native';
import { calculatePatientDose, calculateVolumeOnly } from './doseCalculators';
import styles from './styles';

interface Props {
  drugRoute: any;
  patientWeight: number;
}

const SingleDose = React.memo(({drugRoute, patientWeight}: Props) => {
  const lowDose = calculatePatientDose(patientWeight, drugRoute.LowDose, drugRoute.MaxDose)
  const lowVolume = calculateVolumeOnly(
    lowDose.dose,
    drugRoute.Concentration,
    drugRoute.PtDose_Volume_Units,
    drugRoute.Concentration_Units
  )

  return (
    <View>
      <Text style={styles.doseText}>
        {resusText.drugDosing.dose}{' '}
        {drugRoute.LowDose}{' '}
        {drugRoute.DoseUnits}
      </Text>
      <Text style={styles.subdoseText}>
        {resusText.drugDosing.patientDose}{' '}
        <Text style={styles.blueText}>
          {lowDose.dose}
          {drugRoute.PtDose_Mass_Units}
          {lowDose.max ? ' (Max)' : ''}
        </Text>
      </Text>
      {drugRoute.PtDose_Volume_Units && (
        <Text style={styles.subdoseText}>
          {resusText.drugDosing.patientVolume}{' '}
          <Text style={styles.blueText}>
            {lowVolume}
            {lowDose.max ? ' (Max)' : ''}
          </Text>
        </Text>
      )}
    </View>
  )
})

export default SingleDose;
