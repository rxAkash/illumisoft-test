import { AMIODARONE, DIAZEPAM, GENTAMINICIN, MIDAZOLAM } from "Modules/Resuscitation/config/drugConfig";
import { getAgeInWeeks } from "utils/ageConverter";

//some drugs have dynamic MaxDose
export const getCustomMaxDose = (drugName: string, drugSubname: string, patientWeight: number) => {
  if (drugName === AMIODARONE) {
    if (patientWeight >= 58) {
      return 300;
    } else {
      return patientWeight * 15
    }
  }
  if(drugName === DIAZEPAM && drugSubname === 'Sedative') {
    if (patientWeight >= 49) {
      return 5;
    } else {
      return patientWeight * 0.25
    }
  }
}

//some drugs have dynamic LowDose
export const getCustomLowDose = (drugName: string, patientAge: string, ageUnit: string, patientWeight: number) => {
  if(drugName === GENTAMINICIN) {
    if(getAgeInWeeks(patientAge, ageUnit) <= 4) {
      if(patientWeight < 2) {
        return 3
      } else {
        return 4
      }
    } else {
      return 5
    }
  }
}

//they forced me to do this!
//only for Midazolam for weights 1.5 kg and 4.5 kg moderate dose should be calculated differently
//only for Midazolam with maxDose 5 - there is another Midazolam that don't require this logic adjustment
//some medicine magic is behind this and no one can explain why
export const getCustomModerateDose = (drugName: string, patientWeight: number, maxDose: number) => {
  if(drugName === MIDAZOLAM && patientWeight === 1.5 && maxDose === 5) {
    return {
      dose: 0.22,
      max: false
    };
  }
  if(drugName === MIDAZOLAM && patientWeight === 4.5 && maxDose === 5) {
    return {
      dose: 0.67,
      max: false
    };
  }
  return null;
}