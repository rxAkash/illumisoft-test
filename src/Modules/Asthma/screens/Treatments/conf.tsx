import React from 'react';
import {Text} from 'react-native';

export const ONE_H_HIGH_TREATMENTS = {
  title: "Recommended Treatment",
  text: "",
  EC: "Screen Access",
  EA: "A_ED_1H_HIGH_TREATMENTS",
  Description: "User selected “1st Hour” AND (ESI Score = 1-2 OR RS = 9-12)",
  sections: [
    {
      item: "If ESI score is 1-2 or RS 9-12:",
      list: [
        {
          text: "Assess oxygenation. Supplement as necessary."
        },
        {
          text: "Prepare for respiratory failure."
        },
        {
          text: "Recommended Treatment",
          subitems: [
            {
              text: "Albuterol continuous neb 10-20mg x1hr"
            },
            {
              text: "Ipratropium neb 1.5mg"
            },
            {
              text: "Corticosteroid therapy",
              subitems: [
                {
                  text: "Dexamethasone 0.6mg/kg x1 IV/IM (12mg max) OR"
                },
                {
                  text: "Methylprednisolone 2mg/kg IV/IM (60mg max)"
                }
              ]
            },
            {
              text: "Magnesium sulfate 50mg/kg IV (2grams max)"
            }
          ]
        }
      ]
    },
    {
      item: "Consider:",
      list: [
        {
          text: "Epinephrine",
          subitems: [
            {
              text: "15-30kg 0.15mg IM"
            },
            {
              text: ">30kg 0.3mg IM "
            }
          ]
        },
        {
          text: "Ventilatory support:",
          subitems: [
            {
              text: "CPAP/BiPAP OR"
            },
            {
              text: "endotracheal intubation and mechanical ventilation"
            }
          ]
        }
      ]
    },
    {
      item: "Next step:",
      list: [
        {
          text: "Request ICU admission (or transfer)"
        }
      ]
    }
  ]
}

export const ONE_H_LOW_TREATMENTS = {
  title: "Recommended Treatment",
  text: "Within first Hour",
  EC: "Screen Access",
  EA: "A_ED_1H_LOW_TREATMENTS",
  Description: "User selected “1st Hour” AND (ESI Score = 4-5 OR RS = 1-5)",
  sections: [
    {
      item: "If ESI score is 4-5 or RS 1-5:",
      list: [
        {
          text: "Albuterol MDI 8 puffs"
        },
        {
          text: "Corticosteroid therapy",
          subitems: [
            {
              text: "Dexamethasone 0.6mg/kg POx1 (12mg max) OR"
            },
            {
              text: "Prednisolone or Prednisone 2mg/kg POx1 (60mg max)"
            }
          ]
        }
      ]
    }, {
      item: "Next step:",
      list: [
        {
          text: "Assess and score at the end of the 1st hour."
        },
        {
          text: "Routine chest x-ray is NOT recommended. Consider for cases with F's:",
          subitems: [
            {
              text: "Focal exam"
            },
            {
              text: "Failure to improve with therapy"
            },
            {
              text: "Concern of Foreign body"
            }
          ]
        }
      ]
    }
  ]
}

export const ONE_H_MED_TREATMENTS = {
  title: "Recommended Treatment",
  text: "Within first Hour",
  EC: "Screen Access",
  EA: "A_ED_1H_MED_TREATMENTS",
  Description: "User selected “1st Hour” AND (ESI Score = 3 OR RS = 6-8)",
  sections: [
    {
      item: "If ESI score is 3 or RS 6-8:",
      list: [
        {
          text: "Assess oxygenation. Supplement as necessary."
        },
        {
          text: "Recommended Treatment",
          subitems: [
            {
              text: "Albuterol continuous neb 10-20mg x1hr"
            },
            {
              text: "Ipratropium neb 1.5mg"
            },
            {
              text: "Corticosteroid therapy",
              subitems: [
                {
                  text: "Dexamethasone 0.6mg/kg POx1 (12mg max) OR"
                },
                {
                  text: "Prednisolone or Prednisone 2mg/kg POx1 (60mg max)"
                }
              ]
            }
          ]
        }
      ]
    }, {
      item: "Next step:",
      list: [
        {
          text: "Assess and score at the end of the 1st hour."
        },
        {
          text: "Routine chest x-ray is NOT recommended. Consider for cases with F’s:",
          subitems: [
            {
              text: "Focal exam "
            },
            {
              text: "Failure to improve with therapy"
            },
            {
              text: "Concern of Foreign body"
            }
          ]
        }
      ]
    }
  ]
}

export const TWO_H_LOW_TREATMENTS = {
  title: "Recommended Treatment",
  text: "Second Hour",
  EC: "Screen Access",
  EA: "A_ED_2H_LOW_TREATMENTS",
  Description: "User selected “2nd Hour” AND RS = 1-4",
  sections: [
    {
      item: "If first hour ESI 2 or RS 9-12:",
      list: [
        {
          text: "Observe 2 hours then discharge if subsequent score(s) continue to be 1-4."
        }
      ]
    },
    {
      item: "If first hour ESI 3 or RS 6-8:",
      list: [
        {
          text: "Observe 1 hour then discharge if subsequent score(s) continue to be 1-4."
        }
      ]
    },
    {
      item: "If first hour ESI 4-5 or RS 1-5: discharge now if:",
      dischargeInstructions: "no-border",
      list: [
        {
          text: "Discharge now if:",
          subitems: [
            {
              text: "RS 1-4 for minimum of 1 hour after initial albuterol puffs"
            },
            {
              text: "Tolerating oral intake"
            },
            {
              text: "Adequate family teaching done"
            },
            {
              text: "Follow-up established"
            }
          ]
        },
        {
          text: "Discharge instructions:",
          subitems: [
            {
              text: "Continue to use albuterol MDI 4 puffs every 4 hours until seen by a provider"
            },
            {
              text: "Prescribe:",
              subitems:[
                {
                  text: "Albuterol MDI and spacer/mask, if not provided at discharge"
                },
                {
                  text: "Prednisone/prednisolone 2mg/kg/day PO to complete a 5 day course"
                },
                {
                  text: <Text>Antibiotics <Text style={{fontWeight: '600'}}>NOT</Text> recommended. Bacterial, including mycoplasma infections rarely present in asthma exacerbations.</Text>
                }
              ]
            },
            {
              text: "Recommend follow-up with provider within 24-48 hours"
            },
            {
              text: "Continue currently prescribed controller medications (provide refills if needed)"
            }
          ]
        }
      ]
    }
  ],
  discharge: true
}

export const TWO_H_MED_TREATMENTS = {
  title: "Recommended Treatment",
  text: "Second Hour",
  EC: "Screen Access",
  EA: "A_ED_2H_MED_TREATMENTS",
  Description: "User selected “2nd Hour” AND RS = 5-8",
  sections: [
    {
      item: "If RS is 5-8:",
      list: [
        {
          text: "Albuterol MDI 8 puffs"
        }
      ]
    }, {
      item: "Next step:",
      list: [
        {
          text: "Assess and score at the end of the hour"
        }
      ]
    }
  ]
}

export const TWO_H_HIGH_TREATMENTS = {
  title: "Recommended Treatment",
  text: "Second Hour",
  EC: "Screen Access",
  EA: "A_ED_2H_HIGH_TREATMENTS",
  Description: "User selected “2nd Hour” AND calculated RS = 9-12",
  sections: [
    {
      item: "If RS is 9-12:",
      list: [
        {
          text: "Albuterol continuous neb 10-20mg x1hr"
        },
        {
          text: "Ipratropium neb 1.5mg if not already given"
        },
        {
          text: "Magnesium sulfate IV 50mg/kg x1 (max 2grams)"
        }
      ]
    }, {
      item: "Next step:",
      list: [
        {
          text: "Request admission (or transfer)"
        }
      ]
    }
  ]
}

export const THREE_H_HIGH_TREATMENT = {
  title: "Recommended Treatment",
  text: "Third Hour",
  admitLink: "Admit (Start Inpatient Pathway)",
  EC_DECISION: "User Decision",
  EA_Admit: "A_ED_3H_HIGH_ADMIT",
  EC: "Screen Access",
  EA: "A_ED_3H_HIGH_TREATMENTS",
  Description: "User selected “3rd Hour” AND RS = 9-12",
  sections: [
    {
      item: "If RS is 9-12:",
      list: [
        {
          text: "Albuterol continuous neb 10-20mg x1hr"
        },
        {
          text: "Ipratropium neb 1.5mg if not already given"
        },
        {
          text: "Magnesium sulfate IV 50mg/kg x 1 (max 2grams) if not already given"
        }
      ]
    }, {
      item: "Next steps:",
      list: [
        {
          text: "ICU or Referral Center Consult for RS 10-12"
        },
        {
          text: "Plan admit to Inpatient or ICU"
        },
        {
          text: "If undecided on Inpatient vs ICU, move on to 4th hour"
        }
      ]
    }
  ]
}

export const THREE_H_MED_TREATMENTS = {
  title: "Recommended Treatment",
  text: "Third Hour",
  admitLink: "Admit (Start Inpatient Pathway)",
  EC_DECISION: "User Decision",
  EA_Admit: "A_ED_3H_MED_ADMIT",
  EC: "Screen Access",
  EA: "A_ED_3H_MED_TREATMENTS",
  Description: "User selected “3rd Hour” AND RS = 5-8",
  sections: [
    {
      item: "If RS is 5-8:",
      list: [
        {
          text: "Albuterol MDI 8 puffs"
        }
      ]
    }, {
      item: "Next step:",
      list: [
        {
          text: "Request inpatient admission"
        }
      ]
    }
  ]
}

export const THREE_H_LOW_TREATMENTS = {
  title: "Recommended Treatment",
  text: "Third Hour",
  EC: "Screen Access",
  EA: "A_ED_3H_LOW_TREATMENTS",
  Description: "User selected “3rd Hour” AND RS = 1-4",
  sections: [
    {
      item: "If RS is 1-4:",
      list: [
        {
          text: "Discharge now if:",
          subitems: [
            {
              text: "RS 1-4 for minimum of 1 hour"
            },
            {
              text: "Tolerating oral intake"
            },
            {
              text: "Adequate family teaching"
            },
            {
              text: "Follow-up established"
            }
          ]
        },
        {
          text: "Discharge instructions:",
          subitems:[
            {
              text: "Continue to use albuterol MDI 4 puffs every 4 hours until seen by a provider"
            },
            {
              item: "Prescribe:",
              subitems:[
                {
                  text: "Albuterol MDI and spacer/mask, if not provided at discharge"
                },
                {
                  text: "Prednisone/prednisolone 2mg/kg/day PO to complete a 5 day course"
                },
                {
                  text: <Text>Antibiotics <Text style={{fontWeight: '600'}}>NOT</Text> recommended. Bacterial, including mycoplasma infections rarely present in asthma exacerbations.</Text>
                }
              ]
            },
            {
              text: "Recommend follow-up with provider within 24-48 hours"
            },
            {
              text: "Continue currently prescribed controller medications (provide refills if needed)"
            }
          ]
        }
      ]
    }
  ],
  discharge: true
}

export const FOUR_H_HIGH_TREATMENTS = {
  title: "Recommended Treatment",
  text: "Fourth Hour",
  EC: "Screen Access",
  admitLink: "",
  EC_DECISION: "User Decision",
  EA_Admit: "A_ED_4H_HIGH_ADMIT",
  EA: "A_ED_4H_HIGH_TREATMENTS",
  Description: "User selected “4th Hour” AND RS = 11-12",
  sections: [
    {
      item: "If RS is 11-12:",
      list: [
        {
          text: "Albuterol continuous neb 10-20mg x1hr"
        }
      ]
    }, {
      item: "Next steps:",
      list: [
        {
          text: "Admit/Transfer to ICU"
        }
      ]
    }
  ]
}

export const FOUR_H_MED_TREATMENTS = {
  title: "Recommended Treatment",
  text: "Fourth Hour",
  admitLink: "Admit (Start Inpatient Pathway)",
  EC_DECISION: "User Decision",
  EA_Admit: "A_ED_4H_MED_ADMIT",
  EC: "Screen Access",
  EA: "A_ED_4H_MED_TREATMENTS",
  Description: "User selected “4th Hour” AND RS = 9-10",
  sections: [
    {
      item: "If RS is 9-10:",
      list: [
        {
          text: "Albuterol continuous neb 10-20mg x1hr"
        }
      ]
    }, {
      item: "Next steps:",
      list: [
        {
          text: "Assess and score at end of 4th hour"
        },
        {
          text: "Decide on disposition to inpatient ward vs ICU (consult with ICU or referral center as needed)"
        }
      ]
    }
  ]
}

export const FOUR_H_LOW_TREATMENTS = {
  title: "Recommended Treatment",
  text: "Fourth Hour",
  admitLink: "Admit (Start Inpatient Pathway)",
  EC_DECISION: "User Decision",
  EA_Admit: "A_ED_4H_LOW_ADMIT",
  EC: "Screen Access",
  EA: "A_ED_4H_LOW_TREATMENTS",
  Description: "User selected “4th Hour” AND RS = 1-8",
  sections: [
    {
      item: "If RS is 1-8:",
      list: [
        {
          text: "Albuterol MDI 8 puffs"
        }
      ]
    }, {
      item: "Next step:",
      list: [
        {
          text: "Admit to inpatient ward"
        }
      ]
    }
  ]
}

export const P1_TREATMENTS = {
  title: "Recommended Treatment",
  linkstep: "",
  EC: "Screen Access",
  EA: "A_IN_P1_TREATMENTS",
  treatmentTitle: "Albuterol 20mg/hr",
  Description: "",
  sections: [
    {
      item: "Next steps:",
      list: [
        {
          text: "Assess/score at end of 1 hour"
        }
      ]
    },
    {
      item: "Steroids",
      EC: "User Decision",
      EA: "A_IN_P1_STEROIDS",
      collapsible: true,
      list: [
        {
          text: "Transition to prednisone or prednisolone 2mg/kg/day for 5 days"
        }
      ]
    },
    {
      item: "Alerts",
      subText: "Providers should be alerted if patient:",
      EC: "User Decision",
      EA: "A_IN_P1_ALERTS",
      collapsible: true,
      list: [
        {
          text: "Shows signs of serious clinical deterioration such as:",
          subitems: [
            {
              text: "Drowsiness"
            },
            {
              text: "Confusion"
            },
            {
              text: "Silent chest exam"
            },
            {
              text: "Increasing oxygen demand"
            },
            {
              text: "Hypercapnea (End-Tidal CO2 if available)"
            }
          ]
        },
        {
          text: "Requires more than 3 hours inpatient of continuous albuterol"
        },
        {
          text: "Stays on the same albuterol dose and frequency for >12 hours"
        },
        {
          text: "Has persistent oxygen requirement when albuterol has been weaned to 8 puffs q2 hours"
        }
      ]
    }
  ]
}

export const P2_TREATMENTS = {
  title: "Recommended Treatment",
  linkstep: "",
  EC: "Screen Access",
  EA: "A_IN_P2_TREATMENTS",
  treatmentTitle: "Albuterol 8 puffs, q2 hours",
  Description: "",
  sections: [
    {
      item: "Next steps:",
      list: [
        {
          text: "Assess/score at end of 2 hours"
        },
        {
          text: "Start discharge planning"
        }
      ]
    },
    {
      item: "Steroids",
      EC: "User Decision",
      EA: "A_IN_P2_STEROIDS",
      collapsible: true,
      list: [
        {
          text: "Transition to prednisone or prednisolone 2mg/kg/day for 5 days"
        }
      ]
    },
    {
      item: "Alerts",
      subText: "Providers should be alerted if patient:",
      EC: "User Decision",
      EA: "A_IN_P2_ALERTS",
      collapsible: true,
      list: [
        {
          text: "Shows signs of serious clinical deterioration such as:",
          subitems: [
            {
              text: "Drowsiness"
            },
            {
              text: "Confusion"
            },
            {
              text: "Silent chest exam"
            },
            {
              text: "Increasing oxygen demand"
            },
            {
              text: "Hypercapnea (End-Tidal CO2 if available)"
            }
          ]
        },
        {
          text: "Requires more than 3 hours inpatient of continuous albuterol"
        },
        {
          text: "Stays on the same albuterol dose and frequency for >12 hours"
        },
        {
          text: "Has persistent oxygen requirement when albuterol has been weaned to 8 puffs q2 hours"
        }
      ]
    }
  ],
  discharge: true
}

export const P3_TREATMENTS = {
  title: "Recommended Treatment",
  linkstep: "",
  EC: "Screen Access",
  EA: "A_IN_P3_TREATMENTS",
  treatmentTitle: "Albuterol 8 puffs, q4 hours",
  Description: "",
  sections: [
    {
      item: "Next steps:",
      list: [
        {
          text: "Assess/score at end of 4 hours"
        },
        {
          text: "Continue discharge planning"
        }
      ]
    },
    {
      item: "Steroids",
      EC: "User Decision",
      EA: "A_IN_P3_STEROIDS",
      collapsible: true,
      list: [
        {
          text: "Transition to prednisone or prednisolone 2mg/kg/day for 5 days"
        }
      ]
    },
    {
      item: "Alerts",
      subText: "Providers should be alerted if patient:",
      EC: "User Decision",
      EA: "A_IN_P3_ALERTS",
      collapsible: true,
      list: [
        {
          text: "Shows signs of serious clinical deterioration such as:",
          subitems: [
            {
              text: "Drowsiness"
            },
            {
              text: "Confusion"
            },
            {
              text: "Silent chest exam"
            },
            {
              text: "Increasing oxygen demand"
            },
            {
              text: "Hypercapnea (End-Tidal CO2 if available)"
            }
          ]
        },
        {
          text: "Requires more than 3 hours inpatient of continuous albuterol"
        },
        {
          text: "Stays on the same albuterol dose and frequency for >12 hours"
        },
        {
          text: "Has persistent oxygen requirement when albuterol has been weaned to 8 puffs q2 hours"
        }
      ]
    }
  ],
  discharge: true
}

export const P4_TREATMENTS = {
  title: "Recommended Treatment",
  linkstep: "",
  EC: "Screen Access",
  EA: "A_IN_P4_TREATMENTS",
  treatmentTitle: "Albuterol 4 puffs, q4 hours",
  Description: "",
  sections: [
    {
      item: "Next steps:",
      list: [
        {
          text: "Assess/score at minimum q4 hours"
        },
        {
          text: "Observe for 2 hours after initial 4 puffs; discharge if still clinically well"
        }
      ]
    },
    {
      item: "Discharge criteria:",
      list: [
        {
          text: "Tolerating oral intake"
        },
        {
          text: "No supplemental O2"
        }
      ]
    },
    {
      item: "Discharge preparation (suggested tools below):",
      list: [
        {
          text: "Prescribe",
          subitems: [
            {
              text: "Albuterol MDI and spacer/mask"
            },
            {
              text: "Prednisone/prednisolone 2mg/kg/day PO to complete a 5 day course"
            },
            {
              text: <Text>Antibiotics <Text style={{fontWeight: '600'}}>NOT</Text> recommended. Bacterial, including Mycoplasma infections rarely present in asthma exacerbations</Text>
            }
          ]
        },
        {
          text: "Review Asthma Action Plan"
        },
        {
          text: <Text style={{fontWeight: '600'}}>Screen and refer for tobacco exposure</Text>
        },
        {
          text: "Assess risk factors for asthma"
        },
        {
          text: "Teach correct MDI technique"
        }
      ]
    },
    {
      item: "Discharge instructions:",
      list: [
        {
          text: "Continue to use albuterol MDI 4 puffs q4 hours for at least 24 hours"
        },
        {
          text: "Continue all other prescribed medications per the asthma action plan (provide refills if needed)"
        },
        {
          text: "Follow-up with PCP in 24-48 hours"
        }
      ]
    }
  ],
  discharge: true
}