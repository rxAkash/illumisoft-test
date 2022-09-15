export const TREATMENT_NO_ALLERGY = {
  treatment: 'Amoxicillin',
  duration: ['Treatment Duration: 10 days\n(shorter courses may be considered in patients >2 years of age with non-severe symptoms)'],
  description: 'First Line',
  additionalTreatment: 'Consider adding topical therapy if otorrhea is present',
  alternateTreatment: undefined,
  alternateDuration: undefined,
  expanded: [
    {
      medicine: 'Amoxicillin',
      dose: '40-50 mg/kg/dose PO Q12H',
      max: 'Max 4 grams/day',
    },
  ],
  alternative: [
    {
      infoDetail: ' in patients who cannot tolerate oral medications',
      medicine: 'Ceftriaxone',
      dose: '50 mg/kg/dose IV/IM Q24H',
      max: 'Max 1 gram/day',
      duration: 'Treatment Duration: 1-3 days',
    },
    {
      subtitle: 'Topical Therapy:',
      medicine: 'Ciprofloxacin-Dexamethasone',
      dose: '4 drops in affected ear Q12H',
      duration: 'Treatment Duration: 7 days',
    },
    {
      medicine: 'Ofloxacin',
      dose: '5 drops in affected ear Q12H',
      duration: 'Treatment Duration: 10 days',
      notes: ['Shorter courses of 5-7 days may be considered in patients > 2 years of age with non-severe symptoms.'],
    },
  ],
}