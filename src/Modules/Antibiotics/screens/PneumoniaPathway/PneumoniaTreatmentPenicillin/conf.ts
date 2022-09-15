export const MILD_TREATMENT = {
  description: 'Mild to Moderate Penicillin Allergy\n(e.g. Rashes Including Hives)',
  treatment: 'Cephalosporin',
  duration: ['Treatment Duration: 5-7 days​'],
  expanded: [
    {
      medicine: 'Cefuroxime (if able to swallow tablets)',
      dose: '250 mg PO Q12H',
      max: 'Max 500 mg/day',
      notes: ['Consider expert consultation to discuss penicillin allergy testing and challenging.​'],

    },
    {
      medicine: 'Cefpodoxime',
      dose: '5 mg/kg/dose PO Q12H',
      max: 'Max 400 mg/day',
      notes: ['Consider expert consultation to discuss penicillin allergy testing and challenging.​'],

    },
    {
      medicine: 'Cefprozil',
      dose: '15 mg/kg/dose PO Q12H',
      max: 'Max 1000 mg/day',
      notes: ['Consider expert consultation to discuss penicillin allergy testing and challenging.​'],
    },
  ],
}

export const SEVERE_TREATMENT = {
  shouldShowTreatmentHeader: false,
  shouldShowTreatmentHeaderSeparator: false,
  expanded: [
    {
      medicine: 'Clindamycin',
      dose: '10 mg/kg/dose PO Q8H',
      max: 'Max 1800 mg/day',
      duration: 'Treatment Duration: 5-7 days',
      notes: ['Consider expert consultation to discuss penicillin allergy testing and challenging.​'],
      
    },
  ],
}

export const MILD_EFFUSION_TEATMENT = {
  description: 'Mild to Moderate Penicillin Allergy\n(e.g. Rashes Including Hives)',
  treatment: 'Cephalosporin',
  duration: ['Treatment Duration: 7-10 days\nException Azithromycin 5 days'],
  expanded: [
    {
      medicine: 'Ceftriaxone',
      dose: '50-75 mg/kg/dose IV Q24H',
      max: 'Max 2 grams/dose',
      notes: [
        'Consider expert consultation to discuss penicillin allergy testing and challenging.',
      ],
    },
    {
      subtitle: 'If an atypical pathogen (i.e., Chlamydophila pneumoniae, Bordetella pertussis, Mycoplasma pneumoniae) is suspected consider adding:',
      medicine: 'Azithromycin',
      dose: '10 mg/kg on day 1 (Max 500 mg/dose)',
      max: '5 mg/kg PO Q24H on days 2-5 (Max 250 mg/dose)',
      notes: [
        'Consider expert consultation to discuss penicillin allergy testing and challenging.',
      ],
    },
  ],
}

export const SEVERE_EFFUSION_TREATMENT = {
  treatment: 'Clindamycin or Levofloxacin',
  duration: ['Treatment Duration: 7-10 days'],
  expanded: [
    {
      medicine: 'Clindamycin',
      dose: '10 – 13.3 mg/kg/dose IV Q8H',
      max: 'Max 1800 mg/day',
      notes: [
        'Consider expert consultation to discuss penicillin allergy testing and challenging.​',
      ],
    },
    {
      medicine: 'Levofloxacin',
      dose: 'Age 6 months to < 5 years: 10 mg/kg/dose PO Q12H\nAge ≥ 5 years: 10 mg/kg/dose PO Q24H',
      max: 'Max 500 mg/day',
      duration: 'Treatment Duration: 10 days',
      notes: [
        'Consider expert consultation to discuss penicillin allergy testing and challenging.​',
        'Given FDA warnings associated with fluoroquinolones, use should be restricted to situations whenever no safe or effective substitute is available (e.g. multidrug resistance, anaphylaxis to first line agents, etc.).​',
      ],
    },
  ],
}