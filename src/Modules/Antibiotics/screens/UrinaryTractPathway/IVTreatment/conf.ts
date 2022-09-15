export const FIRST_LINE_CONF = {
  shouldShowTreatmentHeader: false,
  shouldShowTreatmentHeaderSeparator: false,
  shouldShowFirstLineHeader: false,
  expanded: [
    {
      medicine: 'Ceftriaxone',
      dose: '50 mg/kg/dose IV Q24H',
      max: 'Max 2 grams/day',
      duration: ['Treatment Duration: 10-14 days'],
      notes: [
        'Consider transition to oral antibiotics after 24-48 hours if clinical improvement seen.',
      ]
    },
  ],
  alternative: [
    {
      medicine: 'Gentamicin',
      dose: '5 mg/kg/dose IV Q24H',
      notes: [
        'Consider transition to oral antibiotics after 24-48 hours if clinical improvement seen.'
      ]
    },
  ],
}

export const SEVERE_ALLERGY_TREATMENT = {
  treatment: 'Gentamicin OR Ciprofloxacin',
  duration: ['Treatment Duration: See below'],
  expanded: [
    {
      medicine: 'Gentamicin',
      dose: '5 mg/kg/dose IV Q24H',
      duration: 'Treatment Duration: 10-14 days',
      notes: [
        'Consider transition to oral antibiotics after 24-48 hours if clinical improvement seen.'
      ],
    },
    {
      medicine: 'Ciprofloxacin',
      dose: '6 - 10 mg/kg/dose IV Q8H',
      max: 'Max 1200 mg/day',
      duration: 'Treatment Duration: 7 days',
      notes: [
        'Given FDA warnings associated with fluoroquinolones, use should be restricted to situations whenever no safe or effective substitute is available (e.g. multidrug resistance, anaphylaxis to first line agents, etc.).',
      ],
    },
  ],
}