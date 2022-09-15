export const FIRST_LINE = {
  shouldShowTreatmentHeader: false,
  shouldShowTreatmentHeaderSeparator: false,
  shouldShowFirstLineHeader: false,
  expanded: [
    {
      medicine: 'Cephalexin',
      dose: '10-17 mg/kg/dose PO Q8H',
      max: 'Max 1500 mg/day',
      duration: 'Treatment Duration: 5-7 days',
    },
  ],
}

export const SEVERE_PENICILLIN_TREATMENT = {
  treatment: 'Clindamycin OR Trimethoprim-Sulfamethoxazole',
  duration: ['Treatment Duration: 5-7 days'],
  expanded: [
    {
      medicine: 'Clindamycin',
      dose: '10 mg/kg/dose PO Q8H',
      max: 'Max 1350 mg/day',
      notes: [
        'Consider expert consultation to discuss penicillin allergy testing and challenging.',
        'Consider starting clindamycin in patients with a personal of family history of methicillin-resistant Staphylococcus aureus (MRSA).',
      ]
    },
    {
      medicine: 'Trimethoprim-Sulfamethoxazole (TMP-SMX)',
      dose: '3- 6 mg/kg/dose TMP component PO Q12H',
      max: 'Max 320 mg TMP/day',
      notes: [
        'Consider expert consultation to discuss penicillin allergy testing and challenging.',
        'Consider starting clindamycin in patients with a personal of family history of methicillin-resistant Staphylococcus aureus (MRSA).',
        'TMP-SMX may not cover Group A Strep.',
      ]
    },
  ],
}