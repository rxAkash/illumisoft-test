import React from "react"
import { View, Text } from "react-native"
import { febrileText } from "Modules/FebrileInfant/config/strings"
import { DISCHARGE_CHECKLIST, HIGH_RISK_HOSPITAL_ADMISSION_FIRST, HIGH_RISK_HOSPITAL_ADMISSION_SECOND, HIGH_RISK_HOSPITAL_ADMISSION_THIRD } from "../routes"
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
    question: 'Was CSF obtained?'
  },
  {
    id: 3,
    question: 'Was LP traumatic or is CSF pleocytosis present?'
  },
  {
    id: 4,
    question: 'Will patient observation be at home? '
  }
]

export const DISPOSITIONS_RECOMMENDATIONS_ANSWER_SETS = [
  {
    answers: [1, 1, 0],
    result: {
      routeTitle: febrileText.twentyNineSixty.highRiskHospitalAdmissionThird.title,
      routeName: HIGH_RISK_HOSPITAL_ADMISSION_THIRD
    }
  },
  {
    answers: [0, 1, 0, 1],
    result: {
      routeTitle: febrileText.twentyNineSixty.dischargeChecklist,
      routeName: DISCHARGE_CHECKLIST
    }
  },
  {
    answers: [0, 1, 0, 0],
    result: {
      routeTitle: febrileText.twentyNineSixty.highRiskHospitalAdmissionFirst.title,
      routeName: HIGH_RISK_HOSPITAL_ADMISSION_FIRST
    }
  },
  {
    answers: [1, 1, 1],
    result: {
      routeTitle: febrileText.twentyNineSixty.highRiskHospitalAdmissionSecond.title,
      routeName: HIGH_RISK_HOSPITAL_ADMISSION_SECOND
    }
  },
  {
    answers: [0, 1, 1],
    result: {
      routeTitle: febrileText.twentyNineSixty.highRiskHospitalAdmissionSecond.title,
      routeName: HIGH_RISK_HOSPITAL_ADMISSION_SECOND  
    }
  },
  {
    answers: [1, 0],
    result: {
      routeTitle: febrileText.twentyNineSixty.highRiskHospitalAdmissionSecond.title,
      routeName: HIGH_RISK_HOSPITAL_ADMISSION_SECOND
    }
  },
  {
    answers: [0, 0],
    result: {
      routeTitle: febrileText.twentyNineSixty.highRiskHospitalAdmissionSecond.title,
      routeName: HIGH_RISK_HOSPITAL_ADMISSION_SECOND
    }
  },
]
