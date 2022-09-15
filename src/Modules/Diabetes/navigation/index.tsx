import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BASAL_INSULIN, CEREBRAL_EDEMA, CEREBRAL_EDEMA_DIAGNOSIS, CEREBRAL_EDEMA_LIKELY, CEREBRAL_EDEMA_MAJOR_CRITERIA, CEREBRAL_EDEMA_MINOR_CRITERIA, CEREBRAL_EDEMA_NOT_LIKELY, CEREBRAL_EDEMA_TREATMENT, DIABETES_DIAGNOSIS_PATHWAY, DIABETES_HOME, DIABETES_KETOACIDOSIS_DIAGNOSIS, DIABETES_KETOACIDOSIS_SECOND, DIABETES_RESUS_REDIRECT, DIABETIC_KETOACIDOSIS_TREATMENT, DIAGNOSIS_DECISION_SUPPORT, PAITENT_INFO_INPUT, HYPOGLYSEMIA_MANAGEMENT, INSULIN_DRIP, INSULIN_DRIP_AND_TITRATION, INSULIN_QUESTION, IV_FLUIDS, LABORATORY_RESULTS, NAVIGATING_PUMP_SETTINGS, ONDANSETRON, PUMP_MALFUNCTION, RECOMMENDATIONS_FOR_NEW_ONSET, RECOMMENDATIONS_FOR_TYPE_1, ROUTINE_RAPID_INSULIN_DOING, TITRATION_RATES, ROUTINE_INSULIN_PUMP_WORKING, ROUTINE_INSULIN_HAVE_ACCESS, ROUTINE_INSULIN_GLUCOSE, HYPOGLYCEMIA_MANAGEMENT_GLUCOSE, ROUTINE_INSULIN_FINISH, ROUTINE_INSULIN_KETONES, ROUTINE_INSULIN_DOSE, ROUTINE_INSULIN_KETONES_DOSAGE, ROUTINE_INSULIN_PATIENT_INFO, ROUTINE_INSULIN_ABOUT_TO_EAT, ROUTINE_INSULIN_CARB_RATIO, ROUTINE_INSULIN_NO_ACTION, ROUTINE_INSULIN_CARB_3_HOURS } from './routes';
import DiabetesHome from '..';
import DiabetesDiagnosisPathway from '../screens/DiabetesDiagnosisPathway';
import DiagnosisDecisionSupport from '../screens/DiagnosisDecisionSupport';
import DiabetesKetoacidosisDiagnosis from '../screens/DiabetesKetoacidosisDiagnosis';
import ResusRedirect from '../screens/ResusRedirect';
import DiabetesKetoacidosisSecond from '../screens/DiabetesKetoacidosisSecond';
import RecommendationsForNewOnset from '../screens/RecommendationsForNewOnset';
import RecommendationsForType1 from '../screens/RecommendationsForType1';
import LaboratoryResults from '../screens/LaboratoryResults';
import PatientDetailsInput from '../screens/PatientDetailsInput';
import CerebralEdema from '../screens/CerebralEdema';
import CerebralEdemaTreatment from '../screens/CerebralEdemaTreatment';
import DiabeticKetoacidosisTreatment from '../screens/DiabeticKetoacidosisTreatment';
import IVFluids from '../screens/IVFluids';
import InsulinQuestion from '../screens/InsulinQuestion';
import PumpMalfunction from '../screens/PumpMalfunction';
import NavigatingPumpSettings from '../screens/NavigatingPumpSettings';
import BasalInsulin from '../screens/BasalInsulin';
import Ondansetron from '../screens/Ondansetron';
import InsulinDrip from '../screens/InsulinDrip';
import InsulinDripAndIVFTitration from '../screens/InsulinDripAndIVFTitration';
import HypoglycemiaManagement from '../screens/HypoglycemiaManagement';
import TitrationRates from '../screens/TitrationRates';
import CerebralEdemaDiagnosis from '../screens/CerebralEdemaDiagnosis';
import CerebralEdemaMajorCriteria from '../screens/CerebralEdemaMajorCriteria';
import CerebralEdemaMinorCriteria from '../screens/CerebralEdemaMinorCriteria';
import RoutineRapidInsulinDosing from '../screens/RoutineRapidInsulinDosing';
import CerebralEdemaLikely from '../screens/CerebralEdemaLikely';
import CerebralEdemaNotLikely from '../screens/CerebralEdemaNotLikely';
import RoutineInsulinPumpWorking from '../screens/RoutineInsulinPumpWorking';
import RoutineInsulinHaveAccess from '../screens/RoutineInsulinHaveAccess';
import RoutineInsulinGlucose from '../screens/RoutineInsulinGlucose';
import HypoglycemiaManagementGlucose from '../screens/HypoglycemiaManagementGlucose';
import RoutineInsulinFinish from '../screens/RoutineInsulinFinish';
import RoutineInsulinKetones from '../screens/RoutineInsulinKetones';
import RoutineInsulinDose from '../screens/RoutineInsulinDose';
import RoutineInsulinKetonesDosage from '../screens/RoutineInsulinKetonesDosage';
import RoutineInsulinPatientInfo from '../screens/RoutineInsulinPatientInfo';
import RoutineInsulinAboutToEat from '../screens/RoutineInsulinAboutToEat';
import RoutineInsulineCarbRatio from '../screens/RoutineInsulinCarbRatio';
import RoutineInsulinNoAction from '../screens/RoutineInsulinNoAction';
import RoutineInsulinCarb3Hours from '../screens/RoutineInsulinCarb3Hours';

const Stack = createNativeStackNavigator();

const DiabetesNavigation = [
  <Stack.Screen name={DIABETES_HOME} component={DiabetesHome} key={DIABETES_HOME} />,
  <Stack.Screen name={DIABETES_DIAGNOSIS_PATHWAY} component={DiabetesDiagnosisPathway} key={DIABETES_DIAGNOSIS_PATHWAY} />,
  <Stack.Screen name={DIAGNOSIS_DECISION_SUPPORT} component={DiagnosisDecisionSupport} key={DIAGNOSIS_DECISION_SUPPORT} />,
  <Stack.Screen name={DIABETES_KETOACIDOSIS_DIAGNOSIS} component={DiabetesKetoacidosisDiagnosis} key={DIABETES_KETOACIDOSIS_DIAGNOSIS} />,
  <Stack.Screen name={DIABETES_RESUS_REDIRECT} component={ResusRedirect} key={DIABETES_RESUS_REDIRECT} />,
  <Stack.Screen name={DIABETES_KETOACIDOSIS_SECOND} component={DiabetesKetoacidosisSecond} key={DIABETES_KETOACIDOSIS_SECOND} />,
  <Stack.Screen name={RECOMMENDATIONS_FOR_NEW_ONSET} component={RecommendationsForNewOnset} key={RECOMMENDATIONS_FOR_NEW_ONSET} />,
  <Stack.Screen name={RECOMMENDATIONS_FOR_TYPE_1} component={RecommendationsForType1} key={RECOMMENDATIONS_FOR_TYPE_1} />,
  <Stack.Screen name={LABORATORY_RESULTS} component={LaboratoryResults} key={LABORATORY_RESULTS} />,
  <Stack.Screen name={PAITENT_INFO_INPUT} component={PatientDetailsInput} key={PAITENT_INFO_INPUT} />,
  <Stack.Screen name={CEREBRAL_EDEMA} component={CerebralEdema} key={CEREBRAL_EDEMA} />,
  <Stack.Screen name={CEREBRAL_EDEMA_TREATMENT} component={CerebralEdemaTreatment} key={CEREBRAL_EDEMA_TREATMENT} />,
  <Stack.Screen name={DIABETIC_KETOACIDOSIS_TREATMENT} component={DiabeticKetoacidosisTreatment} key={DIABETIC_KETOACIDOSIS_TREATMENT} />,
  <Stack.Screen name={IV_FLUIDS} component={IVFluids} key={IV_FLUIDS} />,
  <Stack.Screen name={INSULIN_QUESTION} component={InsulinQuestion} key={INSULIN_QUESTION} />,
  <Stack.Screen name={PUMP_MALFUNCTION} component={PumpMalfunction} key={PUMP_MALFUNCTION} />,
  <Stack.Screen name={NAVIGATING_PUMP_SETTINGS} component={NavigatingPumpSettings} key={NAVIGATING_PUMP_SETTINGS} />,
  <Stack.Screen name={BASAL_INSULIN} component={BasalInsulin} key={BASAL_INSULIN} />,
  <Stack.Screen name={ONDANSETRON} component={Ondansetron} key={ONDANSETRON} />,
  <Stack.Screen name={INSULIN_DRIP} component={InsulinDrip} key={INSULIN_DRIP} />,
  <Stack.Screen name={INSULIN_DRIP_AND_TITRATION} component={InsulinDripAndIVFTitration} key={INSULIN_DRIP_AND_TITRATION} />,
  <Stack.Screen name={HYPOGLYSEMIA_MANAGEMENT} component={HypoglycemiaManagement} key={HYPOGLYSEMIA_MANAGEMENT} />,
  <Stack.Screen name={TITRATION_RATES} component={TitrationRates} key={TITRATION_RATES} />,
  <Stack.Screen name={CEREBRAL_EDEMA_DIAGNOSIS} component={CerebralEdemaDiagnosis} key={CEREBRAL_EDEMA_DIAGNOSIS} />,
  <Stack.Screen name={CEREBRAL_EDEMA_MAJOR_CRITERIA} component={CerebralEdemaMajorCriteria} key={CEREBRAL_EDEMA_MAJOR_CRITERIA} />,
  <Stack.Screen name={CEREBRAL_EDEMA_MINOR_CRITERIA} component={CerebralEdemaMinorCriteria} key={CEREBRAL_EDEMA_MINOR_CRITERIA} />,
  <Stack.Screen name={ROUTINE_RAPID_INSULIN_DOING} component={RoutineRapidInsulinDosing} key={ROUTINE_RAPID_INSULIN_DOING} />,
  <Stack.Screen name={CEREBRAL_EDEMA_LIKELY} component={CerebralEdemaLikely} key={CEREBRAL_EDEMA_LIKELY} />,
  <Stack.Screen name={CEREBRAL_EDEMA_NOT_LIKELY} component={CerebralEdemaNotLikely} key={CEREBRAL_EDEMA_NOT_LIKELY} />,
  <Stack.Screen name={ROUTINE_INSULIN_PUMP_WORKING} component={RoutineInsulinPumpWorking} key={ROUTINE_INSULIN_PUMP_WORKING} />,
  <Stack.Screen name={ROUTINE_INSULIN_HAVE_ACCESS} component={RoutineInsulinHaveAccess} key={ROUTINE_INSULIN_HAVE_ACCESS} />,
  <Stack.Screen name={ROUTINE_INSULIN_GLUCOSE} component={RoutineInsulinGlucose} key={ROUTINE_INSULIN_GLUCOSE} />,
  <Stack.Screen name={HYPOGLYCEMIA_MANAGEMENT_GLUCOSE} component={HypoglycemiaManagementGlucose} key={HYPOGLYCEMIA_MANAGEMENT_GLUCOSE} />,
  <Stack.Screen name={ROUTINE_INSULIN_FINISH} component={RoutineInsulinFinish} key={ROUTINE_INSULIN_FINISH} />,
  <Stack.Screen name={ROUTINE_INSULIN_KETONES} component={RoutineInsulinKetones} key={ROUTINE_INSULIN_KETONES} />,
  <Stack.Screen name={ROUTINE_INSULIN_DOSE} component={RoutineInsulinDose} key={ROUTINE_INSULIN_DOSE} />,
  <Stack.Screen name={ROUTINE_INSULIN_KETONES_DOSAGE} component={RoutineInsulinKetonesDosage} key={ROUTINE_INSULIN_KETONES_DOSAGE} />,
  <Stack.Screen name={ROUTINE_INSULIN_PATIENT_INFO} component={RoutineInsulinPatientInfo} key={ROUTINE_INSULIN_PATIENT_INFO} />,
  <Stack.Screen name={ROUTINE_INSULIN_ABOUT_TO_EAT} component={RoutineInsulinAboutToEat} key={ROUTINE_INSULIN_ABOUT_TO_EAT} />,
  <Stack.Screen name={ROUTINE_INSULIN_CARB_RATIO} component={RoutineInsulineCarbRatio} key={ROUTINE_INSULIN_CARB_RATIO} />,
  <Stack.Screen name={ROUTINE_INSULIN_NO_ACTION} component={RoutineInsulinNoAction} key={ROUTINE_INSULIN_NO_ACTION} />,
  <Stack.Screen name={ROUTINE_INSULIN_CARB_3_HOURS} component={RoutineInsulinCarb3Hours} key={ROUTINE_INSULIN_CARB_3_HOURS} />,
]

export default DiabetesNavigation;
