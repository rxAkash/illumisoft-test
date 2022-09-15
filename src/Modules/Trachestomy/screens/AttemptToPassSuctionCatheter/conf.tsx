import React from "react";
import BulletList from "UIToolkit/BulletList";
import Card from "UIToolkit/Card";
import { TRACHESTOMY_CHILD_WITH_RESPIRATORY_DISTRESS, TRACHESTOMY_THANK_YOU, TRACHESTOMY_TUBE_CHANGE } from "Modules/Trachestomy/navigation/routes"
import styles from './styles';

const INFO_BOX_TEXT = [
  {
    text: "Suction to the pre-determined depth provided by caregiver",
  },
  {
    text: "You may suction more than once, allow patient to recover in between passes",
  },
  {
    text: "Instill 2-3 drops saline in trach tube before suctioning to loosen secretions",
  },
  {
    text: "Twirl suction catheter while pulling catheter out and suctioning",
  },
  {
    text: "Suction a half a mark deeper",
  },
];

export const ATTEMPT_TO_PASS_CATHETER_QUESTIONS = [
  {
    id: 1,
    question: 'Were you able to pass suction catheter through trach tube?',
    customUICondition: 1,
    customUI: (
      <Card style={styles.infoBox}>
        <BulletList items={INFO_BOX_TEXT}/>
      </Card>
    )
  },
  {
    id: 2,
    question: 'Does the patient have ongoing signs of respiratory distress?',
  }
]

export const ATTEMPT_TO_PASS_CATHETER_ANSWER_SETS = [
  {
    answers: [0],
    result: TRACHESTOMY_TUBE_CHANGE
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