import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

export const AIRWAY_DEVICES = [
  {
    weightKg: {
      exact: 0.5
    },
    description: ["Needle Thoracostomy", "Second Intercoastal Space", "Mid-Clavicular Line of Fourth Intercostal", "Space Anterior Axillary Line"],
    content: [
      {
        lable: "Endotracheal Tube (I.D.)",
        text:  "2.5"
      },
      {
        lable: "Laryngoscope Blade (Straight)",
        text:  "00"
      },
      {
        lable: "ET Tube Depth",
        text:  "5.5"
      },
      {
        lable: "Suction Catheter (FR)",
        text:  "5 or 6"
      }
    ]
  },
  {
    weightKg: {
      exact: 1.0
    },
    description: ["Needle Thoracostomy","Second Intercoastal Space","Mid-Clavicular Line of Fourth Intercostal","Space Anterior Axillary Line"],
    content: [
      {
        lable: "Endotracheal Tube (I.D.)",
        text:  "2.5"
      },
      {
        lable: "Laryngoscope Blade (Straight)",
        text:  "0"
      },
      {
        lable: "ET Tube Depth",
        text:  "6.5"
      },
      {
        lable: "Suction Catheter (FR)",
        text:  "5 or 6"
      }
    ]
  },
  {
    weightKg: {
      exact: 1.5
    },
    description: ["Needle Thoracostomy","Second Intercoastal Space","Mid-Clavicular Line of Fourth Intercostal","Space Anterior Axillary Line"],
    content: [
      {
        lable: "Endotracheal Tube (I.D.)",
        text:  "3"
      },
      {
        lable: "Laryngoscope Blade (Straight)",
        text:  "0"
      },
      {
        lable: "ET Tube Depth",
        text:  "7.5"
      },
      {
        lable: "LMA",
        text:  "1"
      },
      {
        lable: "Suction Catheter (FR)",
        text:  "6 or 8"
      }
    ]
  },
  {
    weightKg: {
      exact: 2.0
    },
    description: ["Needle Thoracostomy","Second Intercoastal Space","Mid-Clavicular Line of Fourth Intercostal","Space Anterior Axillary Line"],
    content: [
      {
        lable: "Endotracheal Tube (I.D.)",
        text:  "3"
      },
      {
        lable: "Laryngoscope Blade (Straight)",
        text:  "0"
      },
      {
        lable: "ET Tube Depth",
        text:  "8"
      },
      {
        lable: "LMA",
        text:  "1"
      },
      {
        lable: "Suction Catheter (FR)",
        text:  "6 or 8"
      }
    ]
  },
  {
    weightKg: {
      exact: 2.5
    },
    description: ["Needle Thoracostomy","Second Intercoastal Space","Mid-Clavicular Line of Fourth Intercostal","Space Anterior Axillary Line"],
    content: [
      {
        lable: "Endotracheal Tube (I.D.)",
        text:  "3.5"
      },
      {
        lable: "Laryngoscope Blade (Straight)",
        text:  "0"
      },
      {
        lable: "ET Tube Depth",
        text:  "8.5"
      },
      {
        lable: "LMA",
        text:  "1"
      },
      {
        lable: "Suction Catheter (FR)",
        text:  "8"
      }
    ]
  },
  {
    weightKg: {
      exact: 3.0
    },
    description: ["Needle Thoracostomy","Second Intercoastal Space","Mid-Clavicular Line of Fourth Intercostal","Space Anterior Axillary Line"],
    content: [
      {
        lable: "Endotracheal Tube (I.D.)",
        text:  "3.5"
      },
      {
        lable: "Laryngoscope Blade (Straight)",
        text:  "0 or 1"
      },
      {
        lable: "ET Tube Depth",
        text:  "8.5"
      },
      {
        lable: "LMA",
        text:  "1"
      },
      {
        lable: "Suction Catheter (FR)",
        text:  "8"
      }
    ]
  },
  {
    weightKg: {
      exact: 3.5
    },
    description: ["Needle Thoracostomy","Second Intercoastal Space","Mid-Clavicular Line of Fourth Intercostal","Space Anterior Axillary Line"],
    content: [
      {
        lable: "Endotracheal Tube (I.D.)",
        text:  "3.5"
      },
      {
        lable: "Laryngoscope Blade (Straight)",
        text:  "1"
      },
      {
        lable: "ET Tube Depth",
        text:  "9"
      },
      {
        lable: "LMA",
        text:  "1"
      },
      {
        lable: "Suction Catheter (FR)",
        text:  "8"
      }
    ]
  },
  {
    weightKg: {
      exact: 4.0
    },
    description: ["Needle Thoracostomy","Second Intercoastal Space","Mid-Clavicular Line of Fourth Intercostal","Space Anterior Axillary Line"],
    content: [
      {
        lable: "Endotracheal Tube (I.D.)",
        text:  "3.5"
      },
      {
        lable: "Laryngoscope Blade (Straight)",
        text:  "1"
      },
      {
        lable: "ET Tube Depth",
        text:  "9"
      },
      {
        lable: "LMA",
        text:  "1"
      },
      {
        lable: "Suction Catheter (FR)",
        text:  "8"
      }
    ]
  },
  {
    weightKg: {
      exact: 4.5
    },
    description: ["Needle Thoracostomy","Second Intercoastal Space","Mid-Clavicular Line of Fourth Intercostal","Space Anterior Axillary Line"],
    content: [
      {
        lable: "Endotracheal Tube (I.D.)",
        text:  "4"
      },
      {
        lable: "Laryngoscope Blade (Straight)",
        text:  "1"
      },
      {
        lable: "ET Tube Depth",
        text:  "10"
      },
      {
        lable: "LMA",
        text:  "1"
      },
      {
        lable: "Suction Catheter (FR)",
        text:  "8"
      }
    ]
  },
  {
    weightKg: {
      exact: 5.0
    },
    description: ["Needle Thoracostomy","Second Intercoastal Space","Mid-Clavicular Line of Fourth Intercostal","Space Anterior Axillary Line"],
    content: [
      {
        lable: "Endotracheal Tube (I.D.)",
        text:  "4"
      },
      {
        lable: "Laryngoscope Blade (Straight)",
        text:  "1"
      },
      {
        lable: "ET Tube Depth",
        text:  "11"
      },
      {
        lable: "LMA",
        text:  "1.5"
      },
      {
        lable: "Suction Catheter (FR)",
        text:  "8"
      }
    ]
  },
  {
    weightKg: {
      exact: 5.5
    },
    description: ["Needle Thoracostomy","Second Intercoastal Space","Mid-Clavicular Line of Fourth Intercostal","Space Anterior Axillary Line"],
    content: [
      {
        lable: "Endotracheal Tube (I.D.)",
        text:  "4"
      },
      {
        lable: "Laryngoscope Blade (Straight)",
        text:  "1"
      },
      {
        lable: "ET Tube Depth",
        text:  "11.5"
      },
      {
        lable: "LMA",
        text:  "1.5"
      },
      {
        lable: "Suction Catheter (FR)",
        text:  "8"
      }
    ]
  },
  {
    weightKg: {
      exact: 6.0
    },
    description: ["Needle Thoracostomy","Second Intercoastal Space","Mid-Clavicular Line of Fourth Intercostal","Space Anterior Axillary Line"],
    content: [
      {
        lable: "Endotracheal Tube (I.D.)",
        text:  "4"
      },
      {
        lable: "Laryngoscope Blade (Straight)",
        text:  "1"
      },
      {
        lable: "ET Tube Depth",
        text:  "12"
      },
      {
        lable: "LMA",
        text:  "1.5"
      },
      {
        lable: "Suction Catheter (FR)",
        text:  "8"
      }
    ]
  }
];
 
export const STATIC_INFO = {
  title: 'Neonatal Airway Management',
  content: [
    {
      lable: "BVM",
      text: "40 - 60 breaths/minute"
    },
    {
      lable: "CPAP",
      text: "4 - 6 mmHg"
    },
    {
      lable: "Ventilation Corrective Strategies",
      text: "M - mask correct size and placement\nR - reposition airway (head in sniffing position)\nS - suction mouth and nose\nO - open mouth\nP - pressure (PEEP and/or PIP) increased\nA - advanced airway"
    },
    {
      lable: "Targeted Preductal SpO2 After Birth",
      text: "1 min 60-65%\n2 min 65-70%\n3 min 70-75%\n4 min 75-80%\n5 min 80-85%\n10 min 85-95%"
    }
  ]
}

export const EXTENDED_AIRWAY_DEVICES = [
  {
    weightKg: {
      min: 0,
      max: 0.74,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '2.5',
      },

      {
        lable: 'Laryngoscope Blade',
        text: '00',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '5 or 6',
      },
    ],
  },
  {
    weightKg: {
      min: 0.75,
      max: 1.24,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '2.5',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '0',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '5 or 6',
      },
    ],
  },
  {
    weightKg: {
      min: 1.25,
      max: 1.74,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '3',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '0',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '6 or 8',
      },
      {
        lable: 'LMA',
        text: '1',
      },
    ],
  },
  {
    weightKg: {
      min: 1.75,
      max: 2.24,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '3',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '0',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '6 or 8',
      },
      {
        lable: 'LMA',
        text: '1',
      },
    ],
  },
  {
    weightKg: {
      min: 2.25,
      max: 2.74,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '3.5',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '0',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '8',
      },
      {
        lable: 'LMA',
        text: '1',
      },
    ],
  },
  {
    weightKg: {
      min: 2.75,
      max: 3.24,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '3.5',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '0-1',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '8',
      },
      {
        lable: 'LMA',
        text: '1',
      },
    ],
  },
  {
    weightKg: {
      min: 3.25,
      max: 3.74,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '3.5',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '1',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '8',
      },
      {
        lable: 'LMA',
        text: '1',
      },
    ],
  },
  {
    weightKg: {
      min: 3.75,
      max: 4.24,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '3.5',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '1',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '8',
      },
      {
        lable: 'LMA',
        text: '1',
      },
    ],
  },
  {
    weightKg: {
      min: 4.25,
      max: 4.74,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '4.0',
      },
      {
        lable: 'Microcuff Endotracheal Tubes',
        text: '3.5',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '1',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '8-10',
      },
      {
        lable: 'LMA',
        text: '1',
      },
    ],
  },
  {
    weightKg: {
      min: 4.75,
      max: 5.24,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '4.0',
      },
      {
        lable: 'Microcuff Endotracheal Tubes',
        text: '3.5',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '1',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '8-10',
      },
      {
        lable: 'LMA',
        text: '1 1/2',
      },
    ],
  },
  {
    weightKg: {
      min: 5.25,
      max: 5.74,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '4.0',
      },
      {
        lable: 'Microcuff Endotracheal Tubes',
        text: '3.5',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '1',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '8-10',
      },
      {
        lable: 'LMA',
        text: '1 1/2',
      },
    ],
  },
  {
    weightKg: {
      min: 5.75,
      max: 6.49,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '4.0',
      },
      {
        lable: 'Microcuff Endotracheal Tubes',
        text: '3.0',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '1',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '8-10',
      },
      {
        lable: 'LMA',
        text: '1 1/2',
      },
    ],
  },
  {
    weightKg: {
      min: 6.5,
      max: 7.49,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '4.0',
      },
      {
        lable: 'Microcuff Endotracheal Tubes',
        text: '3.0',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '1',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '8-10',
      },
      {
        lable: 'LMA',
        text: '1 1/2',
      },
    ],
  },
  {
    weightKg: {
      min: 7.5,
      max: 8.49,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '4.0',
      },
      {
        lable: 'Microcuff Endotracheal Tubes',
        text: '3.0',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '1',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '10',
      },
      {
        lable: 'LMA',
        text: '1 1/2',
      },
    ],
  },
  {
    weightKg: {
      min: 8.5,
      max: 9.49,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '4.0',
      },
      {
        lable: 'Microcuff Endotracheal Tubes',
        text: '3.0',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '1',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '10',
      },
      {
        lable: 'LMA',
        text: '1 1/2',
      },
    ],
  },
  {
    weightKg: {
      min: 9.5,
      max: 10.49,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '4.5 Consider Cuffed Tube',
      },
      {
        lable: 'Microcuff Endotracheal Tubes',
        text: '3.5',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '1',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '10',
      },
      {
        lable: 'LMA',
        text: '1 1/2 - 2',
      },
    ],
  },
  {
    weightKg: {
      min: 10.5,
      max: 11.49,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '4.5 Consider Cuffed Tube',
      },
      {
        lable: 'Microcuff Endotracheal Tubes',
        text: '3.5',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '1 1/2',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '10',
      },
      {
        lable: 'LMA',
        text: '2',
      },
    ],
  },
  {
    weightKg: {
      min: 11.5,
      max: 13.49,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '4.5 Consider Cuffed Tube',
      },
      {
        lable: 'Microcuff Endotracheal Tubes',
        text: '3.5',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '1 1/2',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '10',
      },
      {
        lable: 'LMA',
        text: '2',
      },
    ],
  },
  {
    weightKg: {
      min: 13.5,
      max: 15.49,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '5.0 Consider Cuffed Tube',
      },
      {
        lable: 'Microcuff Endotracheal Tubes',
        text: '4.0',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '2',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '10-12',
      },
      {
        lable: 'LMA',
        text: '2',
      },
    ],
  },
  {
    weightKg: {
      min: 15.5,
      max: 16.49,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '5.0 Consider Cuffed Tube',
      },
      {
        lable: 'Microcuff Endotracheal Tubes',
        text: '4.0',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '2',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '12',
      },
      {
        lable: 'LMA',
        text: '2',
      },
    ],
  },
  {
    weightKg: {
      min: 16.5,
      max: 19.49,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '5.5 Consider Cuffed Tube',
      },
      {
        lable: 'Microcuff Endotracheal Tubes',
        text: '4.5',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '2',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '14',
      },
      {
        lable: 'LMA',
        text: '2',
      },
    ],
  },
  {
    weightKg: {
      min: 19.5,
      max: 22.49,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '5.5 Consider Cuffed Tube',
      },
      {
        lable: 'Microcuff Endotracheal Tubes',
        text: '4.5',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '2',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '14',
      },
      {
        lable: 'LMA',
        text: '2 - 2 1/2',
      },
    ],
  },
  {
    weightKg: {
      min: 22.5,
      max: 24.49,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '6.0 Consider Cuffed Tube',
      },
      {
        lable: 'Microcuff Endotracheal Tubes',
        text: '5.0',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '2',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '14',
      },
      {
        lable: 'LMA',
        text: '2 1/2',
      },
    ],
  },
  {
    weightKg: {
      min: 24.5,
      max: 29.49,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '6.0 Consider Cuffed Tube',
      },
      {
        lable: 'Microcuff Endotracheal Tubes',
        text: '5.0',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '2',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '14',
      },
      {
        lable: 'LMA',
        text: '2 1/2',
      },
    ],
  },
  {
    weightKg: {
      min: 29.5,
      max: 38.49,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '6.5 Cuffed',
      },
      {
        lable: 'Microcuff Endotracheal Tubes',
        text: '5.5',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '2',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '14',
      },
      {
        lable: 'LMA',
        text: '3',
      },
    ],
  },
  {
    weightKg: {
      min: 38.5,
      max: 42.49,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '6.5 Cuffed',
      },
      {
        lable: 'Microcuff Endotracheal Tubes',
        text: '6.0',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '2',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '14',
      },
      {
        lable: 'LMA',
        text: '3',
      },
    ],
  },
  {
    weightKg: {
      min: 42.5,
      max: 49.49,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '6.5 Cuffed',
      },
      {
        lable: 'Microcuff Endotracheal Tubes',
        text: '6.0',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '2-3',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '14',
      },
      {
        lable: 'LMA',
        text: '3',
      },
    ],
  },
  {
    weightKg: {
      min: 49.5,
      max: 53.49,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '6.5-7.0 Cuffed',
      },
      {
        lable: 'Microcuff Endotracheal Tubes',
        text: '6.5',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '2-3',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '14',
      },
      {
        lable: 'LMA',
        text: '3 - 4',
      },
    ],
  },
  {
    weightKg: {
      min: 53.5,
      max: 59.49,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '6.5-7.0 Cuffed',
      },
      {
        lable: 'Microcuff Endotracheal Tubes',
        text: '6.5',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '2-3',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '14',
      },
      {
        lable: 'LMA',
        text: '4',
      },
    ],
  },
  {
    weightKg: {
      min: 59.5,
      max: 62.49,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '7.0 Cuffed',
      },
      {
        lable: 'Microcuff Endotracheal Tubes',
        text: '7.0',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '2-3',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '14',
      },
      {
        lable: 'LMA',
        text: '4',
      },
    ],
  },
  {
    weightKg: {
      min: 62.5,
      max: 64.49,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '7.0 Cuffed',
      },
      {
        lable: 'Microcuff Endotracheal Tubes',
        text: '7.0',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '3-4',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '14',
      },
      {
        lable: 'LMA',
        text: '4',
      },
    ],
  },
  {
    weightKg: {
      min: 64.5,
      max: 9999,
    },
    content: [
      {
        lable: 'Endotracheal Tube (I.D.)',
        text: '7.0-7.5 Cuffed',
      },
      {
        lable: 'Microcuff Endotracheal Tubes',
        text: '7.0-7.5',
      },
      {
        lable: 'Laryngoscope Blade',
        text: '3-4',
      },
      {
        lable: 'Suction Catheter (FR)',
        text: '14',
      },
      {
        lable: 'LMA',
        text: '5',
      },
    ],
  },
];

export const tracheostomyConf = [
  {
    title: 'Mucus plug in tracheostomy',
    list: [
      {
        text: 'Suction tracheostomy tube using saline if available'
      },
      {
        text: 'If unable to clear secretions, change tracheostomy tube'
      },
      {
        text: 'Use positive pressure ventilation to give rescue breaths if needed bag to give rescue breaths if needed'
      },
      {
        text: 'Oxygen for saturations less than 92%'
      }
    ]
  },
  {
    title: 'Tracheostomy decannulation',
    list: [
      {
        text: 'Replace the tracheostomy tube immediately'
      },
      {
        text: 'If unable to place same size, use half size smaller'
      },
      {
        text: <Text>If tracheostomy tube unavailable, place ETT to approximately <Text style={styles.redText}>3cm (up to 1yr old), 4cm (above 1 yr old)</Text></Text>
      },
      {
        text: 'If still unable, begin bagging over mouth and nose with BVM while manually occluding the stoma'
      },
      {
        text: 'Oxygen for saturations less than 92%'
      }
    ]
  }
]

export const rapidSequenceIntubationConf = [
  {
    lable: <Text style={styles.boldText}>1. Suction:</Text>,
    text: 'Yankauer suction assembled and working; ET suction catheters at hand'
  }, {
    lable: <Text style={styles.boldText}>2. Oxygen:</Text>,
    text: 'Non-rebreather mask and BVM device with appropriate face mask'
  }, {
    lable: <Text style={styles.boldText}>3. Airway:</Text>,
    text: 'Laryngoscope/blade Age-appropriate endotracheal tubes (+/- 0.5FR) Stylet'
  }, {
    lable: <Text style={styles.boldText}>4. Pharmacology:</Text>,
    text: 'All intubation meds drawn up; saline flush'
  }, {
    lable: <Text style={styles.boldText}>5. Monitoring Equipment:</Text>,
    text: 'O2 saturation, end-tidal CO2, cardiac and blood pressure monitoring'
  }
]
