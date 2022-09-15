import { TRACHESTOMY_CHILD_WITH_RESPIRATORY_DISTRESS, TRACHESTOMY_INSERT_SMALLER_TUBE, TRACHESTOMY_THANK_YOU } from "Modules/Trachestomy/navigation/routes";

export const TRACH_TUBE_CHANGE_INFO = [
  {
    id: 1,
    text:
      "Cuffed Tubes – If pilot balloon is present, deflate completely with syringe before removing tube",
  },
  {
    id: 2,
    text: "Obstructed tube must be removed immediately",
  },
  {
    id: 3,
    text: "Place new tube quickly",
  },
  {
    id: 4,
    text: "If necessary, cover stoma and bag over mouth and nose with mask",
  },
  {
    id: 5,
    text:
      "SPECIAL CONSIDERATION: Bag over stoma with neonatal mask only if unable to ventilate or known critical upper airway obstruction ",
  },
];

export const TRACH_TUBE_CHANGE_ANSWER_SETS = [
  {
    answers: [0],
    result: TRACHESTOMY_INSERT_SMALLER_TUBE
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

export const TRACH_TUBE_CHANGE_QUESTIONS = [
  {
    id: 1,
    question: "Were you able to insert the same size tracheostomy tube?"
  },
  {
    id: 2,
    question: "Does the patient have ongoing signs of respiratory distress?"
  }
]