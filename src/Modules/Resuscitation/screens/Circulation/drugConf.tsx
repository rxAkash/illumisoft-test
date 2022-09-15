export const CODE_DRUGS = [
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
                text: "Use of minimum dose (0.1 mg) is controversial"
              },
              {
                text: "Rapid IV injection"
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
            Concentration: 1,
            Concentration_Units: "mEq/mL",
            LowDose: 1,
            ModerateDose: "NA",
            HighDose: "NA",
            DoseUnits: "mEq/kg",
            PtLowDose_Mass: 20,
            PtModerateDose_Mass: "NA",
            PtHighDose_Mass: "NA",
            PtDose_Mass_Units: "mEq",
            MaxDose: 50,
            MaxDose_Units: "mEq",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 20,
            PtModerateDose_Volume: "NA",
            PtHighDose_Volume: "NA",
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "Dilute 8.4% (1 mEq/mL solution) 1:1 with sterile water or D5W = 0.5 mEq/mL - use for neonates and infants"
              },
              {
                text: "<b>Vesicant; Avoid extravasation</b>"
              },
              {
                text: "<b>Infusion rates vary</b>",
                subitems: [
                  {
                    text: "Neonates and Infants: Admnister 0.5 mEq/ml solution: administer slowly, maximum rate: 10 mEq/minute"
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
    Drug: "Dextrose (Glucose)",
    Indication: [
      {
        value: "NA",
        Route: [
          {
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
                text: "*Unless otherwise noted, start with low dose and titrate to response."
              },
              {
                text: "Dilute to D10W (10mg/mL) for peripheral administration",
                subitems: [
                  {
                    text: "2mL D25W + 3mL NS/sterile water to = D10W"
                  }
                ]
              },
              {
                text: "OR",
                subitems: [
                  {
                    text: "1mL D50W + 4mL NS/sterile water to = D10W"
                  }
                ]
              },
              {
                text: "Infuse slowly over 3 to 5 minutes"
              },
              {
                text: "Blood glucose should be determined prior to and following administration"
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 0
          },
          {
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
                text: "*Unless otherwise noted, start with low dose and titrate to response."
              },
              {
                text: "Dilute to D12.5W (12.5 mg/mL) for peripheral administration",
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
                text: "Infuse slowly over 3 to 5 minutes"
              },
              {
                text: "Blood glucose should be determined prior to and following administration"
              }
            ],
            DosingType: "LowMedHigh",
            VolumeOnly: 0
          },
          {
            title: "IV",
            Concentration: 0.25,
            Concentration_Units: "g/mL",
            LowDose: "NA",
            ModerateDose: "NA",
            HighDose: "NA",
            DoseUnits: "NA",
            PtLowDose_Mass: "NA",
            PtModerateDose_Mass: "NA",
            PtHighDose_Mass: "NA",
            PtDose_Mass_Units: "NA",
            MaxDose: "NA",
            MaxDose_Units: "NA",
            MaxDose_Interval: "NA",
            PtLowDose_Volume: "NA",
            PtModerateDose_Volume: "NA",
            PtHighDose_Volume: "NA",
            PtDose_Volume_Units: "NA",
            Comments: [
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
            title: "IV",
            Concentration: 0.5,
            Concentration_Units: "g/mL",
            LowDose: "NA",
            ModerateDose: "NA",
            HighDose: "NA",
            DoseUnits: "NA",
            PtLowDose_Mass: "NA",
            PtModerateDose_Mass: "NA",
            PtHighDose_Mass: "NA",
            PtDose_Mass_Units: "NA",
            MaxDose: "NA",
            MaxDose_Units: "NA",
            MaxDose_Interval: "NA",
            PtLowDose_Volume: "NA",
            PtModerateDose_Volume: "NA",
            PtHighDose_Volume: "NA",
            PtDose_Volume_Units: "NA",
            Comments: [
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
    Drug: "Epinephrine",
    Indication: [
      {
        value: "High Dose Endotracheal",
        Route: [
          {
            title: "ET",
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
            MaxDose: 2.5,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 2,
            PtModerateDose_Volume: "NA",
            PtHighDose_Volume: "NA",
            PtDose_Volume_Units: "mL",
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
            ModerateDose: "NA",
            HighDose: "NA",
            DoseUnits: "mg/kg",
            PtLowDose_Mass: 0.2,
            PtModerateDose_Mass: "NA",
            PtHighDose_Mass: "NA",
            PtDose_Mass_Units: "mg",
            MaxDose: 1,
            MaxDose_Units: "mg",
            MaxDose_Interval: "dose",
            PtLowDose_Volume: 2,
            PtModerateDose_Volume: "NA",
            PtHighDose_Volume: "NA",
            PtDose_Volume_Units: "mL",
            Comments: [
              {
                text: "Repeat every 3-5minutes as needed"
              },
              {
                text: "May induce dysrhythmia"
              },
              {
                text: "HDE not shown to improve survival, but may consider in exceptional circumstances such as beta-blocker overdose."
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