export const MILD_PENICILLIN_ALLERGY_TREATMENT = {
  description: 'Mild to Moderate Penicillin Allergy\n(e.g. Rashes Including Hives)',
  treatment: 'Cephalosporin',
  duration: ['Treatment Duration: 10 days\n(shorter courses may be considered in patients >2 years of age with non-severe symptoms)'],
  additionalTreatment: 'Consider adding topical therapy if otorrhea is present',
  alternateTreatment: undefined,
  alternateDuration: undefined,
  expanded: [
    {
      medicine: 'Cefpodoxime',
      dose: '5 mg/kg/dose PO Q12H',
      max: 'Max 400 mg/day',
      notes: [
        'Consider expert consultation to discuss penicillin allergy testing and challenging.',
      ],
    },
    {
      medicine: 'Cefuroxime (if able to swallow tablets)',
      dose: '250 mg PO Q12H ',
      max: 'Max 500 mg/day',
      notes: [
        'Consider expert consultation to discuss penicillin allergy testing and challenging.',
      ],
    },
    {
      medicine: 'Cefdinir',
      dose: '7 mg/kg/dose PO Q12H',
      max: 'Max 600 mg/day',
      notes: [
        'Consider expert consultation to discuss penicillin allergy testing and challenging.',
      ],
    },
    {
      subtitle: 'Alternative in patients who can not tolerate oral medications:',
      medicine: 'Ceftriaxone',
      dose: '50 mg/kg/dose IM/IV q24H',
      max: 'Max 1000 mg/day',
      notes: [
        'Consider expert consultation to discuss penicillin allergy testing and challenging.',
      ],
    },
    {
      subtitle: 'Topical Therapy:',
      medicine: 'Ciprofloxacin-Dexamethasone',
      dose: '4 drops in affected ear Q12H',
      duration: 'Treatment Duration: 7 days'
    },
    {
      medicine: 'Ofloxacin',
      dose: '5 drops in affected ear Q12H',
      duration: 'Treatment Duration: 10 days'
    },
  ],
}

export const SEVERE_PENICILLIN_ALLERGY_TREATMENT = {
  description: 'Severe Penicillin or Cephalosporin Allergy',
  treatment: 'Clindamycin',
  duration: ['Treatment Duration: 10 days\n(shorter courses may be considered in patients >2 years of age with non-severe symptoms)'],
  additionalTreatment: 'Consider adding topical therapy if otorrhea is present',
  alternateTreatment: undefined,
  alternateDuration: undefined,
  expanded: [
    {
      medicine: 'Clindamycin',
      dose: '10 mg/kg/dose PO Q8H',
      max: 'Max 1800 mg/day',
      notes: [
        'Consider expert consultation to discuss penicillin allergy testing and challenging.',
      ],
    },
    {
      subtitle: 'Topical Therapy:',
      medicine: 'Ciprofloxacin-Dexamethasone',
      dose: '4 drops in affected ear Q12H',
      duration: 'Treatment Duration: 7 days'
    },
    {
      medicine: 'Ofloxacin',
      dose: '5 drops in affected ear Q12H',
      duration: 'Treatment Duration: 10 days'
    },
  ],
}