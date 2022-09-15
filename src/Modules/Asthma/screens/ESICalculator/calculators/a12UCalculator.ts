import { A_12U_SCORING } from "../confs/a12Uconf";
import { calculateAuscultation, calculateDyspneaByCount, calculateRespiratoryResult, calculateRetractions } from "./sharedCalculations";


export const a12UCalculator = (results: any) => {
  let score = 0;
  
  score += calculateRespiratoryResult(results, A_12U_SCORING);
  score += calculateRetractions(results, A_12U_SCORING)
  score += calculateDyspneaByCount(results, A_12U_SCORING);
  score += calculateAuscultation(results);
  
  return score;
}