export const FIRST_LINE_CONF = {
  shouldShowTreatmentHeader: false,
  shouldShowTreatmentHeaderSeparator: false,
  shouldShowFirstLineHeader: false,
  expanded: [
    {
      medicine: 'Cephalexin',
      dose: '12.5 - 25 mg/kg/dose PO Q12H',
      max: 'Max 1000 mg/day',
      duration: 'Treatment Duration: 10 days',
      notes: ['Consider expert consultation to discuss penicillin allergy testing and challenging.'],
    },
  ],
}

export const SEVERE_TREATMENT_CONF = {
  treatment: 'Clindamycin OR Azithromycin',
  duration: ['Treatment Duration: Clindamycin 10 days', 'Azithromycin 5 days'],
  expanded: [
    {
      medicine: 'Clindamycin',
      dose: '7 mg/kg/dose PO Q8H',
      max: 'Max 900 mg/day',
      notes: [
        'Consider expert consultation to discuss penicillin allergy testing and challenging.',
      ]
    },
    {
      medicine: 'Azithromycin',
      dose: '12 mg/kg/dose PO Q24H',
      max: 'Max 500 mg/day',
      notes: [
        'Consider expert consultation to discuss penicillin allergy testing and challenging.',
        'Azithromycin is not recommended unless patient has a severe allergy to penicillin and cephalosporins. Resistance is well known, and treatment failure may occur.',
      ],
    },
  ],
}