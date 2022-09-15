import { ANTIBIOTIC_OPTIONS, INFANT_APPEARS_DISCLAIMERS, INFANT_APPEARS_TESTS } from "Modules/FebrileInfant/navigation/routes";

export const INFANT_APPEARS_NAV_CONF = [
  {
    title: 'Ill-Appearing Infant Evaluation',
    route: null,
  },
  {
    title: 'Disclaimers',
    route: INFANT_APPEARS_DISCLAIMERS,
    subroute: true
  },
  {
    title: 'Diagnostic Tests',
    route: INFANT_APPEARS_TESTS,
    subroute: true
  },
  {
    title: 'Antibiotic Options after Admission',
    route: ANTIBIOTIC_OPTIONS,
    subroute: true
  }
]