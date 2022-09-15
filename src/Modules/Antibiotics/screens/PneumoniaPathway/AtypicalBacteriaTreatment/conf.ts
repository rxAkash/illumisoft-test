export const ATYPICAL_TREATMENT =  {
  shouldShowTreatmentHeader: false,
  shouldShowTreatmentHeaderSeparator: false,
  shouldShowFirstLineHeader: false,
  expanded: [
    {
      medicine: 'Azithromycin',
      dose: '10 mg/kg on day 1 (Max 500 mg/day)',
      max: '5 mg/kg PO Q24H on days 2-5 (Max 250 mg/day)',
      duration: 'Treatment Duration: 5 days',
    },
  ],
  alternativeSubHeader: 'Treatment Duration: 5-7 days',
  alternative: [
    {
      medicine: 'Clarithromycin',
      dose: '7.5 mg/kg/dose PO Q12H​',
      max: 'Max 1000 mg/day​',
    },
    {
      medicine: 'Erythromycin​',
      dose: '10 mg/kg/dose PO Q6H​',
      max: 'Max 2000 mg/day​',
    },
    {
      medicine: 'Doxycycline',
      dose: '2 mg/kg/dose PO Q12H​',
      max: 'Max 200 mg/day​',
      notes: [
        'Doxycycline should be used with caution in patients <8 years of age, although recent data suggests minimal risk when used for durations <21 days (AAP Redbook 2018).​',
      ],
    },
    {
      medicine: 'Levofloxacin (Age <5 years)',
      dose: '10 mg/kg/dose PO Q12H',
      notes: [
        'Given FDA warnings associated with fluoroquinolones, use should be restricted to situations whenever no safe or effective substitute is available (e.g. multidrug resistance, anaphylaxis to first line agents, etc.).',
      ],
    },
    {
      medicine: 'Levofloxacin (Age ≥5 years):',
      dose: '10 mg/kg/dose PO Q24H',
      max: 'Max 500 mg/day',
      notes: [
        'Given FDA warnings associated with fluoroquinolones, use should be restricted to situations whenever no safe or effective substitute is available (e.g. multidrug resistance, anaphylaxis to first line agents, etc.).',
      ],
    },
    {
      medicine: 'Moxifloxacin',
      dose: '400 mg PO Q24H',
      max: 'Max 400 mg/day',
      notes: [
        'Given FDA warnings associated with fluoroquinolones, use should be restricted to situations whenever no safe or effective substitute is available (e.g. multidrug resistance, anaphylaxis to first line agents, etc.).',
      ],
    },
  ],
}