export const MILD_ALLERGY_TREATMENT = {
  treatment: 'Cephalosporin ± Clindamycin',
  duration: ['Treatment Duration: 10 days'],
  alternateTreatment: undefined,
  alternateDuration: undefined,
  expanded: [
    {
      medicine: 'Cefpodoxime',
      dose: '5 mg/kg/dose PO Q12H',
      max: 'Max 400 mg/day',
      notes: [
        'Consider expert consultation to discuss penicillin allergy testing and challenging.',
        'Given FDA warnings associated with fluoroquinolones, use should be restricted to situations whenever no safe or effective substitute is available (e.g. multidrug resistance, anaphylaxis to first line agents, etc.).'

      ],
    },
    {
      medicine: 'Cefuroxime (if able to swallow tablets)',
      dose: '250 mg PO Q12H ',
      max: 'Max 500 mg/day',
      notes: [
        'Consider expert consultation to discuss penicillin allergy testing and challenging.',
        'Given FDA warnings associated with fluoroquinolones, use should be restricted to situations whenever no safe or effective substitute is available (e.g. multidrug resistance, anaphylaxis to first line agents, etc.).'

      ],
    },
    {
      medicine: 'Cefdinir',
      dose: '7 mg/kg/dose PO Q12H',
      max: 'Max 600 mg/day',
      notes: [
        'Consider expert consultation to discuss penicillin allergy testing and challenging.',
        'Given FDA warnings associated with fluoroquinolones, use should be restricted to situations whenever no safe or effective substitute is available (e.g. multidrug resistance, anaphylaxis to first line agents, etc.).'
      ],
    },
    {
      medicine: 'Consider adding if moderate to severe disease:\nClindamycin​',
      dose: '10 mg/kg/dose PO Q8H​',
      max: 'Max 900 mg/day​',
      notes: [
        'Consider expert consultation to discuss penicillin allergy testing and challenging.',
        'Given FDA warnings associated with fluoroquinolones, use should be restricted to situations whenever no safe or effective substitute is available (e.g. multidrug resistance, anaphylaxis to first line agents, etc.).'
      ]
    },
  ],
}
  
export const SEVERE_ALLERGY_TREATMENT = {
  alternateTreatment: undefined,
  alternateDuration: undefined,
  expanded: [
    {
      medicine: 'Levofloxacin',
      dose: `Age 6 months to ${'\u003C'} 5 years:\n10 mg/kg/dose PO Q12H`,
      notes: ['Consider expert consultation to discuss penicillin allergy testing and challenging.']
    },
    {
      medicine: 'Levofloxacin',
      dose: `Age ${'\u2265'} 5 years:\n10 mg/kg/dose PO Q24H`,
      max: 'Max 500 mg/day',
      duration: 'Treatment Duration: 10 days',
      notes: ['Consider expert consultation to discuss penicillin allergy testing and challenging.']

    }
  ],
}