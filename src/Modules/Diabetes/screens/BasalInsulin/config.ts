import { DrugDosingAdministrationKeys, DrugDosingRouteColors } from "Modules/Diabetes/components/DrugCard/config";
import { AGE_OPTIONS } from 'Modules/Diabetes/config/dkaTreament';

export const getBasalInsulinConfig = (weight: string, age: string) => {
  const patientWeight = parseFloat(weight);
  return {
    treatmentTitle: 'Basal Insulin Glargine',
    recommendationText: 'Administer SQ X1 now',
    administrationType: DrugDosingAdministrationKeys.SUBQ,
    administrationTypeColor: DrugDosingRouteColors[DrugDosingAdministrationKeys.SUBQ].color,
    suggestedDose: calculateSuggestedDose(patientWeight, age),
    units: 'units',
    comments: [
      {
        text: 'Basal insulin is given to aid in transition of insulin drip. ',
      },
      {
        text: 'If glargine is unavailable, recommend speaking with endocrinologist for dosing recommendations.',
      }
    ],
  };
}

const ageBasedConstantDict = {
  [AGE_OPTIONS[0].value]: 0.2,
  [AGE_OPTIONS[1].value]: 0.2,
  [AGE_OPTIONS[2].value]: 0.3,
  [AGE_OPTIONS[3].value]: 0.4,
  [AGE_OPTIONS[4].value]: 0.5,
};

function calculateSuggestedDose(weight: number, age: string): number {
  const ageBasedConstant = ageBasedConstantDict[age];

  return Math.round(ageBasedConstant * weight);
}