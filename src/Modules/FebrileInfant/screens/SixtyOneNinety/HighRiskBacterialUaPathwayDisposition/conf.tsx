import React from "react"
import { View, Text } from "react-native"
import { febrileText } from "Modules/FebrileInfant/config/strings"
import {
  ADMISSION_RECS_SECOND,
  DISCHARGE_CHECKLIST,
  DISPOSITION_RECCOMENDATION,
  DISPOSITION_RECCOMENDATION_1A,
  HIGH_RISK_RECOMMENDATION,
  HOSPITAL_ADMISSION,
  HOSPITAL_ADMISSION_1B,
  HOSPITAL_ADMISSION_1D,
  HOSPITAL_ADMISSION_RECOMMENDATION,
} from "../routes";
import styles from '../../../styles';

export const DISPOSITION_RECOMMENDATIONS_QUESTIONS = [
  {
    id: 1,
    question: 'Was CSF obtained?'
  },
  {
    id: 2,
    question: 'Was LP traumatic or is CSF pleocytosis present?'
  },
  {
    id: 3,
    question: 'Home observation may be considered for well-appearing infants including thosewith a positive urinalysis. Will patientobservation be at home?'
  },
]

export const DISPOSITIONS_RECOMMENDATIONS_ANSWER_SETS = [
  {
    answers: [1, 1, 1, 1],
    result: {
      routeTitle: febrileText.twentyNineSixty.buttonsRoutes.first,
      routeName: HOSPITAL_ADMISSION
    }
  },
  {
    answers: [1, 1, 1, 0, 1],
    result: {
      routeTitle: febrileText.twentyNineSixty.buttonsRoutes.second,
      routeName: DISCHARGE_CHECKLIST
    }
  },
  {
    answers: [1, 1, 1, 0, 0],
    result: {
      routeTitle: febrileText.twentyNineSixty.buttonsRoutes.first,
      routeName: HOSPITAL_ADMISSION_RECOMMENDATION
    }
  },
  {
    answers: [1, 0, 0],
    result: {
      routeTitle: febrileText.twentyNineSixty.buttonsRoutes.first,
      routeName: HOSPITAL_ADMISSION_1B
    }
  },
  {
    answers: [1, 1],
    result: {
      routeTitle: febrileText.twentyNineSixty.buttonsRoutes.first,
      routeName: ADMISSION_RECS_SECOND
    }
  },
  {
    answers: [0],
    result: {
      routeTitle: febrileText.twentyNineSixty.buttonsRoutes.first,
      routeName: ADMISSION_RECS_SECOND
    }
  },
  {
    answers: [1,0,1],
    result: {
      routeTitle: febrileText.twentyNineSixty.buttonsRoutes.third,
      routeName: DISPOSITION_RECCOMENDATION_1A
    }
  },
]
