import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ASTHMA_HOME, ED_AGE_SELECT, ED_ESI_CALCULATOR, ED_ESI_SELECT, ED_PATHWAY, ED_TREATMENTS, INPATIENT_AGE_SELECT, INPATIENT_CALCULATOR, INPATIENT_PATHWAY, INPATIENT_TREATMENTS, MDI_VIDEOS, SMOKING_SCREENING } from './routes';
import Asthma from '..';
import SmokingScreening from '../screens/SmokingScreening';
import MDIVideos from '../screens/MDIVideos';
import EmergencyDepartment from '../screens/EmergencyDeptartment';
import EDAgeSelect from '../screens/EDAgeSelect';
import ESICalculator from '../screens/ESICalculator';
import ESISelect from '../screens/ESISelect';
import Treatments from '../screens/Treatments';
import InpatientPathway from '../screens/InpatientPathway';

const Stack = createNativeStackNavigator();

const AsthmaNavigation = [
  <Stack.Screen name={ASTHMA_HOME} component={Asthma} key={ASTHMA_HOME} />,
  <Stack.Screen name={SMOKING_SCREENING} component={SmokingScreening} key={SMOKING_SCREENING} />,
  <Stack.Screen name={MDI_VIDEOS} component={MDIVideos} key={MDI_VIDEOS} />,
  <Stack.Screen name={ED_PATHWAY} component={EmergencyDepartment} key={ED_PATHWAY} />,
  <Stack.Screen name={ED_AGE_SELECT} component={EDAgeSelect} key={ED_AGE_SELECT} />,
  <Stack.Screen name={ED_ESI_CALCULATOR} component={ESICalculator} key={ED_ESI_CALCULATOR} />,
  <Stack.Screen name={ED_ESI_SELECT} component={ESISelect} key={ED_ESI_SELECT} />,
  <Stack.Screen name={ED_TREATMENTS} component={Treatments} key={ED_TREATMENTS} />,
  <Stack.Screen name={INPATIENT_PATHWAY} component={InpatientPathway} key={INPATIENT_PATHWAY} />,
  <Stack.Screen name={INPATIENT_AGE_SELECT} component={EDAgeSelect} key={INPATIENT_AGE_SELECT} />,
  <Stack.Screen name={INPATIENT_CALCULATOR} component={ESICalculator} key={INPATIENT_CALCULATOR} />,
  <Stack.Screen name={INPATIENT_TREATMENTS} component={Treatments} key={INPATIENT_TREATMENTS} />,
]

export default AsthmaNavigation;
