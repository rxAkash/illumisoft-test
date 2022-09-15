import { trachText } from "Modules/Trachestomy/config/strings"
import { TRACHESTOMY_NON_RESOPNSIVE_CHILD_NO_TRACH, TRACHESTOMY_RESCUE_BREATHING_NO_AIRWAY_OBFUSCATION, TRACHESTOMY_RESCUE_BREATHING_WITH_AIRWAY_OBFUSCATION, TRACHESTOMY_THANK_YOU } from "Modules/Trachestomy/navigation/routes"
import React from "react"
import { Text, View } from "react-native"
import styles from "./styles"

export const CHILD_WITH_NO_TRACH_QUESTIONS = [
  {
    id: 1,
    question: "Is the child in respiratory distress?"
  },
  {
    id: 2,
    question: "Is the child responsive?",
    customUICondition: 1,
    customUI: (
      <View style={styles.warningTextContainer}>
        <Text style={styles.warningText}>{trachText.childWithNoTrach.warning}</Text>
      </View>
    )
  },
  {
    id: 3,
    question: "Does the patient have a history of known critical upper airway obstruction?"
  }
]

export const CHILD_WITH_NO_TRACH_ANSER_SETS = [
  {
    answers: [0],
    result: TRACHESTOMY_THANK_YOU
  },
  {
    answers: [1, 0],
    result: TRACHESTOMY_NON_RESOPNSIVE_CHILD_NO_TRACH
  },
  {
    answers: [1, 1, 1],
    result: TRACHESTOMY_RESCUE_BREATHING_WITH_AIRWAY_OBFUSCATION
  },
  {
    answers: [1, 1, 0],
    result: TRACHESTOMY_RESCUE_BREATHING_NO_AIRWAY_OBFUSCATION
  }
]