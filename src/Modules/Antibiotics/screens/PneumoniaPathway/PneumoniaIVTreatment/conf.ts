export const IV_TREATMENT = {
  treatment: 'Ampicillin',
  duration: ['Treatment Duration: 7-10 days', '(Exception Azithromycin 5 days)'],
  description: 'First Line',
  expanded: [
    {
      medicine: 'Ampicillin',
      dose: '50 - 75 mg/kg/dose IV Q6H',
      max: 'Max 8000 mg/day',
    },
    {
      subtitle: 'If an atypical pathogen (i.e., Chlamydophila pneumoniae, Bordetella pertussis, Mycoplasma pneumoniae) is suspected consider adding:',
      medicine: 'Azithromycin',
      dose: '10 mg/kg on day 1 (Max 500 mg/dose)',
      max: '5 mg/kg PO Q24H on days 2-5 (Max 250 mg/dose)'
    },
  ],
  alternative: [
    {
      infoDetail: ' for patients who are not fully immunized',
      medicine: 'Ampicillin-Sulbactam',
      dose: '50 – 75 mg/kg/dose ampicillin component IV Q6H',
      max: 'Max 8000 mg ampicillin component/day',
      notes: [
        'Assess whether the patient has had 2 or more doses of the H. influenzae type B (HiB) vaccine and consider the risk for invasive H. influenzae B disease.',
      ]
    },
    {
      medicine: 'Ceftriaxone',
      dose: '50-75 mg/kg/dose IV Q24H',
      max: 'Max 2000 mg/day',
      notes: [
        'Assess whether the patient has had 2 or more doses of the H. influenzae type B (HiB) vaccine and consider the risk for invasive H. influenzae B disease.',
      ]
    },
    {
      subtitle: 'If community acquired methicillin-resistant Staphylococcus aureus (CA-MRSA) is suspected:',
      medicine: 'Clindamycin',
      dose: '10 mg/kg/dose IV Q6H\nOR 13mg/kg/dose IV Q8H',
      max: 'Max 1800 mg/day',
      notes: [
        'If CA-MRSA is suspected and no or a small effusion, substitute clindamycin or vancomycin for Ampicillin. If CA-MRSA is suspected and a moderate or large effusion add clindamycin or vancomycin. Vancomycin is preferred in ill appearing children with systemic signs. If vancomycin is chosen, vancomycin monitoring should occur. Consider Q8H dosing of vancomycin in adolescents ≥16 years old (or adult size).​',
      ]
    },
    {
      medicine: 'Vancomycin',
      dose: '15 mg/kg/dose IV Q6-8H',
    },
  ],
}