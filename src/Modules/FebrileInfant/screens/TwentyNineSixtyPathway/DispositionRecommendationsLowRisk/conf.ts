import { febrileText } from "Modules/FebrileInfant/config/strings"
import { DISCHARGE_CHECKLIST, HIGH_RISK_HOSPITAL_ADMISSION_FIRST, HIGH_RISK_HOSPITAL_ADMISSION_SECOND, HIGH_RISK_HOSPITAL_ADMISSION_THIRD } from "../routes"

export const FIRST_ITEM_ID = 1;

export const DISPOSITION_RECOMMENDATIONS_LOW_QUESTIONS = [
  {
    id: FIRST_ITEM_ID,
    question: 'Was an LP performed?'
  },
  {
    id: 2,
    question: 'Was CSF obtained?'
  },
  {
    id: 3,
    question: 'Was LP traumatic or is the CSF abnormal? (pleocytosis, abnormal protein or glucose)'
  },
  {
    id: 4,
    question: 'Will patient observation be at home?'
  }
]

export const DISPOSITIONS_RECOMMENDATIONS_LOW_ANSWER_SETS = [
  {
    answers: [0],
    routeTitle: febrileText.twentyNineSixty.highRiskHospitalAdmissionFirst.title,
    routeName: HIGH_RISK_HOSPITAL_ADMISSION_FIRST
  },
  {
    answers: [1,0],
    routeTitle: febrileText.twentyNineSixty.highRiskHospitalAdmissionFirst.title,
    routeName: HIGH_RISK_HOSPITAL_ADMISSION_FIRST
  },
  {
    answers: [1, 1, 1],
    routeTitle: febrileText.twentyNineSixty.highRiskHospitalAdmissionSecond.title,
    routeName: HIGH_RISK_HOSPITAL_ADMISSION_SECOND
  },
  {
    answers: [1,1,0,0],
    routeTitle: febrileText.twentyNineSixty.highRiskHospitalAdmissionFirst.title,
    routeName: HIGH_RISK_HOSPITAL_ADMISSION_FIRST
  },
  {
    answers: [1,1,0,1],
    routeTitle: febrileText.twentyNineSixty.dischargeChecklist,
    routeName: DISCHARGE_CHECKLIST
  },

 


  
]
