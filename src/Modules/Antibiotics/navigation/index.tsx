import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AcuteBacterialRhinosinusitis from '../screens/AcuteBacterialRhinosinusitis'
import { ACUTE_BACTERIAL_RHINOSINUSITIS,ACUTE_BACTERIAL_ALLERGY_ASSESMENT,ACUTE_BACTERIAL_TREATMENT_ALLERGY,ACUTE_BACTERIAL_TREATMENT_NO_ALLERGY,ACUTE_BACTERIAL_DRUG_DISPLAY,ACUTE_OTITIS_ADDITIONAL_FEATURES, ACUTE_OTITIS_AGE_ASSESMENT, ACUTE_OTITIS_ALLERGY_ASSESMENT, ACUTE_OTITIS_BILATERAL_DESEASE, ACUTE_OTITIS_DRUG_DISPLAY, ACUTE_OTITIS_HOME, ACUTE_OTITIS_SEVERITY_ASSESMENTS, ACUTE_OTITIS_TREATMENT_NO_ALLERGY, ACUTE_OTITIS_TREATMENT_PENICILLIN, ACUTE_OTITIS_TREATMENT_RECENT_USE, ACUTE_OTITIS_WATCHFUL_WAITING, ANTIBIOTICS_HOME, BRONCHIOLITIS, SKIN_INFECTION_ABSCESS, SKIN_INFECTION_BITE, SKIN_INFECTION_CELLULITIS, SKIN_INFECTION_DRUG_DISPLAY, SKIN_INFECTION_HOME, SKIN_INFECTION_IMPETIGO, SKIN_INFECTION_NECROTIZING, SKIN_INFECTION_SELECT, PNEUMONIA_ALLERGY_ASSESMENT, PNEUMONIA_ATYPICAL_ASSESMENT, PNEUMONIA_ATYPICAL_BACTERIA_TREATMENT, PNEUMONIA_DRUG_DISPLAY, PNEUMONIA_EFFUSION_ASSESMENT, PNEUMONIA_HOME, PNEUMONIA_IV_TREATMENT, PNEUMONIA_ORAL_TREATMENT, PNEUMONIA_SEVERITY_ASSESMENT, PNEUMONIA_TREATMENT_EFFUSION, PNEUMONIA_TREATMENT_PENICILLIN, PNEUMONIA_VIRAL_ASSESMENT, PNEUMONIA_VIRAL_TREATMENT, PHARYNGITIS_HOME, PHARYNGITIS_ALLERGY_ASSESMENT, PHARYNGITIS_DRUG_DISPLAY, PHARYNGITIS_NO_ALLERGY, PHARYNGITIS_TREATMENT_ALLERGY, URINARY_TRACT_HOME, URINARY_TRACT_SEVERITY_ASSESSMENT, URINARY_TRACT_DRUG_INFO, URINARY_TRACT_TREATMENT_UNCOMPLICATED, URINARY_TRACT_ORAL_ASSESSMENT, URINARY_TRACT_IV_TREATMENT, URINARY_TRACT_ORAL_TREATMENT, STUDY_ID_CONFIRMATION } from './routes';
import Antibiotics from '..';
import TreatmentAllergyABR from '../screens/AcuteBacterialRhinosinusitis/TreatmentAllergy';
import TreatmentNoAllergyABR from '../screens/AcuteBacterialRhinosinusitis/TreatmentNoAllergy';
import AllergyAssesmentABR from '../screens/AcuteBacterialRhinosinusitis/AllergyAssesment';
import AcuteOtitisHome from '../screens/AcuteOtitisPathway/Home';
import SeverityAssesment from '../screens/AcuteOtitisPathway/SeverityAssesment';
import AllergyAssesment from '../screens/AcuteOtitisPathway/AlergyAssesment';
import TreatmentPenicillinAllergy from '../screens/AcuteOtitisPathway/TreatmentPenicillinAllergy';
import DrugInfoDisplay from '../screens/DrugInfoDisplay';
import AdditionalFeaturesAssesment from '../screens/AcuteOtitisPathway/AdditionalFeaturesAssesment';
import TreatmentRecentUse from '../screens/AcuteOtitisPathway/TreatmentRecentUse';
import TreatmentNoAllergy from '../screens/AcuteOtitisPathway/TreatmentNoAllergy';
import AgeAssesment from '../screens/AcuteOtitisPathway/AgeAssesment';
import WatchfulWaiting from '../screens/AcuteOtitisPathway/WatchfulWaiting';
import BilateralDeseaseAssesment from '../screens/AcuteOtitisPathway/BilateralDeseaseAssesment';
import Bronchiolitis from '../screens/Bronchiolitis';
import SkinInfectionHome from '../screens/SkinInfectionPathway/Home';
import InfectionSelect from '../screens/SkinInfectionPathway/InfectionSelect';
import ImpetigoTreatment from '../screens/SkinInfectionPathway/ImpetigoTreatment';
import CellulitisTreatment from '../screens/SkinInfectionPathway/CellulitisTreatment';
import AbscessTreatment from '../screens/SkinInfectionPathway/AbscessTreatment';
import NecrotizingTreatment from '../screens/SkinInfectionPathway/NecrotizingTreatment';
import BiteTreatment from '../screens/SkinInfectionPathway/BiteTreatment';
import PneumoniaHome from '../screens/PneumoniaPathway/Home';
import ViralAssesment from '../screens/PneumoniaPathway/ViralAssesment';
import AtypicalAssessment from '../screens/PneumoniaPathway/AtypicalAssessment';
import PneumoniaSeverityAssesment from '../screens/PneumoniaPathway/PneumoniaSeverityAssesment';
import PneumoniaAllergyAssesment from '../screens/PneumoniaPathway/PneumoniaAllergyAssesment';
import OralTreatmentReccomendations from '../screens/PneumoniaPathway/OralTreatmentReccomendations';
import PneumoniaTreatmentPenicillin from '../screens/PneumoniaPathway/PneumoniaTreatmentPenicillin';
import EffusionAssesment from '../screens/PneumoniaPathway/EffusionAssesment';
import TreatmentEffusion from '../screens/PneumoniaPathway/TreatmentEffusion';
import PneumoniaIVTreatment from '../screens/PneumoniaPathway/PneumoniaIVTreatment';
import AtypicalBacteriaTreatment from '../screens/PneumoniaPathway/AtypicalBacteriaTreatment';
import PneumoniaViralTreatment from '../screens/PneumoniaPathway/PneumoniaViralTreatment';
import PharyngitisHome from '../screens/PharyngitisPathway/Home';
import PharyngitisAllergyAssesment from '../screens/PharyngitisPathway/PharyngitisAllergyAssesment';
import PharyngitisNoAllergy from '../screens/PharyngitisPathway/PharyngitisNoAllergy';
import PharyngitisTreatmentAllergy from '../screens/PharyngitisPathway/PharyngitisTreatmentAllergy';
import UrinaryTractHome from '../screens/UrinaryTractPathway/Home';
import UrinaryTractSeverityAssesment from '../screens/UrinaryTractPathway/SeverityAssessment';
import TreatmentUncomplicated from '../screens/UrinaryTractPathway/TreatmentUncomplicated';
import OralToleranceAssessment from '../screens/UrinaryTractPathway/OralToleranceAssessment';
import UrinaryTractIVTreatment from '../screens/UrinaryTractPathway/IVTreatment';
import UrinaryTractOralTreatment from '../screens/UrinaryTractPathway/UrinaryTractOralTreatment';
import StudyIdConfirmation from '../screens/StudyIDConfirmation';
const Stack = createNativeStackNavigator();

const AntibioticsNavigation = [
  <Stack.Screen name={ANTIBIOTICS_HOME} component={Antibiotics} key={ANTIBIOTICS_HOME} />,
  <Stack.Screen name={ACUTE_BACTERIAL_RHINOSINUSITIS} component={AcuteBacterialRhinosinusitis} key={ACUTE_BACTERIAL_RHINOSINUSITIS} />,
  <Stack.Screen name={ACUTE_BACTERIAL_ALLERGY_ASSESMENT} component={AllergyAssesmentABR} key={ACUTE_BACTERIAL_ALLERGY_ASSESMENT} />,
  <Stack.Screen name={ACUTE_BACTERIAL_TREATMENT_ALLERGY} component={TreatmentAllergyABR} key={ACUTE_BACTERIAL_TREATMENT_ALLERGY} />,
  <Stack.Screen name={ACUTE_BACTERIAL_TREATMENT_NO_ALLERGY} component={TreatmentNoAllergyABR} key={ACUTE_BACTERIAL_TREATMENT_NO_ALLERGY} />,
  <Stack.Screen name={ACUTE_OTITIS_HOME} component={AcuteOtitisHome} key={ACUTE_OTITIS_HOME} />,
  <Stack.Screen name={ACUTE_OTITIS_SEVERITY_ASSESMENTS} component={SeverityAssesment} key={ACUTE_OTITIS_SEVERITY_ASSESMENTS} />,
  <Stack.Screen name={ACUTE_OTITIS_AGE_ASSESMENT} component={AgeAssesment} key={ACUTE_OTITIS_AGE_ASSESMENT} />,
  <Stack.Screen name={ACUTE_OTITIS_BILATERAL_DESEASE} component={BilateralDeseaseAssesment} key={ACUTE_OTITIS_BILATERAL_DESEASE} />,
  <Stack.Screen name={ACUTE_OTITIS_ALLERGY_ASSESMENT} component={AllergyAssesment} key={ACUTE_OTITIS_ALLERGY_ASSESMENT} />,
  <Stack.Screen name={ACUTE_OTITIS_ADDITIONAL_FEATURES} component={AdditionalFeaturesAssesment} key={ACUTE_OTITIS_ADDITIONAL_FEATURES} />,
  <Stack.Screen name={ACUTE_OTITIS_TREATMENT_NO_ALLERGY} component={TreatmentNoAllergy} key={ACUTE_OTITIS_TREATMENT_NO_ALLERGY} />,
  <Stack.Screen name={ACUTE_OTITIS_TREATMENT_PENICILLIN} component={TreatmentPenicillinAllergy} key={ACUTE_OTITIS_TREATMENT_PENICILLIN} />,
  <Stack.Screen name={ACUTE_OTITIS_TREATMENT_RECENT_USE} component={TreatmentRecentUse} key={ACUTE_OTITIS_TREATMENT_RECENT_USE} />,
  <Stack.Screen name={ACUTE_OTITIS_WATCHFUL_WAITING} component={WatchfulWaiting} key={ACUTE_OTITIS_WATCHFUL_WAITING} />,
  <Stack.Screen name={BRONCHIOLITIS} component={Bronchiolitis} key={BRONCHIOLITIS} />,
  <Stack.Screen name={PNEUMONIA_HOME} component={PneumoniaHome} key={PNEUMONIA_HOME} />,
  <Stack.Screen name={PNEUMONIA_VIRAL_ASSESMENT} component={ViralAssesment} key={PNEUMONIA_VIRAL_ASSESMENT} />,
  <Stack.Screen name={PNEUMONIA_VIRAL_TREATMENT} component={PneumoniaViralTreatment} key={PNEUMONIA_VIRAL_TREATMENT} />,
  <Stack.Screen name={PNEUMONIA_ATYPICAL_ASSESMENT} component={AtypicalAssessment} key={PNEUMONIA_ATYPICAL_ASSESMENT} />,
  <Stack.Screen name={PNEUMONIA_ATYPICAL_BACTERIA_TREATMENT} component={AtypicalBacteriaTreatment} key={PNEUMONIA_ATYPICAL_BACTERIA_TREATMENT} />,
  <Stack.Screen name={PNEUMONIA_SEVERITY_ASSESMENT} component={PneumoniaSeverityAssesment} key={PNEUMONIA_SEVERITY_ASSESMENT} />,
  <Stack.Screen name={PNEUMONIA_EFFUSION_ASSESMENT} component={EffusionAssesment} key={PNEUMONIA_EFFUSION_ASSESMENT} />,
  <Stack.Screen name={PNEUMONIA_ALLERGY_ASSESMENT} component={PneumoniaAllergyAssesment} key={PNEUMONIA_ALLERGY_ASSESMENT} />,
  <Stack.Screen name={PNEUMONIA_TREATMENT_EFFUSION} component={TreatmentEffusion} key={PNEUMONIA_TREATMENT_EFFUSION} />,
  <Stack.Screen name={PNEUMONIA_ORAL_TREATMENT} component={OralTreatmentReccomendations} key={PNEUMONIA_ORAL_TREATMENT} />,
  <Stack.Screen name={PNEUMONIA_TREATMENT_PENICILLIN} component={PneumoniaTreatmentPenicillin} key={PNEUMONIA_TREATMENT_PENICILLIN} />,
  <Stack.Screen name={PNEUMONIA_IV_TREATMENT} component={PneumoniaIVTreatment} key={PNEUMONIA_IV_TREATMENT} />,
  <Stack.Screen name={SKIN_INFECTION_HOME} component={SkinInfectionHome} key={SKIN_INFECTION_HOME} />,
  <Stack.Screen name={SKIN_INFECTION_SELECT} component={InfectionSelect} key={SKIN_INFECTION_SELECT} />,
  <Stack.Screen name={SKIN_INFECTION_IMPETIGO} component={ImpetigoTreatment} key={SKIN_INFECTION_IMPETIGO} />,
  <Stack.Screen name={SKIN_INFECTION_CELLULITIS} component={CellulitisTreatment} key={SKIN_INFECTION_CELLULITIS} />,
  <Stack.Screen name={SKIN_INFECTION_ABSCESS} component={AbscessTreatment} key={SKIN_INFECTION_ABSCESS} />,
  <Stack.Screen name={SKIN_INFECTION_NECROTIZING} component={NecrotizingTreatment} key={SKIN_INFECTION_NECROTIZING} />,
  <Stack.Screen name={SKIN_INFECTION_BITE} component={BiteTreatment} key={SKIN_INFECTION_BITE} />,
  <Stack.Screen name={PHARYNGITIS_HOME} component={PharyngitisHome} key={PHARYNGITIS_HOME} />,
  <Stack.Screen name={PHARYNGITIS_ALLERGY_ASSESMENT} component={PharyngitisAllergyAssesment} key={PHARYNGITIS_ALLERGY_ASSESMENT} />,
  <Stack.Screen name={PHARYNGITIS_TREATMENT_ALLERGY} component={PharyngitisTreatmentAllergy} key={PHARYNGITIS_TREATMENT_ALLERGY} />,
  <Stack.Screen name={PHARYNGITIS_NO_ALLERGY} component={PharyngitisNoAllergy} key={PHARYNGITIS_NO_ALLERGY} />,
  <Stack.Screen name={URINARY_TRACT_HOME} component={UrinaryTractHome} key={URINARY_TRACT_HOME} />,
  <Stack.Screen name={URINARY_TRACT_SEVERITY_ASSESSMENT} component={UrinaryTractSeverityAssesment} key={URINARY_TRACT_SEVERITY_ASSESSMENT} />,
  <Stack.Screen name={URINARY_TRACT_TREATMENT_UNCOMPLICATED} component={TreatmentUncomplicated} key={URINARY_TRACT_TREATMENT_UNCOMPLICATED} />,
  <Stack.Screen name={URINARY_TRACT_ORAL_ASSESSMENT} component={OralToleranceAssessment} key={URINARY_TRACT_ORAL_ASSESSMENT} />,
  <Stack.Screen name={URINARY_TRACT_ORAL_TREATMENT} component={UrinaryTractOralTreatment} key={URINARY_TRACT_ORAL_TREATMENT} />,
  <Stack.Screen name={URINARY_TRACT_IV_TREATMENT} component={UrinaryTractIVTreatment} key={URINARY_TRACT_IV_TREATMENT} />,
  
  <Stack.Screen name={STUDY_ID_CONFIRMATION} component={StudyIdConfirmation} key={STUDY_ID_CONFIRMATION} />,
  <Stack.Screen name={ACUTE_BACTERIAL_DRUG_DISPLAY} component={DrugInfoDisplay} key={ACUTE_BACTERIAL_DRUG_DISPLAY} />,
  <Stack.Screen name={ACUTE_OTITIS_DRUG_DISPLAY} component={DrugInfoDisplay} key={ACUTE_OTITIS_DRUG_DISPLAY} />,
  <Stack.Screen name={PNEUMONIA_DRUG_DISPLAY} component={DrugInfoDisplay} key={PNEUMONIA_DRUG_DISPLAY} />,
  <Stack.Screen name={SKIN_INFECTION_DRUG_DISPLAY} component={DrugInfoDisplay} key={SKIN_INFECTION_DRUG_DISPLAY} />,
  <Stack.Screen name={PHARYNGITIS_DRUG_DISPLAY} component={DrugInfoDisplay} key={PHARYNGITIS_DRUG_DISPLAY} />,
  <Stack.Screen name={URINARY_TRACT_DRUG_INFO} component={DrugInfoDisplay} key={URINARY_TRACT_DRUG_INFO} />,
];

export default AntibioticsNavigation;
