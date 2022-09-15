import { A_23_SCORING } from "../confs/a23conf";
import {
  calculateRespiratoryResult,
  calculateRetractions,
  calculateDyspnea,
  calculateAuscultation
} from "./sharedCalculations";

export const a23Calculator = (results: any) => {
  let score = 0;
  
  score += calculateRespiratoryResult(results, A_23_SCORING);
  score += calculateRetractions(results, A_23_SCORING)
  score += calculateDyspnea(results);
  score += calculateAuscultation(results);
  
  return score;
}