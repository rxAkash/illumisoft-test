export const TREATMENT = {
  treatment: 'Amoxicillin-Clavulanate',
  duration: ['Treatment Duration: 10 days\n(shorter courses may be considered in patients >2 years of age with non-severe symptoms)'],
  additionalTreatment: 'Consider adding topical therapy if otorrhea is present',
  alternateTreatment: undefined,
  alternateDuration: undefined,
  description: 'First Line',
  expanded: [
    {
      subtitle: undefined,
      medicine: 'Amoxicillin-Clavulanate',
      dose: '40-50 mg/kg/dose amoxicillin component PO Q12H',
      max: 'Max 4 grams amoxicillin component/day',
      duration: undefined,
      notes: [
        'Amoxicillin-Clavulanate ES (600mg/5mL) is the preferred suspension. For pills, use 1000mg XR tablets due to risk of developing diarrhea with higher clavulanate dosages.',
      ],
    },
    {
      subtitle: 'Alternative in patients who will not tolerate PO:',
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
      notes: [
        'Shorter courses of 5-7 days may be considered in patients >2 years of age with non-severe symptoms.',
      ],
    },
  ],
}