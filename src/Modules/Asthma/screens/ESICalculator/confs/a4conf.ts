import {
  AUSCULTATION_SCORING,
  DECREASED_APETITE_OPTION,
  DIMINISHED_BREATH_OPTION,
  DROWSY_OPTION,
  DYSPNEA_SCORING, 
  END_EXPIRATORY_OPTION, 
  EXPIRATORY_PHASE_OPTION, 
  HYPERACTIVITY_OPTION,
  INCREASED_COUGHING_OPTION,
  INSPIRATORY_WHEESE_OPTION,
  NORMAL_BREATHE_OPTION,
  NORMAL_FEEDING_OPTION,
  RESPIRATORY_SCORING,
  RETRACTIONS_SCORING,
  STOPS_EATING_OPTION,
  STOPS_PLAYING_OPTION
} from "./sharedConf";

export const A_4_SCORING = {
  name: "ESI score",
  title: "Calculate Respiratory Score",
  age: "(4yrs)",
  EC: "Screen Access",
  EA: "A_4_SCORING",
  EA_ENDSCORE: "A_4_RS_ENDSCORE",
  Description: "User selected the “4 Years” age from the A_AGE_SELECTION",
  scores: [{
    title: "Respiratory Rate",
    name: RESPIRATORY_SCORING,
    type: "radio",
    options: [{
      title: "<= 30",
      value: "A_RS_FIRST",
      points: 1,
      EC: "User Decision",
      EA: "A_4_RS_RR_LE30"
    }, {
      title: "31-35",
      value: "A_RS_SECOND",
      points: 2,
      EC: "User Decision",
      EA: "A_4_RS_RR_3135"
    }, {
      title: ">= 36",
      value: "A_RS_THIRD",
      points: 3,
      EC: "User Decision",
      EA: "A_4_RS_RR_GE36"
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
      EA: "A_4_RS_RETRACTIONS_NONE"
    }, {
      title: "Subcostal",
      value: "A_RS_RETRACTIONS_SUBCOSTAL",
      points: 1,
      EC: "User Decision",
      EA: "A_4_RS_RETRACTIONS_SUBCOSTAL"
    }, {
      title: "Intercostal",
      value: "A_RS_RETRACTIONS_INTERCOSTAL",
      points: 1,
      EC: "User Decision",
      EA: "A_4_RS_RETRACTIONS_INTERCOSTAL"
    }, {
      title: "Substernal",
      value: "A_RS_RETRACTIONS_SUBSTERNAL",
      points: 1,
      EC: "User Decision",
      EA: "A_4_RS_RETRACTIONS_SUBSTERNAL"
    }, {
      title: "Suprasternal",
      value: "A_RS_RETRACTIONS_SUPRASTERNAL",
      points: 1,
      EC: "User Decision",
      EA: "A_4_RS_RETRACTIONS_SUPRASTERNAL"
    }, {
      title: "Supraclavicular",
      value: "A_RS_RETRACTIONS_SUPRACLAVICULAR",
      points: 1,
      EC: "User Decision",
      EA: "A_4_RS_RETRACTIONS_SUPRACLAVICULAR"
    }]
  }, {
    title: "Dyspnea (Select all that apply)",
    name: DYSPNEA_SCORING,
    type: "checkbox",
    options: [{
      title: "Normal feeding, vocalizations, play",
      value: NORMAL_FEEDING_OPTION,
      points: 0,
      EC: "User Decision",
      EA: "A_4_RS_DYSPNEA_NORMAL"
    }, {
      title: "Decreased appetite",
      value: DECREASED_APETITE_OPTION,
      points: 1,
      EC: "User Decision",
      EA: "A_4_RS_DYSPNEA_DECREASEDAPP"
    }, {
      title: "Increased coughing after play",
      value: INCREASED_COUGHING_OPTION,
      points: 1,
      EC: "User Decision",
      EA: "A_4_RS_DYSPNEA_COUGHING"
    }, {
      title: "Hyperactivity",
      value: HYPERACTIVITY_OPTION,
      points: 1,
      EC: "User Decision",
      EA: "A_4_RS_DYSPNEA_HYPERACTIVITY"
    }, {
      title: "Stops eating or drinking",
      value: STOPS_EATING_OPTION,
      points: 3,
      EC: "User Decision",
      EA: "A_4_RS_DYSPNEA_STOPEATORDRINK"
    }, {
      title: "Stops playing",
      value: STOPS_PLAYING_OPTION,
      points: 3,
      EC: "User Decision",
      EA: "A_4_RS_DYSPNEA_STOPPLAY"
    }, {
      title: "Drowsy and confused",
      value: DROWSY_OPTION,
      points: 3,
      EC: "User Decision",
      EA: "A_4_RS_DYSPNEA_DROWSYCONFUSED"
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
      EA: "A_4_RS_AUSC_NORMAL"
    }, {
      title: "End-expiratory wheeze only",
      value: END_EXPIRATORY_OPTION,
      points: 1,
      EC: "User Decision",
      EA: "A_4_RS_AUSC_ENDEXPWHEEZE"
    }, {
      title: "Expiratory phase wheeze (greater than end-expiratory)",
      value: EXPIRATORY_PHASE_OPTION,
      points: 1,
      EC: "User Decision",
      EA: "A_4_RS_AUSC_EXPWHEEZE"
    }, {
      title: "Inspiratory wheeze",
      value: INSPIRATORY_WHEESE_OPTION,
      points: 1,
      EC: "User Decision",
      EA: "A_4_RS_AUSC_INSPWHEEZE"
    }, {
      title: "Diminished breath sounds",
      value: DIMINISHED_BREATH_OPTION,
      points: 1,
      EC: "User Decision",
      EA: "A_4_RS_AUSC_DIMINISHEDSOUNDS"
    }]
  }]
}