export const ABSCESS_TREATMENT = {
  treatment: 'Incision and drainage with culture obtainment.',
  description: 'First Line',
  secondary: {
    title: 'Antibiotic Considerations',
    medicine: 'Clindamycin OR Trimethoprim-Sulfamethoxazole',
    duration: 'Treatment Duration: 5-7 days',
  },
  expanded: [
    {
      subtitle: 'Antibiotic Considerations:',
      medicine: 'Clindamycin',
      dose: '10 mg/kg/dose PO Q8H',
      max: 'Max 1800 mg/day',
    },
    {
      medicine: 'Trimethoprim-Sulfamethoxazole (TMP-SMX)',
      dose: '3 - 6 mg/kg/dose TMP component PO Q12H',
      max: 'Max 320 mg TMP/day',
    },
  ],
  alternative: [
    {
      infoDetail: ' in patients who are unable to tolerate oral medications',
      medicine: 'Clindamycin',
      dose: '10 mg/kg/dose IV Q6H',
      max: 'Max 1800 mg/day',
    },
  ],
}