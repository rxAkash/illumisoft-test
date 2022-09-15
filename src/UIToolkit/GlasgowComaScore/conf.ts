
export const VITAL_SCORES = [
  {
    titlehead: "Adult Glasgow Coma Score",
    ageMin: 6,
    ageMax: 999,
    content: [
      {
        title: "Eye Opening",
        listData: [
          {
            lable: "Spontaneous",
            value: 4
          },
          {
            lable: "To Speech",
            value: 3
          },
          {
            lable: "To Pain",
            value: 2
          },
          {
            lable: "No Response",
            value: 1
          }
        ]
      },
      {
        title: "Verbal Response",
        listData: [
          {
            lable: "Oriented, Appropriate",
            value: 5
          },
          {
            lable: "Confused",
            value: 4
          },
          {
            lable: "Inappropriate Word",
            value: 3
          },
          {
            lable: "Incomprehensible Sounds",
            value: 2
          },
          {
            lable: "No Response",
            value: 1
          },
          {
            lable: "Intubate",
            value: "T"
          }
        ]
      },
      {
        title: "Motor Response",
        listData: [
          {
            lable: "Obeys Commands",
            value: 6
          },
          {
            lable: "Localizes Pain",
            value: 5
          },
          {
            lable: "Withdraws to Pain",
            value: 4
          },
          {
            lable: "Abnormal Flexion (Decorticate Posturing)",
            value: 3
          },
          {
            lable: "Abnormal Flexion (Decerebrate Posturing)",
            value: 2
          },
          {
            lable: "No Response",
            value: 1
          }
        ]
      }
    ]
  },
  {
    titlehead: "Pediatric Glasgow Coma Score",
    ageMin: 1,
    ageMax: 6,
    content: [
      {
        title: "Eye Opening",
        listData: [
          {
            lable: "Spontaneous",
            value: 4
          },
          {
            lable: "To Speech",
            value: 3
          },
          {
            lable: "To Pain",
            value: 2
          },
          {
            lable: "No Response",
            value: 1
          }
        ]
      },
      {
        title: "Verbal Response",
        listData: [
          {
            lable: "Appropriate Words/Phrases",
            value: 5
          },
          {
            lable: "Inappropriate Words",
            value: 4
          },
          {
            lable: "Persistent Cries and Screams",
            value: 3
          },
          {
            lable: "Grunts",
            value: 2
          },
          {
            lable: "No Response",
            value: 1
          }
        ]
      },
      {
        title: "Motor Response",
        listData: [
          {
            lable: "Spontaneous Movements",
            value: 6
          },
          {
            lable: "Withdraws to Touch/Localizes Pain",
            value: 5
          },
          {
            lable: "Withdraws to Pain",
            value: 4
          },
          {
            lable: "Abnormal Flexion (Decorticate Posturing)",
            value: 3
          },
          {
            lable: "Abnormal Extension (Decerebrate Posturing)",
            value: 2
          },
          {
            lable: "No Response",
            value: 1
          }
        ]
      }
    ]
  },
  {
    titlehead: "Infant Glasgow Coma Score",
    ageMin: 0,
    ageMax: 1,
    content: [
      {
        title: "Eye Opening",
        listData: [
          {
            lable: "Spontaneous",
            value: 4
          },
          {
            lable: "To Shout",
            value: 3
          },
          {
            lable: "To Pain",
            value: 2
          },
          {
            lable: "No Response",
            value: 1
          }
        ]
      },
      {
        title: "Verbal Response",
        listData: [
          {
            lable: "Smiles/Coos Appropriately",
            value: 5
          },
          {
            lable: "Cries, Consolable",
            value: 4
          },
          {
            lable: "Cries to Pain/Irritable",
            value: 3
          },
          {
            lable: "Moans to Pain/Grunts",
            value: 2
          },
          {
            lable: "No Response",
            value: 1
          }
        ]
      },
      {
        title: "Motor Response",
        listData: [
          {
            lable: "Spontaneous Movements",
            value: 6
          },
          {
            lable: "Withdraws to Touch/Localizes Pain",
            value: 5
          },
          {
            lable: "Withdraws to Pain",
            value: 4
          },
          {
            lable: "Abnormal Flexion (Decorticate Posturing)",
            value: 3
          },
          {
            lable: "Abnormal Extension (Decerebrate Posturing)",
            value: 2
          },
          {
            lable: "No Response",
            value: 1
          }
        ]
      }
    ]
  }
]

export const getVitalScoresByAge = (age: number) => {
  return VITAL_SCORES.find(item => item.ageMin <= age && item.ageMax > age);
};
