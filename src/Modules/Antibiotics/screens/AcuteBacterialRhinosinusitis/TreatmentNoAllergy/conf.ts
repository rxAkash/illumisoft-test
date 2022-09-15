export const MILD_NO_ALLERGY_TREATMENT = {
    alternateTreatment: undefined,
    alternateDuration: undefined,
    expanded: [
      {
        medicine: 'Amoxicillin',
        dose: '40-50 mg/kg/dose PO Q12H',
        max: 'Max 4 grams/day',
        duration: ['Treatment Duration: 10 days']
      },
    ],
  }
  
export const SEVERE_NO_ALLERGY_TREATMENT = {
    alternateTreatment: undefined,
    alternateDuration: undefined,
    expanded: [
      {
        medicine: 'Amoxicillin-Clavulanate',
        dose: '40-50 mg/kg amoxicillin component PO Q12H',
        max: 'Max 4 grams of amoxicillin component/day',
        duration: ['Treatment Duration: 10 days'],
        notes: [
            'Amoxicillin-Clavulanate ES (600mg/5mL) is the preferred suspension. For pills, use 1000mg XR tablets due to risk of developing diarrhea with higher clavulanate dosages.'
        ],
      },
      
    ],
  }