import React from 'react';
import { Text } from 'react-native';
import styles from '../../styles';

export const DIAGNOSTIC_TESTS = [
  "Urinalysis and urine culture by catheter or Suprapubic aspiration",
  "CBC with differential/band count",
  "C reactive protein or procalcitonin",
  "Lumbar puncture with CSF cell count, differential, protein, glucose, bacterial culture, and enterovirus/Parechovirus PCR",
  "Liver function testing",
]
export const DIAGNOSTIC_TESTS_HIGH_RISK = [
  "HSV PCR of blood and CSF, and skin vesicles if present",
  "Obtain surface specimens via Swab of conjunctiva, Nasopharynx, Axilla, Perianal Areas and send samples for HSV culture",
  "Liver Transaminases if not already obtained"
]

export const BACTERIAL_INFECTION_CONFIG = [
  { id: 1, question: 'Born at <37 weeks gestation?', ga: 'F_728_BIA_Under37' },
  { id: 2, question: 'History of prior hospitalization?', ga: 'F_728_BIA_Prior_Hosp' },
  { id: 3, question: 'Prolonged newborn nursery course?', ga: 'F_728_BIA_Prol_Nurs' },
  { id: 4, question: 'Is CBC WBC <5,000/cc or >15,000/cc?', ga: 'F_728_BIA_wbc_abnl' },
  { id: 5, question: 'UA positive for nitrites, leuk esterase, or WBC >5/HPF?', ga: 'F_728_BIA_ua_abnl' },
  { id: 6, question: 'Are bands >1500/cc?', ga: 'F_728_BIA_bands_abnl' },
  { id: 7, question: 'Is either the CRP or PCT elevated?', ga: 'F_728_BIA_crp_pct_abnl' },
  { id: 8, question: 'Does the child have a chronic illness?', ga: 'F_728_BIA_chron_ill' },
  { id: 9, question: 'Received antibiotics prior to this visit?', ga: 'F_728_BIA_pabx' },
  { id: 10, question: 'History of unexplained hyperbilirubinemia?', ga: 'F_728_BIA_hyperbili' },
];

export const HIGN_RISK_LIST = [
  "Cell count with differential",
  "Protein",
  "Glucose",
  "Bacterial culture",
  "Enterovirus PCR"
]

export const HSV_ASSESMENT = [
  { id: 1, question: 'Maternal history of HSV lesions or fever from 48 hours before delivery to 48 hours after delivery?', ga: 'F_728_HSV_mat_hx' },
  { id: 2, question: 'Hypothermia (36 degree C)?', ga: 'F_728_HSV_csf_abnl' },
  { id: 3, question: 'Seizure or focal neurologic signs?', ga: 'F_728_HSV_seizure' },
  { id: 4, question: 'Vesicles or mucous membrane ulcers?', ga: 'F_728_HSV_vesicle' },
  { id: 5, question: 'Leukopenia?', ga: 'F_728_HSV_lft_abnl' },
  { id: 6, question: 'Thrombocytopenia?', ga: 'F_728_HSV_thmb_abnl' },
  { id: 7, question: 'CSF pleocytosis without positive Gram stain (>15WBC per µL)?', ga: 'F_728_HSV_csf' },
  { id: 8, question: 'Elevated alanine aminotransferase?', ga: 'F_728_HSV_alamine' },

]

export const HSV_EVALUATION_TESTING_FROM = [
  "Blood",
  "CSF (if obtained)",
  "Vesicle (if present)",
]

export const HSV_EVALUATION_TESTING_LESS_THAN_2_WEEKS = [
  "Swab conjunctiva",
  "Nasopharynx",
  "Axilla",
  "Perianal Areas",
  "and send samples for HSV culture",
]

export const ANTIBIOTIC_RECCOMENDATIONS = [
  {
    title: 'Acyclovir',
    dose: '20mg/kg/dose',
    code: 'IV q8H'
  }
]

export const EMPIRIC_OPTIONS = [
  {
    title: 'Ampicillin',
    dose: '75mg/kg/dose',
    code: 'IV or IM q6H'
  },
  {
    title: 'Ceftazidime',
    dose: '50mg/kg/dose',
    code: 'IV or IM q8H'
  },
  {
    title: 'Gentamicin',
    dose: '5mg/kg/dose',
    code: 'IV or IM q24H'
  }
]


export const OPTIONAL_EMPIRIC_OPTIONS = [
  {
    title: 'Ampicillin',
    dose: '50mg/kg/dose',
    code: 'IV or IM q6-8H'
  },
  {
    title: 'Ceftazidime',
    dose: '50mg/kg/dose',
    code: 'IV or IM q8H'
  },
  {
    title: 'Gentamicin',
    dose: '4mg/kg/dose',
    code: 'IV or IM q24H'
  }
]