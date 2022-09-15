import React from 'react';
import { DOSAGE_TYPE, DrugDosingAdministrationKeys, DrugDosingRouteColors } from "Modules/Diabetes/components/DrugCard/config"
import { Text } from 'react-native';
import styles from './styles';

export const BEDSIDE_MEASURES = [
  {
    text: 'Elevated head of bed'
  },
  {
    text: 'Reduce IV fluid rate by one-third'
  }
]

export const SELECT_OPTIONS = [{
  title: 'Mannitol',
  value: 'Mannitol'
}, {
  title: 'Hypertonic (3%) Saline',
  value: 'Hypertonic (3%) Saline'
}]

export const getMannitolConfig = (weight: string) => {
  const patientWeight = parseFloat(weight);

  const mannitolLowDose = calculateMannitolSuggestedDose(LowModHigh.LOW, patientWeight);
  const mannitolModDose = calculateMannitolSuggestedDose(LowModHigh.MODERATE, patientWeight);
  const mannitolHighDose = calculateMannitolSuggestedDose(LowModHigh.HIGH, patientWeight);

  return {
    treatmentTitle: 'Mannitol',
    administrationConcentration: '0.2g/mL(200mg/mL)',
    administrationType: DrugDosingAdministrationKeys.IV,
    administrationTypeColor: DrugDosingRouteColors[DrugDosingAdministrationKeys.IV].color,
    suggestedLowDose: mannitolLowDose,
    suggestedModerateDose: mannitolModDose,
    suggestedHighDose: mannitolHighDose,
    suggestLowVolume: calculateDoseVolumesFromDoseMasses(CeTreatmentType.MANNITOL, mannitolLowDose),
    suggestModerateVolume: calculateDoseVolumesFromDoseMasses(CeTreatmentType.MANNITOL, mannitolModDose),
    suggestHighVolume: calculateDoseVolumesFromDoseMasses(CeTreatmentType.MANNITOL, mannitolHighDose),
    recommendationText: 'Administer over 20 minutes',
    units: 'grams',
    dosageType: DOSAGE_TYPE.LOW_MOD_HIGH,
    comments: [
      {
        text: <Text style={styles.warningText}>NOT recommended for infants {'<'} 1 month</Text>
      },
      {
        text: 'Unless otherwise noted, start with low dose and titrate to response'
      },
      {
        text: <Text><Text style={styles.bold}>Vesicant; Avoid extravasation</Text> (central line preferred if available)</Text>
      },
      {
        text: 'Infuse no faster than 5 mL/kg/hour',
      },
      {
        text: 'For emergent correction of hypnoatremic seizure or increased intracranial pressure',
      }
    ],
    hasWarning: true,
  }
}

export const getHypertonicSalineConfig = (weight: string) => {
  const patientWeight = parseFloat(weight);

  const hypertonicSalineLowDose = calculateHypertonicSalineSuggestedDose(LowModHigh.LOW, patientWeight);
  const hypertonicSalineModDose = calculateHypertonicSalineSuggestedDose(LowModHigh.MODERATE, patientWeight);
  const hypertonicSalineHighDose = calculateHypertonicSalineSuggestedDose(LowModHigh.HIGH, patientWeight);

  return {
    treatmentTitle: 'Hypertonic (3%) Saline',
    administrationConcentration: '3%',
    administrationType: DrugDosingAdministrationKeys.IV,
    administrationTypeColor: DrugDosingRouteColors[DrugDosingAdministrationKeys.IV].color,
    recommendationText: 'Administer over 30 minutes',
    suggestedLowDose: hypertonicSalineLowDose,
    suggestedModerateDose: hypertonicSalineModDose,
    suggestedHighDose: hypertonicSalineHighDose,
    suggestLowVolume: calculateDoseVolumesFromDoseMasses(CeTreatmentType.HYPERTONIC_SALINE, hypertonicSalineLowDose, 500),
    suggestModerateVolume: calculateDoseVolumesFromDoseMasses(CeTreatmentType.HYPERTONIC_SALINE, hypertonicSalineModDose, 500),
    suggestHighVolume: calculateDoseVolumesFromDoseMasses(CeTreatmentType.HYPERTONIC_SALINE, hypertonicSalineHighDose, 500),
    maxDose: 500,
    dosageType: DOSAGE_TYPE.LOW_MOD_HIGH,
    units: 'mL',
    comments: [
      {
        text: <Text style={styles.bold}><Text style={styles.warningText}>Do NOT exceed 150 mL per dose for hyponatremic seizure</Text> / Do Not Exceed 500 mL per dose for cerebral edema</Text>
      },
      {
        text: <Text style={styles.warningText}>NOT recommended for infants {'<'} 1 month</Text>
      },
      {
        text: 'Unless otherwise noted, start with low dose and titrate to response',
      },
      {
        text: <Text><Text style={styles.bold}>Vesicant; Avoid extravasation</Text> (central line preferred if available)</Text>
      },
      {
        text: 'Infuse no faster than 5 mL/kg/hour',
      },
      {
        text: 'For emergant correction of hyponatremic seizure or increased intracranial pressure'
      }
    ],
    hasWarning: true,
  }
}

function calculateDoseVolumesFromDoseMasses(treatmentType: CeTreatmentType, doseSize: string, maxDose?: number): string {
  const doseSizeNum = parseFloat(doseSize);
  if(treatmentType === CeTreatmentType.MANNITOL) {
    return roundToTwo(doseSizeNum / 0.2).toString();
  }
  if(treatmentType === CeTreatmentType.HYPERTONIC_SALINE && maxDose) {
    return Math.min(roundToTwo(doseSizeNum / 1), maxDose).toString();
  }
  return '';
}

function calculateMannitolSuggestedDose(doseSize: LowModHigh, weight: number): string {
  const dose = ((0.5 * weight * doseSize * 10) / 10)
  if (dose % 1 === 0) {
    return Number(dose).toString();
  }
  return dose.toString();
}

function calculateHypertonicSalineSuggestedDose(
  doseSize: LowModHigh,
  weight: number
) {
  return Math.min(5 * weight * doseSize, 500).toString();
}

enum LowModHigh {
  LOW = 1,
  MODERATE = 1.5,
  HIGH = 2,
}

enum CeTreatmentType {
  MANNITOL = 'Mannitol',
  HYPERTONIC_SALINE = 'HypertonicSaline',
}

function roundToTwo(num: number): number {
  const decimals = 2;
  return Number(Math.round(Number(num + 'e' + decimals)) + 'e-' + decimals);
}