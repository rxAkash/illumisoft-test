import { A_4_SCORING } from "../confs/a4conf";
import { calculateRespiratoryResult, calculateRetractions, calculateDyspnea, calculateAuscultation } from "./sharedCalculations";

export const a4Calculator = (results: any) => {
  let score = 0;
  
  score += calculateRespiratoryResult(results, A_4_SCORING);
  score += calculateRetractions(results, A_4_SCORING)
  score += calculateDyspnea(results);
  score += calculateAuscultation(results);
  
  return score;
}