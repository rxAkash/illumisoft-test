import {
  RESPIRATORY_SCORING,
  RETRACTIONS_SCORING,
  DYSPNEA_SCORING,
  NORMAL_FEEDING_OPTION,
  STOPS_EATING_OPTION,
  STOPS_PLAYING_OPTION,
  DROWSY_OPTION,
  DECREASED_APETITE_OPTION,
  INCREASED_COUGHING_OPTION,
  HYPERACTIVITY_OPTION,
  AUSCULTATION_SCORING,
  NORMAL_BREATHE_OPTION,
  EXPIRATORY_PHASE_OPTION,
  INSPIRATORY_WHEESE_OPTION,
  DIMINISHED_BREATH_OPTION,
  END_EXPIRATORY_OPTION
} from "../confs/sharedConf";


export const calculateRespiratoryResult = (results: any, scoring: any) => {
  const respiratoryResults = results[RESPIRATORY_SCORING];
  if(respiratoryResults) {
    const respiratoryOptions = scoring.scores[0].options;
    const points = respiratoryOptions.find((item: any) => item.value === respiratoryResults)?.points;
    if(points) {
      return points;
    }
  }
  return 0;
}

export const calculateRetractions = (results: any, scoring: any) => {
  const retractionResults = results[RETRACTIONS_SCORING];
  if(retractionResults) {
    let points = 0;
    const retractionOptions = scoring.scores[1].options;
    retractionResults.forEach((retraction: string) => {
      points += retractionOptions.find((item: any) => item.value === retraction)?.points || 0
    })
    if(points > 3) {
      return 3
    } else {
      return points;
    }
  }
  return 0;
}

export const calculateDyspnea = (results: any) => {
  let dyspneaResults = results[DYSPNEA_SCORING];
  if(dyspneaResults) {
    dyspneaResults = [...dyspneaResults];
    if(dyspneaResults.includes(NORMAL_FEEDING_OPTION)) {
      const index = dyspneaResults.findIndex((item: string) => item === NORMAL_FEEDING_OPTION)
      dyspneaResults.splice(index, 1);
    }

    if(dyspneaResults.includes(STOPS_EATING_OPTION)
      || dyspneaResults.includes(STOPS_PLAYING_OPTION)
      || dyspneaResults.includes(DROWSY_OPTION)) {
      return 3
    }

    if(dyspneaResults.length === 1) {
      if(dyspneaResults[0] === DECREASED_APETITE_OPTION
        || dyspneaResults[0] === INCREASED_COUGHING_OPTION
        || dyspneaResults[0] === HYPERACTIVITY_OPTION) {
        return 1
      }
    } else if(dyspneaResults.length >= 2) {
      return 2
    }
  }

  return 0;
}

export const calculateAuscultation = (results: any) => {
  let auscultationResults = results[AUSCULTATION_SCORING];
  if(auscultationResults) {
    auscultationResults = [...auscultationResults];
    if(auscultationResults.includes(NORMAL_BREATHE_OPTION)) {
      const index = auscultationResults.findIndex((item: string) => item === NORMAL_BREATHE_OPTION)
      auscultationResults.splice(index, 1);
    }


    if((auscultationResults.includes(EXPIRATORY_PHASE_OPTION)
        && auscultationResults.includes(INSPIRATORY_WHEESE_OPTION))
        || auscultationResults.includes(DIMINISHED_BREATH_OPTION)
    ) {
      return 3
    }

    if(auscultationResults.includes(EXPIRATORY_PHASE_OPTION) || (
      auscultationResults.includes(END_EXPIRATORY_OPTION) && auscultationResults.includes(INSPIRATORY_WHEESE_OPTION)
    ) || auscultationResults.includes(INSPIRATORY_WHEESE_OPTION)) {
      return 2
    }

    if(auscultationResults.length === 1 && auscultationResults[0] === END_EXPIRATORY_OPTION) {
      return 1
    }
  }

  return 0;
}

export const calculateDyspneaByCount = (results: any, scoring: any) => {
  const dyspneaResult = results[DYSPNEA_SCORING];
  if(dyspneaResult) {
    const dyspneaOptions = scoring.scores[2].options;
    const points = dyspneaOptions.find((item: any) => item.value === dyspneaResult)?.points;
    if(points) {
      return points;
    }
  }

  return 0;
}