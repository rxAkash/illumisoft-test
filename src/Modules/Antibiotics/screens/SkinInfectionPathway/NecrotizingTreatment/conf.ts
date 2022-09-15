export const NECROTIZING_TREATMENT = {
  treatment:
    'Common regimens include:\nCarbapenem OR β-lactam/β-lactamase inhibitor PLUS Clindamycin PLUS Vancomycin',
  expanded: [
    {
      medicine: 'Meropenem',
      dose: '20 mg/kg/dose IV Q8H',
      max: 'Max 3000 mg/day',
    },
    {
      medicine: 'Piperacillin-Tazobactam',
      dose: '60 - 75 mg/kg/dose piperacillin component IV Q6H',
      max: 'Max 12 grams piperacillin component/day',
    },
    {
      medicine: 'Clindamycin',
      dose: '10 mg/kg/dose IV Q6H',
      max: 'Max 2400 mg/day',
    },
    {
      medicine: 'Vancomycin',
      dose: '15-20 mg/kg/dose IV Q6-8H',
      notes: ['Consider Q8H dosing in adolescents 16 years old (or adult size).'],
    },
  ],
}