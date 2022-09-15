import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Routes from "./routes";
import Home from "../Home";
import GlasgowComaScoreInput from "../screens/GlasgowComaScoreInput";
import GlasgowComaScoreCalculator from "../screens/GlasgowComaScoreCalculator/GlasgowComaScoreCalculator";
import PrimaruSurvey from "../screens/zeroToNinePathway/PrimarySurvey";
import DisbalityAssessment from "../screens/zeroToNinePathway/DisablityAssessment";
import RiskStartication from "../screens/zeroToNinePathway/RiskStratification1";
import RiskStartication2 from "../screens/zeroToNinePathway/RiskStratification2";
import PhysicalExam from "../screens/zeroToNinePathway/PhysicalExam";
import DispositionRecommendationsHIM from "../screens/zeroToNinePathway/DispositionRecommendations";
import NeuroprotectiveMeasures from "../screens/zeroToNinePathway/NeuroprotectiveMeasures";
import NeuroprotectiveMeasuresRapid from "../screens/zeroToNinePathway/NeuroprotectiveMeasuresRapid";
import PrimaruSurveyTEN from "../screens/tenToTwentyThreePathway/PrimarySurvey";
import DisbalityAssessmentTEN from "../screens/tenToTwentyThreePathway/DisablityAssessment";
import RiskStarticationTen from "../screens/tenToTwentyThreePathway/RiskStratification1";
import RiskStartication2Ten from "../screens/tenToTwentyThreePathway/RiskStratification2";
import PhysicalExamTen from "../screens/tenToTwentyThreePathway/PhysicalExam";
import DispositionRecommendationsHIMTen from "../screens/tenToTwentyThreePathway/DispositionRecommendations";
import PrimaruSurveyTWO from "../screens/twoToSeventeenPathway/PrimarySurvey";
import DisbalityAssessmentTWO from "../screens/twoToSeventeenPathway/DisablityAssessment";
import RiskStarticationTwo from "../screens/twoToSeventeenPathway/RiskStratification1";
import RiskStartication2Two from "../screens/twoToSeventeenPathway/RiskStratification2";
import PhysicalExamTwo from "../screens/twoToSeventeenPathway/PhysicalExam";
import DispositionRecommendationsHIMTwo from "../screens/twoToSeventeenPathway/DispositionRecommendations";

const Stack = createNativeStackNavigator();

const HeadInjuryNavigation = [
  <Stack.Screen
    name={Routes.HEAD_INJURY_HOME}
    component={Home}
    key={Routes.HEAD_INJURY_HOME}
  />,
  <Stack.Screen
    name={Routes.GLASGOW_COMA_SCORE_INPUT}
    component={GlasgowComaScoreInput}
    key={Routes.GLASGOW_COMA_SCORE_INPUT}
  />,
  <Stack.Screen
    name={Routes.GLASGOW_COMA_SCORE_ASSISTANT}
    component={GlasgowComaScoreCalculator}
    key={Routes.GLASGOW_COMA_SCORE_ASSISTANT}
  />,
  <Stack.Screen
    name={Routes.PRIMARY_SURVEY_HI}
    component={PrimaruSurvey}
    key={Routes.PRIMARY_SURVEY_HI}
  />,
  <Stack.Screen
    name={Routes.DISABILITY_ASSESSMENT}
    component={DisbalityAssessment}
    key={Routes.DISABILITY_ASSESSMENT}
  />,
  <Stack.Screen
    name={Routes.RISK_STRATIFICATION_ASSESSMENT}
    component={RiskStartication}
    key={Routes.RISK_STRATIFICATION_ASSESSMENT}
  />,
  <Stack.Screen
    name={Routes.RISK_STRATIFICATION_ASSESSMENT_2}
    component={RiskStartication2}
    key={Routes.RISK_STRATIFICATION_ASSESSMENT_2}
  />,
  <Stack.Screen
    name={Routes.PHYSICAL_EXAM}
    component={PhysicalExam}
    key={Routes.PHYSICAL_EXAM}
  />,
  <Stack.Screen
    name={Routes.DISPOSITION_RECCOMENDATION_HMI}
    component={DispositionRecommendationsHIM}
    key={Routes.DISPOSITION_RECCOMENDATION_HMI}
  />, 
  <Stack.Screen
    name={Routes.NEUROPROTECTIVE_MEASURES}
    component={NeuroprotectiveMeasures}
    key={Routes.NEUROPROTECTIVE_MEASURES}
  />,
  <Stack.Screen
  name={Routes.NEUROPROTECTIVE_MEASURES_RAPID}
  component={NeuroprotectiveMeasuresRapid}
  key={Routes.NEUROPROTECTIVE_MEASURES_RAPID}
  />,
  <Stack.Screen
  name={Routes.PRIMARY_SURVEY_HI_TEN}
  component={PrimaruSurveyTEN}
  key={Routes.PRIMARY_SURVEY_HI_TEN}
  />,
  <Stack.Screen
  name={Routes.DISABILITY_ASSESSMENT_TEN}
  component={DisbalityAssessmentTEN}
  key={Routes.DISABILITY_ASSESSMENT_TEN}
  />,
  <Stack.Screen
  name={Routes.RISK_STRATIFICATION_ASSESSMENT_TEN}
  component={RiskStarticationTen}
  key={Routes.RISK_STRATIFICATION_ASSESSMENT_TEN}
/>,
<Stack.Screen
  name={Routes.RISK_STRATIFICATION_ASSESSMENT_2_TEN}
  component={RiskStartication2Ten}
  key={Routes.RISK_STRATIFICATION_ASSESSMENT_2_TEN}
/>,
<Stack.Screen
  name={Routes.PHYSICAL_EXAM_TEN}
  component={PhysicalExamTen}
  key={Routes.PHYSICAL_EXAM_TEN}
/>,
<Stack.Screen
  name={Routes.DISPOSITION_RECCOMENDATION_HMI_TEN}
  component={DispositionRecommendationsHIMTen}
  key={Routes.DISPOSITION_RECCOMENDATION_HMI_TEN}
/>,
<Stack.Screen
  name={Routes.PRIMARY_SURVEY_HI_TWO}
  component={PrimaruSurveyTWO}
  key={Routes.PRIMARY_SURVEY_HI_TWO}
/>,
<Stack.Screen
  name={Routes.DISABILITY_ASSESSMENT_TWO}
  component={DisbalityAssessmentTWO}
  key={Routes.DISABILITY_ASSESSMENT_TWO}
/>,
  <Stack.Screen
  name={Routes.RISK_STRATIFICATION_ASSESSMENT_TWO}
  component={RiskStarticationTwo}
  key={Routes.RISK_STRATIFICATION_ASSESSMENT_TWO}
/>,
<Stack.Screen
  name={Routes.RISK_STRATIFICATION_ASSESSMENT_2_TWO}
  component={RiskStartication2Two}
  key={Routes.RISK_STRATIFICATION_ASSESSMENT_2_TWO}
/>,
<Stack.Screen
  name={Routes.PHYSICAL_EXAM_TWO}
  component={PhysicalExamTwo}
  key={Routes.PHYSICAL_EXAM_TWO}
/>,
<Stack.Screen
  name={Routes.DISPOSITION_RECCOMENDATION_HMI_TWO}
  component={DispositionRecommendationsHIMTwo}
  key={Routes.DISPOSITION_RECCOMENDATION_HMI_TWO}
/>,
];

export default HeadInjuryNavigation;
