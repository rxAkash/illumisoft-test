export const FIRST_LINE_CONF = {
  shouldShowTreatmentHeader: false,
  shouldShowTreatmentHeaderSeparator: false,
  shouldShowFirstLineHeader: false,
  expanded: [
    {
      medicine: 'Cephalexin',
      dose: '17-25 mg/kg/dose PO Q8H',
      max: 'Max 1500 mg/day',
      duration: ['Treatment Duration:\nAdolescents 3-7 days, Children 5-7 days'],
      notes: [
        'Cefdinir should not be used for pediatric UTI management due to poor concentration in urine compared to adults.',
      ],
    },
  ],
  alternative: [
    {
      medicine: 'Cefixime',
      dose: '8 mg/kg/dose PO Q24H',
      max: 'Max 400 mg/day',
      notes: [
        'Cefdinir should not be used for pediatric UTI management due to poor concentration in urine compared to adults.',
      ],
    },
    {
      medicine: 'Amoxicillin-Clavulanate',
      dose: '10 - 13.3 mg/kg/dose amoxicillin component PO Q8H',
      max: 'Max 1500 mg amoxicillin component/day'
    },
  ],
}

export const SEVERE_ALLERGY_CONF = {
  treatment: 'Trimethoprim-Sulfamethoxazole OR Nitrofurantoin',
  duration: ['Treatment Duration:\nAdolescents 3-7 days, Children 5-7 days'],
  expanded: [
    {
      medicine: 'Trimethoprim-Sulfamethoxazole (TMP-SMX)',
      dose: '3-6 mg/kg/dose TMP component PO Q12H',
      max: 'Max 320 mg TMP/day',
    },
    {
      subtitle: 'Nitrofurantoin',
      medicine: '1) Macrocrystal (Macrodantin or Furadantin)',
      dose: '1.25-1.75 mg/kg/dose PO Q6H',
      max: 'Max 400 mg/day',
      notes: [
        'Consider expert consultation to discuss penicillin allergy testing and challenging.',
      ],
    },
    {
      medicine: '2) Macrocrystal monohydrate (Macrobid)',
      dose: '100 mg PO Q12H for ADOLESCENTS ONLY',
      max: 'Max 200 mg/day',
      notes: [
        'Consider expert consultation to discuss penicillin allergy testing and challenging.',
      ],
    },
  ],
}