import { febrileText } from "Modules/FebrileInfant/config/strings"
import {DISPOSITION_RECCOMENDATION_HMI, HEAD_INJURY_HOME  } from "../../../navigation/routes"

export const FIRST_ITEM_ID = 1;

export const PHYSICAL_EXAM_QUESTIONS = [
  {
    id: FIRST_ITEM_ID,
    question: 'Lateralizing signs'
  },
  {
    id: 2,
    question: 'Unequal pupils'
  },
  {
    id: 3,
    question: 'Absent movement of extremity'
  },
  {
    id: 4,
    question: 'Facial bruising that doesn’t match mechanism'
  },
  {
    id: 5,
    question: 'Bruising patterns concerning for abuse (see 4 faces) link'
  }
]

export const PHYSICAL_EXAM_ANSWERS = [
  {
    answers: [1],
    routeTitle: febrileText.twentyNineSixty.highRiskHospitalAdmissionFirst.title,
    routeName: HEAD_INJURY_HOME
  },
  {
    answers: [0,1],
    routeTitle: febrileText.twentyNineSixty.highRiskHospitalAdmissionFirst.title,
    routeName: HEAD_INJURY_HOME
  },
  {
    answers: [0,0,1],
    routeTitle: febrileText.twentyNineSixty.highRiskHospitalAdmissionFirst.title,
    routeName: HEAD_INJURY_HOME
  },
  {
    answers: [0, 0, 0, 1],
    routeTitle: febrileText.twentyNineSixty.highRiskHospitalAdmissionSecond.title,
    routeName: HEAD_INJURY_HOME
  },
  {
    answers: [0, 0, 0, 0, 1],
    routeTitle: febrileText.twentyNineSixty.highRiskHospitalAdmissionFirst.title,
    routeName: HEAD_INJURY_HOME
  },
  {
    answers: [0, 0, 0, 0, 0],
    routeTitle: febrileText.twentyNineSixty.dischargeChecklist,
    routeName: DISPOSITION_RECCOMENDATION_HMI
  },

 


  
]
