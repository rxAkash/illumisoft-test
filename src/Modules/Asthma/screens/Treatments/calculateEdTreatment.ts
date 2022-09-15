import { FIRST_HOUR_VALUE, FOURTH_HOUR_VALUE, SECOND_HOUR_VALUE, THIRD_HOUR_VALUE } from "../EmergencyDeptartment/conf"
import { A_ED_ESIS_1, A_ED_ESIS_2, A_ED_ESIS_3 } from "../ESISelect/conf"
import { TREATMENT_OPTION_P1, TREATMENT_OPTION_P2, TREATMENT_OPTION_P3, TREATMENT_OPTION_P4 } from "../InpatientPathway/conf"
import { ONE_H_HIGH_TREATMENTS, ONE_H_MED_TREATMENTS, ONE_H_LOW_TREATMENTS, TWO_H_LOW_TREATMENTS, TWO_H_MED_TREATMENTS, TWO_H_HIGH_TREATMENTS, THREE_H_LOW_TREATMENTS, THREE_H_MED_TREATMENTS, THREE_H_HIGH_TREATMENT, FOUR_H_LOW_TREATMENTS, FOUR_H_MED_TREATMENTS, FOUR_H_HIGH_TREATMENTS, P2_TREATMENTS, P1_TREATMENTS, P3_TREATMENTS, P4_TREATMENTS } from "./conf"

export const calculateEDTreatment = (
  score?: number,
  hourSelected?: string,
  esiScore?: string,
  treatment?: string
) => {
  if(treatment && score !== undefined) {
    if(treatment === TREATMENT_OPTION_P1) {
      if(score >= 1 && score <= 8) {
        return P2_TREATMENTS
      } else {
        return P1_TREATMENTS
      }
    }

    if(treatment === TREATMENT_OPTION_P2) {
      if(score >= 1 && score <= 4) {
        return P3_TREATMENTS
      } else if(score >= 5 && score <= 8) {
        return P2_TREATMENTS
      } else {
        return P1_TREATMENTS
      }
    }

    if(treatment === TREATMENT_OPTION_P3) {
      if(score >= 1 && score <= 4) {
        return P4_TREATMENTS
      } else if(score >= 5 && score <= 8) {
        return P3_TREATMENTS
      } else {
        return P2_TREATMENTS
      }
    }

    if(treatment === TREATMENT_OPTION_P4) {
      if(score >= 1 && score <= 8) {
        return P4_TREATMENTS
      } else {
        return P3_TREATMENTS
      }
    }
  }

  if(hourSelected === FIRST_HOUR_VALUE) {
    if(esiScore) {
      if(esiScore === A_ED_ESIS_1 || esiScore === A_ED_ESIS_2) {
        return ONE_H_HIGH_TREATMENTS
      } else if(esiScore === A_ED_ESIS_3) {
        return ONE_H_MED_TREATMENTS
      } else {
        return ONE_H_LOW_TREATMENTS
      }
    } else if(score) {
      if(score >= 1 && score <= 5) {
        return ONE_H_LOW_TREATMENTS
      } else if(score >= 6 && score <= 8) {
        return ONE_H_MED_TREATMENTS
      } else {
        return ONE_H_HIGH_TREATMENTS
      }
    }
  } 
  
  if(hourSelected === SECOND_HOUR_VALUE) {
    if(score) {
      if(score >= 1 && score <= 4) {
        //Analytics.trackEvent(`Screen Access: A_ED_2H_LOW_TREATMENTS`);
        return TWO_H_LOW_TREATMENTS;
      } else if(score >= 5 && score <= 8) {
        //Analytics.trackEvent(`Screen Access: A_ED_2H_MED_TREATMENTS`);
        return TWO_H_MED_TREATMENTS;
      } else if(score >= 9) {
        //Analytics.trackEvent(`Screen Access: A_ED_2H_HIGH_TREATMENTS`);
        return TWO_H_HIGH_TREATMENTS;
      }
    }
  }

  if(hourSelected === THIRD_HOUR_VALUE) {
    if(score) {
      if(score >= 1 && score <= 4) {
        return THREE_H_LOW_TREATMENTS
      } else if(score >= 5 && score <= 8) {
        return THREE_H_MED_TREATMENTS
      } else {
        return THREE_H_HIGH_TREATMENT
      }
    }
  }

  if(hourSelected === FOURTH_HOUR_VALUE) {
    if(score) {
      if(score >= 1 && score <= 8) {
        return FOUR_H_LOW_TREATMENTS
      } else if(score >= 9 && score <= 10) {
        return FOUR_H_MED_TREATMENTS
      } else {
        return FOUR_H_HIGH_TREATMENTS
      }
    }
  }
}