import {
  AUSCULTATION_SCORING,
  DIMINISHED_BREATH_OPTION,
  DYSPNEA_COUNT_46_OPTION,
  DYSPNEA_COUNT_79_OPTION,
  DYSPNEA_COUNT_LESS_3_OPTION,
  DYSPNEA_COUNT_MORE_10_OPTION,
  DYSPNEA_SCORING,
  END_EXPIRATORY_OPTION,
  EXPIRATORY_PHASE_OPTION,
  INSPIRATORY_WHEESE_OPTION,
  NORMAL_BREATHE_OPTION,
  RESPIRATORY_SCORING,
  RETRACTIONS_SCORING
} from "./sharedConf";

export const A_612_SCORING = {
  name: "ESI score",
  title: "Calculate Respiratory Score",
  age: "(6-12yrs)",
  EC: "Screen Access",
  EA: "A_612_SCORING",
  EA_ENDSCORE: "A_612_RS_ENDSCORE",
  Description: "User selected the “6-12 Years” age from the A_AGE_SELECTION",
  scores: [{
    title: "Respiratory Rate",
    name: RESPIRATORY_SCORING,
    type: "radio",
    options: [{
      title: "<= 26",
      value: "A_RS_FIRST",
      points: 1,
      EC: "User Decision",
      EA: "A_612_RS_RR_LE26"
    }, {
      title: "27-30",
      value: "A_RS_SECOND",
      points: 2,
      EC: "User Decision",
      EA: "A_612_RS_RR_2730"
    }, {
      title: ">= 31",
      value: "A_RS_THIRD",
      points: 3,
      EC: "User Decision",
      EA: "A_612_RS_RR_GE31"
    }]
  }, {
    title: "Retractions (Select all that apply)",
    name: RETRACTIONS_SCORING,
    type: "checkbox",
    options: [{
      title: "None",
      value: "A_RS_RETRACTIONS_NONE",
      points: 0,
      EC: "User Decision",
      EA: "A_612_RS_RETRACTIONS_NONE"
    }, {
      title: "Subcostal",
      value: "A_RS_RETRACTIONS_SUBCOSTAL",
      points: 1,
      EC: "User Decision",
      EA: "A_612_RS_RETRACTIONS_SUBCOSTAL"
    }, {
      title: "Intercostal",
      value: "A_RS_RETRACTIONS_INTERCOSTAL",
      points: 1,
      EC: "User Decision",
      EA: "A_612_RS_RETRACTIONS_INTERCOSTAL"
    }, {
      title: "Substernal",
      value: "A_RS_RETRACTIONS_SUBSTERNAL",
      points: 1,
      EC: "User Decision",
      EA: "A_612_RS_RETRACTIONS_SUBSTERNAL"
    }, {
      title: "Suprasternal",
      value: "A_RS_RETRACTIONS_SUPRASTERNAL",
      points: 1,
      EC: "User Decision",
      EA: "A_612_RS_RETRACTIONS_SUPRASTERNAL"
    }, {
      title: "Supraclavicular",
      value: "A_RS_RETRACTIONS_SUPRACLAVICULAR",
      points: 1,
      EC: "User Decision",
      EA: "A_612_RS_RETRACTIONS_SUPRACLAVICULAR"
    }]
  }, {
    title: "Dyspnea (Select one)",
    name: DYSPNEA_SCORING,
    type: "radio",
    options: [{
      title: "Counts to >= 10 in one breath",
      value: DYSPNEA_COUNT_MORE_10_OPTION,
      points: 0,
      EC: "User Decision",
      EA: "A_612_RS_DYSPNEA_GE10"
    }, {
      title: "Counts to 7-9 in one breath",
      value: DYSPNEA_COUNT_79_OPTION,
      points: 1,
      EC: "User Decision",
      EA: "A_612_RS_DYSPNEA_79"
    }, {
      title: "Counts to 4-6 in one breath",
      value: DYSPNEA_COUNT_46_OPTION,
      points: 2,
      EC: "User Decision",
      EA: "A_612_RS_DYSPNEA_46"
    }, {
      title: "Counts to <= 3 in one breath",
      value: DYSPNEA_COUNT_LESS_3_OPTION,
      points: 3,
      EC: "User Decision",
      EA: "A_612_RS_DYSPNEA_LE3"
    }]
  }, {
    title: "Auscultation (Select all that apply)",
    name: AUSCULTATION_SCORING,
    type: "checkbox",
    options: [{
      title: "Normal breath sounds; no wheezing",
      value: NORMAL_BREATHE_OPTION,
      points: 0,
      EC: "User Decision",
      EA: "A_612_RS_AUSC_NORMAL"
    }, {
      title: "End-expiratory wheeze only",
      value: END_EXPIRATORY_OPTION,
      points: 1,
      EC: "User Decision",
      EA: "A_612_RS_AUSC_ENDEXPWHEEZE"
    }, {
      title: "Expiratory phase wheeze (greater than end-expiratory)",
      value: EXPIRATORY_PHASE_OPTION,
      points: 1,
      EC: "User Decision",
      EA: "A_612_RS_AUSC_EXPWHEEZE"
    }, {
      title: "Inspiratory wheeze",
      value: INSPIRATORY_WHEESE_OPTION,
      points: 1,
      EC: "User Decision",
      EA: "A_612_RS_AUSC_INSPWHEEZE"
    }, {
      title: "Diminished breath sounds",
      value: DIMINISHED_BREATH_OPTION,
      points: 1,
      EC: "User Decision",
      EA: "A_612_RS_AUSC_DIMINISHEDSOUNDS"
    }]
  }]
}