import { TRACHESTOMY_CPR_WITH_NO_UPPER_AIRWAY_OBFUSCATION, TRACHESTOMY_CPR_WITH_UPPER_AIRWAY_OBFUSCATION, TRACHESTOMY_RESCUE_BREATHING_NO_AIRWAY_OBFUSCATION, TRACHESTOMY_RESCUE_BREATHING_WITH_AIRWAY_OBFUSCATION } from "Modules/Trachestomy/navigation/routes"

export const NON_RESPONSIVE_CHILD_NO_TRACH_QUESTIONS = [
  {
    id: 1,
    question: "Feel for pulse for no more than 10 seconds",
    answers: {
      first: "Pulse < 60",
      second: "Pulse > 60"
    }
  },
  {
    id: 2,
    question: "Does the patient have a history of known critical upper airway obstruction?"
  }
]

export const NON_RESPONSIVE_CHILD_NO_TRACH_ANSWER_SETS = [
  {
    answers: [1, 1],
    result: TRACHESTOMY_CPR_WITH_UPPER_AIRWAY_OBFUSCATION
  },
  {
    answers: [1, 0],
    result: TRACHESTOMY_CPR_WITH_NO_UPPER_AIRWAY_OBFUSCATION
  },
  {
    answers: [0, 0],
    result: TRACHESTOMY_RESCUE_BREATHING_NO_AIRWAY_OBFUSCATION
  },
  {
    answers: [0, 1],
    result: TRACHESTOMY_RESCUE_BREATHING_WITH_AIRWAY_OBFUSCATION
  }
]