import React from "react";
import { StyleSheet, Text } from "react-native";

export const ROCURONIUM = "Rocuronium (Zemuron) Paralytic";
export const PHENOBARBITAL = "Phenobarbital";

const styles = StyleSheet.create({
  bold: {
    fontWeight: '600'
  },
  warning: {
    fontWeight: '600',
    color: 'red'
  }
})

//This drug names were extracted into constants because we use them to
//handle logic exceptions for them
export const DEXTROSE_GLUCOSE = "Dextrose (Glucose)"
export const DEXTROSE_GLUCOSE_PEDIATRIC = "Dextrose (Glucose) Pediatric"
export const NA_VALUE = "NA"
export const DOSING_SINGLE_DOSE = "SingleDose";
export const DOSING_LOW_MED_HIGH = "LowMedHigh";
export const DOSING_STEP_WISE = "StepWise";
export const DOSING_OTHER = "Other (Comment Only)"
export const KETAMINE = "Ketamine For Sedation";
export const KETAMINE_SHORT = "Ketamine";
export const EPINEPHRINE = "Epinephrine";
export const EPINEPHRINE_ET = 'Epinephrine ET'
export const CERTRIAXONE = "Ceftriaxone (Rocephin)"
export const CLINDAMYCIN = "Clindamycin";
export const DIPHENHYDRAMINE = "Diphenhydramine (Benadryl)";
export const GLUCOSE_DEXTROSE = "Glucose (Dextrose) Pediatric";
export const IBUPROFEN = "Ibuprofen";
export const MANNITOL = "Mannitol";
export const VALPORIC_ACID = "Valproic Acid";
export const FENTANYL = "Fentanyl";
export const DIAZEPAM = "Diazepam (Valium)";
export const LIDOCAINE = "Lidocaine";
export const AMIODARONE = "Amiodarone";
export const GENTAMINICIN = "Gentamicin";
export const HYPERTONIC_SALINE = "Hypertonic (3%) Saline";
export const MIDAZOLAM = "Midazolam (Versed)";

export const getDrugByName = (name: string) => {
  return RESUS_DRUGS.find(item => item.Drug === name);
}

export const NBI_DRUGS = [
  {
    Drug: "Ampicillin",
    Indication: [
      {
        value: "NA",
        Route: [
          {
            title: "IV",
            Concentration: 20,
            Concentration_Units: "mg/mL",
            LowDose: 100,
            DoseUnits: "mg/kg",
            PtDose_Mass_Units: "mg",
            MaxDose: 2000,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtDose_Volume_Units: "mL",
            PtLowDose_Mass: 600,
            Comments: [
              {
                text: "For doses > 500 mg: Infuse over 10 to 15 minutes"
              },
              {
                text: "Rapid infusion rates may cause seizures"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Atropine Sulfate",
    Indication: [
      {
        value: "NA",
        Route: [
          {
            title: "IV",
            Concentration: 0.1,
            Concentration_Units: "mg/mL",
            LowDose: 0.02,
            DoseUnits: "mg/kg",
            PtDose_Mass_Units: "mg",
            MaxDose: 0.5,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtDose_Volume_Units: "mL",
            PtLowDose_Mass: 0.12,
            Comments: [
              {
                text: "Use of minimum dose (0.1 mg) is controversial"
              },
              {
                text: <Text style={styles.bold}>Rapid IV injection</Text>,
              },
              {
                text: "Slow injection may cause paradoxical bradycardia"
              },
              {
                text: "Use for symptomatic bradycardia caused by vagal stimulation or primary AV block after managing airway"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          },
          {
            title: "ET",
            Concentration: 0.1,
            Concentration_Units: "mg/mL",
            LowDose: 0.04,
            DoseUnits: "mg/kg",
            PtDose_Mass_Units: "mg",
            MaxDose: 1,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtDose_Volume_Units: "mL",
            PtLowDose_Mass: 0.12,
            Comments: [
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response"
              },
              {
                text: "Use of minimum dose (0.1 mg) is controversial"
              },
              {
                text: "Administer and flush with 1 to 5 mL NS based on patient size, followed by 5 manual ventilations"
              },
              {
                text: "Use for symptomatic bradycardia caused by vagal stimulation or primary AV block after managing airway"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Bicarbonate",
    Indication: [
      {
        value: "NA",
        Route: [
          {
            title: "IV",
            Concentration: 0.5,
            Concentration_Units: "mEq/mL",
            LowDose: 1,
            DoseUnits: "mEq/kg",
            PtDose_Mass_Units: "mEq",
            MaxDose: 50,
            MaxDose_Units: "mEq",
            MaxDose_Interval: "dose",
            PtDose_Volume_Units: "mL",
            PtLowDose_Mass: 6,
            Comments: [
              {
                text: "Use 4.2% (0.5 mEq/mL) solution for neonates and child < 2 years"
              },
              {
                text: "If 4.2% (0.5 mEq/mL) solution unavailable, dilute 8.4% (1 mEq/mL solution) 1:1 with sterile water or D5W = 0.5 mEq/mL"
              },
              {
                text: <Text style={styles.bold}>Vesicant; Avoid extravasation</Text>,
              },
              {
                text: <Text style={styles.bold}>Infusion rates vary</Text>,
                subitems: [
                  {
                    text: "Neonates & child <2 years: Administer 0.5 mEq/mL solution: administer slowly, maximum rate: 10 mEq/minute"
                  },
                  {
                    text: "Children and Adolescents: Administer 1 mEq/mL solution; administer slowly (over 3 to 5 minutes)"
                  }
                ]
              },
              {
                text: "Use of sodium bicarbonate should be based on documented metabolic acidosis"
              },
              {
                text: "Routine use in cardiac arrest is not recommended"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: DEXTROSE_GLUCOSE,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            title: "IV",
            Concentration: 0.1,
            Concentration_Units: "g/mL",
            LowDose: 0.2,
            DoseUnits: "g/kg",
            PtDose_Mass_Units: "g",
            MaxDose: 25,
            MaxDose_Units: "g",
            MaxDose_Interval: "dose",
            PtDose_Volume_Units: "mL",
            PtLowDose_Mass: 1.2,
            Comments: [
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response"
              },
              {
                text: "Dilute to D10W (100 mg/mL) for peripheral administration",
                subitems: [
                  {
                    text: "Add 2 mL D25W to 3 mL NS/sterile water = D10W"
                  }
                ]
              },
              {
                text: "OR",
                subitems: [
                  {
                    text: "Add 1 mL D50W to 4 mL NS/sterile water = D10W"
                  }
                ]
              },
              {
                text: <Text style={styles.bold}>Vesicant (at concentrations {'>'}10%); Avoid extravasation</Text>
              },
              {
                text: "Infuse slowly over 5 minutes (max 200 mg/kg/minute)"
              },
              {
                text: "Blood glucose should be determined prior to and following administration"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          },
          {
            title: "IV",
            Concentration: 0.125,
            Concentration_Units: "g/mL",
            LowDose: 0.2,
            DoseUnits: "g/kg",
            PtDose_Mass_Units: "g",
            MaxDose: 25,
            MaxDose_Units: "g",
            MaxDose_Interval: "dose",
            PtDose_Volume_Units: "mL",
            PtLowDose_Mass: 1.2,
            Comments: [
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response"
              },
              {
                text: "Dilute to D12.5W (125 mg/mL) for peripheral administration",
                subitems: [
                  {
                    text: "Add 1 mL D25W to 1 mL NS/sterile water = D12.5W"
                  }
                ]
              },
              {
                text: "OR",
                subitems: [
                  {
                    text: "Add 1 mL D50W to 3 mL NS/sterile water = D12.5W"
                  }
                ]
              },
              {
                text: <Text style={styles.bold}>Vesicant (at concentrations {'>'}10%); Avoid extravasation</Text>
              },
              {
                text: "Infuse slowly over 5 minutes (max 200 mg/kg/minute)"
              },
              {
                text: "Blood glucose should be determined prior to and following administration"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Epinephrine",
    Indication: [
      {
        value: "Endotracheal",
        Route: [
          {
            title: "ET",
            Concentration: 0.1,
            Concentration_Units: "mg/mL",
            LowDose: 0.1,
            DoseUnits: "mg/kg",
            PtDose_Mass_Units: "mg",
            PtDose_Volume_Units: "mL",
            PtLowDose_Mass: 0.6,
            Comments: [
              {
                text: "Administer and flush with 1 to 5 mL NS based on patient size, followed by 5 manual ventilations"
              },
              {
                text: "Repeat every 3 to 5 minutes as needed"
              },
              {
                text: "May induce dysrhythmia"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      },
      {
        value: "Symptomatic Bradycardia and/or Pulseless State",
        Route: [
          {
            title: "IV or IO",
            Concentration: 0.1,
            Concentration_Units: "mg/mL",
            LowDose: 0.01,
            DoseUnits: "mg/kg",
            PtDose_Mass_Units: "mg",
            PtDose_Volume_Units: "mL",
            PtLowDose_Mass: 0.06,
            Comments: [
              {
                text: <Text style={styles.bold}>Vesicant; Avoid extravasation</Text>
              },
              {
                text: "Repeat every 3 to 5 minutes as needed"
              },
              {
                text: "May induce dysrhythmia"
              },
              {
                text: "High dose epinephrine (HDE) not shown to improve survival, but may consider in exceptional circumstances such as beta-blocker overdose"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Fentanyl",
    hasBlackBox: true,
    Indication: [
      {
        value: "Intubation",
        Route: [
          {
            title: "IV or UVC",
            Concentration: 10,
            Concentration_Units: "mcg/mL",
            LowDose: 1,
            ModerateDose: 2.5,
            HighDose: 4,
            DoseUnits: "mcg/kg",
            PtDose_Mass_Units: "mcg",
            PtDose_Volume_Units: "mL",
            PtLowDose_Mass: 6,
            PtModerateDose_Mass: 15,
            PtHighDose_Mass: 24,
            Comments: [
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response."
              },
              {
                text: "If starting concentration = 50 mcg/mL",
                subitems: [
                  {
                    text: "Add 1 mL fentanyl to 4 mL NS to = 10 mcg/mL"
                  }
                ]
              },
              {
                text: "Intermittent doses to be given slow IV over 15 to 30 minutes to avoid skeletal and chest wall rigidity, impaired ventilation or respiratory distress/arrest"
              },
              {
                text: "Titrate dose to effectiveness"
              },
              {
                text: "May repeat every 2 to 4 hours"
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 0
          }
        ]
      },
      {
        value: "Pain",
        Route: [
          {
            title: "IV or UVC",
            Concentration: 10,
            Concentration_Units: "mcg/mL",
            LowDose: 1,
            ModerateDose: 1.5,
            HighDose: 2,
            DoseUnits: "mcg/kg",
            PtDose_Mass_Units: "mcg",
            PtDose_Volume_Units: "mL",
            PtLowDose_Mass: 6,
            PtModerateDose_Mass: 9,
            PtHighDose_Mass: 12,
            Comments: [
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response."
              },
              {
                text: "If starting concentration = 50 mcg/mL",
                subitems: [
                  {
                    text: "Add 1 mL fentanyl to 4 mL NS to = 10 mcg/mL"
                  }
                ]
              },
              {
                text: "Continuous IV infusion:",
                subitems: [
                  {
                    text: "0.5 to 1 mcg/kg/hour, usual range 1 to 3 mcg/kg/hour"
                  }
                ]
              },
              {
                text: "Intermittent doses to be given slow IV over 15 to 30 minutes to avoid skeletal and chest wall rigidity, impaired ventilation or respiratory distress/arrest"
              },
              {
                text: "Titrate dose to effectiveness"
              },
              {
                text: "May repeat every 2 to 4 hours"
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: GENTAMINICIN,
    hasBlackBox: true,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            title: "IV",
            Concentration: 5,
            Concentration_Units: "mg/mL",
            LowDose: 3,
            ModerateDose: 4,
            DoseUnits: "mg/kg",
            PtDose_Mass_Units: "mg",
            PtDose_Volume_Units: "mL",
            PtLowDose_Mass: 18,
            PtModerateDose_Mass: 24,
            Comments: [
              {
                text: "If patient is ≥ 2 kg, use 4 mg/kg dose"
              },
              {
                text: "If patient is < 2 kg, use 3 mg/kg dose"
              },
              {
                text: "Dilute to 5 mg/mL"
              },
              {
                text: "If starting concentration = 10 mg/mL",
                subitems: [
                  {
                    text: "Add 1 mL (10 mg) gentamicin to 1 mL NS to = 5 mg/mL"
                  }
                ]
              },
              {
                text: "Infuse over 30 minutes"
              },
              {
                text: "Monitor serum concentrations after initial dose"
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Lorazepam (Ativan)",
    hasBlackBox: true,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            title: "IV",
            Concentration: 1,
            Concentration_Units: "mg/mL",
            LowDose: 0.1,
            MaxDose: 4,
            MaxDose_Units: "mg",
            ModerateDose: 4,
            DoseUnits: "mg/kg",
            PtDose_Mass_Units: "mg",
            MaxDose_Interval: "dose",
            PtDose_Volume_Units: "mL",
            PtLowDose_Mass: 0.6,
            Comments: [
              {
                text: "Dilute to 1mg/mL"
              },
              {
                text: "If starting concentration = 2 mg/mL",
                subitems: [
                  {
                    text: "Add 1 mL lorazepam (Ativan) to 1 mL NS to = 1 mg/mL"
                  }
                ]
              },
              {
                text: "Slow IV over 2 to 5 minutes"
              },
              {
                text: "Be prepared to provide respiratory support "
              },
              {
                text: "Avoid rectal"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: MIDAZOLAM,
    hasBlackBox: true,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            title: "IV",
            Concentration: 1,
            Concentration_Units: "mg/mL",
            LowDose: 0.1,
            MaxDose: 5,
            MaxDose_Units: "mg",
            DoseUnits: "mg/kg",
            PtDose_Mass_Units: "mg",
            MaxDose_Interval: "dose",
            PtDose_Volume_Units: "mL",
            PtLowDose_Mass: 0.6,
            Comments: [
              {
                text: "If starting concentration = 5 mg/mL",
                subitems: [
                  {
                    text: "Add 1 mL (5 mg) midazolam to 4 mL NS to = 1 mg/mL"
                  }
                ]
              },
              {
                text: "Do NOT infuse rapidly in neonates < 1 month"
              },
              {
                text: "Avoid if patient is hypotensive or in shock"
              },
              {
                text: "Be prepared to provide respiratory support"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          },
          {
            title: "Nasal",
            Concentration: 5,
            Concentration_Units: "mg/mL",
            LowDose: 0.2,
            MaxDose: 10,
            MaxDose_Units: "mg",
            DoseUnits: "mg/kg",
            PtDose_Mass_Units: "mg",
            MaxDose_Interval: "dose",
            PtDose_Volume_Units: "mL",
            PtLowDose_Mass: 1.2,
            Comments: [
              {
                text: "Avoid if patient is hypotensive or in shock"
              },
              {
                text: "Use IV solution; 1/2 dose volume each nare"
              },
              {
                text: "Must use mucosal atomizer device"
              },
              {
                text: "Peak effect: 10 minutes"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Morphine Sulfate",
    hasBlackBox: true,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            title: "IV or IntraMuscular",
            Concentration: 2,
            Concentration_Units: "mg/mL",
            LowDose: 0.1,
            MaxDose: 5,
            MaxDose_Units: "mg",
            DoseUnits: "mg/kg",
            PtDose_Mass_Units: "mg",
            MaxDose_Interval: "dose",
            PtDose_Volume_Units: "mL",
            PtLowDose_Mass: 0.6,
            Comments: [
              {
                text: "Consider 0.05 mg/kg for opioid naïve patients and neonates"
              },
              {
                text: "Avoid if patient is hypotensive or in shock"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          },
          {
            title: "IV or IntraMuscular",
            Concentration: 4,
            Concentration_Units: "mg/mL",
            LowDose: 0.1,
            MaxDose: 5,
            MaxDose_Units: "mg",
            DoseUnits: "mg/kg",
            PtDose_Mass_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0.2,
            PtDose_Volume_Units: "mL",
            PtLowDose_Mass: 0.6,
            Comments: [
              {
                text: "Consider 0.05 mg/kg for opioid naïve patients and neonates"
              },
              {
                text: "Avoid if patient is hypotensive or in shock"
              },
              {
                text: "Consider max volume per injection site; may want to divide"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: PHENOBARBITAL,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            totalDoseMessage: true,
            title: "IV",
            Concentration: 10,
            Concentration_Units: "mg/mL",
            LowDose: 20,
            MaxDose: 1000,
            MaxDose_Units: "mg",
            DoseUnits: "mg/kg",
            PtDose_Mass_Units: "mg (Loading Dose)",
            MaxDose_Interval: "dose",
            PtDose_Volume_Units: "mL",
            PtLowDose_Mass: 120,
            Comments: [
              {
                text: "If starting concentration = 65 mg/mL",
                subitems: [
                  {
                    text: "Add 2 mL phenobarbital to 11 mL NS to = 10 mg/mL"
                  }
                ]
              },
              {
                text: "If starting concentration = 130 mg/mL",
                subitems: [
                  {
                    text: "Add 1 mL phenobarbital to 12 mL NS to = 10 mg/mL"
                  }
                ]
              },
              {
                text: "Infuse over 20 to 30 minutes not to exceed 30 mg/minute "
              },
              {
                text: <Text>May repeat once after 10 to 15 minutes to a <Text style={styles.bold}>max TOTAL loading dose</Text> of 30 to 40 mg/kg</Text>
              },
              {
                text: "Maximal loading dose may cause respiratory depression"
              },
              {
                text: "Avoid IM"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: ROCURONIUM,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            totalDoseMessage: true,
            title: "IV",
            Concentration: 10,
            Concentration_Units: "mg/mL",
            LowDose: 1,
            MaxDose: 100,
            MaxDose_Units: "mg",
            DoseUnits: "mg/kg",
            PtDose_Mass_Units: "mg",
            MaxDose_Interval: "dose",
            PtDose_Volume_Units: "mL",
            PtLowDose_Mass: 6,
            Comments: [
              {
                text: <Text style={styles.warning}>WARNING:  PARALYTIC</Text>
              },
              {
                text: "Only those trained in its use should administer"
              },
              {
                text: "NOT a sedative"
              },
              {
                text: "Ventilatory support required"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  }
]

export const RESUS_DRUGS = [
  {
    Drug: "Acetaminophen (Tylenol)",
    hasBlackBox: true,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: false,
            title: "PO-Oral",
            Concentration: 32,
            Concentration_Units: "mg/mL(160mg/5mL)",
            LowDose: 10,
            ModerateDose: 12.5,
            HighDose: 15,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 200,
            PtModerateDose_Mass: 300,
            PtDose_Mass_Units: "mg",
            MaxDose: 1000,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 6.3,
            PtModerateDose_Volume: 9.4,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "Use immediate release formulations"
              },
              {
                text: "10 mg/kg every 4 hours as needed; no more than 5 doses in 24 hours (see max dosing)"
              },
              {
                text: "15 mg/kg every 6 hours as needed (see max dosing)"
              },
              {
                text: <Text style={styles.bold}>Maximum DAILY Doses:</Text>,
                subitems: [
                  {
                    text: "Infants/Children: 75 mg/kg / 24 hours or 2.6 g / 24 hours (whichever is less)"
                  },
                  {
                    text: "Adults: 3,000 mg / 24 hours"
                  }
                ]
              },
              {
                text: "For patients ≥ 13 years of age",
                subitems: [
                  {
                    text: "Give 325 mg or 500 mg tablet"
                  }
                ]
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 0
          }
        ]
      },
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: false,
            title: "PR-Rectal",
            PtDose_Mass_Units: "mg",
            Comments: [
              {
                text: "Infants 6 to 11 months:",
                subitems: [
                  {
                    text: "80 mg every 6 hours"
                  },
                  {
                    text: "Max daily dose 320 mg / in 24 hours"
                  }
                ]
              },
              {
                text: "Infants and children 12 to 36 months:",
                subitems: [
                  {
                    text: "80 mg every 4 to 6 hours"
                  },
                  {
                    text: "Max daily dose: 400 mg / in 24 hours"
                  }
                ]
              },
              {
                text: "Children > 3 to 6 years",
                subitems: [
                  {
                    text: "120 mg every 4 to 6 hours"
                  },
                  {
                    text: "Max daily dose: 600 mg/in 24 hours"
                  }
                ]
              },
              {
                text: "Children > 6 up to 12 years",
                subitems: [
                  {
                    text: "325 mg every 4 to 6 hours"
                  },
                  {
                    text: "Max daily dose: 1,625 mg / in 24 hours"
                  }
                ]
              },
              {
                text: "Children ≥ 12 years",
                subitems: [
                  {
                    text: "650 mg every 4 to 6 hours"
                  },
                  {
                    text: "Max daily dose 3,900 mg / in 24 hours"
                  }
                ]
              }
            ],
            DosingType: "Other (Comment Only)",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Adenosine (Adenocard)",
    hasBlackBox: false,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 3,
            Concentration_Units: "mg/mL",
            LowDose: 0.1,
            ModerateDose: 0.2,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0,
            PtModerateDose_Mass: 0,
            PtDose_Mass_Units: "mg",
            MaxDose: 12,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0,
            PtModerateDose_Volume: 0,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text>Initial dose 0.1 mg/kg, <Text style={styles.bold}>MAX DOSE: 6 mg</Text>, may repeat immediately at 0.2 mg/kg <Text style={styles.bold}>MAX DOSE: 12 mg</Text> if no response</Text>
              },
              {
                text: "Follow each bolus with NS; Use 2-syringe method when possible"
              },
              {
                text: "Inject rapidly as close to central circulation as possible"
              },
              {
                text: "Do not delay cardioversion for IV access in poorly perfused patient"
              }
            ],
            DosingType: "StepWise",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Albumin 5%",
    hasBlackBox: false,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 5,
            Concentration_Units: "%",
            LowDose: 10,
            ModerateDose: 15,
            HighDose: 20,
            DoseUnits: "mL/kg",
            PtLowDose_Volume: 950,
            PtModerateDose_Volume: 1425,
            PtHighDose_Volume: 1900,
            PtDose_Volume_Units: "mL",
            PtDose_Mass_Units: "mL",
            MaxDose: 500,
            MaxDose_Units: "mL",
            MaxDose_Interval: "dose",
            Comments: [
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response"
              },
              {
                text: "May repeat every 15 to 30 minutes if needed"
              },
              {
                text: "After volume replacement, do not exceed 2 to 4 mL/minute"
              },
              {
                text: "Filter not required"
              },
              {
                text: "Monitor for signs of pulmonary edema"
              },
              {
                text: "Binds calcium; can lead to hypotension"
              },
              {
                text: "Binds many drugs; may reduce free drug concentration & therapeutic effect"
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 1
          }
        ]
      }
    ]
  },
  {
    Drug: "Albuterol",
    hasBlackBox: false,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: false,
            title: "Nebulization",
            Comments: [
              {
                text: "Nebulized: 2.5 mg in 2 mL NS"
              },
              {
                text: "Can give continuous aerosol at 10 mg/hour for patients < 5 years of age and 15 mg/hour for ≥ 5 years"
              },
              {
                text: "Cardiac monitoring during continuous administration"
              }
            ],
            DosingType: "Other (Comment Only)",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: AMIODARONE,
    hasBlackBox: true,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 2,
            Concentration_Units: "mg/mL",
            LowDose: 5,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 100,
            PtDose_Mass_Units: "mg",
            MaxDose: 300,
            MaxDose_Units: "mg",
            MaxDose_Interval: "day",
            PtLowDose_Volume: 50,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "Adults: consult adult reference"
              },
              {
                text: "If starting concentration = 150 mg / 3 mL",
                subitems: [
                  {
                    text: "Add 1 mL (50 mg) of amiodarone to 24 mL D5W = 2 mg/mL"
                  }
                ]
              },
              {
                text: <Text style={styles.bold}>Vesicant; Avoid extravasation</Text>,
              },
              {
                text: "Infuse slowly over 20 to 60 minutes"
              },
              {
                text: "Rapid bolus if pulseless"
              },
              {
                text: "May repeat dose twice (max 15 mg/kg TOTAL loading dose)"
              },
              {
                text: "In-line filter recommended"
              },
              {
                text: "May produce hypotension & bradycardia if infused rapidly"
              },
              {
                text: "Avoid drugs that prolong QT"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Ampicillin",
    hasBlackBox: false,
    Indication: [
      {
        value: "Meningitis",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 20,
            Concentration_Units: "mg/mL",
            LowDose: 100,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 2000,
            PtDose_Mass_Units: "mg",
            MaxDose: 2000,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 20,
            PtDose_Volume_Units: "mL",
            DosingType: "SingleDose",
            Comments: [
              {
                text: "For doses > 500 mg: Infuse over 10 to 15 minutes"
              },
              {
                text: "Rapid infusion rates may cause seizures"
              }
            ],
            VolumeOnly: 0
          }
        ]
      },
      {
        value: "Other",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 20,
            Concentration_Units: "mg/mL",
            LowDose: 50,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 1000,
            PtDose_Mass_Units: "mg",
            MaxDose: 2000,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 10,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "For doses > 500 mg: Infuse over 10 to 15 minutes"
              },
              {
                text: "Rapid infusion rates may cause seizures"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          },
          {
            title: "IntraMuscular",
            Concentration: 250,
            Concentration_Units: "mg/mL",
            LowDose: 50,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 2000,
            PtDose_Mass_Units: "mg",
            MaxDose: 2000,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 8,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "Consider max volume per injection site; may want to divide"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Ampicillin-Sulbactam (Unasyn)",
    hasBlackBox: false,
    Indication: [
      {
        value: "Meningitis",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 20,
            Concentration_Units: "mg/mL",
            LowDose: 100,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 2000,
            PtDose_Mass_Units: "mg",
            MaxDose: 2000,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 100,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text style={styles.bold}>Neonates: dosing not established</Text>
              },
              {
                text: "Infuse over 10 to 15 minutes"
              },
              {
                text: "Unasyn formulated in a 2:1 ratio of ampicillin:sulbactam"
              },
              {
                text: "Dosing based on ampicillin component"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      },
      {
        value: "Other",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 20,
            Concentration_Units: "mg/mL",
            LowDose: 25,
            ModerateDose: 37.5,
            HighDose: 50,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 2000,
            PtModerateDose_Mass: 2000,
            PtHighDose_Mass: 2000,
            PtDose_Mass_Units: "mg",
            MaxDose: 2000,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 100,
            PtModerateDose_Volume: 100,
            PtHighDose_Volume: 100,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "Infuse over 10 to 15 minutes"
              },
              {
                text: "Unasyn formulated in a 2:1 ratio of ampicillin:sulbactam"
              },
              {
                text: "Dosing based on ampicillin component"
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Atropine Sulfate",
    hasBlackBox: false,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 0.1,
            Concentration_Units: "mg/mL",
            LowDose: 0.02,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0.5,
            PtDose_Mass_Units: "mg",
            MaxDose: 0.5,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 5,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "Use of minimum dose (0.1 mg) is controversial"
              },
              {
                text: <Text style={styles.bold}>Rapid IV injection</Text>
              },
              {
                text: "Slow injection may cause paradoxical bradycardia"
              },
              {
                text: "Use for symptomatic bradycardia caused by vagal stimulation or primary AV block after managing airway"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          },
          {
            title: "ET",
            Concentration: 0.1,
            Concentration_Units: "mg/mL",
            LowDose: 0.04,
            ModerateDose: 0.05,
            HighDose: 0.06,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 1,
            PtModerateDose_Mass: 1,
            PtHighDose_Mass: 1,
            PtDose_Mass_Units: "mg",
            MaxDose: 1,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 10,
            PtModerateDose_Volume: 10,
            PtHighDose_Volume: 10,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response"
              },
              {
                text: "Use of minimum dose (0.1 mg) is controversial"
              },
              {
                text: "Administer and flush with 1 to 5 mL NS based on patient size, followed by 5 manual ventilations"
              },
              {
                text: "Use for symptomatic bradycardia caused by vagal stimulation or primary AV block after managing airway"
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Bicarbonate",
    hasBlackBox: false,
    Indication: [
      {
        value: "Infant & child < 2 years",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 0.5,
            Concentration_Units: "mEq/mL",
            LowDose: 1,
            DoseUnits: "mEq/kg",
            PtLowDose_Mass: 20,
            PtDose_Mass_Units: "mEq",
            MaxDose: 50,
            MaxDose_Units: "mEq",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 40,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text><Text style={styles.warning}><Text style={styles.bold}>Dilute 8.4% (1 mEq/mL solution) 1:1 with sterile water or D5W = 0.5 mEq/mL - use for neonates and infants</Text></Text></Text>
              },
              {
                text: <Text style={styles.bold}>Vesicant; Avoid extravasation</Text>
              },
              {
                text: <Text style={styles.bold}>Infusion rates vary</Text>,
                subitems: [
                  {
                    text: "Neonates & child < 2 years: Administer 0.5 mEq/mL solution: administer slowly, maximum rate: 10 mEq/minute "
                  },
                  {
                    text: "Children and Adolescents: Administer 1 mEq/mL solution; administer slowly (over 3 to 5 minutes)"
                  }
                ]
              },
              {
                text: "Avoid administration with calcium salts; precipitate may form"
              },
              {
                text: "Use of sodium bicarbonate should be based on documented metabolic acidosis"
              },
              {
                text: "Routine use in cardiac arrest is not recommended"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      },
      {
        value: "Children > 2 years",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 1,
            Concentration_Units: "mEq/mL",
            LowDose: 1,
            DoseUnits: "mEq/kg",
            PtLowDose_Mass: 20,
            PtDose_Mass_Units: "mEq",
            MaxDose: 50,
            MaxDose_Units: "mEq",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 20,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text style={styles.bold}>Vesicant; Avoid extravasation</Text>
              },
              {
                text: <Text style={styles.bold}>Infusion rates vary</Text>,
                subitems: [
                  {
                    text: <Text><Text style={styles.warning}><Text style={styles.bold}>Neonates & child {'< 2'} years: Administer 0.5 mEq/mL solution</Text></Text>: administer slowly, maximum rate: 10 mEq/minute</Text>
                  },
                  {
                    text: "Children and Adolescents: Administer 1 mEq/mL solution; administer slowly (over 3 to 5 minutes)"
                  }
                ]
              },
              {
                text: "Avoid administration with calcium salts; precipitate may form"
              },
              {
                text: "Use of sodium bicarbonate should be based on documented metabolic acidosis"
              },
              {
                text: "Routine use in cardiac arrest is not recommended"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Calcium Chloride",
    hasBlackBox: false,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 20,
            Concentration_Units: "mg/mL",
            LowDose: 20,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 400,
            PtDose_Mass_Units: "mg",
            MaxDose: 1000,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 20,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text><Text style={styles.warning}><Text style={styles.bold}>MUST DILUTE to 20 mg/mL</Text></Text></Text>
              },
              {
                text: "If starting concentration = 100 mg / 1 mL",
                subitems: [
                  {
                    text: "Add 1 mL (100mg) of calcium chloride to 4 mL D5W/NS = 20 mg/mL"
                  }
                ]
              },
              {
                text: <Text style={styles.bold}>Vesicant; profound tissue necrosis risk if extravasation occurs</Text>
              },
              {
                text: "Do NOT use scalp or small hand/foot veins; central line preferred"
              },
              {
                text: <Text><Text style={styles.bold}>Inject SLOWLY;</Text> Monitor ECG, pause injection if bradycardia occurs</Text>
              },
              {
                text: "May repeat in 5 to 10 minutes in arrest cases"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Calcium Gluconate",
    hasBlackBox: false,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 50,
            Concentration_Units: "mg/mL",
            LowDose: 60,
            ModerateDose: 80,
            HighDose: 100,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 3000,
            PtModerateDose_Mass: 3000,
            PtHighDose_Mass: 3000,
            PtDose_Mass_Units: "mg",
            MaxDose: 3000,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 60,
            PtModerateDose_Volume: 60,
            PtHighDose_Volume: 60,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response"
              },
              {
                text: <Text><Text style={styles.warning}><Text style={styles.bold}>MUST DILUTE to 50 mg/mL</Text></Text></Text>
              },
              {
                text: "If starting concentration = 100 mg / 1 mL",
                subitems: [
                  {
                    text: "Add 1 mL (100mg) of calcium gluconate to 1 mL D5W/NS = 50 mg/mL"
                  }
                ]
              },
              {
                text: <Text style={styles.bold}>Vesicant; profound tissue necrosis risk if extravasation occurs</Text>
              },
              {
                text: "Do NOT use scalp or small hand/foot veins; central line preferred"
              },
              {
                text: <Text><Text style={styles.bold}>Inject SLOWLY; </Text>Monitor ECG, pause injection if bradycardia occurs</Text>
              },
              {
                text: "May repeat in 5 to 10 minutes in arrest cases"
              },
              {
                text: "Routine use in cardiac arrest is not recommended"
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Cefazolin",
    hasBlackBox: false,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 100,
            Concentration_Units: "mg/mL",
            LowDose: 50,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 2000,
            PtDose_Mass_Units: "mg",
            MaxDose: 2000,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 20,
            PtDose_Volume_Units: "mL",
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: CERTRIAXONE,
    hasBlackBox: false,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: true,
            ageRestrictionType: "NOT_ROUTINELY_RECOMMENDED_INFANTS",
            contraindicationAgeWeek: 5,
            contraindicationAgeMonth: 1,
            title: "IV",
            Concentration: 40,
            Concentration_Units: "mg/mL",
            LowDose: 100,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 2000,
            PtDose_Mass_Units: "mg",
            MaxDose: 2000,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 50,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text><Text style={styles.warning}><Text style={styles.bold}>NOT routinely recommended for infants {'<'} 1 month</Text></Text></Text>
              },
              {
                text: <Text style={styles.bold}>Infusion rates vary:</Text>,
                subitems: [
                  {
                    text: "Neonates: over 60 minutes"
                  },
                  {
                    text: "Infants, children, adolescents: over 30 minutes"
                  }
                ]
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: CLINDAMYCIN,
    hasBlackBox: true,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: true,
            ageRestrictionType: "NOT_RECOMMENDED_INFANTS",
            contraindicationAgeWeek: 5,
            contraindicationAgeMonth: 1,
            title: "IV",
            Concentration: 12,
            Concentration_Units: "mg/mL",
            LowDose: 10,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 200,
            PtDose_Mass_Units: "mg",
            MaxDose: 900,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 16.7,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text><Text style={styles.warning}><Text style={styles.bold}>NOT recommended for infants {'<'} 1 month</Text></Text></Text>
              },
              {
                text: "If starting concentration = 300 mg / 2 mL",
                subitems: [
                  {
                    text: "1 mL clindamycin to 11.5 mL D5W/NS to = 12 mg/mL"
                  }
                ]
              },
              {
                text: "Infuse over 30 to 60 minutes"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Dexamethasone (Decadron)",
    hasBlackBox: false,
    Indication: [
      {
        value: "Airway Edema",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 4,
            Concentration_Units: "mg/mL",
            LowDose: 0.5,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0,
            PtDose_Mass_Units: "mg",
            MaxDose: 10,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 2.5,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "If starting concentration = 10 mg / 1 mL",
                subitems: [
                  {
                    text: "Add 1 mL (10 mg) of dexamethasone to 1.5 mL D5W/NS = 4 mg/mL"
                  }
                ]
              },
              {
                text: "Infuse slow IV Push over 1 to 4 minutes"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      },
      {
        value: "Croup",
        Route: [
          {
            isAgeRestricted: false,
            title: "PO-Oral",
            LowDose: 0.6,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 12,
            PtDose_Mass_Units: "mg",
            MaxDose: 16,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            Comments: [
              {
                text: <Text><Text style={styles.bold}>Dosing guidelines NOT established for neonates;</Text> dosing displayed for infants and children. Use clinical judgement</Text>
              },
              {
                text: "May use oral tablets instead of liquid as appropriate"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          },
          {
            title: "IV",
            Concentration: 4,
            Concentration_Units: "mg/mL",
            LowDose: 0.6,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0,
            PtDose_Mass_Units: "mg",
            MaxDose: 16,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text><Text style={styles.bold}>Dosing guidelines NOT established for neonates;</Text> dosing displayed for infants and children. Use clinical judgement</Text>
              },
              {
                text: "If starting concentration = 10 mg / 1 mL",
                subitems: [
                  {
                    text: "Add 1 mL (10 mg) of dexamethasone to 1.5 mL D5W/NS = 4 mg/mL"
                  }
                ]
              },
              {
                text: <Text style={styles.bold}>Infusion rates vary</Text>,
                subitems: [
                  {
                    text: "Infuse slow IV Push over 1 to 4 minutes"
                  },
                  {
                    text: "High doses: infuse over 15 to 30 minutes"
                  }
                ]
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          },
          {
            title: "IntraMuscular",
            Concentration: 10,
            Concentration_Units: "mg/mL",
            LowDose: 0.6,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 12,
            PtDose_Mass_Units: "mg",
            MaxDose: 16,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 1.2,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text><Text style={styles.bold}>Dosing guidelines NOT established for neonates;</Text> dosing displayed for infants and children. Use clinical judgement</Text>
              },
              {
                text: "Consider max volume per injection site; may want to divide"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: DEXTROSE_GLUCOSE_PEDIATRIC,
    hasBlackBox: false,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: true,
            contraindicationAgeWeek: 5,
            contraindicationAgeMonth: 1,
            title: "IV",
            Concentration: 0.1,
            Concentration_Units: "g/mL",
            LowDose: 0.5,
            ModerateDose: 0.75,
            HighDose: 1,
            DoseUnits: "g/kg",
            PtLowDose_Mass: 10,
            PtModerateDose_Mass: 15,
            PtHighDose_Mass: 20,
            PtDose_Mass_Units: "g",
            MaxDose: 25,
            MaxDose_Units: "g",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 100,
            PtModerateDose_Volume: 150,
            PtHighDose_Volume: 200,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text style={styles.bold}>Neonates: see newly born infant section for dosing</Text>
              },
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response"
              },
              {
                text: "Dilute to D10W (100 mg/mL) for peripheral administration",
                subitems: [
                  {
                    text: "Add 2 mL D25W to 3 mL NS/sterile water = D10W"
                  }
                ]
              },
              {
                text: "or",
                subitems: [
                  {
                    text: "Add 1 mL D50W to 4 mL NS/sterile water = D10W"
                  }
                ]
              },
              {
                text: <Text style={styles.bold}>Vesicant (at concentrations {'>'}10%); Avoid extravasation</Text>
              },
              {
                text: "Infuse slowly over 5 minutes (max 200 mg/kg/minute)"
              },
              {
                text: "Blood glucose should be determined prior to and following administration"
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 0
          },
          {
            isAgeRestricted: true,
            contraindicationAgeWeek: 5,
            contraindicationAgeMonth: 1,
            title: "IV",
            Concentration: 0.125,
            Concentration_Units: "g/mL",
            LowDose: 0.5,
            ModerateDose: 0.75,
            HighDose: 1,
            DoseUnits: "g/kg",
            PtLowDose_Mass: 0,
            PtModerateDose_Mass: 0,
            PtHighDose_Mass: 0,
            PtDose_Mass_Units: "g",
            MaxDose: 25,
            MaxDose_Units: "g",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0,
            PtModerateDose_Volume: 0,
            PtHighDose_Volume: 0,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text style={styles.bold}>Neonates: see newly born infant section for dosing</Text>
              },
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response"
              },
              {
                text: "Dilute to D12.5W (125 mg/mL) for peripheral administration",
                subitems: [
                  {
                    text: "Add 1 mL D25W to 1 mL NS/sterile water = D12.5W"
                  }
                ]
              },
              {
                text: "or",
                subitems: [
                  {
                    text: "Add 1 mL D50W to 3 mL NS/sterile water = D12.5W"
                  }
                ]
              },
              {
                text: <Text style={styles.bold}>Vesicant (at concentrations {'>'}10%); Avoid extravasation</Text>
              },
              {
                text: "Infuse slowly over 5 minutes (max 200 mg/kg/minute)"
              },
              {
                text: "Blood glucose should be determined prior to and following administration"
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 0
          },
          {
            isAgeRestricted: true,
            contraindicationAgeWeek: 5,
            contraindicationAgeMonth: 1,
            title: "IV",
            Concentration: 0.25,
            Concentration_Units: "g/mL",
            Comments: [
              {
                text: <Text style={styles.bold}>Neonates: see newly born infant section for dosing</Text>
              },
              {
                text: "Must be diluted to either D10 or D12.5"
              },
              {
                text: "See Above"
              }
            ],
            DosingType: "Other (Comment Only)",
            VolumeOnly: 0
          },
          {
            isAgeRestricted: true,
            contraindicationAgeWeek: 5,
            contraindicationAgeMonth: 1,
            title: "IV",
            Concentration: 0.5,
            Concentration_Units: "g/mL",
            Comments: [
              {
                text: <Text style={styles.bold}>Neonates: see newly born infant section for dosing</Text>
              },
              {
                text: "Must be diluted to either D10 or D12.5"
              },
              {
                text: "See Above"
              }
            ],
            DosingType: "Other (Comment Only)",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: DIAZEPAM,
    hasBlackBox: true,
    Indication: [
      {
        value: "Sedative",
        Route: [
          {
            isAgeRestricted: true,
            ageRestrictionType: "NOT_RECOMMENDED_INFANTS",
            totalDoseMessage: true,
            contraindicationAgeWeek: 5,
            contraindicationAgeMonth: 1,
            title: "IV",
            Concentration: 5,
            Concentration_Units: "mg/mL",
            LowDose: 0.1,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 2,
            PtDose_Mass_Units: "mg",
            MaxDose: 7.5,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0.5,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text><Text style={styles.warning}><Text style={styles.bold}>NOT recommended for infants {'<'} 1 month</Text></Text></Text>
              },
              {
                text: "Do NOT dilute"
              },
              {
                text: <Text style={styles.bold}>Vesicant; Avoid extravasation</Text>
              },
              {
                text: "Given over 3 to 5 minutes"
              },
              {
                text: "Slow administration may reduce incidence of apnea"
              },
              {
                text: "Be prepared to provide respiratory support"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      },
      {
        value: "Status Epilepticus",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 5,
            Concentration_Units: "mg/mL",
            LowDose: 0.15,
            ModerateDose: 0.175,
            HighDose: 0.2,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 2,
            PtModerateDose_Mass: 4,
            PtHighDose_Mass: 6,
            PtDose_Mass_Units: "mg",
            MaxDose: 10,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0.4,
            PtModerateDose_Volume: 0.8,
            PtHighDose_Volume: 1.2,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text><Text style={styles.bold}>Dosing guidelines NOT established for neonates;</Text> dosing displayed for infants {'>'}30 days, children & adolescents</Text>
              },
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response"
              },
              {
                text: "Do NOT dilute"
              },
              {
                text: <Text style={styles.bold}>Vesicant; Avoid extravasation</Text>
              },
              {
                text: "Given over 3 to 5 minutes, may repeat once in 5 to 10 minutes"
              },
              {
                text: "Slow administration may reduce incidence of apnea"
              },
              {
                text: "Be prepared to provide respiratory support"
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 0
          }
        ]
      },
      {
        value: "Acute Seizure",
        Route: [
          {
            isAgeRestricted: true,
            ageRestrictionType: "NOT_RECOMMENDED_INFANTS",
            contraindicationAgeWeek: 5,
            contraindicationAgeMonth: 1,
            title: "PR-Rectal",
            Concentration: 5,
            Concentration_Units: "mg/mL",
            LowDose: 0.5,
            ModerateDose: 0.25,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 10,
            PtModerateDose_Mass: 5,
            PtDose_Mass_Units: "mg",
            MaxDose: 20,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 2,
            PtModerateDose_Volume: 1,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text><Text style={styles.warning}><Text style={styles.bold}>NOT recommended for infants {'<'} 1 month</Text></Text></Text>
              },
              {
                text: <Text><Text style={styles.bold}>Dosing guidelines NOT established for neonates or infants;</Text> dosing displayed for children {'>'}2 years & adolescents</Text>
              },
              {
                text: <Text>Dosing shown based on using <Text style={styles.bold}>IV formulation rectally.</Text></Text>
              },
              {
                text: "Dosing differs for gel formulations"
              },
              {
                text: "Do NOT dilute"
              },
              {
                text: "Repeat dose (if needed) 10 minutes after initial dose"
              },
              {
                text: "Be prepared to provide respiratory support"
              }
            ],
            DosingType: "StepWise",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: DIPHENHYDRAMINE,
    hasBlackBox: false,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: true,
            ageRestrictionType: "CONTRAINDICATED_GENERIC",
            contraindicationAgeWeek: 5,
            contraindicationAgeMonth: 1,
            title: "IV",
            Concentration: 25,
            Concentration_Units: "mg/mL",
            LowDose: 1,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0,
            PtDose_Mass_Units: "mg",
            MaxDose: 50,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text><Text style={styles.warning}><Text style={styles.bold}>Contraindicated in infants {'<'} 1 month and premature infants</Text></Text></Text>
              },
              {
                text: "If starting concentration = 50 mg / 1 mL",
                subitems: [
                  {
                    text: "Add 1 mL (50 mg) of diphenhydramine to 1 mL NS = 25 mg/mL"
                  }
                ]
              },
              {
                text: "SLOW infusion over 5 minutes"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: EPINEPHRINE,
    hasBlackBox: false,
    Indication: [
      {
        value: "Anaphylaxis/Status Asthmaticus",
        Route: [
          {
            isAgeRestricted: true,
            contraindicationAgeWeek: 5,
            contraindicationAgeMonth: 1,
            title: "IntraMuscular",
            Concentration: 1,
            Concentration_Units: "mg/mL",
            LowDose: 0.01,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0.2,
            PtDose_Mass_Units: "mg",
            MaxDose: 0.3,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 2.0,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text><Text style={styles.warning}><Text style={styles.bold}>NOT recommended for infants {'<'} 1 month</Text></Text></Text>
              },
              {
                text: "Max dosing 0.3 mg for auto-injectors; may increase to 0.5 mg for adolescent"
              },
              {
                text: "May repeat every 5 to 15 minutes as needed"
              },
              {
                text: "If not responding after 3 doses, consider IV infusion"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      },
      {
        value: "High Dose Endotracheal",
        Route: [
          {
            isAgeRestricted: true,
            contraindicationAgeWeek: 5,
            contraindicationAgeMonth: 1,
            title: "ET",
            Concentration: 1,
            Concentration_Units: "mg/mL",
            LowDose: 0.1,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0.4,
            PtDose_Mass_Units: "mg",
            MaxDose: 2.5,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0.4,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text style={styles.bold}>NEONATES ({'<'} 1 month): see NEWLY BORN drug dosing for correct STRENGTH, DOSE and VOLUME</Text>
              },
              {
                text: "Administer and flush with 1 to 5 mL NS based on patient size, followed by 5 manual ventilations"
              },
              {
                text: "Repeat every 3 to 5 minutes as needed"
              },
              {
                text: "May induce dysrhythmia"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      },
      {
        value: "Symptomatic Bradycardia and/or Pulseless State",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV or IO",
            Concentration: 0.1,
            Concentration_Units: "mg/mL",
            LowDose: 0.01,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0.2,
            PtDose_Mass_Units: "mg",
            MaxDose: 1,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 2,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text style={styles.bold}>Vesicant; Avoid extravasation</Text>,
              },
              {
                text: "Repeat every 3 to 5 minutes as needed"
              },
              {
                text: "May induce dysrhythmia"
              },
              {
                text: "High dose epinephrine (HDE) not shown to improve survival, but may consider in exceptional circumstances such as beta-blocker overdose."
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Epinephrine, racemic",
    hasBlackBox: false,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: false,
            title: "Nebulization",
            Concentration: 2.25,
            Concentration_Units: "%",
            LowDose: 0.25,
            ModerateDose: 0.375,
            HighDose: 0.5,
            DoseUnits: "mL",
            MaxDose: 0.5,
            MaxDose_Units: "mL",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0.5,
            PtModerateDose_Volume: 0.5,
            PtHighDose_Volume: 0.5,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text><Text style={styles.bold}>Dosing guidelines NOT established for neonates;</Text> dosing displayed for infants, children, and adolescents</Text>
              },
              {
                text: "Many institutions use a standard 0.5 mL dose for all patients"
              },
              {
                text: "Standard racemic epinephrine vial (2.25%): Dilute 0.5 mL in 2 to 3 mL NS via nebulizer"
              },
              {
                text: "For inhalation when racemic epi is not available, use L-epinephrine 1mg/mL (1:1000) solution: add 0.5 mL/kg (maximum 5 mL) diluted in 2 to 3 mL NS via nebulizer"
              },
              {
                text: "May repeat dose every 20 minutes"
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 1
          }
        ]
      }
    ]
  },
  {
    Drug: "Etomidate For RSI",
    hasBlackBox: false,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 2,
            Concentration_Units: "mg/mL",
            LowDose: 0.3,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 6,
            PtDose_Mass_Units: "mg",
            MaxDose: 20,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 3,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text><Text style={styles.bold}>Dosing guidelines NOT established for neonates and infants. Limited data for children.</Text> Use clinical judgement</Text>
              },
              {
                text: "Irritant; avoid small veins in head or dorsum of hand"
              },
              {
                text: "Infuse IV Push over 30 to 60 seconds"
              },
              {
                text: "Causes adrenal suppresion; use with extreme caution in septic shock"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: FENTANYL,
    hasBlackBox: true,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 50,
            Concentration_Units: "mcg/mL",
            LowDose: 1,
            DoseUnits: "mcg/kg",
            PtLowDose_Mass: 20,
            PtDose_Mass_Units: "mcg",
            MaxDose: 100,
            MaxDose_Units: "mcg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0.4,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "Infuse slowly if not used with a paralytic"
              },
              {
                text: "Neonates <1 month infuse over 15 minutes"
              },
              {
                text: "Rapid infusion rates in infants may cause chest wall rigidity"
              },
              {
                text: "Short-acting opiate"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      },
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: true,
            ageRestrictionType: "NOT_RECOMMENDED_GENERIC",
            contraindicationAgeWeek: 52,
            contraindicationAgeMonth: 12,
            contraindicationAgeYear: 1,
            title: "Nasal",
            Concentration: 50,
            Concentration_Units: "mcg/mL",
            LowDose: 1.5,
            ModerateDose: 1.75,
            HighDose: 2,
            DoseUnits: "mcg/kg",
            PtLowDose_Mass: 30,
            PtModerateDose_Mass: 35,
            PtHighDose_Mass: 40,
            PtDose_Mass_Units: "mcg",
            MaxDose: 100,
            MaxDose_Units: "mcg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0.6,
            PtModerateDose_Volume: 0.7,
            PtHighDose_Volume: 0.8,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text><Text style={styles.warning}><Text style={styles.bold}>Not recommended for infants {'<'} 10 kg</Text></Text></Text>
              },
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response"
              },
              {
                text: "Administer 1/2 dose volume each nare"
              },
              {
                text: "Must use mucosal atomizer device"
              },
              {
                text: "Short-acting opiate"
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Fosphenytoin (Cerebyx)",
    hasBlackBox: true,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 25,
            Concentration_Units: "mg/mL",
            LowDose: 20,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0,
            PtDose_Mass_Units: "mg",
            MaxDose: 1500,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "If starting concentration = 50 mg / 1 mL PE",
                subitems: [
                  {
                    text: "Add 2 mL fosphenytoin (50 mg/mL PE) to 2 mL NS to = 25 mg/mL"
                  }
                ]
              },
              {
                text: "Infuse over 20 minutes; rate should not exceed 150 mg (PE)/minute in adults and 2mg PE/kg/min up to 150mg PE/min in pediatrics (see Black Box Warnings)"
              },
              {
                text: <Text><Text style={styles.bold}>Hazardous drug:</Text> careful handling, administration, and disposal required</Text>
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Furosemide (Lasix)",
    hasBlackBox: true,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV or IntraMuscular",
            Concentration: 10,
            Concentration_Units: "mg/mL",
            LowDose: 1,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 20,
            PtDose_Mass_Units: "mg",
            MaxDose: 40,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 2,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "Consider max volume per injection site; may want to divide"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: GENTAMINICIN,
    hasBlackBox: true,
    Indication: [
      {
        value: "Infants < 1 month ",
        hideWhen: {
          compare: {
            what: "ageInWeeks",
            operator: ">",
            target: 4
          }
        },
        Route: [
          {
            isAgeRestricted: false,
            contraindicationAgeWeek: 5,
            contraindicationAgeMonth: 1,
            title: "IV",
            Concentration: 5,
            Concentration_Units: "mg/mL",
            LowDose: 3,
            ModerateDose: 4,
            DoseUnits: "mg/kg",
            PtLowDose_Volume: 0.6,
            PtModerateDose_Volume: 0.8,
            PtDose_Mass_Units: "mg",
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "If patient is ≥ 2 kg, use 4 mg/kg dose"
              },
              {
                text: "If patient is < 2 kg, use 3 mg/kg dose"
              },
              {
                text: "Dilute to 5 mg/mL"
              },
              {
                text: "If starting concentration = 10 mg/mL",
                subitems: [
                  {
                    text: "Add 1 mL (10 mg) gentamicin to 1 mL NS to = 5 mg/mL"
                  }
                ]
              },
              {
                text: "Infuse over 30 minutes"
              },
              {
                text: "Monitor serum concentrations after inital dose"
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 0
          }
        ]
      },
      {
        value: "Infant and child > 1 month",
        hideWhen: {
          compare: {
            what: "ageInWeeks",
            operator: "<=",
            target: 4
          }
        },
        Route: [
          {
            isAgeRestricted: false,
            contraindicationAgeWeek: 5,
            contraindicationAgeMonth: 1,
            title: "IV",
            Concentration: 5,
            Concentration_Units: "mg/mL",
            LowDose: 2.5,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0,
            PtDose_Mass_Units: "mg",
            PtLowDose_Volume: 0,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text><Text style={styles.warning}><Text style={styles.bold}>Infants {'<'} 1 month weighing {'>'} 2 kg: dose at 4 mg/kg</Text></Text></Text>
              },
              {
                text: "If starting concentration = 10 mg / 1 mL",
                subitems: [
                  {
                    text: "Add 1 mL (10 mg) of gentamicin to 1 mL NS = 5 mg/mL"
                  }
                ]
              },
              {
                text: "Infuse over 30 minutes"
              },
              {
                text: "Estimate dose on ideal body weight"
              },
              {
                text: "Monitor serum concentrations after initial dose"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Glucagon",
    hasBlackBox: false,
    Indication: [
      {
        value: "Beta/Calcium channel blocker overdose",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 1,
            Concentration_Units: "mg/mL",
            LowDose: 0.05,
            DoseUnits: "mg/kg(loading dose)",
            PtLowDose_Mass: 0.6,
            PtDose_Mass_Units: "mg",
            MaxDose: 10,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0.6,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text><Text style={styles.bold}>Dosing guidelines NOT established for neonates;</Text> dosing displayed for infants, children, and adolescents. Use clinical judgement</Text>
              },
              {
                text: "Dilute by adding 1 mL of sterile water to glucagon 1 mg vial = 1 mg/mL"
              },
              {
                text: "Infuse loading dose over 1 to 5 minutes"
              },
              {
                text: "Loading dose typically followed by continuous infusion",
                subitems: [
                  {
                    text: "Concentration: 0.08 mg/mL (4 mg in 50 mL D5W)"
                  },
                  {
                    text: <Text>Rate: 0.05 mg/kg/<Text style={styles.bold}>hour</Text> to 0.1 mg/kg/<Text style={styles.bold}>hour</Text> (maximum rate 5 mg/hour)</Text>
                  }
                ]
              },
              {
                text: "Caution: may cause vomiting"
              },
              {
                text: "Monitor blood glucose, blood pressure, and heart rate"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      },
      {
        value: "Hypoglycemia",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 1,
            Concentration_Units: "mg/mL",
            LowDose: 0.03,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0.6,
            PtDose_Mass_Units: "mg",
            MaxDose: 1,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0.6,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "Dilute by adding 1 mL of sterile water to glucagon 1 mg vial = 1 mg/mL"
              },
              {
                text: "Depletes glycogen stores"
              },
              {
                text: "Administer IV glucose as soon as possible"
              },
              {
                text: "Caution: may cause vomiting"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: GLUCOSE_DEXTROSE,
    hasBlackBox: false,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: true,
            contraindicationAgeWeek: 5,
            contraindicationAgeMonth: 1,
            title: "IV",
            Concentration: 0.1,
            Concentration_Units: "g/mL",
            LowDose: 0.5,
            ModerateDose: 0.75,
            HighDose: 1,
            DoseUnits: "g/kg",
            PtLowDose_Mass: 0,
            PtModerateDose_Mass: 0,
            PtHighDose_Mass: 0,
            PtDose_Mass_Units: "g",
            MaxDose: 25,
            MaxDose_Units: "g",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0,
            PtModerateDose_Volume: 0,
            PtHighDose_Volume: 0,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text style={styles.bold}>Neonates: see newly born infant section for dosing</Text>
              },
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response"
              },
              {
                text: "Dilute to D10W (100 mg/mL) for peripheral administration",
                subitems: [
                  {
                    text: "Add 2 mL D25W to 3 mL NS/sterile water = D10W"
                  }
                ]
              },
              {
                text: "or",
                subitems: [
                  {
                    text: "Add 1 mL D50W to 4 mL NS/sterile water = D10W"
                  }
                ]
              },
              {
                text: <Text style={styles.bold}>Vesicant (at concentrations {'>'}10%); Avoid extravasation</Text>
              },
              {
                text: "Infuse slowly over 5 minutes (max 200 mg/kg/minute)"
              },
              {
                text: "Blood glucose should be determined prior to and following administration"
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 0
          },
          {
            isAgeRestricted: true,
            contraindicationAgeWeek: 5,
            contraindicationAgeMonth: 1,
            title: "IV",
            Concentration: 0.125,
            Concentration_Units: "g/mL",
            LowDose: 0.5,
            ModerateDose: 0.75,
            HighDose: 1,
            DoseUnits: "g/kg",
            PtLowDose_Mass: 10,
            PtModerateDose_Mass: 15,
            PtHighDose_Mass: 20,
            PtDose_Mass_Units: "g",
            MaxDose: 25,
            MaxDose_Units: "g",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 80,
            PtModerateDose_Volume: 120,
            PtHighDose_Volume: 160,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text style={styles.bold}>Neonates: see newly born infant section for dosing</Text>
              },
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response"
              },
              {
                text: "Dilute to D12.5W (125 mg/mL) for peripheral administration",
                subitems: [
                  {
                    text: "Add 1 mL D25W to 1 mL NS/sterile water = D12.5W"
                  }
                ]
              },
              {
                text: "or",
                subitems: [
                  {
                    text: "Add 1 mL D50W to 3 mL NS/sterile water = D12.5W"
                  }
                ]
              },
              {
                text: <Text style={styles.bold}>Vesicant (at concentrations {'>'}10%); Avoid extravasation</Text>
              },
              {
                text: "Infuse slowly over 5 minutes (max 200 mg/kg/minute)"
              },
              {
                text: "Blood glucose should be determined prior to and following administration"
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 0
          },
          {
            isAgeRestricted: true,
            contraindicationAgeWeek: 5,
            contraindicationAgeMonth: 1,
            title: "IV",
            Concentration: 0.25,
            Concentration_Units: "g/mL",
            Comments: [
              {
                text: <Text style={styles.bold}>Neonates: see newly born infant section for dosing</Text>
              },
              {
                text: "Must be diluted to either D10 or D12.5"
              },
              {
                text: "See Above"
              }
            ],
            DosingType: "Other (Comment Only)",
            VolumeOnly: 0
          },
          {
            isAgeRestricted: true,
            contraindicationAgeWeek: 5,
            contraindicationAgeMonth: 1,
            title: "IV",
            Concentration: 0.5,
            Concentration_Units: "g/mL",
            Comments: [
              {
                text: <Text style={styles.bold}>Neonates: see newly born infant section for dosing</Text>
              },
              {
                text: "Must be diluted to either D10 or D12.5"
              },
              {
                text: "See Above"
              }
            ],
            DosingType: "Other (Comment Only)",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Hydrocortisone",
    hasBlackBox: false,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 5,
            Concentration_Units: "mg/mL",
            LowDose: 2,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0,
            PtDose_Mass_Units: "mg",
            MaxDose: 100,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "Step 1: Reconstitute 100 mg vial with 2 mL sterile water/NS"
              },
              {
                text: "Step 2: Further dilute to 5 mg/mL: Add 2 mL (100 mg) hydrocortisone to 18 mL NS to = 5 mg/mL"
              },
              {
                text: "Initial dose for acute adrenal insufficiency (adrenal crisis) or septic shock"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: HYPERTONIC_SALINE,
    hasBlackBox: false,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 3,
            Concentration_Units: "%",
            LowDose: 3,
            ModerateDose: 4.5,
            HighDose: 6,
            DoseUnits: "mL/kg",
            PtDose_Mass_Units: "mL",
            MaxDose: 500,
            MaxDose_Units: "mL",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0,
            PtModerateDose_Volume: 0,
            PtHighDose_Volume: 0,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text style={styles.bold}><Text style={styles.warning}>Do NOT exceed 150 mL per dose for hyponatremic seizure</Text> / Do Not Exceed 500 mL per dose for cerebral edema</Text>
              },
              {
                text: <Text><Text style={styles.warning}><Text style={styles.bold}>NOT recommended for infants {'<'} 1 month</Text></Text></Text>
              },
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response"
              },
              {
                text: <Text><Text style={styles.bold}>Vesicant; Avoid extravasation </Text>(central line perferred if available)</Text>
              },
              {
                text: "Infuse no faster than 5 mL/kg/hour"
              },
              {
                text: "For emergent correction of hyponatremic seizure or increased intracranial pressure"
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 1
          }
        ]
      }
    ]
  },
  {
    Drug: IBUPROFEN,
    hasBlackBox: true,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: true,
            ageRestrictionType: "NOT_RECOMMENDED_INFANTS",
            contraindicationAgeWeek: 26,
            contraindicationAgeMonth: 6,
            title: "PO-Oral",
            Concentration: 20,
            Concentration_Units: "mg/mL(100mg/5mL)",
            LowDose: 10,
            DoseUnits: "mg/kg",
            PtDose_Mass_Units: "mg",
            MaxDose: 400,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text><Text style={styles.warning}><Text style={styles.bold}>NOT recommended for infants {'<'} 6 months</Text></Text></Text>
              },
              {
                text: "For patients ≥ 12 years of age",
                subitems: [
                  {
                    text: "give 400 mg"
                  },
                  {
                    text: "Maximum of 6 doses / 24 hours"
                  }
                ]
              },
              {
                text: "May repeat every 6 to 8 hours"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Insulin (Regular Insulin)",
    hasBlackBox: false,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 1,
            Concentration_Units: "unit/mL",
            LowDose: 0.05,
            ModerateDose: 0.075,
            HighDose: 0.1,
            DoseUnits: "units/kg/hr",
            PtLowDose_Mass: 1,
            PtModerateDose_Mass: 1.5,
            PtHighDose_Mass: 2,
            PtDose_Mass_Units: "units/hr",
            PtLowDose_Volume: 1,
            PtModerateDose_Volume: 1.5,
            PtHighDose_Volume: 2,
            PtDose_Volume_Units: "mL/hr",
            Comments: [
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response"
              },
              {
                text: "Add 1 mL (100 units) regular insulin to 100 mL NS to = 1 unit/mL"
              },
              {
                text: "Bolus loading dose not recommended"
              },
              {
                text: "Monitor bedside glucose hourly"
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Ipratropium (Atrovent)",
    hasBlackBox: false,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: false,
            title: "Nebulization",
            Comments: [
              {
                text: <Text><Text style={styles.bold}>Dosing guidelines NOT established for neonates or infants;</Text> dosing displayed for children and adolescents (limited data). Use clinical judgement</Text>
              },
              {
                text: "Nebulized: 0.5 mg (1 unit dose vial) every 20 minutes for 3 doses"
              },
              {
                text: "Should only be used in conjunction with short-acting beta agonists for acute asthma exacerbation"
              }
            ],
            DosingType: "Other (Comment Only)",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: KETAMINE,
    hasBlackBox: true,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: true,
            contraindicationAgeWeek: 14,
            contraindicationAgeMonth: 3,
            title: "IV",
            Concentration: 50,
            Concentration_Units: "mg/mL",
            LowDose: 1,
            ModerateDose: 1.5,
            HighDose: 2,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0,
            PtModerateDose_Mass: 0,
            PtHighDose_Mass: 0,
            PtDose_Mass_Units: "mg",
            MaxDose: 150,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0,
            PtModerateDose_Volume: 0,
            PtHighDose_Volume: 0,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text><Text style={styles.warning}><Text style={styles.bold}>Contraindicated in infants {'<'} 3 months</Text></Text></Text>
              },
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response"
              },
              {
                text: "If starting concentration = 100 mg/mL",
                subitems: [
                  {
                    text: "Add 1 mL (100 mg) ketamine to 1 mL sterile water or D5W/NS = 50 mg/mL"
                  }
                ]
              },
              {
                text: "Inject slowly over 2 to 5 minutes (do not exceed 0.5 mg/kg per min)"
              },
              {
                text: "Rapid injection may cause respiratory depression and enhanced pressor response"
              },
              {
                text: "Use with caution with:",
                subitems: [
                  {
                    text: "hypertension"
                  },
                  {
                    text: "closed head injury"
                  },
                  {
                    text: "glaucoma"
                  },
                  {
                    text: "increased ICP"
                  },
                  {
                    text: "thyroid disorders"
                  }
                ]
              },
              {
                text: "Emergence reactions more common in older patients"
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 0
          },
          {
            isAgeRestricted: true,
            contraindicationAgeWeek: 14,
            contraindicationAgeMonth: 3,
            title: "IntraMuscular",
            Concentration: 100,
            Concentration_Units: "mg/mL",
            LowDose: 4,
            ModerateDose: 4.5,
            HighDose: 5,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0,
            PtModerateDose_Mass: 0,
            PtHighDose_Mass: 0,
            PtDose_Mass_Units: "mg",
            MaxDose: 150,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0,
            PtModerateDose_Volume: 0,
            PtHighDose_Volume: 0,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text><Text style={styles.warning}><Text style={styles.bold}>Contraindicated in infants {'<'} 3 months</Text></Text></Text>
              },
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response"
              },
              {
                text: "Use with caution with:",
                subitems: [
                  {
                    text: "hypertension"
                  },
                  {
                    text: "closed head injury"
                  },
                  {
                    text: "glaucoma"
                  },
                  {
                    text: "increased ICP"
                  },
                  {
                    text: "thyroid disorders"
                  }
                ]
              },
              {
                text: "Emergence reactions more common in older patients"
              },
              {
                text: "Consider max volume per injection site; may want to divide"
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Labetalol",
    hasBlackBox: false,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 5,
            Concentration_Units: "mg/mL",
            LowDose: 0.2,
            ModerateDose: 0.6,
            HighDose: 1,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 4,
            PtModerateDose_Mass: 12,
            PtHighDose_Mass: 2,
            PtDose_Mass_Units: "mg",
            MaxDose: 40,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0.8,
            PtModerateDose_Volume: 2.4,
            PtHighDose_Volume: 40,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text><Text style={styles.bold}>Dosing guidelines NOT established for neonates;</Text> dosing displayed for infants, children and adolescents. Use clinical judgement</Text>
              },
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response"
              },
              {
                text: "Slow IV push over 2 minutes; max rate 10 mg/minute"
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Levetiracetam (Keppra)",
    hasBlackBox: false,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 15,
            Concentration_Units: "mg/mL",
            LowDose: 60,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 1000,
            PtModerateDose_Mass: "NA",
            PtHighDose_Mass: "NA",
            PtDose_Mass_Units: "mg",
            MaxDose: 4500,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 66.7,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text><Text style={styles.bold}>Dosing guidelines NOT established for neonates;</Text> dosing displayed for infants, children & adolescents (limited data). Use clinical judgement</Text>
              },
              {
                text: "If starting concentration = 100 mg / 1 mL",
                subitems: [
                  {
                    text: "Add 1 mL (100mg) of levetiracetam to 5.7 mL NS = 15 mg/mL"
                  }
                ]
              },
              {
                text: "Infuse over 15 minutes"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: LIDOCAINE,
    hasBlackBox: false,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV or IO",
            Concentration: 20,
            Concentration_Units: "mg/mL",
            LowDose: 1,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0,
            PtDose_Mass_Units: "mg",
            MaxDose: 100,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "May repeat in 10 minutes, but if this is required, a continuous infusion should be started"
              },
              {
                text: "Infuse over 1 to 2 minutes"
              },
              {
                text: "Contraindicated in heart block"
              },
              {
                text: "Be prepared for bradycardia and hypotension"
              },
              {
                text: "Widening of QRS interval by more than 0.02 seconds or significant ventricular slowing suggests toxicity "
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          },
          {
            title: "ET",
            Concentration: 20,
            Concentration_Units: "mg/mL",
            LowDose: 2,
            ModerateDose: 2.5,
            HighDose: 3,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 40,
            PtModerateDose_Mass: 50,
            PtHighDose_Mass: 60,
            PtDose_Mass_Units: "mg",
            MaxDose: 100,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 2,
            PtModerateDose_Volume: 2.5,
            PtHighDose_Volume: 3,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response"
              },
              {
                text: "Administer and flush with 1 to 5 mL NS based on patient size, followed by 5 manual ventilations"
              },
              {
                text: "Contraindicated in heart block"
              },
              {
                text: "Be prepared for bradycardia and hypotension"
              },
              {
                text: "Widening of QRS interval by more than 0.02 seconds or significant ventricular slowing suggests toxicity"
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Lorazepam (Ativan)",
    hasBlackBox: true,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 1,
            Concentration_Units: "mg/mL",
            LowDose: 0.1,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 2,
            PtDose_Mass_Units: "mg",
            MaxDose: 4,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 2,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "If starting concentration = 2 mg / 1 mL",
                subitems: [
                  {
                    text: "Add 1 mL (2 mg) of lorazepam to 1 mL NS = 1 mg/mL"
                  }
                ]
              },
              {
                text: "Slow IV over 2 to 5 minutes"
              },
              {
                text: "Avoid rectal"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Magnesium Sulfate",
    hasBlackBox: false,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 60,
            Concentration_Units: "mg/mL",
            LowDose: 25,
            ModerateDose: 37.5,
            HighDose: 50,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0,
            PtModerateDose_Mass: 0,
            PtHighDose_Mass: 0,
            PtDose_Mass_Units: "mg",
            MaxDose: 2000,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0,
            PtModerateDose_Volume: 0,
            PtHighDose_Volume: 0,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response"
              },
              {
                text: "If starting concentration = 500 mg / 1 mL",
                subitems: [
                  {
                    text: "Add 1 mL magnesium to 7.3 mL NS to = 60 mg/mL"
                  }
                ]
              },
              {
                text: <Text style={styles.bold}>Infusion rates vary:</Text>,
                subitems: [
                  {
                    text: "Status Asthmaticus: 15 to 30 minutes"
                  },
                  {
                    text: "Torsades (no pulse): Rapid IV Push over several minutes"
                  },
                  {
                    text: "Torsades (with pulse): 10 to 15 minutes"
                  }
                ]
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: MANNITOL,
    hasBlackBox: false,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: true,
            ageRestrictionType: "NOT_RECOMMENDED_INFANTS",
            contraindicationAgeWeek: 5,
            contraindicationAgeMonth: 1,
            title: "IV",
            Concentration: 0.2,
            Concentration_Units: "g/mL(200mg/mL)",
            LowDose: 0.5,
            ModerateDose: 0.75,
            HighDose: 1,
            DoseUnits: "g/kg",
            PtLowDose_Mass: 10,
            PtModerateDose_Mass: 15,
            PtHighDose_Mass: 20,
            PtDose_Mass_Units: "g",
            PtLowDose_Volume: 50,
            PtModerateDose_Volume: 75,
            PtHighDose_Volume: 100,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text><Text style={styles.warning}><Text style={styles.bold}>NOT recommended for infants {'<'} 1 month</Text></Text></Text>
              },
              {
                text: <Text><Text style={styles.bold}>Vesicant; Avoid extravasation</Text> (central line perferred if available)</Text>
              },
              {
                text: "Must filter; use inline filter ≤ 5 microns"
              },
              {
                text: "Inspect for crystals prior to administration"
              },
              {
                text: "May repeat the dose once if no effect"
              },
              {
                text: "Infuse over 20 to 30 minutes"
              },
              {
                text: "Place indwelling urinary catheter"
              },
              {
                text: "Check serum osmolality after 2nd dose"
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Methylprednisolone (Solu-medrol)",
    hasBlackBox: false,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV",
            Concentration: 10,
            Concentration_Units: "mg/mL",
            LowDose: 2,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0,
            PtDose_Mass_Units: "mg",
            MaxDose: 80,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text><Text style={styles.bold}>Dosing guidelines NOT established for neonates;</Text> dosing displayed for infants, children and adolescents. Use clinical judgement</Text>
              },
              {
                text: "Step 1: Reconstitute 125 mg vial with 2 mL sterile water/NS"
              },
              {
                text: "Step 2: Futher dilute to 10 mg/mL: Add 2 mL (125 mg) methylprednisolone to 10.5 mL NS to = 10 mg/mL"
              },
              {
                text: "Infuse over 15 minutes"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Midazolam (Versed)",
    hasBlackBox: true,
    Indication: [
      {
        value: "Sedation",
        Route: [
          {
            isAgeRestricted: false,
            contraindicationAgeWeek: 26,
            contraindicationAgeMonth: 6,
            title: "IV",
            Concentration: 5,
            Concentration_Units: "mg/mL",
            LowDose: 0.1,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0,
            PtDose_Mass_Units: "mg",
            MaxDose: 2.5,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "May repeat dose every 2 to 3 minutes as needed to total dose: 6 mg (6 months to 5 years), 10 mg (6 years and older)"
              },
              {
                text: "Do NOT infuse rapidly in infants < 1 month"
              },
              {
                text: "Avoid if patient is hypotensive or in shock"
              },
              {
                text: "Be prepared to provide respiratory support"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          },
          {
            title: "IntraMuscular",
            Concentration: 5,
            Concentration_Units: "mg/mL",
            LowDose: 0.15,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0,
            PtDose_Mass_Units: "mg",
            MaxDose: 6,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: <Text><Text style={styles.warning}><Text style={styles.bold}>Infants {'<'} 1 month: dosing is lower: 0.05 to 0.1 mg/kg</Text></Text></Text>
              },
              {
                text: "Avoid if patient is hypotensive or in shock."
              },
              {
                text: "Be prepared to provide respiratory support"
              },
              {
                text: "Consider max volume per injection site; may want to divide"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          },
          {
            title: "Nasal",
            Concentration: 5,
            Concentration_Units: "mg/mL",
            LowDose: 0.2,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0,
            PtDose_Mass_Units: "mg",
            MaxDose: 10,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "Avoid if patient is hypotensive or in shock"
              },
              {
                text: "Use IV solution; 1/2 dose volume each nare"
              },
              {
                text: "Must use mucosal atomizer device"
              },
              {
                text: "Peak effect: 10 minutes"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      },
      {
        value: "Rapid Sequence Intubation",
        Route: [
          {
            isAgeRestricted: false,
            contraindicationAgeWeek: 26,
            contraindicationAgeMonth: 6,
            title: "IV",
            Concentration: 5,
            Concentration_Units: "mg/mL",
            LowDose: 0.1,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 5,
            PtDose_Mass_Units: "mg",
            MaxDose: 5,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 1,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "Do NOT infuse rapidly in neonates < 1month"
              },
              {
                text: "Avoid if patient is hypotensive or in shock"
              },
              {
                text: "Be prepared to provide respiratory support"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Morphine Sulfate",
    hasBlackBox: true,
    Indication: [
      {
        value: "NA",
        Route: [
          {
            isAgeRestricted: false,
            title: "IV or IntraMuscular",
            Concentration: 4,
            Concentration_Units: "mg/mL",
            LowDose: 0.1,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0,
            PtDose_Mass_Units: "mg",
            MaxDose: 5,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "Condsider 0.05 mg/kg for opioid naïve patients and neonates"
              },
              {
                text: "Avoid if patient is hypotensive or in shock"
              },
              {
                text: "Consider max volume per injection site; may want to divide"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          },
          {
            title: "IV or IntraMuscular",
            Concentration: 2,
            Concentration_Units: "mg/mL",
            LowDose: 0.1,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0,
            PtDose_Mass_Units: "mg",
            MaxDose: 5,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "Condsider 0.05 mg/kg for opioid naïve patients and neonates"
              },
              {
                text: "Avoid if patient is hypotensive or in shock"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Naloxone (Narcan)",
    hasBlackBox: false,
    Indication: [
      {
        value: "Opioid intoxication/overdose (full reversal)",
        Route: [
          {
            title: "IV or IO",
            Concentration: 0.4,
            Concentration_Units: "mg/mL",
            LowDose: 0.1,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0,
            PtDose_Mass_Units: "mg",
            MaxDose: 2,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "May need to repeat at higher doses"
              },
              {
                text: "Use with caution in chronic narcotic exposure - may precipitate withdrawal."
              },
              {
                text: "NOT recommended in newly born resuscitation"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          },
          {
            title: "ET",
            Concentration: 1,
            Concentration_Units: "mg/mL",
            LowDose: 0.2,
            ModerateDose: 0.25,
            HighDose: 0.3,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0,
            PtModerateDose_Mass: 0,
            PtHighDose_Mass: 0,
            PtDose_Mass_Units: "mg",
            MaxDose: 5,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0,
            PtModerateDose_Volume: 0,
            PtHighDose_Volume: 0,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response"
              },
              {
                text: "May repeat every 2 to 3 minutes "
              },
              {
                text: "Administer and flush with 1 to 5 mL NS based on patient size, followed by 5 manual ventilations"
              },
              {
                text: "NOT recommended in newly born resuscitation"
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 0
          },
          {
            title: "ET",
            Concentration: 0.4,
            Concentration_Units: "mg/mL",
            LowDose: 0.2,
            ModerateDose: 0.25,
            HighDose: 0.3,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0,
            PtModerateDose_Mass: 0,
            PtHighDose_Mass: 0,
            PtDose_Mass_Units: "mg",
            MaxDose: 5,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0,
            PtModerateDose_Volume: 0,
            PtHighDose_Volume: 0,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response"
              },
              {
                text: "May repeat every 2 to 3 minutes "
              },
              {
                text: "Administer and flush with 1 to 5 mL NS based on patient size, followed by 5 manual ventilations"
              },
              {
                text: "NOT recommended in newly born resuscitation"
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 0
          },
          {
            title: "IntraMuscular or SubQ",
            Concentration: 1,
            Concentration_Units: "mg/mL",
            LowDose: 0.1,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0,
            PtDose_Mass_Units: "mg",
            MaxDose: 2,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "Infants and Children < 5 years or ≤ 20 kg: 0.1 mg/kg/dose"
              },
              {
                text: "Children ≥ 5 years or >20 kg: 2 mg/dose (full contents of the 2 mg Auto-injector)"
              },
              {
                text: "May repeat every 2 to 3 minutes"
              },
              {
                text: "NOT recommended in newly born resuscitation"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          },
          {
            title: "IntraMuscular or SubQ",
            Concentration: 0.4,
            Concentration_Units: "mg/mL",
            LowDose: 0.1,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0,
            PtDose_Mass_Units: "mg",
            MaxDose: 2,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "Infants and Children < 5 years or ≤ 20 kg: 0.1 mg/kg/dose"
              },
              {
                text: "Children ≥ 5 years or >20 kg: 2 mg/dose (full contents of the 2 mg Auto-injector)"
              },
              {
                text: "May repeat every 2 to 3 minutes"
              },
              {
                text: "NOT recommended in newly born resuscitation"
              }
            ],
            DosingType: "SingleDose",
            VolumeOnly: 0
          },
          {
            title: "Nasal",
            Comments: [
              {
                text: "Using parenteral solution:",
                subitems: [
                  {
                    text: "For patients < 13 years of age, give 2 mg (single dose via atomizer)"
                  },
                  {
                    text: "For patients ≥ 13 years of age, give 4 mg (single dose via atomizer)"
                  }
                ]
              },
              {
                text: "Using nasal spray:",
                subitems: [
                  {
                    text: "May repeat every 2 to 3 minutes in alternating nostrils"
                  },
                  {
                    text: <Text style={styles.bold}>NOT recommended in newly born resuscitation</Text>
                  }
                ]
              }
            ],
            DosingType: "Other (Comment Only)",
            VolumeOnly: 0
          }
        ]
      },
      {
        value: "Respiratory depression from therapeutic opioid dosing",
        Route: [
          {
            title: "IV",
            Concentration: 0.04,
            Concentration_Units: "mg/mL",
            LowDose: 0.001,
            ModerateDose: 0.008,
            HighDose: 0.015,
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0,
            PtModerateDose_Mass: 0,
            PtHighDose_Mass: 0,
            PtDose_Mass_Units: "mg",
            MaxDose: 2,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 0,
            PtModerateDose_Volume: 0,
            PtHighDose_Volume: 0,
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response"
              },
              {
                text: "If starting concentration = 1 mg / 1 mL",
                subitems: [
                  {
                    text: "Add 1 mL (1 mg) naloxone to 24 mL NS = 0.04 mg/mL (40 mcg/mL)"
                  }
                ]
              },
              {
                text: "If starting concentration = 0.4 mg / 1 mL",
                subitems: [
                  {
                    text: "Add 1 mL (0.4 mg) naloxone to 9 mL NS = 0.04 mg/mL (40 mcg/mL) "
                  }
                ]
              },
              {
                text: "May need to repeat at higher doses"
              },
              {
                text: "Use with caution in chronic narcotic exposure - may precipitate withdrawal"
              },
              {
                text: "NOT recommended in newly born resuscitation"
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 0
          }
        ]
      }
    ]
  },
  {
    Drug: "Phenobarbital",
    hasBlackBox: false,
    Indication: [
      {
        Route: [
          {
            totalDoseMessage: true,
            isAgeRestricted: false,
            Comments: [
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response"
              },
              {
                text: "If starting concentration = 65 mg / 1 mL",
                subitems: [
                  {
                    text: "Add 2 mL phenobarbital to 11 mL NS to = 10 mg/mL"
                  }
                ]
              },
              {
                text: "If starting concentration = 130 mg / 1 mL",
                subitems: [
                  {
                    text: "Add 1 mL phenobarbital to 12 mL NS to = 10 mg/mL"
                  }
                ]
              },
              {
                text: "Infuse over 20 to 30 minutes not to exceed 30 mg/minute"
              },
              {
                text: <Text>May repeat once after 10 to 15 minutes to a max TOTAL loading dose of 30 to 40 mg/kg, <Text style={styles.bold}>NOT to exceed 1,000 mg TOTAL dose</Text></Text>
              },
              {
                text: "Maximal loading dose may cause respiratory depression"
              },
              {
                text: "Avoid IntraMuscular"
              }
            ],
            Concentration: 10,
            Concentration_Units: "mg/mL",
            DoseUnits: "mg/kg",
            DosingType: "LowMedHigh",
            HighDose: 20,
            LowDose: 15,
            MaxDose: 1000,
            MaxDose_Interval: "dose",
            MaxDose_Units: "mg",
            ModerateDose: 17.5,
            PtDose_Mass_Units: "mg(Loading dose)",
            PtDose_Volume_Units: "mL",
            PtHighDose_Mass: 0,
            PtHighDose_Volume: 0,
            PtLowDose_Mass: 0,
            PtLowDose_Volume: 0,
            PtModerateDose_Mass: 0,
            PtModerateDose_Volume: 0,
            title: "IV",
            VolumeOnly: 0
          }
        ],
        value: "NA"
      }
    ]
  },
  {
    Drug: "Procainamide (Pronestyl)",
    hasBlackBox: true,
    Indication: [
      {
        Route: [
          {
            isAgeRestricted: false,
            Comments: [
              {
                text: <Text style={styles.bold}>Use with extreme caution in neonates at half dosing (7.5 mg/kg) over 60 minutes</Text>
              },
              {
                text: "If starting concentration = 100 mg / 1 mL",
                subitems: [
                  {
                    text: "Add 1 mL (100mg) of procainamide to 4 mL NS = 20 mg/mL"
                  }
                ]
              },
              {
                text: "If starting concentration = 500 mg / 1 mL",
                subitems: [
                  {
                    text: "Add 1 mL (500mg) of procainamide to 24 mL NS = 20 mg/mL"
                  }
                ]
              },
              {
                text: "Infuse over 30 to 60 minutes"
              },
              {
                text: "May induce heart block"
              },
              {
                text: "Do not use for pulseless states"
              },
              {
                text: "Avoid drugs that prolong QT"
              }
            ],
            Concentration: 20,
            Concentration_Units: "mg/mL",
            DoseUnits: "mg/kg",
            DosingType: "SingleDose",
            LowDose: 15,
            MaxDose: 100,
            MaxDose_Interval: "dose",
            MaxDose_Units: "mg",
            PtDose_Mass_Units: "mg",
            PtDose_Volume_Units: "mL",
            PtLowDose_Mass: 0,
            PtLowDose_Volume: 0,
            title: "IV",
            VolumeOnly: 0
          }
        ],
        value: "NA"
      }
    ]
  },
  {
    Drug: "Rocuronium (Zemuron)",
    hasBlackBox: false,
    Paralytic: "Paralytic",
    Indication: [
      {
        Route: [
          {
            isAgeRestricted: false,
            Comments: [
              {
                text: <Text style={styles.warning}>WARNING:  PARALYTIC</Text>
              },
              {
                text: "Only those trained in its use should administer"
              },
              {
                text: "NOT a sedative"
              },
              {
                text: "Ventilatory support required"
              }
            ],
            Concentration: 10,
            Concentration_Units: "mg/mL",
            DoseUnits: "mg/kg",
            DosingType: "SingleDose",
            LowDose: 1,
            MaxDose: 100,
            MaxDose_Interval: "dose",
            MaxDose_Units: "mg",
            PtDose_Mass_Units: "mg",
            PtDose_Volume_Units: "mL",
            PtLowDose_Mass: 0,
            PtLowDose_Volume: 0,
            title: "IV",
            VolumeOnly: 0
          }
        ],
        value: "NA"
      }
    ]
  },
  {
    Drug: "Succinylcholine",
    hasBlackBox: true,
    Paralytic: "Paralytic",
    Indication: [
      {
        Route: [
          {
            isAgeRestricted: false,
            Comments: [
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response"
              },
              {
                text: <Text style={styles.warning}>WARNING:  PARALYTIC</Text>
              },
              {
                text: "Only those trained in its use should administer"
              },
              {
                text: "NOT a sedative"
              },
              {
                text: "Ventilatory support required"
              },
              {
                text: "Short half-life"
              },
              {
                text: "Contraindications:",
                subitems: [
                  {
                    text: "Malignant hyperthermia (personal or family history)"
                  },
                  {
                    text: "Myopathies"
                  },
                  {
                    text: "Hyperkalemia"
                  }
                ]
              }
            ],
            Concentration: 20,
            Concentration_Units: "mg/mL",
            DoseUnits: "mg/kg",
            DosingType: "LowMedHigh",
            HighDose: 2,
            LowDose: 1,
            MaxDose: 150,
            MaxDose_Interval: "dose",
            MaxDose_Units: "mg",
            ModerateDose: 1.5,
            PtDose_Mass_Units: "mg",
            PtDose_Volume_Units: "mL",
            PtHighDose_Mass: 40,
            PtHighDose_Volume: 2,
            PtLowDose_Mass: 20,
            PtLowDose_Volume: 1,
            PtModerateDose_Mass: 30,
            PtModerateDose_Volume: 1.5,
            title: "IV",
            VolumeOnly: 0
          }
        ],
        value: "NA"
      }
    ]
  },
  {
    Drug: "Terbutaline",
    hasBlackBox: false,
    Indication: [
      {
        Route: [
          {
            isAgeRestricted: false,
            Comments: [
              {
                text: <Text><Text style={styles.bold}>Dosing guidelines NOT established for neonates/infants;</Text> dosing displayed for children and adolescents. Use clinical judgement</Text>
              },
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response"
              },
              {
                text: "May repeat every 15 minutes x 3 doses "
              }
            ],
            Concentration: 1000,
            Concentration_Units: "mcg/mL",
            DoseUnits: "mcg/kg",
            DosingType: "LowMedHigh",
            HighDose: 10,
            LowDose: 5,
            MaxDose: 250,
            MaxDose_Interval: "dose",
            MaxDose_Units: "mcg",
            ModerateDose: 7.5,
            PtDose_Mass_Units: "mcg",
            PtDose_Volume_Units: "mL",
            PtHighDose_Mass: 0,
            PtHighDose_Volume: 0,
            PtLowDose_Mass: 0,
            PtLowDose_Volume: 0,
            PtModerateDose_Mass: 0,
            PtModerateDose_Volume: 0,
            title: "SubQ",
            VolumeOnly: 0
          }
        ],
        value: "NA"
      }
    ]
  },
  {
    Drug: VALPORIC_ACID,
    hasBlackBox: true,
    Indication: [
      {
        Route: [
          {
            isAgeRestricted: true,
            ageRestrictionType: "AVOID_CHILDREN",
            contraindicationAgeWeek: 104,
            contraindicationAgeMonth: 26,
            contraindicationAgeYear: 2,
            Comments: [
              {
                text: <Text><Text style={styles.warning}><Text style={styles.bold}>Avoid in children {'<'} 2 years</Text></Text></Text>
              },
              {
                text: <Text>Reserve for <Text style={styles.bold}>REFRACTORY</Text> status epilepticus</Text>
              },
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response"
              },
              {
                text: "If starting concentration = 100 mg / 1 mL",
                subitems: [
                  {
                    text: "Add 1 mL (100mg) of valproic acid to 19 mL NS = 5 mg/mL"
                  }
                ]
              },
              {
                text: "Infuse over 60 minutes not to exceed 20 mg/minute"
              },
              {
                text: "Rapid infusion rates may be associated with increased adverse effects"
              },
              {
                text: <Text><Text style={styles.bold}>Hazardous drug:</Text> careful handling, administration, and disposal required</Text>
              }
            ],
            Concentration: 5,
            Concentration_Units: "mg/mL",
            DoseUnits: "mg/kg",
            DosingType: "LowMedHigh",
            HighDose: 40,
            LowDose: 20,
            MaxDose: 3000,
            MaxDose_Interval: "dose",
            MaxDose_Units: "mg",
            ModerateDose: 30,
            PtDose_Mass_Units: "mg",
            PtDose_Volume_Units: "mL",
            PtHighDose_Mass: 800,
            PtHighDose_Volume: 8,
            PtLowDose_Mass: 400,
            PtLowDose_Volume: 4,
            PtModerateDose_Mass: 600,
            PtModerateDose_Volume: 6,
            title: "IV",
            VolumeOnly: 0
          }
        ],
        value: "NA"
      }
    ]
  },
  {
    Drug: "Vancomycin",
    hasBlackBox: true,
    Indication: [
      {
        Route: [
          {
            isAgeRestricted: false,
            Comments: [
              {
                text: "Must dilute to 5 mg/mL"
              },
              {
                text: "Irritant"
              },
              {
                text: "Infuse over 60 minutes"
              },
              {
                text: "Slow infusion rate for Redman's syndrome to 2 hours"
              },
              {
                text: "Levels should be checked after initial dose"
              }
            ],
            Concentration: 5,
            Concentration_Units: "mg/mL",
            DoseUnits: "mg/kg",
            DosingType: "LowMedHigh",
            HighDose: 15,
            LowDose: 10,
            MaxDose: 1000,
            MaxDose_Interval: "dose",
            MaxDose_Units: "mg",
            ModerateDose: 12.5,
            PtDose_Mass_Units: "mg",
            PtDose_Volume_Units: "mL",
            PtHighDose_Mass: 0,
            PtHighDose_Volume: 0,
            PtLowDose_Mass: 0,
            PtLowDose_Volume: 0,
            PtModerateDose_Mass: 0,
            PtModerateDose_Volume: 0,
            title: "IV",
            VolumeOnly: 0
          }
        ],
        value: "NA"
      }
    ]
  },
  {
    Drug: "Vecuronium",
    hasBlackBox: true,
    Paralytic: "Paralytic",
    Indication: [
      {
        Route: [
          {
            isAgeRestricted: false,
            Comments: [
              {
                text: "*Unless otherwise noted, start with low dose and titrate to response"
              },
              {
                text: "Reconstitute 10 mg vial with 10 mL NS = 1 mg/mL"
              },
              {
                text: <Text style={styles.warning}>WARNING: PARALYTIC</Text>
              },
              {
                text: "Only those trained in its use should administer"
              },
              {
                text: "NOT a sedative"
              },
              {
                text: "Ventilatory support required"
              },
              {
                text: "Long half-life"
              },
              {
                text: "Consider 0.2 mg/kg dose for intubation"
              }
            ],
            Concentration: 1,
            Concentration_Units: "mg/mL",
            DoseUnits: "mg/kg",
            DosingType: "SingleDose",
            LowDose: 0.1,
            MaxDose: 20,
            MaxDose_Interval: "dose",
            MaxDose_Units: "mg",
            PtDose_Mass_Units: "mg",
            PtDose_Volume_Units: "mL",
            PtLowDose_Mass: 0,
            PtLowDose_Volume: 0,
            title: "IV",
            VolumeOnly: 0
          }
        ],
        value: "NA"
      }
    ]
  },
  {
    Drug: "Xopenex",
    hasBlackBox: false,
    Indication: [
      {
        Route: [
          {
            isAgeRestricted: false,
            Comments: [
              {
                text: "Infants and Children: 1.25 mg/dose"
              },
              {
                text: "Adolescents: 1.25 to 2.5 mg/dose"
              }
            ],
            DosingType: "Other (Comment Only)",
            title: "Nebulization",
            VolumeOnly: 0
          }
        ],
        value: "NA"
      }
    ]
  },
  {
    Drug: "Sugammadex",
    hasBlackBox: false,
    Indication: [
      {
        Route: [
          {
            isAgeRestricted: false,
            Comments: [
              {
                text: <Text><Text style={styles.bold}>Dosing NOT established for neonates and infants {'<'}2 years;</Text> dosing displayed for children & adolescents (limited data). Use clinical judgement</Text>
              },
              {
                text: "Administer slow IV push to avoid serious adverse events e.g., bradycardia, asystole"
              },
              {
                text: "Only those trained in its use should administer"
              },
              {
                text: "For emergent reversal of non-depolarizing paralytics"
              },
              {
                text: "Not for reversal of succinylcholine"
              },
              {
                text: "Rocuronium and vecuronium will not cause paralysis for 24 hours following administration of sugammadex"
              }
            ],
            Concentration: 100,
            Concentration_Units: "mg/mL",
            DoseUnits: "mg/kg",
            DosingType: "SingleDose",
            LowDose: 16,
            PtDose_Mass_Units: "mg",
            PtDose_Volume_Units: "mL",
            PtHighDose_Mass: 0,
            PtHighDose_Volume: 0,
            PtLowDose_Mass: 0,
            PtLowDose_Volume: 0,
            PtModerateDose_Mass: 0,
            PtModerateDose_Volume: 0,
            title: "IV",
            VolumeOnly: 0
          }
        ],
        value: "NA"
      }
    ]
  }
]
