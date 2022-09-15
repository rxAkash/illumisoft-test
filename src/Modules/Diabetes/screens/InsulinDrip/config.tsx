import { DrugDosingAdministrationKeys, DrugDosingRouteColors } from "Modules/Diabetes/components/DrugCard/config";

import React from 'react';
import { Text } from 'react-native';
import styles from '../../styles';

export const getInsulinDripConf = (weight: string) => {
  const patientWeight = parseFloat(weight);
  
  return {
    treatmentTitle: 'Insulin Drip',
    administrationType: DrugDosingAdministrationKeys.IV,
    administrationTypeColor: DrugDosingRouteColors[DrugDosingAdministrationKeys.IV].color,
    recommendationText: 'Target to keep BG between 150-250 mg/dL',
    nextButtonText: 'Next: Insulin Drip & IVF Titration',
    suggestedDose: calculateSuggestedDose(patientWeight),
    units: 'units/hr',
    comments: [
      {
        text: <Text>Do <Text style={styles.bold}>NOT</Text> administer a bolus of IV insulin.  Doing so increases the risk of cerebral edema</Text>
      },
      {
        text: 'Check POC blood glucose and titrate dextrose content and insulin infusion rate as needed.',
      },
      {
        text: 'Titration instructions are on following slides.',
      }
    ],
  };
};

function calculateSuggestedDose(weight: number): string {
  return (Math.round(0.1 * weight * 10) / 10).toFixed(1); // always return with one decimal
}