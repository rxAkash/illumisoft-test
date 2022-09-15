import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  TRACHESTOMY_ATTEMPT_PASS_CATHETER,
  TRACHESTOMY_BEGIN_EMERGENCY_ALGORITHM,
  TRACHESTOMY_CHILD_WITH_NO_TRACH,
  TRACHESTOMY_CHILD_WITH_RESPIRATORY_DISTRESS,
  TRACHESTOMY_CPR_WITH_NO_UPPER_AIRWAY_OBFUSCATION,
  TRACHESTOMY_CPR_WITH_TRACH_IN_PLACE,
  TRACHESTOMY_CPR_WITH_UPPER_AIRWAY_OBFUSCATION,
  TRACHESTOMY_HOME,
  TRACHESTOMY_INSERT_SAME_TUBE,
  TRACHESTOMY_INSERT_SMALLER_TUBE,
  TRACHESTOMY_NON_RESOPNSIVE_CHILD_NO_AIRWAY_OBFUSCATION,
  TRACHESTOMY_NON_RESOPNSIVE_CHILD_NO_TRACH,
  TRACHESTOMY_NON_RESOPNSIVE_CHILD_WITH_AIRWAY_OBFUSCATION,
  TRACHESTOMY_NON_RESOPNSIVE_CHILD_WITH_TRACH,
  TRACHESTOMY_RESCUE_BREATHING,
  TRACHESTOMY_RESCUE_BREATHING_NO_AIRWAY_OBFUSCATION,
  TRACHESTOMY_RESCUE_BREATHING_WITH_AIRWAY_OBFUSCATION,
  TRACHESTOMY_THANK_YOU,
  TRACHESTOMY_TUBE_CHANGE,
} from "./routes";
import Trachestomy from "..";
import TrachestomyTubeChange from "../screens/TracheostomyTubeChange";
import InsertSmallerTracheostomyTube from "../screens/InsertSmallerTracheostomyTube";
import ChildWithNoTrach from "../screens/ChildWithNoTrach";
import ChildWithRespiratoryDistress from "../screens/ChildWithRespiratoryDistress";
import TrachThankYou from "../screens/TrachThankYou";
import RescueBreathing from "../screens/RescueBreathing";
import NonResponsiveChildWithTrach from "../screens/NonResponsiveChildWithTrach";
import CPRWithTrachInPlace from "../screens/CPRWithTrachInPlace";
import NonResponsiveChildNoTrach from "../screens/NonResponsiveChildNoTrach";
import RescueBreathingWithAirwayObstruction from "../screens/RescueBreathingWithAirwayObstruction";
import RescueBreathingNoAirwayObstruction from "../screens/RescueBreathingNoAirwayObstruction";
import BeginEmergencyAlgorithm from "../screens/BeginEmergencyAlgorithm";
import InsertSameTube from "../screens/InsertSameTube";
import AttemptToPassSuctionCatheter from "../screens/AttemptToPassSuctionCatheter";
import CPRWithUpperAirwayObstruction from "../screens/CPRWithUpperAirwayObstruction";
import CPRWithNoUpperAirwayObstruction from "../screens/CPRWithNoUpperAirwayObstruction";
import NonResponsiveChildWithAirwayObstruction from "../screens/NonResponsiveChildWithAirwayObstruction";
import NonResponsiveChildNoAirwayObstruction from "../screens/NonResponsiveChildNoAirwayObstruction";

const Stack = createNativeStackNavigator();

const TrachestomyNavigation = [
  <Stack.Screen
    name={TRACHESTOMY_HOME}
    component={Trachestomy}
    key={TRACHESTOMY_HOME}
  />,
  <Stack.Screen
    name={TRACHESTOMY_TUBE_CHANGE}
    component={TrachestomyTubeChange}
    key={TRACHESTOMY_TUBE_CHANGE}
  />,
  <Stack.Screen
    name={TRACHESTOMY_INSERT_SMALLER_TUBE}
    component={InsertSmallerTracheostomyTube}
    key={TRACHESTOMY_INSERT_SMALLER_TUBE}
  />,
  <Stack.Screen
    name={TRACHESTOMY_CHILD_WITH_NO_TRACH}
    component={ChildWithNoTrach}
    key={TRACHESTOMY_CHILD_WITH_NO_TRACH}
  />,
  <Stack.Screen
    name={TRACHESTOMY_CHILD_WITH_RESPIRATORY_DISTRESS}
    component={ChildWithRespiratoryDistress}
    key={TRACHESTOMY_CHILD_WITH_RESPIRATORY_DISTRESS}
  />,
  <Stack.Screen
    name={TRACHESTOMY_THANK_YOU}
    component={TrachThankYou}
    key={TRACHESTOMY_THANK_YOU}
  />,
  <Stack.Screen
    name={TRACHESTOMY_RESCUE_BREATHING}
    component={RescueBreathing}
    key={TRACHESTOMY_RESCUE_BREATHING}
  />,
  <Stack.Screen
    name={TRACHESTOMY_NON_RESOPNSIVE_CHILD_WITH_TRACH}
    component={NonResponsiveChildWithTrach}
    key={TRACHESTOMY_NON_RESOPNSIVE_CHILD_WITH_TRACH}
  />,
  <Stack.Screen
    name={TRACHESTOMY_CPR_WITH_TRACH_IN_PLACE}
    component={CPRWithTrachInPlace}
    key={TRACHESTOMY_CPR_WITH_TRACH_IN_PLACE}
  />,
  <Stack.Screen
    name={TRACHESTOMY_NON_RESOPNSIVE_CHILD_NO_TRACH}
    component={NonResponsiveChildNoTrach}
    key={TRACHESTOMY_NON_RESOPNSIVE_CHILD_NO_TRACH}
  />,
  <Stack.Screen
    name={TRACHESTOMY_RESCUE_BREATHING_WITH_AIRWAY_OBFUSCATION}
    component={RescueBreathingWithAirwayObstruction}
    key={TRACHESTOMY_RESCUE_BREATHING_WITH_AIRWAY_OBFUSCATION}
  />,
  <Stack.Screen
    name={TRACHESTOMY_RESCUE_BREATHING_NO_AIRWAY_OBFUSCATION}
    component={RescueBreathingNoAirwayObstruction}
    key={TRACHESTOMY_RESCUE_BREATHING_NO_AIRWAY_OBFUSCATION}
  />,
  <Stack.Screen
    name={TRACHESTOMY_BEGIN_EMERGENCY_ALGORITHM}
    component={BeginEmergencyAlgorithm}
    key={TRACHESTOMY_BEGIN_EMERGENCY_ALGORITHM}
  />,
  <Stack.Screen
    name={TRACHESTOMY_INSERT_SAME_TUBE}
    component={InsertSameTube}
    key={TRACHESTOMY_INSERT_SAME_TUBE}
  />,
  <Stack.Screen
    name={TRACHESTOMY_ATTEMPT_PASS_CATHETER}
    component={AttemptToPassSuctionCatheter}
    key={TRACHESTOMY_ATTEMPT_PASS_CATHETER}
  />,
  <Stack.Screen
    name={TRACHESTOMY_CPR_WITH_UPPER_AIRWAY_OBFUSCATION}
    component={CPRWithUpperAirwayObstruction}
    key={TRACHESTOMY_CPR_WITH_UPPER_AIRWAY_OBFUSCATION}
  />,
  <Stack.Screen
    name={TRACHESTOMY_CPR_WITH_NO_UPPER_AIRWAY_OBFUSCATION}
    component={CPRWithNoUpperAirwayObstruction}
    key={TRACHESTOMY_CPR_WITH_NO_UPPER_AIRWAY_OBFUSCATION}
  />,
  <Stack.Screen
    name={TRACHESTOMY_NON_RESOPNSIVE_CHILD_WITH_AIRWAY_OBFUSCATION}
    component={NonResponsiveChildWithAirwayObstruction}
    key={TRACHESTOMY_NON_RESOPNSIVE_CHILD_WITH_AIRWAY_OBFUSCATION}
  />,
  <Stack.Screen
    name={TRACHESTOMY_NON_RESOPNSIVE_CHILD_NO_AIRWAY_OBFUSCATION}
    component={NonResponsiveChildNoAirwayObstruction}
    key={TRACHESTOMY_NON_RESOPNSIVE_CHILD_NO_AIRWAY_OBFUSCATION}
  />,
];

export default TrachestomyNavigation;
