
import { DIAGNOSTIC_TEST, DISCHARGE_CHECKLIST, DISCHARGE_CHECKLIST_LOW_RISK, DISPOSITION_RECCOMENDATION, DISPOSITION_RECCOMENDATION_1A, HIGH_RISK_BACKTERIAL_INFECTION, HIGH_RISK_HSV, HOSPITAL_ADMISSION, HOSPITAL_ADMISSION_RECOMMENDATION, HSV_CHECKLIST, LOW_HSV_RISK, RECOMMENDED_EVALUATION, SIXTY_ONE_NINETY_DISCLAIMER } from "./routes";

export const SIXTY_ONE_NINETY_NAV_LEGEND = [
  {
    title: 'Evaluation for infants 29-60 Days Old',
    route: null
  },
  {
    title: 'Disclaimer',
    route: SIXTY_ONE_NINETY_DISCLAIMER,
  },
  {
    title: 'Diagnostic Tests',
    route: DIAGNOSTIC_TEST,

  },
  {
    title: 'HSV Risk Assessment',
    route:  HSV_CHECKLIST
  },
  {
    title: 'High Risk Recommendations',
    route: HIGH_RISK_HSV,
    subroute: true
  },
  {
    title: "High Risk Admission Recommendations",
    route: HOSPITAL_ADMISSION_RECOMMENDATION,
    subroute: true
  },
  {
    title: 'Bacterial Infection Risk Assessment',
    route: LOW_HSV_RISK
  },
  {
    title: "Urinalysis Questions",
    route: HIGH_RISK_BACKTERIAL_INFECTION
  },
  {
    title: "Discharge Checklist",
    route: DISCHARGE_CHECKLIST
  },
  
]