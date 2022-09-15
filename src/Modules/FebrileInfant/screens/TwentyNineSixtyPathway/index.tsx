import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Routes from './routes';
import Disclaimer from './Disclaimer';
import DiagnosticTests from './DiagnosticTests';
import HighRiskBacterialInfection from './HighRiskBacterialInfection';
import BacterialInfectionAssesment from './BacterialInfectionAssesment';
import HSVChecklist from './HSVChecklist';
import HSVHighRiskRecommendations from './HSVHighRiskRecommendations';
import AdmissionAntibioticRecommendations from './AdmissionAntibioticRecommendations';
import InpatientObservations from './InpatinetObservations';
import DischargeAdmissionChecklist from './DischargeAdmissionChecklist';
import FurtherObservationsReccomendations from './FurtherObservationRecommendations';
import LowRiskForBacterialInfection from './LowRiskForBacterialInfection';
import DischargeChecklistLowRisk from './DischargeChecklistLowRisk';
import LowRiskAdmissionRecommendations from './LowRiskAdmissionReccomendations';
import OptionalAntibioticOptions from './OptionalAntibioticOptions';
import ObservationTreatment from './ObservationTreatment';
import DischargeRecommendations from './DischargeRecommendations';
import HSVLorRiskRecommendations from './HSVLowRiskRecommendations';
import DispositionRecommendations from './DispositionRecommendations';
import DispositionRecommendationsLow from './DispositionRecommendationsLowRisk';
import HighRiskHospitalAdmissionFirst from './HighRiskHospitalAdmissionFirst';
import HighRiskHospitalAdmissionThird from './HighRiskHospitalAdmissionThird';
import DischargeChecklist from './DischargeChecklist';
import HighRiskHospitalAdmissionSecond from './HighRiskHospitalAdmissionSecond';

const Stack = createNativeStackNavigator();

const TwentyNineSixtyNavigation = [
  <Stack.Screen name={Routes.TWENTY_NINE_SIXTY_DISCLAIMER} component={Disclaimer} key={Routes.TWENTY_NINE_SIXTY_DISCLAIMER} />,
  <Stack.Screen name={Routes.DIAGNOSTIC_TESTS} component={DiagnosticTests} key={Routes.DIAGNOSTIC_TESTS} />,
  <Stack.Screen name={Routes.BACTERIAL_INFECTION_ASSESMENT} component={BacterialInfectionAssesment} key={Routes.BACTERIAL_INFECTION_ASSESMENT} />,
  <Stack.Screen name={Routes.HIGH_RISK_FOR_BACTERIAL_INFECTION} component={HighRiskBacterialInfection} key={Routes.HIGH_RISK_FOR_BACTERIAL_INFECTION} />,
  <Stack.Screen name={Routes.HSV_CHECKLIST} component={HSVChecklist} key={Routes.HSV_CHECKLIST} />,
  <Stack.Screen name={Routes.HSV_HIGH_RISK_RECOMMENDATIONS} component={HSVHighRiskRecommendations} key={Routes.HSV_HIGH_RISK_RECOMMENDATIONS} />,
  <Stack.Screen name={Routes.ADMISSION_ANTIBIOTIC_RECOMMENDATIONS} component={AdmissionAntibioticRecommendations} key={Routes.ADMISSION_ANTIBIOTIC_RECOMMENDATIONS} />,
  <Stack.Screen name={Routes.INPAINET_OBSERVATIONS} component={InpatientObservations} key={Routes.INPAINET_OBSERVATIONS} />,
  <Stack.Screen name={Routes.DISCHARGE_ADMISSION_CHECKLIST} component={DischargeAdmissionChecklist} key={Routes.DISCHARGE_ADMISSION_CHECKLIST} />,
  <Stack.Screen name={Routes.FURTHER_RECOMENDATIONS_OBSERVATIONS} component={FurtherObservationsReccomendations} key={Routes.FURTHER_RECOMENDATIONS_OBSERVATIONS} />,
  <Stack.Screen name={Routes.LOW_RISK_BACTERIAL_RECOMMENDATIONS} component={LowRiskForBacterialInfection} key={Routes.LOW_RISK_BACTERIAL_RECOMMENDATIONS} />,
  <Stack.Screen name={Routes.DISCHARGE_CHECKLIST_LOW_RISK} component={DischargeChecklistLowRisk} key={Routes.DISCHARGE_CHECKLIST_LOW_RISK} />,
  <Stack.Screen name={Routes.LOW_RISK_ADMISSION_RECOMMENDATIONS} component={LowRiskAdmissionRecommendations} key={Routes.LOW_RISK_ADMISSION_RECOMMENDATIONS} />,
  <Stack.Screen name={Routes.OPTIONAL_ANTIBIOTICS_OPTIONS} component={OptionalAntibioticOptions} key={Routes.OPTIONAL_ANTIBIOTICS_OPTIONS} />,
  <Stack.Screen name={Routes.OBSERVATION_TREATMENT} component={ObservationTreatment} key={Routes.OBSERVATION_TREATMENT} />,
  <Stack.Screen name={Routes.DISCHARGE_RECOMMENDATIONS} component={DischargeRecommendations} key={Routes.DISCHARGE_RECOMMENDATIONS} />,
  <Stack.Screen name={Routes.HSV_LOW_RISK_RECOMMENDATIONS} component={HSVLorRiskRecommendations} key={Routes.HSV_LOW_RISK_RECOMMENDATIONS} />,
  <Stack.Screen name={Routes.DISPOSITION_RECOMMENDATIONS} component={DispositionRecommendations} key={Routes.DISPOSITION_RECOMMENDATIONS} />,
  <Stack.Screen name={Routes.HIGH_RISK_HOSPITAL_ADMISSION_FIRST} component={HighRiskHospitalAdmissionFirst} key={Routes.HIGH_RISK_HOSPITAL_ADMISSION_FIRST} />,
  <Stack.Screen name={Routes.HIGH_RISK_HOSPITAL_ADMISSION_SECOND} component={HighRiskHospitalAdmissionSecond} key={Routes.HIGH_RISK_HOSPITAL_ADMISSION_SECOND} />,
  <Stack.Screen name={Routes.HIGH_RISK_HOSPITAL_ADMISSION_THIRD} component={HighRiskHospitalAdmissionThird} key={Routes.HIGH_RISK_HOSPITAL_ADMISSION_THIRD} />,
  <Stack.Screen name={Routes.DISCHARGE_CHECKLIST} component={DischargeChecklist} key={Routes.DISCHARGE_CHECKLIST} />,
  <Stack.Screen name={Routes.DISPOSITION_RECOMMENDATIONS_LOW} component={DispositionRecommendationsLow} key={Routes.DISPOSITION_RECOMMENDATIONS_LOW} />,

]

export default TwentyNineSixtyNavigation;
