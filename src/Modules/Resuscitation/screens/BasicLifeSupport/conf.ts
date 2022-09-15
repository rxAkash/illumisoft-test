import { getAgeInYears } from 'utils/ageConverter';

export const BASIC_LIFE_SUPPORT_CONF = [
  {
    case: [
      {
        HeadTitle: "",
        description: "",
        descriptionOther: "Allow complete chest recoil between each compression",
        style: "basiclife",
        content: [
          {
            lable: "Compression Depth",
            text: "At least 1/3 AP diameter or 1.5 inches"
          },
          {
            lable: "Rate",
            text: "100-120/minute"
          },
          {
            lable: "Compression Ventilation Ratio",
            text: "30:2 (single rescuer),\n15:2 (2 rescuers)"
          }
        ]
      },
      {
        HeadTitle: "Circulation",
        style: "Circulation",
        content: [
          {
            lable: "Pulse Check",
            text: "Brachial"
          },
          {
            lable: "Compression Indication",
            text: "Signs of circulation absent, or HR<60 and poor perfusion"
          },
          {
            lable: "Landmarks",
            text: "Just below nipple line"
          },
          {
            lable: "Method",
            text: "Push hard and fast, 1 rescuer: 2 fingers,\n2 rescuers: 2 thumb-encircling hands"
          }
        ]
      },
      {
        HeadTitle: "Airway",
        description: "Jaw thrust (if not effective, use head tilt-chin lift)",
        style: "Airway",
        content: []
      },
      {
        HeadTitle: "Breathing",
        description: "Enough pressure to achieve chest rise",
        style: "Breathing",
        content: [
          {
            lable: "Rescue Breathing without CPR",
            text: "1 breath every 2-3 seconds\nor\n20-30 breaths/minute"
          },
          {
            lable: "Rescue Breathing with CPR and Advanced Airway",
            text: "1 breath every 2-3 seconds or 20-30 breaths/minute continuous with CPR"
          }
        ]
      },
      {
        HeadTitle: "Defibrillation",
        description: "",
        style: "Defibrillation",
        content: [
          {
            lable: "AED",
            text: "Manual defibrillator preferred for <1 y/o after 5 cycles of CPR. Use Child pads/system if available."
          }
        ]
      }
    ]
  },
  {
    case: [
      {
        HeadTitle: "",
        description: "",
        style: "basiclife",
        descriptionOther: "Allow complete chest recoil between each compression",
        content: [
          {
            lable: "Compression Depth",
            text: "At least 1/3 AP diameter or 2 inches"
          },
          {
            lable: "Rate",
            text: "100-120/minute"
          },
          {
            lable: "Compression Ventilation Ratio",
            text: "30:2 (single rescuer), 15:2 (2 rescuers)"
          }
        ]
      },
      {
        HeadTitle: "Circulation",
        style: "Circulation",
        content: [
          {
            lable: "Pulse Check",
            text: "Carotid or Femoral"
          },
          {
            lable: "Compression Indication",
            text: "Signs of circulation absent, or HR<60 and poor perfusion"
          },
          {
            lable: "Landmarks",
            text: "Lower 1/2 of sternum"
          },
          {
            lable: "Method",
            text: "Push hard and fast, Heel of hand, other hand on top or heel of 1 hand"
          }
        ]
      },
      {
        HeadTitle: "Airway",
        description: "Jaw thrust (if not effective, use head tilt-chin lift)",
        style: "Airway",
        content: []
      },
      {
        HeadTitle: "Breathing",
        description: "Enough pressure to achieve chest rise",
        style: "Breathing",
        content: [
          {
            lable: "Rescue Breathing without CPR",
            text: "1 breath every 2-3 seconds\nor\n20-30 breaths/minute"
          },
          {
            lable: "Rescue Breathing with CPR and Advanced Airway",
            text: "1 breath every 2-3 seconds or 20-30 breaths/minute continuous with CPR"
          }
        ]
      },
      {
        HeadTitle: "Defibrillation",
        description: "",
        style: "Defibrillation",
        content: [
          {
            lable: "AED",
            text: "Manual defibrillator preferred for <1 y/o after 5 cycles of CPR. Use Child pads/system if available."
          }
        ]
      }
    ]
  },
  {
    case: [
      {
        HeadTitle: "",
        description: "",
        descriptionOther: "Allow complete chest recoil between each compression",
        style: "basiclife",
        content: [
          {
            lable: "Compression Depth",
            text: "At least 2 inches"
          },
          {
            lable: "Rate",
            text: "100-120/minute"
          },
          {
            lable: "Compression Ventilation Ratio",
            text: "30:2"
          }
        ]
      },
      {
        HeadTitle: "Circulation",
        description: "",
        style: "Circulation",
        content: [
          {
            lable: "Pulse Check",
            text: "Carotid"
          },
          {
            lable: "Compression Indication",
            text: "Signs of circulation absent"
          },
          {
            lable: "Landmarks",
            text: "Lower 1/2 of sternum"
          },
          {
            lable: "Method",
            text: "Push hard and fast, Heel of 1 hand, other hand on top"
          }
        ]
      },
      {
        HeadTitle: "Airway",
        description: "Jaw thrust (if not effective, use head tilt-chin lift)",
        style: "Airway",
        content: []
      },
      {
        HeadTitle: "Breathing",
        description: "Enough pressure to achieve chest rise",
        style: "Breathing",
        content: [
          {
            lable: "Rescue Breathing without CPR",
            text: "10-12 breaths/minute"
          },
          {
            lable: "Rescue Breathing with CPR and Advanced Airway",
            text: "10 breaths/minute"
          }
        ]
      },
      {
        HeadTitle: "Defibrillation",
        description: "",
        style: "Defibrillation",
        content: [
          {
            lable: "AED",
            text: "May provide 5 cycles (2 minutes) of CPR before shock if response > 4 or 5 min. and arrest not witnessed"
          }
        ]
      }
    ]
  }
]

export const getConf = (age: string, ageUnit: string) => {
  const ageInYears = getAgeInYears(age, ageUnit);
  if(ageInYears < 1) {
    return BASIC_LIFE_SUPPORT_CONF[0].case
  }
  if(ageInYears >= 1 && ageInYears <= 10) {
    return BASIC_LIFE_SUPPORT_CONF[1].case
  }
  return BASIC_LIFE_SUPPORT_CONF[2].case
}