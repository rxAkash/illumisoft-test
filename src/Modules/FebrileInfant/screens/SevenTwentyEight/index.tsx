import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ADMISSION_RECOMMENDATIONS, ANTIBIOTIC_ANTIVIRAL_RECCOMENDATIONS, BACTERIAL_INFECTION_ASSESMENT, SEVEN_TWENTY_EIGHT_DIAGNOSTIC_TESTS, SEVEN_TWENTY_EIGHT_DISCLAIMER, HIGN_RISK_RECCOMENDATIONS, HSV_CHECKLIST, HSV_EVALUATION, LOW_RISK_RECOMMENDATIONS, LOW_ANTIBIOTIC_RECOMMENDATIONS, HSV_RECOMMENDATIONS, ANTIBIOTIC_OPTIONS, URINALYSIS_QUESTIONS, DIAGNOSTIC_TESTS_HIGH_RISK, URINALYSIS_QUESTIONS_HIGH_RISK, ADMISSION_RECOMMENDATIONS_HIGH_RISK } from './routes';
import Disclaimer from './Disclaimer';
import DiagnosticTests from './DiagnosticTests';
import BacterialInfectionAssesment from './BacterialInfectionAssesment';
import HighRiskReccomendations from './HighRiskReccomendations';
import HSVChecklist from './HSVChecklist';
import HSVEvaluation from './HSVEvaluation';
import AntibioticRecommendations from './AntibioticRecommendations';
import AdmissionReccomendations from './AdmissionReccomendations';
import LowRiskReccomendations from './LowRiskReccomendations';
import LowAntibioticRecommendations from './LowAntibioticRecommendations';
import HSVRecommendations from './HSVRecommendations';
import AntibioticOptions from './AntibioticOptions';
import UrinalysisQuestions from './UrinalysisQuestions';
import DiagnosticTestsHighRisk from './DiagnosticTestsHighRisk';
import UrinalysisQuestionsHighRisk from './UrinalysisQuestionsHighRisk';
import AdmissionReccomendationsHighRisk from './AdmissionReccomendationsHighRisk';
const Stack = createNativeStackNavigator();

const EightTwentyOneNavigation = [
  <Stack.Screen name={SEVEN_TWENTY_EIGHT_DISCLAIMER} component={Disclaimer} key={SEVEN_TWENTY_EIGHT_DISCLAIMER} />,
  <Stack.Screen name={SEVEN_TWENTY_EIGHT_DIAGNOSTIC_TESTS} component={DiagnosticTests} key={BACTERIAL_INFECTION_ASSESMENT} />,
  <Stack.Screen name={BACTERIAL_INFECTION_ASSESMENT} component={BacterialInfectionAssesment} key={BACTERIAL_INFECTION_ASSESMENT} />,
  <Stack.Screen name={HIGN_RISK_RECCOMENDATIONS} component={HighRiskReccomendations} key={HIGN_RISK_RECCOMENDATIONS} />,
  <Stack.Screen name={HSV_CHECKLIST} component={HSVChecklist} key={HSV_CHECKLIST} />,
  <Stack.Screen name={HSV_EVALUATION} component={HSVEvaluation} key={HSV_EVALUATION} />,
  <Stack.Screen name={ANTIBIOTIC_ANTIVIRAL_RECCOMENDATIONS} component={AntibioticRecommendations} key={ANTIBIOTIC_ANTIVIRAL_RECCOMENDATIONS} />,
  <Stack.Screen name={ADMISSION_RECOMMENDATIONS} component={AdmissionReccomendations} key={ADMISSION_RECOMMENDATIONS} />,
  <Stack.Screen name={LOW_RISK_RECOMMENDATIONS} component={LowRiskReccomendations} key={LOW_RISK_RECOMMENDATIONS} />,
  <Stack.Screen name={LOW_ANTIBIOTIC_RECOMMENDATIONS} component={LowAntibioticRecommendations} key={LOW_ANTIBIOTIC_RECOMMENDATIONS} />,
  <Stack.Screen name={HSV_RECOMMENDATIONS} component={HSVRecommendations} key={HSV_RECOMMENDATIONS} />,
  <Stack.Screen name={ANTIBIOTIC_OPTIONS} component={AntibioticOptions} key={ANTIBIOTIC_OPTIONS} />,
  <Stack.Screen name={URINALYSIS_QUESTIONS} component={UrinalysisQuestions} key={URINALYSIS_QUESTIONS} />,
  <Stack.Screen name={DIAGNOSTIC_TESTS_HIGH_RISK} component={DiagnosticTestsHighRisk} key={DIAGNOSTIC_TESTS_HIGH_RISK} />,
  <Stack.Screen name={URINALYSIS_QUESTIONS_HIGH_RISK} component={UrinalysisQuestionsHighRisk} key={URINALYSIS_QUESTIONS_HIGH_RISK} />,
  <Stack.Screen name={ADMISSION_RECOMMENDATIONS_HIGH_RISK} component={AdmissionReccomendationsHighRisk} key={ADMISSION_RECOMMENDATIONS_HIGH_RISK} />,


]

export default EightTwentyOneNavigation;
