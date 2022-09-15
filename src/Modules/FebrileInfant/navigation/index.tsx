import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ANTIBIOTIC_OPTIONS, FEBRILE_INFANT_HOME, INFANT_APPEARS_DISCLAIMERS, INFANT_APPEARS_TESTS, ZERO_SIX_ANTIBIOTICS, ZERO_SIX_DIAGNOSTIC_TEST, ZERO_SIX_DISCLAIMER } from './routes';
import FebrileInfant from '..';
import InfantAppearsDisclaimers from '../screens/InfantAppearsDisclaimers';
import ZeroSixDisclaimer from '../screens/ZeroSIxPathway/ZeroSixDisclaimer';
import EightTwentyOneNavigation from '../screens/SevenTwentyEight';
import TwentyNineSixtyNavigation from '../screens/TwentyNineSixtyPathway';
import SixtyOneNinetyNavigation from '../screens/SixtyOneNinety';
import InfantAppearIllAntibioticOptions from '../screens/AntibioticOptions/InfantAppearIllAntibioticOptions';
import ZeroSixAntibioticOptions from '../screens/AntibioticOptions/ZeroSixAntibioticOptions';
import InfantAppearIllTests from '../screens/DiagnosticTests/InfantAppersIllTests';
import ZeroSixTests from '../screens/DiagnosticTests/ZeroSixTests';

const Stack = createNativeStackNavigator();

const FebrileInfantNavigation = [
  <Stack.Screen name={FEBRILE_INFANT_HOME} component={FebrileInfant} key={FEBRILE_INFANT_HOME} />,
  <Stack.Screen name={INFANT_APPEARS_DISCLAIMERS} component={InfantAppearsDisclaimers} key={INFANT_APPEARS_DISCLAIMERS} />,
  <Stack.Screen name={INFANT_APPEARS_TESTS} component={InfantAppearIllTests} key={INFANT_APPEARS_TESTS} />,
  <Stack.Screen name={ZERO_SIX_DIAGNOSTIC_TEST} component={ZeroSixTests} key={ZERO_SIX_DIAGNOSTIC_TEST} />,
  <Stack.Screen name={ANTIBIOTIC_OPTIONS} component={InfantAppearIllAntibioticOptions} key={ANTIBIOTIC_OPTIONS} />,
  <Stack.Screen name={ZERO_SIX_ANTIBIOTICS} component={ZeroSixAntibioticOptions} key={ZERO_SIX_ANTIBIOTICS} />,
  <Stack.Screen name={ZERO_SIX_DISCLAIMER} component={ZeroSixDisclaimer} key={ZERO_SIX_DISCLAIMER} />,
  ...EightTwentyOneNavigation,
  ...TwentyNineSixtyNavigation,
  ...SixtyOneNinetyNavigation
]

export default FebrileInfantNavigation;
