import React from 'react';
import { Text } from 'react-native';
import styles from '../../styles';

export const DIAGNOSTIC_TESTS = [
  "Urinalysis and urine culture via catheter",
  "CBC with differential",
  "Blood culture",
  "Respiratory viral testing (if symptoms)",
  "C-reactive protein (CRP) or Procalcitonin (if patient will be observed off antibiotics)",
  <Text style={styles.regularText} key="1"><Text style={styles.underlineText}>Chest X-ray is unnecessary</Text> when there are no respiratory symptoms present</Text>,
]

export const BACTERIAL_INFECTION_CONFIG = [
  { id: 1, question: 'Born at <37 weeks gestation?', ga: 'F_2960_BIA_Under37' },
  { id: 2, question: 'History of prior hospitalization?', ga: 'F_2960_BIA_Prior_Hosp' },
  { id: 3, question: 'Prolonged newborn nursery course?', ga: 'F_2960_BIA_Prol_Nurs' },
  { id: 4, question: 'Is CBC WBC <5,000/cc or >15,000/cc?', ga: 'F_2960_BIA_wbc_abnl' },
  { id: 5, question: 'UA pos for nitrites, leuk esterase, or WBC >5/HPF? ', ga: 'F_2960_BIA_ua_abnl' },
  { id: 6, question: 'Are bands >1500/cc?', ga: 'F_2960_BIA_bands_abnl' },
  { id: 7, question: 'Is either CRP or PCT elevated?', ga: 'F_2960_BIA_crp_pct_abnl' },
  { id: 8, question: 'Does the child have a chronic illness?', ga: 'F_2960_BIA_chron_ill' },
  { id: 9, question: 'Received antibiotics prior to this visit?', ga: 'F_2960_BIA_pabx' },
  { id: 10, question: 'History of unexplained hyperbilirubinemia?', ga: 'F_2960_BIA_hyperbili' },
]

export const HSV_CHECKLIST = [
  { id: 1, question: 'Maternal history of HSV lesions or fever from 48 hours before delivery to 48 hours after delivery?', ga: 'F_2960_HSV_mat_hx' },
  { id: 2, question: 'Hypothermia (36 degree C)?', ga: 'F_2960_HSV_csf_abnl' },
  { id: 3, question: 'Seizure or focal neurologic signs?', ga: 'F_2960_HSV_seizure' },
  { id: 4, question: 'Leukopenia?', ga: 'F_2960_HSV_vesicle' },
  { id: 5, question: 'Thrombocytopenia?', ga: 'F_2960_HSV_lft_abnl' },
  { id: 6, question: 'CSF pleocytosis without positive Gram stain (>15WBC per µL)?', ga: 'F_2960_HSV_lft_abnl' },
  { id: 7, question: 'Elevated alanine aminotransferase?', ga: 'F_2960_HSV_lft_abnl' },

]

export const HSV_HIGH_RISK_LIST = [
  "Urine culture (catheter or suprapubic specimen if not already obtained)",
  "CSF studies to include: Cell count with differential, Protein, Glucose, Bacterial culture, and enterovirus/Parechovirus PCR",
  "Obtain HSV PCR testing from: Blood, CSF (if obtained), Vesicle (if present), surface viral cultures of mucous membranes including eye, skin, anal area"
]

export const HSV_HIGH_RISK_ANTIBIOTIC = {
  title: 'Acyclovir',
  dose: '20mg/kg/dose',
  code: 'IV q8H'
}

export const ADMISSION_ANTIBIOTIC_RECOMMENDATIONS = [
  {
    title: 'Ampicillin',
    dose: '75mg/kg/dose',
    code: 'IV q6H'
  },
  {
    title: 'Ceftazidime',
    dose: '50mg/kg/dose',
    code: 'IV q8H'
  },
  {
    title: 'Ceftriaxone',
    dose: '50mg/kg/dose',
    code: 'IV q12H'
  },
  {
    title: 'Gentamicin',
    dose: '5mg/kg/dose',
    code: 'IV q24H'
  }
]

export const DISCARGE_ADMISSION_CHECKLIST = [
  {
    id: 1,
    question: 'Are the parents comfortable with monitoring their child at home?',
    ga: 'F_2960_DC_CL_HR_parents_comfortable_monitoring_at_home',
  },
  {
    id: 2,
    question: 'Do the parents have reliable means of receiving communication from the hospital/ED?',
    ga: 'F_2960_DC_CL_HR_parents_can_receive_hosp_comm',
  },
  {
    id: 3,
    question: 'Can bacterial culture results be followed daily by the hospital/ED?',
    ga: 'F_2960_DC_CL_HR_bacterial_culture_results_followed_daily_by_hosp',
  },
  {
    id: 4,
    question: 'Can the patient follow-up with their PCP in 24H?',
    ga: 'F_2960_DC_CL_HR_patient_PCP_followup_in24h',
  },
]

export const DISCHARGE_CHECKLIST_LOW_RISK = [
  {
    id: 1,
    question: 'Are the parents comfortable with monitoring their child at home?',
    ga: 'F_2960_DC_CL_LR_parents_comfortable_monitoring_at_home',
  },
  {
    id: 2,
    question: 'Do the parents have reliable means of receiving communication from the hospital/ED?',
    ga: 'F_2960_DC_CL_LR_parents_can_receive_hosp_comm',
  },
  {
    id: 3,
    question: 'Can bacterial culture results be followed daily by the hospital/ED?',
    ga: 'F_2960_DC_CL_LR_bacterial_culture_results_followed_daily_by_hosp',
  },
  {
    id: 4,
    question: 'Can the patient follow-up with their PCP in 24H?',
    ga: 'F_2960_DC_CL_LR_patient_PCP_followup_in24h',
  },
];

export const OPTIONAL_ANTIBIOTICS_CONFIG = [
  {
    title: 'Ceftazidime',
    dose: '50mg/kg/dose',
    code: 'IV q8H*'
  },
  {
    or: true
  },
  {
    title: 'Ceftriaxone',
    dose: '50mg/kg/dose',
    code: 'IV q12H*'
  },
  {
    or: true
  },
  {
    title: 'Ampicillin',
    dose: '50mg/kg/dose',
    code: 'IV q6H'
  },
  {
    title: 'Gentamicin',
    dose: '4mg/kg/dose',
    code: 'IV q24H'
  }
]