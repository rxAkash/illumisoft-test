export const FIRST_LINE = {
  shouldShowFirstLineHeader: false,
  shouldShowTreatmentHeader: false,
  shouldShowTreatmentHeaderSeparator: false,
  expanded: [
    {
      medicine: 'Amoxicillin-Clavulanate',
      dose: '20 - 22.5 mg/kg/dose of amoxicillin component PO Q12H',
      max: 'Max 1750 mg of amoxicillin component/day',
      duration: ['Prophylaxis Duration: 3 days\nTreatment Duration: 5-10 days'],
      notes: [
        'Prophylaxis should be considered for moderate to severe wounds with edema or crush injury, puncture wounds including wounds that may have penetrated the periosteum or joint capsule, or wounds to the hand or face.',
      ],
    },
  ],
}

export const SEVERE_PENICILLIN_ALLERGY_TREATMENT = {
  treatment: 'Clindamycin PLUS Trimethoprim-Sulfamethoxazole OR Doxycycline',
  duration: ['Prophylaxis Duration: 3 days\nTreatment Duration: 5-10 days'],
  expanded: [
    {
      medicine: 'Clindamycin',
      dose: '10 mg/kg/dose PO Q8H',
      max: 'Max 1350 mg/day',
      notes: [
        'Prophylaxis should be considered for moderate to severe wounds with edema or crush injury, puncture wounds including wounds that may have penetrated the periosteum or joint capsule, or wounds to the hand or face.',
        'Consider expert consultation to discuss penicillin allergy testing and challenging.',
      ],
    },
    {
      medicine: 'Trimethoprim-Sulfamethoxazole (TMP-SMX)',
      dose: '3 - 6 mg/kg/dose TMP component PO Q12H',
      max: 'Max 320 mg TMP/day',
      notes: [
        'Prophylaxis should be considered for moderate to severe wounds with edema or crush injury, puncture wounds including wounds that may have penetrated the periosteum or joint capsule, or wounds to the hand or face.',
        'Consider expert consultation to discuss penicillin allergy testing and challenging.',
      ],
    },
    {
      medicine: 'Doxycycline',
      dose: '2 mg/kg/dose PO Q12H',
      max: 'Max 200 mg/day',
      notes: [
        'Prophylaxis should be considered for moderate to severe wounds with edema or crush injury, puncture wounds including wounds that may have penetrated the periosteum or joint capsule, or wounds to the hand or face.',
        'Consider expert consultation to discuss penicillin allergy testing and challenging.',
        'Doxycycline should be used with caution in patients < 8 years of age, although recent data suggests minimal risk when used for durations < 21 days (AAP Redbook 2018).',
      ],
    },
  ],
}