import { TRACHESTOMY_CHILD_WITH_NO_TRACH, TRACHESTOMY_CHILD_WITH_RESPIRATORY_DISTRESS, TRACHESTOMY_THANK_YOU } from "Modules/Trachestomy/navigation/routes"

export const INSERT_SMALLER_TUBE_QUESTIONS = [
  {
    id: 1,
    question: "Were you able to insert the smaller tracheostomy tube?"
  },
  {
    id: 2,
    question: "Does the patient have ongoing signs of respiratory distress?"
  }
]

export const INSERT_SMALLER_TUBE_ANSWER_SETS = [
  {
    answers: [0],
    result: TRACHESTOMY_CHILD_WITH_NO_TRACH
  },
  {
    answers: [1, 1],
    result: TRACHESTOMY_CHILD_WITH_RESPIRATORY_DISTRESS
  },
  {
    answers: [1, 0],
    result: TRACHESTOMY_THANK_YOU
  }
]