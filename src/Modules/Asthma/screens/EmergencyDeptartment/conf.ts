import { asthmaText } from "Modules/Asthma/config/strings";

export const FIRST_HOUR_VALUE = 'A_ED_HS_1'
export const SECOND_HOUR_VALUE = "A_ED_HS_2"
export const THIRD_HOUR_VALUE = "A_ED_HS_3"
export const FOURTH_HOUR_VALUE = "A_ED_HS_4"

export const considerations = [
  {
    text: asthmaText.edPathway.considerContext,
    subitems: [
      {
        text: asthmaText.edPathway.considerContextSub1,
      },
      {
        text: asthmaText.edPathway.considerContextSub2
      }
    ]
  },
  {
    text: asthmaText.edPathway.oxygenRequrement
  }
]

export const ED_HOUR_SELECTION = {
  title: "What hour of treatment is the patient in?",
  options: [
    {
      title: "1st Hour",
      value: FIRST_HOUR_VALUE
    },
    {
      title: "2nd Hour",
      value: SECOND_HOUR_VALUE
    },
    {
      title: "3rd Hour",
      value: THIRD_HOUR_VALUE
    },
    {
      title: "4th Hour",
      value: FOURTH_HOUR_VALUE
    }
  ]
}