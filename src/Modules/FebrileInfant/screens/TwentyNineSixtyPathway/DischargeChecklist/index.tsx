import { febrileText } from 'Modules/FebrileInfant/config/strings';
import React from 'react';
import DischargeChecklist from '../../DischargeChecklist';
import { HIGH_RISK_HOSPITAL_ADMISSION_FIRST } from '../routes';

const DischargeChecklistTwentyTwoTwentyEight = React.memo(() => {
  return (
    <DischargeChecklist
      hospitalAdmissionRoute={HIGH_RISK_HOSPITAL_ADMISSION_FIRST}
      infoText={febrileText.twentyNineSixty.dischargeRecommendationsInfo}
    />
  )
})

export default DischargeChecklistTwentyTwoTwentyEight;


