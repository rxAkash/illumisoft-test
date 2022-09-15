import { MILD_ALLERGY_TREATMENT, SEVERE_ALLERGY_TREATMENT } from '../../src/Modules/Antibiotics/screens/AcuteBacterialRhinosinusitis/TreatmentAllergy/conf';
import { MILD_NO_ALLERGY_TREATMENT, SEVERE_NO_ALLERGY_TREATMENT } from '../../src/Modules/Antibiotics/screens/AcuteBacterialRhinosinusitis/TreatmentNoAllergy/conf';
import { TREATMENT_NO_ALLERGY } from '../../src/Modules/Antibiotics/screens/AcuteOtitisPathway/TreatmentNoAllergy/conf';
import { MILD_PENICILLIN_ALLERGY_TREATMENT as AO_MILD_Penicillin, SEVERE_PENICILLIN_ALLERGY_TREATMENT as AO_SEVERE_Penicillin } from '../../src/Modules/Antibiotics/screens/AcuteOtitisPathway/TreatmentPenicillinAllergy/conf';
import { TREATMENT } from '../../src/Modules/Antibiotics/screens/AcuteOtitisPathway/TreatmentRecentUse/conf';
import { TREATMENT_NO_ALLERGY_CONF } from '../../src/Modules/Antibiotics/screens/PharyngitisPathway/PharyngitisNoAllergy/conf';
import { FIRST_LINE_CONF, SEVERE_TREATMENT_CONF } from '../../src/Modules/Antibiotics/screens/PharyngitisPathway/PharyngitisTreatmentAllergy/conf';
import { IV_TREATMENT } from '../../src/Modules/Antibiotics/screens/PneumoniaPathway/PneumoniaIVTreatment/conf';
import { MILD_EFFUSION_TEATMENT, SEVERE_EFFUSION_TREATMENT, SEVERE_TREATMENT, MILD_TREATMENT } from '../../src/Modules/Antibiotics/screens/PneumoniaPathway/PneumoniaTreatmentPenicillin/conf';
import { ABSCESS_TREATMENT } from '../../src/Modules/Antibiotics/screens/SkinInfectionPathway/AbscessTreatment/conf';
import { FIRST_LINE, SEVERE_PENICILLIN_ALLERGY_TREATMENT as SEVERE_PENICILLIN_ALLERGY_TREATMENT_SKIN_INFECT } from '../../src/Modules/Antibiotics/screens/SkinInfectionPathway/BiteTreatment/conf';
import { FIRST_LINE_CONF as FIRST_LINE_CONF_URINARY, SEVERE_ALLERGY_TREATMENT as SEVERE_ALLERGY_TREATMENT_URINARY } from '../../src/Modules/Antibiotics/screens/UrinaryTractPathway/IVTreatment/conf';
import { FIRST_LINE_CONF as FIRST_LINE_CONF_URINARY_UNCOMPLETE, SEVERE_ALLERGY_CONF } from '../../src/Modules/Antibiotics/screens/UrinaryTractPathway/TreatmentUncomplicated/conf';

describe(`AcuteBacterial Rhinosinusitis screen`, () => {
  const AcuteBacterialRhinosinusitisAllergyMildExpanded = [
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
  ];
  const AcuteBacterialRhinosinusitisAllergySevereExpanded = [
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
    }];
  AcuteBacterialRhinosinusitisAllergyMildExpanded.forEach(expand => {
    it(`should have Treatment Allergy mild medicine ${expand.medicine}`, () => {
      expect(MILD_ALLERGY_TREATMENT.expanded).toContainEqual(expand);
    });
  })
  AcuteBacterialRhinosinusitisAllergySevereExpanded.forEach(expand => {
    it(`should have Treatment Allergy severe medicine ${expand.medicine}`, () => {
      expect(SEVERE_ALLERGY_TREATMENT.expanded).toContainEqual(expand);
    });
  })
  it('should have Treatment No Allergy mild medicine Amoxicillin', () => {
    const expand = {
      medicine: 'Amoxicillin',
      dose: '40-50 mg/kg/dose PO Q12H',
      max: 'Max 4 grams/day',
      duration: ['Treatment Duration: 10 days']
    }
    expect(MILD_NO_ALLERGY_TREATMENT.expanded).toContainEqual(expand);
  });
  it('should have Treatment No Allergy severe medicine Amoxicillin', () => {
    const expand = {
      medicine: 'Amoxicillin-Clavulanate',
      dose: '40-50 mg/kg amoxicillin component PO Q12H',
      max: 'Max 4 grams of amoxicillin component/day',
      duration: ['Treatment Duration: 10 days'],
      notes: [
        'Amoxicillin-Clavulanate ES (600mg/5mL) is the preferred suspension. For pills, use 1000mg XR tablets due to risk of developing diarrhea with higher clavulanate dosages.'
      ],
    };
    expect(SEVERE_NO_ALLERGY_TREATMENT.expanded).toContainEqual(expand);
  });
});

describe(`Acute Otitis Pathway screen`, () => {
  it('Treatment No Allergy should have Amoxicillin expand', () => {
    const expand = {
      medicine: 'Amoxicillin',
      dose: '40-50 mg/kg/dose PO Q12H',
      max: 'Max 4 grams/day',
    }
    expect(TREATMENT_NO_ALLERGY.expanded).toContainEqual(expand);
  });
  const AccuteOtitisAlternatives = [
    {
      infoDetail: ' in patients who cannot tolerate oral medications',
      medicine: 'Ceftriaxone',
      dose: '50 mg/kg/dose IV/IM Q24H',
      max: 'Max 1 gram/day',
      duration: 'Treatment Duration: 1-3 days',
    },
    {
      subtitle: 'Topical Therapy:',
      medicine: 'Ciprofloxacin-Dexamethasone',
      dose: '4 drops in affected ear Q12H',
      duration: 'Treatment Duration: 7 days',
    },
    {
      medicine: 'Ofloxacin',
      dose: '5 drops in affected ear Q12H',
      duration: 'Treatment Duration: 10 days',
      notes: ['Shorter courses of 5-7 days may be considered in patients > 2 years of age with non-severe symptoms.'],
    },
  ]
  AccuteOtitisAlternatives.forEach(alternative => {
    it(`Treatment No Allergy should have ${alternative.medicine} alternative`, () => {
      expect(TREATMENT_NO_ALLERGY.alternative).toContainEqual(alternative);
    });
  });
  const AOMildPenicillin = [
    {
      medicine: 'Cefpodoxime',
      dose: '5 mg/kg/dose PO Q12H',
      max: 'Max 400 mg/day',
      notes: [
        'Consider expert consultation to discuss penicillin allergy testing and challenging.',
      ],
    },
    {
      medicine: 'Cefuroxime (if able to swallow tablets)',
      dose: '250 mg PO Q12H ',
      max: 'Max 500 mg/day',
      notes: [
        'Consider expert consultation to discuss penicillin allergy testing and challenging.',
      ],
    },
    {
      medicine: 'Cefdinir',
      dose: '7 mg/kg/dose PO Q12H',
      max: 'Max 600 mg/day',
      notes: [
        'Consider expert consultation to discuss penicillin allergy testing and challenging.',
      ],
    },
    {
      subtitle: 'Alternative in patients who can not tolerate oral medications:',
      medicine: 'Ceftriaxone',
      dose: '50 mg/kg/dose IM/IV q24H',
      max: 'Max 1000 mg/day',
      notes: [
        'Consider expert consultation to discuss penicillin allergy testing and challenging.',
      ],
    },
    {
      subtitle: 'Topical Therapy:',
      medicine: 'Ciprofloxacin-Dexamethasone',
      dose: '4 drops in affected ear Q12H',
      duration: 'Treatment Duration: 7 days'
    },
    {
      medicine: 'Ofloxacin',
      dose: '5 drops in affected ear Q12H',
      duration: 'Treatment Duration: 10 days'
    },
  ]
  AOMildPenicillin.forEach(expand => {
    it(`Treatment Penicillin Allergy Mild should have medicine ${expand.medicine} expand`, () => {
      expect(AO_MILD_Penicillin.expanded).toContainEqual(expand);
    });
  });
  const AOSeverePenicillin = [
    {
      medicine: 'Clindamycin',
      dose: '10 mg/kg/dose PO Q8H',
      max: 'Max 1800 mg/day',
      notes: [
        'Consider expert consultation to discuss penicillin allergy testing and challenging.',
      ],
    },
    {
      subtitle: 'Topical Therapy:',
      medicine: 'Ciprofloxacin-Dexamethasone',
      dose: '4 drops in affected ear Q12H',
      duration: 'Treatment Duration: 7 days'
    },
    {
      medicine: 'Ofloxacin',
      dose: '5 drops in affected ear Q12H',
      duration: 'Treatment Duration: 10 days'
    },
  ];
  AOSeverePenicillin.forEach(expand => {
    it(`Treatment Penicillin Allergy Severe should have medicine ${expand.medicine} expand`, () => {
      expect(AO_SEVERE_Penicillin.expanded).toContainEqual(expand);
    });
  });
  const AOTreatment = [
    {
      subtitle: undefined,
      medicine: 'Amoxicillin-Clavulanate',
      dose: '40-50 mg/kg/dose amoxicillin component PO Q12H',
      max: 'Max 4 grams amoxicillin component/day',
      duration: undefined,
      notes: [
        'Amoxicillin-Clavulanate ES (600mg/5mL) is the preferred suspension. For pills, use 1000mg XR tablets due to risk of developing diarrhea with higher clavulanate dosages.',
      ],
    },
    {
      subtitle: 'Alternative in patients who will not tolerate PO:',
      medicine: 'Ceftriaxone',
      dose: '50 mg/kg/dose IV/IM Q24H',
      max: 'Max 1 gram/day',
      duration: 'Treatment Duration: 1-3 days',
    },
    {
      subtitle: 'Topical Therapy:',
      medicine: 'Ciprofloxacin-Dexamethasone',
      dose: '4 drops in affected ear Q12H',
      duration: 'Treatment Duration: 7 days',
    },
    {
      medicine: 'Ofloxacin',
      dose: '5 drops in affected ear Q12H',
      duration: 'Treatment Duration: 10 days',
      notes: [
        'Shorter courses of 5-7 days may be considered in patients >2 years of age with non-severe symptoms.',
      ],
    },
  ];
  AOTreatment.forEach(expand => {
    it(`Treatment Penicillin Allergy Severe should have medicine ${expand.medicine} expand`, () => {
      expect(TREATMENT.expanded).toContainEqual(expand);
    });
  });
});

describe('Pharyngitis Pathway screen', () => {
  const PharyngitisTreatmentNoAllergy = [
    {
      medicine: 'Amoxicillin',
      dose: '50 mg/kg/dose PO Q24H',
      max: 'Max 1000 mg/day',
    },
    {
      medicine: 'Penicillin G Benzathine',
      dose: '≤ 27 kg: 600,000 units IM once',
      max: '> 27 kg: 1.2 million units IM once',
      duration: 'Treatment duration: 1 dose',
    },
    {
      medicine: 'Penicillin VK',
      dose: '≤ 27 kg: 250 mg PO Q8-12H',
      max: '> 27 kg: 500 mg PO Q8-12H',
      duration: 'Treatment Duration: 10 days',
    },
  ];
  PharyngitisTreatmentNoAllergy.forEach(expand => {
    it(`Treatment No Allergy should have medicine ${expand.medicine} expand`, () => {
      expect(TREATMENT_NO_ALLERGY_CONF.expanded).toContainEqual(expand);
    });
  });
  it(`Treatment Allergy should have medicine Cephalexin expand`, () => {
    const expand = {
      medicine: 'Cephalexin',
      dose: '12.5 - 25 mg/kg/dose PO Q12H',
      max: 'Max 1000 mg/day',
      duration: 'Treatment Duration: 10 days',
      notes: ['Consider expert consultation to discuss penicillin allergy testing and challenging.'],
    };
    expect(FIRST_LINE_CONF.expanded).toContainEqual(expand)
  });
  const SevereTreatment = [
    {
      medicine: 'Clindamycin',
      dose: '7 mg/kg/dose PO Q8H',
      max: 'Max 900 mg/day',
      notes: [
        'Consider expert consultation to discuss penicillin allergy testing and challenging.',
      ]
    },
    {
      medicine: 'Azithromycin',
      dose: '12 mg/kg/dose PO Q24H',
      max: 'Max 500 mg/day',
      notes: [
        'Consider expert consultation to discuss penicillin allergy testing and challenging.',
        'Azithromycin is not recommended unless patient has a severe allergy to penicillin and cephalosporins. Resistance is well known, and treatment failure may occur.',
      ],
    },
  ];
  SevereTreatment.forEach(expand => {
    it(`Treatment Allergy should have medicine ${expand.medicine} expand`, () => {
      expect(SEVERE_TREATMENT_CONF.expanded).toContainEqual(expand);
    });
  });
});

describe('Pneumonia Screen', () => {
  const PneumoniaIVExpands = [
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
  ];
  const PneumoniaIVAlternatives = [
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
  ];
  PneumoniaIVExpands.forEach(expand => {
    it(`IV should have ${expand.medicine} expand`, () => {
      expect(IV_TREATMENT.expanded).toContainEqual(expand);
    });
  });
  PneumoniaIVAlternatives.forEach(alternative => {
    it(`IV should have ${alternative.medicine} alternative`, () => {
      expect(IV_TREATMENT.alternative).toContainEqual(alternative);
    });
  });
  const PneumoniaPenicillinMildEffusion = [
    {
      medicine: 'Ceftriaxone',
      dose: '50-75 mg/kg/dose IV Q24H',
      max: 'Max 2 grams/dose',
      notes: ['Consider expert consultation to discuss penicillin allergy testing and challenging.',],
    },{
      subtitle: 'If an atypical pathogen (i.e., Chlamydophila pneumoniae, Bordetella pertussis, Mycoplasma pneumoniae) is suspected consider adding:',
      medicine: 'Azithromycin',
      dose: '10 mg/kg on day 1 (Max 500 mg/dose)',
      max: '5 mg/kg PO Q24H on days 2-5 (Max 250 mg/dose)',
      notes: ['Consider expert consultation to discuss penicillin allergy testing and challenging.',],
    },];
  PneumoniaPenicillinMildEffusion.forEach(expand => {
    it(`Penicillin mild effusion treatment should have medicine ${expand.medicine} expand`, () => {
      expect(MILD_EFFUSION_TEATMENT.expanded).toContainEqual(expand);
    });
  });
  const PneumoniaPenicillinSevereEffusion = [
    {
      medicine: 'Clindamycin',
      dose: '10 – 13.3 mg/kg/dose IV Q8H',
      max: 'Max 1800 mg/day',
      notes: ['Consider expert consultation to discuss penicillin allergy testing and challenging.​',],
    },
    {
      medicine: 'Levofloxacin',
      dose: 'Age 6 months to < 5 years: 10 mg/kg/dose PO Q12H\nAge ≥ 5 years: 10 mg/kg/dose PO Q24H', // not matches with docs - page 31
      max: 'Max 500 mg/day',
      duration: 'Treatment Duration: 10 days',
      notes: [
        'Consider expert consultation to discuss penicillin allergy testing and challenging.​',
        'Given FDA warnings associated with fluoroquinolones, use should be restricted to situations whenever no safe or effective substitute is available (e.g. multidrug resistance, anaphylaxis to first line agents, etc.).​',
      ],
    },
  ];
  PneumoniaPenicillinSevereEffusion.forEach(expand => {
    it(`Penicillin severe effusion treatment should have medicine ${expand.medicine} expand`, () => {
      expect(SEVERE_EFFUSION_TREATMENT.expanded).toContainEqual(expand);
    });
  });
  const PenicillinMildTreatment = [
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
  ];
  PenicillinMildTreatment.forEach(expand => {
    it(`Penicillin mild treatment should have medicine ${expand.medicine} expand`, () => {
      expect(MILD_TREATMENT.expanded).toContainEqual(expand);
    });
  });
  const PenicillinSevereTreatment = [
    {
      medicine: 'Clindamycin',
      dose: '10 mg/kg/dose PO Q8H',
      max: 'Max 1800 mg/day',
      duration: 'Treatment Duration: 5-7 days',
      notes: ['Consider expert consultation to discuss penicillin allergy testing and challenging.​'],
    },
  ];
  PenicillinSevereTreatment.forEach(expand => {
    it(`Penicillin severe treatment should have medicine ${expand.medicine} expand`, () => {
      expect(SEVERE_TREATMENT.expanded).toContainEqual(expand);
    });
  });
});

describe('Skin Infection Pathway screen', () => {
  const AbscessTreatmentExpands = [
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
  ]
  const AbscessTreatmentAlternatives = [
    {
      infoDetail: ' in patients who are unable to tolerate oral medications',
      medicine: 'Clindamycin',
      dose: '10 mg/kg/dose IV Q6H',
      max: 'Max 1800 mg/day',
    },
  ];
  AbscessTreatmentExpands.forEach(expand => {
    it(`should have Abscess treatment medicine ${expand.medicine} expand`, () => {
      expect(ABSCESS_TREATMENT.expanded).toContainEqual(expand);
    });
  });
  AbscessTreatmentAlternatives.forEach(alternative => {
    it(`should have Abscess treatment medicine ${alternative.medicine} expand`, () => {
      expect(ABSCESS_TREATMENT.alternative).toContainEqual(alternative);
    });
  });
  const BiteTreatmentFirstLineExpands = [
    {
      medicine: 'Amoxicillin-Clavulanate',
      dose: '20 - 22.5 mg/kg/dose of amoxicillin component PO Q12H',
      max: 'Max 1750 mg of amoxicillin component/day',
      duration: ['Prophylaxis Duration: 3 days\nTreatment Duration: 5-10 days'],
      notes: [
        'Prophylaxis should be considered for moderate to severe wounds with edema or crush injury, puncture wounds including wounds that may have penetrated the periosteum or joint capsule, or wounds to the hand or face.',
      ],
    },
  ];
  const BiteTreatmentSevereExpands = [
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
  ];
  BiteTreatmentFirstLineExpands.forEach(expand => {
    it(`should have Bite Treatment First Line medicine ${expand.medicine} expand`, () => {
      expect(FIRST_LINE.expanded).toContainEqual(expand);
    });
  });
  BiteTreatmentSevereExpands.forEach(expand => {
    it(`should have Bite Treatment Severe medicine ${expand.medicine} expand`, () => {
      expect(SEVERE_PENICILLIN_ALLERGY_TREATMENT_SKIN_INFECT.expanded).toContainEqual(expand);
    });
  });

});

describe('Urinary Tract Pathway screen', () => {
  it('should have first line conf medicine Ceftriaxone expand', () => {
    const expand = {
      medicine: 'Ceftriaxone',
      dose: '50 mg/kg/dose IV Q24H',
      max: 'Max 2 grams/day',
      duration: ['Treatment Duration: 10-14 days'],
      notes: [
        'Consider transition to oral antibiotics after 24-48 hours if clinical improvement seen.',
      ]
    };
    expect(FIRST_LINE_CONF_URINARY.expanded).toContainEqual(expand);
  });
  it('should have first line conf medicine Gentamicin alternative', () => {
    const alternative = {
      medicine: 'Gentamicin',
      dose: '5 mg/kg/dose IV Q24H',
      notes: [
        'Consider transition to oral antibiotics after 24-48 hours if clinical improvement seen.'
      ]
    };
    expect(FIRST_LINE_CONF_URINARY.alternative).toContainEqual(alternative);
  });
  const SevereAllergyTreatmentExpands = [
    {
      medicine: 'Gentamicin',
      dose: '5 mg/kg/dose IV Q24H',
      duration: 'Treatment Duration: 10-14 days',
      notes: [
        'Consider transition to oral antibiotics after 24-48 hours if clinical improvement seen.'
      ],
    },
    {
      medicine: 'Ciprofloxacin',
      dose: '6 - 10 mg/kg/dose IV Q8H',
      max: 'Max 1200 mg/day',
      duration: 'Treatment Duration: 7 days',
      notes: [
        'Given FDA warnings associated with fluoroquinolones, use should be restricted to situations whenever no safe or effective substitute is available (e.g. multidrug resistance, anaphylaxis to first line agents, etc.).',
      ],
    },
  ];
  SevereAllergyTreatmentExpands.forEach(expand => {
    it(`should have severe allergy treatment medicine ${expand.medicine} expand`, () => {
      expect(SEVERE_ALLERGY_TREATMENT_URINARY.expanded).toContainEqual(expand);
    });
  });
  const FirstLineUncompleteAlternatives = [
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
  ];
  it(`should have First Line conf uncomplete medicine expand`, () => {
    const expand = {
      medicine: 'Cephalexin',
      dose: '17-25 mg/kg/dose PO Q8H',
      max: 'Max 1500 mg/day',
      duration: ['Treatment Duration:\nAdolescents 3-7 days, Children 5-7 days'],
      notes: [
        'Cefdinir should not be used for pediatric UTI management due to poor concentration in urine compared to adults.',
      ],
    };
    expect(FIRST_LINE_CONF_URINARY_UNCOMPLETE.expanded).toContainEqual(expand);
  });
  FirstLineUncompleteAlternatives.forEach(alternative => {
    it(`should have First Line conf uncomplete medicine ${alternative.medicine} alternative`, () => {
      expect(FIRST_LINE_CONF_URINARY_UNCOMPLETE.alternative).toContainEqual(alternative);
    });
  });
  const SevereAllergyExpands = [
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
  ];
  SevereAllergyExpands.forEach(expand => {
    it(`should have Severe Allergy medicine ${expand.medicine} expand`, () => {
      expect(SEVERE_ALLERGY_CONF.expanded).toContainEqual(expand);
    });
  });
});