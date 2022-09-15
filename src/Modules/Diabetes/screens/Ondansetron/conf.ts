import { DOSAGE_TYPE, DrugDosingAdministrationKeys, DrugDosingRouteColors } from "Modules/Diabetes/components/DrugCard/config";

enum OndansetronIVDose {
  LOW = 0.15,
  MODERATE = 0.3,
}

export const getOndansetronIVConf = (weight: string) => {
  const patientWeight = parseFloat(weight);

  return {
    treatmentTitle: 'Ondansetron',
    recommendationText: 'Dosing for Nausea/Vomiting*',
    administrationType: DrugDosingAdministrationKeys.IV,
    administrationTypeColor: DrugDosingRouteColors[DrugDosingAdministrationKeys.IV].color,
    suggestedLowDose: calculateSuggestedIVDose(OndansetronIVDose.LOW, patientWeight),
    suggestedModerateDose: calculateSuggestedIVDose(OndansetronIVDose.MODERATE, patientWeight),
    singleDose: true,
    max: 8,
    units: 'mg',
    dosageType: DOSAGE_TYPE.LOW_MOD_HIGH,
    comments: [
      {
        text: '* Please note that Ondansetron dosing is not required for treatment, but should be considered for patients with intractable vomiting or nausea.',
      }
    ],
  };
}

export const getOndansetronPoOralConf = (weight: string) => {
  const patientWeight = parseFloat(weight);

  return {
    treatmentTitle: 'Ondansetron',
    recommendationText: 'Dosing for Nausea/Vomiting*',
    administrationType: DrugDosingAdministrationKeys.PO_ORAL,
    administrationTypeColor: DrugDosingRouteColors[DrugDosingAdministrationKeys.PO_ORAL].color,
    suggestedDose: calculateSuggestedOralDose(patientWeight),
    singleDose: true,
    max: 8,
    units: 'mg',
    comments: [
      {
        text: '* Please note that Ondansetron dosing is not required for treatment, but should be considered for patients with intractable vomiting or nausea.',
      }
    ],
  };
}

function calculateSuggestedIVDose(
  dosageConstant: OndansetronIVDose,
  weight: number
): number {
  const dose = Math.min(dosageConstant * weight, 8);
  // Max dose of 8mg
  return Math.round(100 * dose) / 100;
}

function calculateSuggestedOralDose(weight: number) {
  if (weight < 10) {
    return undefined;
  } else if (weight >= 10 && weight < 15) {
    return 2;
  } else if (weight >= 15 && weight < 30) {
    return 4;
  } else if (weight >= 30) {
    return 8;
  }
}