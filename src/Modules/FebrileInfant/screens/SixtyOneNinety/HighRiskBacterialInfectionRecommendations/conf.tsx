import React from "react"
import { View, Text } from "react-native"
import { febrileText } from "Modules/FebrileInfant/config/strings"
import {
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
    question: 'Was obtained urinalysis positive?\nLeukoesterase +, or WBC >5/HPF',
    customUICondition: 1,
    customUI: (
      <View style={styles.infoContainer}>
        <Text>{febrileText.sevenTwentyEight.dispositionRecommendationsFirstQuestionText}</Text>
      </View>
    )
  },
  {
    id: 2,
    question: 'LP is not required, but may be performed: Was an LP performed?'
  },
  {
    id: 3,
    question: 'Was CSF obtained?'
  },
  {
    id: 4,
    question: 'Was LP traumatic or is CSF pleocytosis present?'
  },
  {
    id: 5,
    question: 'Home observation may be considered for well-appearing infants including thosewith a positive urinalysis. Will patientobservation be at home?'
  }
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
    answers: [1, 1, 0],
    result: {
      routeTitle: febrileText.twentyNineSixty.buttonsRoutes.first,
      routeName: HOSPITAL_ADMISSION_RECOMMENDATION
    }
  },
  {
    answers: [1, 0],
    result: {
      routeTitle: febrileText.twentyNineSixty.buttonsRoutes.third,
      routeName: DISPOSITION_RECCOMENDATION  
    }
  },
  {
    answers: [0],
    result: {
      routeTitle: febrileText.twentyNineSixty.buttonsRoutes.forth,
      routeName: HIGH_RISK_RECOMMENDATION  
    }
  },
]
