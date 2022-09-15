export const FIRST_LINE_CONF = {
  shouldShowTreatmentHeader: false,
  shouldShowTreatmentHeaderSeparator: false,
  shouldShowFirstLineHeader: false,
  expanded: [
    {
      medicine: 'Cephalexin',
      dose: '25-33 mg/kg/dose PO Q8H',
      max: 'Max 4000 mg/day',
      duration: ['Treatment Duration: 10-14 days']
    },
  ],
  alternative: [
    {
      medicine: 'Cefixime',
      dose: '8 mg/kg/dose PO Q24H',
      max: 'Max 400 mg/day'
    },
    {
      medicine: 'Amoxicillin-Clavulanate',
      dose: '13.3 mg/kg/dose amoxicillin component PO Q8H',
      max: 'Max 1500 mg amoxicillin component/day'
    },
  ],
}

export const SEVERE_ALLERGY_TREATMENT = {
  treatment: 'Trimethoprim-Sulfamethoxazole OR Ciprofloxacin',
  duration: ['Treatment Duration: See below'],
  expanded: [
    {
      medicine: 'Trimethoprim-Sulfamethoxazole (TMP-SMX)',
      dose: '3-6 mg/kg/dose TMP component PO Q12H',
      max: 'Max 320 mg TMP/day',
      duration: 'Treatment Duration: 10-14 days'
    },
    {
      medicine: 'Ciprofloxacin',
      dose: '10 - 20 mg/kg/dose PO Q12H',
      max: 'Max 1500 mg/day',
      duration: 'Treatment Duration: 7 days'
    },
  ],
}