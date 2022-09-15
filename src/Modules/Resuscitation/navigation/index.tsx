import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ADVANCED_LIFE_SUPPORT, AGE_INPUT, AIRWAY_AND_BREATHING, BASIC_LIFE_SUPPORT, BURN_MANAGEMENT, CIRCULATION, COLOR_INPUT, COMPRESSIONS, DRUG_DOSING, ELECTRICAL_THERAPY, EQUIPMENT_SIZES, MEDICATIONS_AND_FLUIDS, NEWLY_BORN_INFANT_HOME, NEWLY_BORN_INFANT_INPUTS, PATIENT_DETAILS, RESUS_HOME, RESUS_PATHWAYS, VITAL_SIGNS, WEIGHT_INPUT } from './routes';
import Resuscitation from '..';
import NewlyBornInfant from '../screens/NewlyBornInfantInputs';
import NewlyBornInfantHome from '../screens/NewlyBornInfantHome';
import AirwayAndBreathing from '../screens/AirwayAndBreathing';
import Compressions from '../screens/Compressions';
import DrugDosing from '../screens/DrugDosing';
import WeightInput from '../screens/WeightInput';
import PatientDetails from '../screens/PatientDetails';
import ColorInput from '../screens/ColorInput';
import AgeInput from '../screens/AgeInput';
import ResusPathways from '../screens/ResusPathways';
import BasicLifeSupport from '../screens/BasicLifeSupport';
import EquipmentSizes from '../screens/EquipmentSizes';
import AdvancedLifeSupport from '../screens/AdvancedLifeSupport';
import Circulation from '../screens/Circulation';
import ElectricalTherapy from '../screens/ElectricalTherapy';
import BurnManagemnt from '../screens/BurnManagment';
import VitalSigns from '../screens/VitalSigns';

const Stack = createNativeStackNavigator();

const ResusNavigation = [
  <Stack.Screen name={RESUS_HOME} component={Resuscitation} key={RESUS_HOME} />,
  <Stack.Screen name={NEWLY_BORN_INFANT_INPUTS} component={NewlyBornInfant} key={NEWLY_BORN_INFANT_INPUTS} />,
  <Stack.Screen name={NEWLY_BORN_INFANT_HOME} component={NewlyBornInfantHome} key={NEWLY_BORN_INFANT_HOME} />,
  <Stack.Screen name={AIRWAY_AND_BREATHING} component={AirwayAndBreathing} key={AIRWAY_AND_BREATHING} />,
  <Stack.Screen name={COMPRESSIONS} component={Compressions} key={COMPRESSIONS} />,
  <Stack.Screen name={DRUG_DOSING} component={DrugDosing} key={DRUG_DOSING} />,
  <Stack.Screen name={MEDICATIONS_AND_FLUIDS} component={DrugDosing} key={MEDICATIONS_AND_FLUIDS} />,
  <Stack.Screen name={WEIGHT_INPUT} component={WeightInput} key={WEIGHT_INPUT} />,
  <Stack.Screen name={COLOR_INPUT} component={ColorInput} key={COLOR_INPUT} />,
  <Stack.Screen name={PATIENT_DETAILS} component={PatientDetails} key={PATIENT_DETAILS} />,
  <Stack.Screen name={AGE_INPUT} component={AgeInput} key={AGE_INPUT} />,
  <Stack.Screen name={RESUS_PATHWAYS} component={ResusPathways} key={RESUS_PATHWAYS} />,
  <Stack.Screen name={BASIC_LIFE_SUPPORT} component={BasicLifeSupport} key={BASIC_LIFE_SUPPORT} />,
  <Stack.Screen name={EQUIPMENT_SIZES} component={EquipmentSizes} key={EQUIPMENT_SIZES} />,
  <Stack.Screen name={ADVANCED_LIFE_SUPPORT} component={AdvancedLifeSupport} key={ADVANCED_LIFE_SUPPORT} />,
  <Stack.Screen name={CIRCULATION} component={Circulation} key={CIRCULATION} />,
  <Stack.Screen name={ELECTRICAL_THERAPY} component={ElectricalTherapy} key={ELECTRICAL_THERAPY} />,
  <Stack.Screen name={BURN_MANAGEMENT} component={BurnManagemnt} key={BURN_MANAGEMENT} />,
  <Stack.Screen name={VITAL_SIGNS} component={VitalSigns} key={VITAL_SIGNS} />,
]

export default ResusNavigation;
