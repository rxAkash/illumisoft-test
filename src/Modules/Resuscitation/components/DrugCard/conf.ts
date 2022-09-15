import { KETAMINE, KETAMINE_SHORT, DEXTROSE_GLUCOSE, DEXTROSE_GLUCOSE_PEDIATRIC, EPINEPHRINE, CERTRIAXONE, CLINDAMYCIN, DIPHENHYDRAMINE, GLUCOSE_DEXTROSE, IBUPROFEN, MANNITOL, VALPORIC_ACID, FENTANYL, DIAZEPAM, HYPERTONIC_SALINE } from "Modules/Resuscitation/config/drugConfig";
import { getAgeInMonth, getAgeInWeeks } from "utils/ageConverter";

export const drugColors = {
  IV: { color: '#3F51B5', selectedConcentration: '#EBEDF7' },
  UVC: { color: '#3F51B5', selectedConcentration: '#EBEDF7' },
  IVP: { color: '#3F51B5', selectedConcentration: '#EBEDF7' },
  IO: { color: '#3F51B5', selectedConcentration: '#EBEDF7' },
  IntraMuscular: { color: '#880E4F', selectedConcentration: '#F3E6ED' },
  SubQ: { color: '#880E4F', selectedConcentration: '#F3E6ED' },
  'PO-Oral': { color: '#BF360C', selectedConcentration: '#F8EAE6' },
  ET: { color: '#9C27B0', selectedConcentration: '#F5E9F7' },
  Nasal: { color: '#827717', selectedConcentration: '#F2F1E7' },
  'PR-Rectal': { color: '#795548', selectedConcentration: '#F1EEEC' },
  Nebulization: { color: '#006064', selectedConcentration: '#E5EFEF' },
};

export const getAgeRestrictionWarning = (
  drugName: string,
  patientAge: string,
  ageUnit: string,
  drugType: string,
  ageRestricted?: boolean
) => {
  if((drugName === KETAMINE || drugName === KETAMINE_SHORT) && getAgeInWeeks(patientAge, ageUnit) <= 11) {
    return "Contraindicated in infants < 3 months";
  }
  if((drugName === DEXTROSE_GLUCOSE || drugName === DEXTROSE_GLUCOSE_PEDIATRIC) && getAgeInWeeks(patientAge, ageUnit) <= 4) {
    return "See newly born drug dosing"
  }
  if(drugName === EPINEPHRINE && ageRestricted && getAgeInWeeks(patientAge, ageUnit) <= 4 && drugType === 'IntraMuscular') {
    return "NOT recommended for infants < 1 month"
  }
  if(drugName === EPINEPHRINE && ageRestricted && getAgeInWeeks(patientAge, ageUnit) <= 4 && drugType === 'ET') {
    return "See newly born drug dosing"
  }
  if(drugName === CERTRIAXONE && getAgeInWeeks(patientAge, ageUnit) <= 4) {
    return "NOT routinely recommended in infants < 1 month"
  }
  if(drugName === CLINDAMYCIN && getAgeInWeeks(patientAge, ageUnit) <= 4) {
    return "NOT recommended in infants < 1 month"
  }
  if(drugName === DIPHENHYDRAMINE && getAgeInWeeks(patientAge, ageUnit) <= 4) {
    return "Contraindicated for this age"
  }
  if(drugName === GLUCOSE_DEXTROSE && getAgeInWeeks(patientAge, ageUnit) <= 4) {
    return "See newly born drug dosing"
  }
  if(drugName === IBUPROFEN && getAgeInWeeks(patientAge, ageUnit) <= 25) {
    return "NOT recommended for infants < 6 months"
  }
  if(drugName === MANNITOL && getAgeInWeeks(patientAge, ageUnit) <= 4) {
    return "NOT recommended in infants < 1 month"
  }
  if(drugName === VALPORIC_ACID && getAgeInWeeks(patientAge, ageUnit) < 104) {
    return "Avoid in children < 2 years"
  }
  if(drugName === FENTANYL && getAgeInMonth(patientAge, ageUnit) <= 11 && drugType === 'Nasal') {
    return "NOT recommended at this age"
  }
  if(drugName === DIAZEPAM && getAgeInWeeks(patientAge, ageUnit) <= 4 && ageRestricted) {
    return "NOT recommended for infants < 1 month"
  }
  if(drugName === HYPERTONIC_SALINE && getAgeInWeeks(patientAge, ageUnit) <= 4) {
    return "NOT recommended for infants < 1 month"
  }
  return null;
}