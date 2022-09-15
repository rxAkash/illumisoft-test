import { A_5_SCORING } from "../confs/a5conf";
import { calculateAuscultation, calculateDyspneaByCount, calculateRespiratoryResult, calculateRetractions } from "./sharedCalculations";


export const a5Calculator = (results: any) => {
  let score = 0;
  
  score += calculateRespiratoryResult(results, A_5_SCORING);
  score += calculateRetractions(results, A_5_SCORING)
  score += calculateDyspneaByCount(results, A_5_SCORING);
  score += calculateAuscultation(results);
  
  return score;
}