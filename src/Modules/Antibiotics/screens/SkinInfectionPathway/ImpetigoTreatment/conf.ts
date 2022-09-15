export const FIRST_LINE_TREATMENT = {
  shouldShowTreatmentHeader: false,
  shouldShowTreatmentHeaderSeparator: false,
  shouldShowFirstLineHeader: false,
  expanded: [
    {
      medicine: 'Cephalexin',
      dose: '9-17 mg/kg/dose PO Q8H',
      max: 'Max 750 mg/day',
      duration: 'Treatment Duration: 5-7 days',
      notes: [
        'In mild cases with few lesions, topical therapy alone with mupirocin three times a day or retapulmin twice a day for 5 days may be considered. Consider starting clindamycin in patients with a personal of family history of methicillin-resistant Staphylococcus aureus (MRSA).',
      ],
    },
  ],
  alternative: [
    {
      medicine: 'Amoxicillin-Clavulanate',
      dose: '12.5 mg/kg/dose amoxicillin component PO Q12H',
      max: 'Max 1750 mg amoxicillin component/day',
      notes: [
        'In mild cases with few lesions, topical therapy alone with mupirocin three times a day or retapulmin twice a day for 5 days may be considered. Consider starting clindamycin in patients with a personal of family history of methicillin-resistant Staphylococcus aureus (MRSA).',
      ],
    },
  ],
}

export const SEVERE_PENICILLIN_ALLERGY_TREATMENT =  {
  treatment: 'Clindamycin OR Trimethoprim-Sulfamethoxazole',
  duration: ['Treatment Duration: 5-7 days'],
  expanded: [
    {
      medicine: 'Clindamycin',
      dose: '7 mg/kg PO Q8H',
      max: 'Max 1200 mg/day',
      notes: [
        'In mild cases with few lesions, topical therapy alone with mupirocin three times a day or retapulmin twice a day for 5 days may be considered. Consider starting clindamycin in patients with a personal of family history of methicillin-resistant Staphylococcus aureus (MRSA).'
      ]
    },
    {
      medicine: 'Trimethoprim-Sulfamethoxazole (TMP-SMX)',
      dose: '3 - 6 mg/kg/dose TMP component PO Q12H',
      max: 'Max 320 mg TMP/day',
      notes: [
        'In mild cases with few lesions, topical therapy alone with mupirocin three times a day or retapulmin twice a day for 5 days may be considered. Consider starting clindamycin in patients with a personal of family history of methicillin-resistant Staphylococcus aureus (MRSA).',
        'TMP-SMX may not cover Group A Strep.'
      ]
    },
  ],
}