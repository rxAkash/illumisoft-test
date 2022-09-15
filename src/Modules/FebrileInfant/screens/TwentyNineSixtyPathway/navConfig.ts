import {
  URINALYSIS_QUESTIONS_HIGH_RISK,
} from "../SevenTwentyEight/routes";
import UrinalysisQuestionsHighRisk from "../SevenTwentyEight/UrinalysisQuestionsHighRisk";
import {
  BACTERIAL_INFECTION_ASSESMENT,
  DIAGNOSTIC_TESTS,
  HSV_CHECKLIST,
  HSV_HIGH_RISK_RECOMMENDATIONS,
  HSV_LOW_RISK_RECOMMENDATIONS,
  HIGH_RISK_FOR_BACTERIAL_INFECTION,
  TWENTY_NINE_SIXTY_DISCLAIMER,
  DISPOSITION_RECOMMENDATIONS_LOW,
  DISCHARGE_CHECKLIST,
  DISPOSITION_RECOMMENDATIONS,
} from "./routes";

export const TWENTY_NINE_SIXTY_NAV_LEGEND = [
  {
    title: "Disclaimer",
    route: TWENTY_NINE_SIXTY_DISCLAIMER,
  },
  {
    title: "Diagnostic Tests",
    route: DIAGNOSTIC_TESTS,
  },
  {
    title: "HSV Risk Assessment",
    route: HSV_CHECKLIST,
  },
  {
    title: "High Risk Admission Recommendations",
    route: HSV_HIGH_RISK_RECOMMENDATIONS,
    subroute: true,
  },
  {
    title: "Low Risk Recommendations",
    route: HSV_LOW_RISK_RECOMMENDATIONS,
    subroute: true,
  },
  {
    title: "Bacterial Infection Assesment",
    route: BACTERIAL_INFECTION_ASSESMENT,
  },
  {
    title: "High Risk Recommendations",
    route: HIGH_RISK_FOR_BACTERIAL_INFECTION,
    subroute: true,
  },
  {
    title: "Disposition Recommendations (High Risk Bacterial)",
    route: DISPOSITION_RECOMMENDATIONS,
  },
  {
    title: "Disposition Recommendations (Low Risk Bacterial)",
    route: DISPOSITION_RECOMMENDATIONS_LOW,
  },
  {
    title: "Discharge Checklist",
    route: DISCHARGE_CHECKLIST,
  },
];
