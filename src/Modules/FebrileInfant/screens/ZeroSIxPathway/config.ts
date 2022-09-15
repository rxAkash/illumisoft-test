import { ZERO_SIX_ANTIBIOTICS, ZERO_SIX_DIAGNOSTIC_TEST, ZERO_SIX_DISCLAIMER } from "Modules/FebrileInfant/navigation/routes";

export const ZERO_SIX_NAV_LEGEND = [
  {
    title: 'Evaluation for infants 0-7 days old',
    route: null,
  },
  {
    title: 'Disclaimers',
    route: ZERO_SIX_DISCLAIMER,
    subroute: true
  },
  {
    title: 'Diagnostic Tests',
    route: ZERO_SIX_DIAGNOSTIC_TEST,
    subroute: true
  },
  {
    title: 'Antibiotic Options after Admission',
    route: ZERO_SIX_ANTIBIOTICS,
    subroute: true
  }
]