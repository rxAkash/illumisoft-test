import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ADMISSION_RECS_SECOND,
  DIAGNOSTIC_TEST,
  DISCHARGE_CHECKLIST,
  DISCHARGE_CHECKLIST_LOW_RISK,
  DISPOSITION_RECCOMENDATION,
  DISPOSITION_RECCOMENDATION_1A,
  HIGH_RISK_BACKTERIAL_INFECTION,
  HIGH_RISK_BACKTERIAL_UAPATHWAY_INFECTION,
  HIGH_RISK_BACTERIAL_DISPOSITION,
  HIGH_RISK_HSV,
  HIGH_RISK_RECOMMENDATION,
  HOSPITAL_ADMISSION,
  HOSPITAL_ADMISSION_1B,
  HOSPITAL_ADMISSION_1C,
  HOSPITAL_ADMISSION_1D,
  HOSPITAL_ADMISSION_RECOMMENDATION,
  HSV_CHECKLIST,
  LOW_HSV_RISK,
  SIXTY_ONE_NINETY_DISCLAIMER,
} from "./routes";
import Disclaimer from "./Disclaimer";
import DiagnosticTests from "./Diagnostic";
import HSVChecklist from "./HSVChecklist";
import HighRiskHsv from "./HighHsv";
import HospitalAdmission from "./HospitalAdmission";
import LowHsvRisk from "./LowHsvRisk";
import HighRiskBacterialInfection from "./HighRiskBacterialInfectionRecommendations";
import AdmissionRecommedation from "./AdmissionRecommedation";
import DispositionReccomendation from "./DispositionReccomendation";
import DischargeChecklist from "./DischargeChecklist";
import HighRiskRecommendation from "./HighRiskRecommendation";
import DispositionRecommendation1A from "./DispositionRecommendation1A";
import AdmissionRecommendation1B from "./AdmissionRecommendation1b";
import AdmissionRecommendation1D from "./AdmissionRecommendation1D";
import HighRiskDisposition1A from "./HighRiskBacterialDisposition";
import DischargeChecklistLowRisk from "./DischargeChecklistLowRisk";
import AdmissionRecommedation1C from "./AdmissionRecommendation1C";
import HighRiskBacterialUaPathway from "./HighRiskBacterialUaPathwayDisposition";
import HighRiskHospitalAdmissionSecond from "./HighRiskHospitalAdmissionSecond";

const Stack = createNativeStackNavigator();

export const SixtyOneNinetyNavigation = [
  <Stack.Screen
    name={SIXTY_ONE_NINETY_DISCLAIMER}
    component={Disclaimer}
    key={SIXTY_ONE_NINETY_DISCLAIMER}
  />,
  <Stack.Screen
    name={DIAGNOSTIC_TEST}
    component={DiagnosticTests}
    key={DIAGNOSTIC_TEST}
  />,
  <Stack.Screen
    name={HSV_CHECKLIST}
    component={HSVChecklist}
    key={HSV_CHECKLIST}
  />,
  <Stack.Screen
    name={HIGH_RISK_HSV}
    component={HighRiskHsv}
    key={HIGH_RISK_HSV}
  />,
  <Stack.Screen
    name={HOSPITAL_ADMISSION}
    component={HospitalAdmission}
    key={HOSPITAL_ADMISSION}
  />,
  <Stack.Screen
    name={LOW_HSV_RISK}
    component={LowHsvRisk}
    key={LOW_HSV_RISK}
  />,
  <Stack.Screen
    name={HIGH_RISK_BACKTERIAL_INFECTION}
    component={HighRiskBacterialInfection}
    key={HIGH_RISK_BACKTERIAL_INFECTION}
  />,
  <Stack.Screen
    name={HIGH_RISK_BACTERIAL_DISPOSITION}
    component={HighRiskDisposition1A}
    key={HIGH_RISK_BACTERIAL_DISPOSITION}
  />,
  <Stack.Screen
    name={HOSPITAL_ADMISSION_RECOMMENDATION}
    component={AdmissionRecommedation}
    key={HOSPITAL_ADMISSION_RECOMMENDATION}
  />,
  <Stack.Screen
    name={HOSPITAL_ADMISSION_1B}
    component={AdmissionRecommendation1B}
    key={HOSPITAL_ADMISSION_1B}
  />,
  <Stack.Screen
    name={HOSPITAL_ADMISSION_1C}
    component={AdmissionRecommedation1C}
    key={HOSPITAL_ADMISSION_1C}
  />,
  <Stack.Screen
    name={HOSPITAL_ADMISSION_1D}
    component={AdmissionRecommendation1D}
    key={HOSPITAL_ADMISSION_1D}
  />,
  <Stack.Screen
    name={DISPOSITION_RECCOMENDATION}
    component={DispositionReccomendation}
    key={DISPOSITION_RECCOMENDATION}
  />,
  <Stack.Screen
    name={DISPOSITION_RECCOMENDATION_1A}
    component={DispositionRecommendation1A}
    key={DISPOSITION_RECCOMENDATION_1A}
  />,
  <Stack.Screen
    name={DISCHARGE_CHECKLIST}
    component={DischargeChecklist}
    key={DISCHARGE_CHECKLIST}
  />,
  <Stack.Screen
    name={HIGH_RISK_RECOMMENDATION}
    component={HighRiskRecommendation}
    key={HIGH_RISK_RECOMMENDATION}
  />,
  <Stack.Screen
    name={DISCHARGE_CHECKLIST_LOW_RISK}
    component={DischargeChecklistLowRisk}
    key={DISCHARGE_CHECKLIST_LOW_RISK}
  />,
  <Stack.Screen
    name={HIGH_RISK_BACKTERIAL_UAPATHWAY_INFECTION}
    component={HighRiskBacterialUaPathway}
    key={HIGH_RISK_BACKTERIAL_UAPATHWAY_INFECTION}
  />,
  <Stack.Screen
    name={ADMISSION_RECS_SECOND}
    component={HighRiskHospitalAdmissionSecond}
    key={ADMISSION_RECS_SECOND}
  />,
  

  
];

export default SixtyOneNinetyNavigation;
