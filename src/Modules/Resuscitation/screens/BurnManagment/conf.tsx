import { KG } from "Modules/Resuscitation/config/sharedConf";
import { resusText } from "Modules/Resuscitation/config/strings";
import React from "react"
import { Text } from "react-native"
import styles from './styles';

export const BURN_MANAGEMENT_OPTIONS = [
  {
    title: '< 1 year',
    minAge: 0,
    maxAge: 1,
    content: [ {label: "Head", text:  "19"},
      {label: "Neck", text:  "2"},
      {label: "Anterior Trunk", text:  "13"},
      {label: "Posterior Trunk", text:  "13"},
      {label: "Right Buttock", text:  "2.5"},
      {label: "Left Buttock", text:  "2.5"},
      {label: "Genitalia", text:  "1"},
      {label: "Right Upper Arm", text:  "4"},
      {label: "Left Upper Arm", text:  "4"},
      {label: "Right Lower Arm", text:  "3"},
      {label: "Left Lower Arm", text:  "3"},
      {label: "Right Hand", text:  "2.5"},
      {label: "Left Hand", text:  "2.5"},
      {label: "Right Thigh", text:  "5.5"},
      {label: "Left Thigh", text:  "5.5"},
      {label: "Right Lower Leg", text:  "5"},
      {label: "Left Lower Leg", text:  "5"},
      {label: "Right Foot", text:  "3.5"},
      {label: "Left Foot", text:  "3.5"}
    ]
  },
  {
    title: "1 - 4 years",
    minAge: 1,
    maxAge: 5,
    content: [ {label: "Head", text:  "17"},
      {label: "Neck", text:  "2"},
      {label: "Anterior Trunk", text:  "13"},
      {label: "Posterior Trunk", text:  "13"},
      {label: "Right Buttock", text:  "2.5"},
      {label: "Left Buttock", text:  "2.5"},
      {label: "Genitalia", text:  "1"},
      {label: "Right Upper Arm", text:  "4"},
      {label: "Left Upper Arm", text:  "4"},
      {label: "Right Lower Arm", text:  "3"},
      {label: "Left Lower Arm", text:  "3"},
      {label: "Right Hand", text:  "2.5"},
      {label: "Left Hand", text:  "2.5"},
      {label: "Right Thigh", text:  "6.5"},
      {label: "Left Thigh", text:  "6.5"},
      {label: "Right Lower Leg", text:  "5"},
      {label: "Left Lower Leg", text:  "5"},
      {label: "Right Foot", text:  "3.5"},
      {label: "Left Foot", text:  "3.5"}
    ]
  },
  {
    title: "5 - 9 years",
    minAge: 5,
    maxAge: 10,
    content: [ {label: "Head", text:  "13"},
      {label: "Neck", text:  "2"},
      {label: "Anterior Trunk", text:  "13"},
      {label: "Posterior Trunk", text:  "13"},
      {label: "Right Buttock", text:  "2.5"},
      {label: "Left Buttock", text:  "2.5"},
      {label: "Genitalia", text:  "1"},
      {label: "Right Upper Arm", text:  "4"},
      {label: "Left Upper Arm", text:  "4"},
      {label: "Right Lower Arm", text:  "3"},
      {label: "Left Lower Arm", text:  "3"},
      {label: "Right Hand", text:  "2.5"},
      {label: "Left Hand", text:  "2.5"},
      {label: "Right Thigh", text:  "8"},
      {label: "Left Thigh", text:  "8"},
      {label: "Right Lower Leg", text:  "5.5"},
      {label: "Left Lower Leg", text:  "5.5"},
      {label: "Right Foot", text:  "3.5"},
      {label: "Left Foot", text:  "3.5"}
    ]
  },
  {
    title: "10 - 14 years",
    minAge: 10,
    maxAge: 15,
    content: [ {label: "Head", text:  "11"},
      {label: "Neck", text:  "2"},
      {label: "Anterior Trunk", text:  "13"},
      {label: "Posterior Trunk", text:  "13"},
      {label: "Right Buttock", text:  "2.5"},
      {label: "Left Buttock", text:  "2.5"},
      {label: "Genitalia", text:  "1"},
      {label: "Right Upper Arm", text:  "4"},
      {label: "Left Upper Arm", text:  "4"},
      {label: "Right Lower Arm", text:  "3"},
      {label: "Left Lower Arm", text:  "3"},
      {label: "Right Hand", text:  "2.5"},
      {label: "Left Hand", text:  "2.5"},
      {label: "Right Thigh", text:  "8.5"},
      {label: "Left Thigh", text:  "8.5"},
      {label: "Right Lower Leg", text:  "6"},
      {label: "Left Lower Leg", text:  "6"},
      {label: "Right Foot", text:  "3.5"},
      {label: "Left Foot", text:  "3.5"}
    ]
  },
  {
    minAge: 15,
    maxAge: 15.9,
    title: "15 years",
    content: [ {label: "Head", text:  "9"},
      {label: "Neck", text:  "2"},
      {label: "Anterior Trunk", text:  "13"},
      {label: "Posterior Trunk", text:  "13"},
      {label: "Right Buttock", text:  "2.5"},
      {label: "Left Buttock", text:  "2.5"},
      {label: "Genitalia", text:  "1"},
      {label: "Right Upper Arm", text:  "4"},
      {label: "Left Upper Arm", text:  "4"},
      {label: "Right Lower Arm", text:  "3"},
      {label: "Left Lower Arm", text:  "3"},
      {label: "Right Hand", text:  "2.5"},
      {label: "Left Hand", text:  "2.5"},
      {label: "Right Thigh", text:  "9"},
      {label: "Left Thigh", text:  "9"},
      {label: "Right Lower Leg", text:  "6.5"},
      {label: "Left Lower Leg", text:  "6.5"},
      {label: "Right Foot", text:  "3.5"},
      {label: "Left Foot", text:  "3.5"}
    ]
  },
  {
    title: ">=16 years",
    minAge: 16,
    maxAge: 999,
    content: [ {label: "Head", text:  "7"},
      {label: "Neck", text:  "2"},
      {label: "Anterior Trunk", text:  "13"},
      {label: "Posterior Trunk", text:  "13"},
      {label: "Right Buttock", text:  "2.5"},
      {label: "Left Buttock", text:  "2.5"},
      {label: "Genitalia", text:  "1"},
      {label: "Right Upper Arm", text:  "4"},
      {label: "Left Upper Arm", text:  "4"},
      {label: "Right Lower Arm", text:  "3"},
      {label: "Left Lower Arm", text:  "3"},
      {label: "Right Hand", text:  "2.5"},
      {label: "Left Hand", text:  "2.5"},
      {label: "Right Thigh", text:  "9.5"},
      {label: "Left Thigh", text:  "9.5"},
      {label: "Right Lower Leg", text:  "7"},
      {label: "Left Lower Leg", text:  "7"},
      {label: "Right Foot", text:  "3.5"},
      {label: "Left Foot", text:  "3.5"}
    ]
  }
]

export const BURN_MANAGEMENT_ANSWERS = [
  {
    title: 'None',
    value: 0
  },
  {
    title: '1/4',
    value: 0.25
  },
  {
    title: '1/2',
    value: 0.5
  },
  {
    title: '3/4',
    value: 0.75
  },
  {
    title: 'All',
    value: 1
  }
]

export const ADJUSTED_FLUID_RATE = [
  {
    minWeight: 0,
    maxWeight: 29.5,
    text: <Text>3mL/kg LR x % TBSA {'\n'}Give half of the total volume over the first 8 hours from the time of burn injury plus D<Text style={styles.lowerText}>5</Text>LR at maintenance rate</Text>,
    concentration: 3,
    d5lr: true
  },
  {
    minWeight: 29.6,
    maxWeight: 59.5,
    text: <Text>3 mL/kg LR x % TBSA {'\n'}Give half of the total volume over the first 8 hours from the time of burn injury</Text>,
    concentration: 3,
    d5lr: false
  },
  {
    minWeight: 60,
    maxWeight: 999,
    text: <Text>2 mL/kg LR x % TBSA {'\n'}Give half of the total volume over the first 8 hours from the time of burn injury</Text>,
    concentration: 2,
    d5lr: false
  }
]

export const ELECTRICAL_INJURY_CONF = [
  {
    minWeight: 0,
    maxWeight: 29.9,
    text: <Text>4 mL/kg x % TBSA {'\n'}Give half of the total volume over the first 8 hours from the time of burn injury plus D<Text style={styles.lowerText}>5</Text>LR at maintenance rate</Text>,
    concentration: 4,
    d5lr: true
  },
  {
    minWeight: 30,
    maxWeight: 999,
    text: <Text>4 mL/kg x % TBSA {'\n'}Give half of the total volume over the first 8 hours from the time of burn injury</Text>,
    concentration: 4,
    d5lr: false
  },
]

export const BURN_WEIGHT_MAP = [
  {Weight: "2", value: "12"},
  {Weight: "2.5", value: "15"},
  {Weight: "3", value: "18"},
  {Weight: "3.5", value: "21"},
  {Weight: "4", value: "24"},
  {Weight: "4.5", value: "27"},
  {Weight: "5", value: "30"},
  {Weight: "5.5", value: "33"},
  {Weight: "6", value: "36"},
  {Weight: "7", value: "42"},
  {Weight: "8", value: "48"},
  {Weight: "9", value: "54"},
  {Weight: "10", value: "60"},
  {Weight: "11", value: "63"},
  {Weight: "12", value: "66"},
  {Weight: "13", value: "69"},
  {Weight: "14", value: "72"},
  {Weight: "15", value: "75"},
  {Weight: "16", value: "78"},
  {Weight: "17", value: "81"},
  {Weight: "18", value: "84"},
  {Weight: "19", value: "87"},
  {Weight: "20", value: "90"},
  {Weight: "21", value: "92"},
  {Weight: "22", value: "93"},
  {Weight: "23", value: "95"},
  {Weight: "24", value: "96"},
  {Weight: "25", value: "98"},
  {Weight: "26", value: "99"},
  {Weight: "27", value: "101"},
  {Weight: "28", value: "102"},
  {Weight: "29", value: "104"},
  {Weight: "30", value: "105"},
  {Weight: "31", value: "107"},
  {Weight: "32", value: "108"},
  {Weight: "33", value: "110"},
  {Weight: "34", value: "111"},
  {Weight: "35", value: "113"},
  {Weight: "36", value: "114"},
  {Weight: "37", value: "116"},
  {Weight: "38", value: "117"},
  {Weight: "39", value: "119"},
  {Weight: "40", value: "120"},
  {Weight: "41", value: "122"},
  {Weight: "42", value: "123"},
  {Weight: "43", value: "125"},
  {Weight: "44", value: "126"},
  {Weight: "45", value: "128"},
  {Weight: "46", value: "129"},
  {Weight: "47", value: "131"},
  {Weight: "48", value: "132"},
  {Weight: "49", value: "134"},
  {Weight: "50", value: "135"},
  {Weight: "51", value: "137"},
  {Weight: "52", value: "138"},
  {Weight: "53", value: "140"},
  {Weight: "54", value: "141"},
  {Weight: "55", value: "143"},
  {Weight: "56", value: "144"},
  {Weight: "57", value: "146"},
  {Weight: "58", value: "147"},
  {Weight: "59", value: "149"},
  {Weight: "60", value: "150"},
  {Weight: "61", value: "150"},
  {Weight: "62", value: "150"},
  {Weight: "63", value: "150"},
  {Weight: "64", value: "150"},
  {Weight: "65", value: "150"},
  {Weight: "66", value: "150"},
  {Weight: "67", value: "150"},
  {Weight: "68", value: "150"},
  {Weight: "69", value: "150"},
  {Weight: "70", value: "150"}
]
 
export const BURN_SIZE = [
  {
    text: 'Any full thickness (3rd degree) burns'
  },
  {
    text: 'Partial thickness (2nd degree) burns greater than 10%'
  }
];

export const BURN_INJURIES = [
  {
    text: 'Electrical'
  },
  {
    text: 'Chemical'
  },
  {
    text: 'Inhalation'
  }
]

export const INJURY_LOCATIONS = [
  {
    text: 'Hands and feet'
  },
  {
    text: 'Face'
  },
  {
    text: 'Perineum/gentalia'
  },
  {
    text: 'Across major joints'
  }
]

export const ADDITIONAL_CONSIDERATIONS = [
  {
    text: 'Pre-existing medical problems'
  },
  {
    text: 'Burns with co-trauma'
  },
  {
    text: 'Pediatric burns in hospitals not equipped for children'
  },
  {
    text: 'Patients with special social, emotional or rehab needs'
  }
]

export const TREATMENT_KEY = 'treatment';
export const CALCULATOR_KEY = 'calculator';
export const PRE_TREATMENT_KEY = 'pre-treatment';

export const PRE_20_SECTIONS = [
  {
    title: CALCULATOR_KEY
  },
  {
    title: TREATMENT_KEY
  }
]

export const POST_20_SECTIONS = [
  {
    title: CALCULATOR_KEY
  },
  {
    title: PRE_TREATMENT_KEY
  },
  {
    title: TREATMENT_KEY
  }
]

export const getTitleForStep = (step: number, results: number) => {
  if(results >= 20) {
    switch(step) {
      case 0: return resusText.burnManagment.calcTitle + ' ' + results + '.00%';
      case 1: return resusText.burnManagment.preTreatment;
      case 2: return resusText.burnManagment.treatmentRecommendations;
    }
  } else {
    switch(step) {
      case 0: return resusText.burnManagment.calcTitle + ' ' + results + '.00%';
      case 1: return resusText.burnManagment.treatmentRecommendations;
    }
  }

  return '';
}

export const calculateRemainingHourlyRate = (
  hoursRemaining: number,
  totalFluidVolume: number,
  fluidVolumeInfusedSinceBurn: number,
  hoursElapsedSinceBurn: number,
) => Math.ceil(((totalFluidVolume / 2) - fluidVolumeInfusedSinceBurn) / (hoursRemaining - hoursElapsedSinceBurn));

export const calculateNineToTwentyFourHourlyRate = (
  totalFluidVolume: number,
  fluidVolumeInfusedSinceBurn: number,
  hoursElapsedSinceBurn: number,
) => (hoursElapsedSinceBurn <= 8)
  ? calculateRemainingHourlyRate(16, totalFluidVolume, 0, 0)
  : (totalFluidVolume - fluidVolumeInfusedSinceBurn) / (24 - hoursElapsedSinceBurn);

export const separateNum = (num: number) => {
  if (num >= 1000) {
    const strNum = num.toString();
    return strNum.substr(0, strNum.length - 3) + ',' + strNum.substr(strNum.length - 3, strNum.length - 1);
  } else {
    return num;
  }
};

export const mathCeil = (num: number) => {
  if (num % 1 != 0) {
    return (num = Math.ceil(num));
  }
  return num;
};

export const getEquationReference = (weight: number, weightUnit: string, electricalBurn: boolean) => {
  let lblPlus = ''
  let lblPlusEL = ''
  if (weight < 30) {
    if (weightUnit === KG) {
      lblPlus = '3 mL/kg LR x % TBSA \nGive half of the total volume over the first 8 hours from the time of burn injury plus D₅LR at maintenance rate';
      lblPlusEL = '4 mL/kg x % TBSA \nGive half of the total volume over the first 8 hours from the time of burn injury plus D₅LR at maintenance rate';
    } else {
      lblPlus = '3 mL/lbs LR x % TBSA \nGive half of the total volume over the first 8 hours from the time of burn injury plus D₅LR at maintenance rate';
      lblPlusEL = '4 mL/lbs x % TBSA \nGive half of the total volume over the first 8 hours from the time of burn injury plus D₅LR at maintenance rate';
    }
  }
  if (weight >= 30 && weight < 60) {
    if (weightUnit === KG) {
      lblPlus = '3 mL/kg LR x % TBSA \nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.';
      lblPlusEL = '4 mL/kg x % TBSA \nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.';
    } else {
      lblPlus = '3 mL/lbs LR x % TBSA \nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.';
      lblPlusEL = '4 mL/lbs x % TBSA \nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.';
    }
  }
  if (weight >= 60) {
    if (weightUnit === KG) {
      lblPlus = '2 mL/kg LR x % TBSA \nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.';
      lblPlusEL = '4 mL/kg x % TBSA \nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.';
    } else {
      lblPlus = '2 mL/lbs LR x % TBSA\nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.';
      lblPlusEL = '4 mL/lbs x % TBSA \nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.';
    }
  }
  if(electricalBurn) {
    return lblPlusEL;
  } else {
    return lblPlus;
  }
}