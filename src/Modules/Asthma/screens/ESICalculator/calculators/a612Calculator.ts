import { A_612_SCORING } from "../confs/a612conf";
import { calculateAuscultation, calculateDyspneaByCount, calculateRespiratoryResult, calculateRetractions } from "./sharedCalculations";


export const a612Calculator = (results: any) => {
  let score = 0;
  
  score += calculateRespiratoryResult(results, A_612_SCORING);
  score += calculateRetractions(results, A_612_SCORING)
  score += calculateDyspneaByCount(results, A_612_SCORING);
  score += calculateAuscultation(results);
  
  return score;
}