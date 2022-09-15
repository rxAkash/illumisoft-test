import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BRUE_HOME, DIAGNOSIS_CLASSIFICATION, FOURTH_STEP, HIGH_RISK_AMBULATORY_INFO, HIGH_RISK_DIAGNOSIS, HIGH_RISK_INPATIENT_INFO, HIGH_RISK_ONGOING_HOSPITAL, HIGH_RISK_PATHWAYS, INPATIENT_FINAL_QUESTION, LOW_RISK_RECOMMENDATIONS, NOT_A_BRUE, POSSIBLE_DIAGNOSIS, RISK_CLASSIFICATION, SECOND_STEP, THIRD_STEP } from './routes';
import BrueHome from '..';
import NotABrue from '../screens/NotABrue';
import SecondStep from '../screens/SecondStep';
import ThirdStep from '../screens/ThirdStep';
import FourthStep from '../screens/FourthStep';
import PossibleDiagnosis from '../screens/PossibleDiagnosis';
import RiskClassification from '../screens/RiskClassification';
import HighRiskPathways from '../screens/HighRiskPathways';
import HighRiskAmbulatoryEvaluation from '../screens/HighRiskAmbulatoryEvaluation';
import HighRiskDiagnosis from '../screens/HighRiskDiagnosis';
import HighRiskInpatientEvaluation from '../screens/HighRiskInpatientEvaluation';
import OngoingHospitalEvaluation from '../screens/OngoingHospitalEvaluation';
import InpatientFinalQuestion from '../screens/InpatientFinalQuestion';
import DiagnosisClassification from '../screens/DiagnosisClassification';
import LowRiskRecommendations from '../screens/LowRiskRecommendations';

const Stack = createNativeStackNavigator();

const BrueNavigation = [
  <Stack.Screen name={BRUE_HOME} component={BrueHome} key={BRUE_HOME} />,
  <Stack.Screen name={NOT_A_BRUE} component={NotABrue} key={NOT_A_BRUE} />,
  <Stack.Screen name={SECOND_STEP} component={SecondStep} key={SECOND_STEP} />,
  <Stack.Screen name={THIRD_STEP} component={ThirdStep} key={THIRD_STEP} />,
  <Stack.Screen name={FOURTH_STEP} component={FourthStep} key={FOURTH_STEP} />,
  <Stack.Screen name={POSSIBLE_DIAGNOSIS} component={PossibleDiagnosis} key={POSSIBLE_DIAGNOSIS} />,
  <Stack.Screen name={RISK_CLASSIFICATION} component={RiskClassification} key={RISK_CLASSIFICATION} />,
  <Stack.Screen name={HIGH_RISK_PATHWAYS} component={HighRiskPathways} key={HIGH_RISK_PATHWAYS} />,
  <Stack.Screen name={HIGH_RISK_AMBULATORY_INFO} component={HighRiskAmbulatoryEvaluation} key={HIGH_RISK_AMBULATORY_INFO} />,
  <Stack.Screen name={HIGH_RISK_DIAGNOSIS} component={HighRiskDiagnosis} key={HIGH_RISK_DIAGNOSIS} />,
  <Stack.Screen name={HIGH_RISK_INPATIENT_INFO} component={HighRiskInpatientEvaluation} key={HIGH_RISK_INPATIENT_INFO} />,
  <Stack.Screen name={HIGH_RISK_ONGOING_HOSPITAL} component={OngoingHospitalEvaluation} key={HIGH_RISK_ONGOING_HOSPITAL} />,
  <Stack.Screen name={INPATIENT_FINAL_QUESTION} component={InpatientFinalQuestion} key={INPATIENT_FINAL_QUESTION} />,
  <Stack.Screen name={DIAGNOSIS_CLASSIFICATION} component={DiagnosisClassification} key={DIAGNOSIS_CLASSIFICATION} />,
  <Stack.Screen name={LOW_RISK_RECOMMENDATIONS} component={LowRiskRecommendations} key={LOW_RISK_RECOMMENDATIONS} />,
]

export default BrueNavigation;
