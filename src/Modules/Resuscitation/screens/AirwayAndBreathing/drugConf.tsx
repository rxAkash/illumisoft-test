import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bold: {
    fontWeight: '600'
  },
  red: {
    fontWeight: '600',
    color: 'red'
  }
})

export const MEDICATIONS = [
  {
    Category: "Sedatives",
    CategoryItem: [
      {
        Drug: "Ketamine",
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
                PtLowDose_Mass: 20,
                PtModerateDose_Mass: 30,
                PtHighDose_Mass: 40,
                PtDose_Mass_Units: "mg",
                MaxDose: 150,
                MaxDose_Units: "mg",
                MaxDose_Interval: "dose",
                PtLowDose_Volume: 0.4,
                PtModerateDose_Volume: 0.6,
                PtHighDose_Volume: 0.8,
                PtDose_Volume_Units: "mL",
                Comments: [
                  {
                    text: "*Unless otherwise noted, start with low dose and titrate to response"
                  },
                  {
                    text: <Text style={styles.bold}>Sedation indication only for those {">"} 3 months of age</Text>
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
            value: "NA",
            Route: [
              {
                isAgeRestricted: false,
                title: "IV",
                Concentration: 50,
                Concentration_Units: "mcg/mL",
                LowDose: 2,
                ModerateDose: "NA",
                HighDose: "NA",
                DoseUnits: "mcg/kg",
                PtLowDose_Mass: 40,
                PtModerateDose_Mass: "NA",
                PtHighDose_Mass: "NA",
                PtDose_Mass_Units: "mcg",
                MaxDose: 100,
                MaxDose_Units: "mcg",
                MaxDose_Interval: "dose",
                PtLowDose_Volume: 0.8,
                PtModerateDose_Volume: "NA",
                PtHighDose_Volume: "NA",
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
          }
        ]
      },
      {
        Drug: "Midazolam (Versed)",
        hasBlackBox: true,
        Indication: [
          {
            value: "NA",
            Route: [
              {
                isAgeRestricted: false,
                contraindicationAgeWeek: 26,
                contraindicationAgeMonth: 6,
                title: "IV",
                Concentration: 5,
                Concentration_Units: "mg/mL",
                LowDose: 0.1,
                ModerateDose: 0.15,
                HighDose: 0.2,
                DoseUnits: "mg/kg",
                PtLowDose_Mass: 2,
                PtModerateDose_Mass: 3,
                PtHighDose_Mass: 4,
                PtDose_Mass_Units: "mg",
                MaxDose: 5,
                MaxDose_Units: "mg",
                MaxDose_Interval: "dose",
                PtLowDose_Volume: 0.4,
                PtModerateDose_Volume: 0.6,
                PtHighDose_Volume: 0.8,
                PtDose_Volume_Units: "mL",
                Comments: [
                  {
                    text: "Do NOT dilute"
                  },
                  {
                    text: "Avoid if patient is hypotensive or in shock."
                  },
                  {
                    text: "Be prepared to provide respiratory support "
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
        Drug: "Etomidate",
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
                ModerateDose: "NA",
                HighDose: "NA",
                DoseUnits: "mg/kg",
                PtLowDose_Mass: 6,
                PtModerateDose_Mass: "NA",
                PtHighDose_Mass: "NA",
                PtDose_Mass_Units: "mg",
                MaxDose: 20,
                MaxDose_Units: "mg",
                MaxDose_Interval: "dose",
                PtLowDose_Volume: 0,
                PtModerateDose_Volume: "NA",
                PtHighDose_Volume: "NA",
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
      }
    ]
  },
  {
    Category: "Paralytics",
    CategoryItem: [
      {
        Drug: "Rocuronium (Zemuron)",
        Paralytic: "Paralytic",
        Indication: [
          {
            value: "NA",
            Route: [
              {
                isAgeRestricted: false,
                title: "IV",
                Concentration: 10,
                Concentration_Units: "mg/mL",
                LowDose: 1,
                ModerateDose: "NA",
                HighDose: "NA",
                DoseUnits: "mg/kg",
                PtLowDose_Mass: 20,
                PtModerateDose_Mass: "NA",
                PtHighDose_Mass: "NA",
                PtDose_Mass_Units: "mg",
                MaxDose: 100,
                MaxDose_Units: "mg",
                MaxDose_Interval: "dose",
                PtLowDose_Volume: 2,
                PtModerateDose_Volume: "NA",
                PtHighDose_Volume: "NA",
                PtDose_Volume_Units: "mL",
                Comments: [
                  {
                    text: <Text style={styles.red}>WARNING: PARALYTIC</Text>
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
      },
      {
        Drug: "Succinylcholine",
        Paralytic: "Paralytic",
        hasBlackBox: true,
        Indication: [
          {
            value: "NA",
            Route: [
              {
                isAgeRestricted: false,
                title: "IV",
                Concentration: 20,
                Concentration_Units: "mg/mL",
                LowDose: 1,
                ModerateDose: 1.5,
                HighDose: 2,
                DoseUnits: "mg/kg",
                PtLowDose_Mass: 20,
                PtModerateDose_Mass: 30,
                PtHighDose_Mass: 40,
                PtDose_Mass_Units: "mg",
                MaxDose: 150,
                MaxDose_Units: "mg",
                MaxDose_Interval: "dose",
                PtLowDose_Volume: 1,
                PtModerateDose_Volume: 1.5,
                PtHighDose_Volume: 2,
                PtDose_Volume_Units: "mL",
                Comments: [
                  {
                    text: "*Unless otherwise noted, start with low dose and titrate to response."
                  },
                  {
                    text: <Text style={styles.red}>WARNING: PARALYTIC</Text>
                  },
                  {
                    text: "Only those trained in its use should administer"
                  },
                  {
                    text: "NOT a sedative "
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
                DosingType: "LowMedHigh",
                VolumeOnly: 0
              }
            ]
          }
        ]
      }
    ]
  },
  {
    Category: "Optional/Adjunct",
    CategoryItem: [
      {
        Drug: "Atropine Sulfate",
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
                ModerateDose: "NA",
                HighDose: "NA",
                DoseUnits: "mg/kg",
                PtLowDose_Mass: 0.4,
                PtModerateDose_Mass: "NA",
                PtHighDose_Mass: "NA",
                PtDose_Mass_Units: "mg",
                MaxDose: 0.5,
                MaxDose_Units: "mg",
                MaxDose_Interval: "dose",
                PtLowDose_Volume: 4,
                PtModerateDose_Volume: "NA",
                PtHighDose_Volume: "NA",
                PtDose_Volume_Units: "mL",
                Comments: [
                  {
                    text: "Use for symptomatic bradycardia caused by vagal stimulation or primary AV block after managing the airway"
                  },
                  {
                    text: "The use of a minimum dose (0.1mg) is controversial."
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
  },
  {
    Category: "Post Intubation: Paralytic",
    CategoryItem: [
      {
        Drug: "Rocuronium (Zemuron)",
        Paralytic: "Paralytic",
        Indication: [
          {
            value: "NA",
            Route: [
              {
                isAgeRestricted: false,
                title: "IV",
                Concentration: 10,
                Concentration_Units: "mg/mL",
                LowDose: 1,
                ModerateDose: "NA",
                HighDose: "NA",
                DoseUnits: "mg/kg",
                PtLowDose_Mass: 20,
                PtModerateDose_Mass: "NA",
                PtHighDose_Mass: "NA",
                PtDose_Mass_Units: "mg",
                MaxDose: 100,
                MaxDose_Units: "mg",
                MaxDose_Interval: "dose",
                PtLowDose_Volume: 2,
                PtModerateDose_Volume: "NA",
                PtHighDose_Volume: "NA",
                PtDose_Volume_Units: "mL",
                Comments: [
                  {
                    text: <Text style={styles.red}>WARNING: PARALYTIC</Text>
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
      },
      {
        Drug: "Vecuronium",
        hasBlackBox: true,
        Paralytic: "Paralytic",
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
                ModerateDose: "NA",
                HighDose: "NA",
                DoseUnits: "mg/kg",
                PtLowDose_Mass: 2,
                PtModerateDose_Mass: "NA",
                PtHighDose_Mass: "NA",
                PtDose_Mass_Units: "mg",
                MaxDose: 20,
                MaxDose_Units: "mg",
                MaxDose_Interval: "dose",
                PtLowDose_Volume: 2,
                PtModerateDose_Volume: "NA",
                PtHighDose_Volume: "NA",
                PtDose_Volume_Units: "mL",
                Comments: [
                  {
                    text: "*Unless otherwise noted, start with low dose and titrate to response."
                  },
                  {
                    text: <Text style={styles.red}>WARNING: PARALYTIC</Text>
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
                    text: "Dilute to 1mg/mL:",
                    subitems: [
                      {
                        text: "10mL NS + 10mg vial = 1mg/mL"
                      }
                    ]
                  },
                  {
                    text: "Consider 0.2mg/kg dose for intubation"
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
  },
  {
    Category: "Post Intubation: Continued Sedation",
    CategoryItem: [
      {
        Drug: "Fentanyl",
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
                ModerateDose: "NA",
                HighDose: "NA",
                DoseUnits: "mcg/kg",
                PtLowDose_Mass: 20,
                PtModerateDose_Mass: "NA",
                PtHighDose_Mass: "NA",
                PtDose_Mass_Units: "mcg",
                MaxDose: 100,
                MaxDose_Units: "mcg",
                MaxDose_Interval: "dose",
                PtLowDose_Volume: 0.4,
                PtModerateDose_Volume: "NA",
                PtHighDose_Volume: "NA",
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
          }
        ]
      },
      {
        Drug: "Midazolam (Versed)",
        hasBlackBox: true,
        Indication: [
          {
            value: "NA",
            Route: [
              {
                isAgeRestricted: false,
                contraindicationAgeWeek: 26,
                contraindicationAgeMonth: 6,
                title: "IV",
                Concentration: 5,
                Concentration_Units: "mg/mL",
                LowDose: 0.1,
                ModerateDose: "NA",
                HighDose: "NA",
                DoseUnits: "mg/kg",
                PtLowDose_Mass: 2,
                PtModerateDose_Mass: "NA",
                PtHighDose_Mass: "NA",
                PtDose_Mass_Units: "mg",
                MaxDose: 5,
                MaxDose_Units: "mg",
                MaxDose_Interval: "dose",
                PtLowDose_Volume: 0.4,
                PtModerateDose_Volume: "NA",
                PtHighDose_Volume: "NA",
                PtDose_Volume_Units: "mL",
                Comments: [
                  {
                    text: "Do NOT dilute"
                  },
                  {
                    text: "Avoid if patient is hypotensive or in shock."
                  },
                  {
                    text: "Be prepared to provide respiratory support "
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
  }
]
