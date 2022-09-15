import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsthmaNavigation from 'Modules/Asthma/navigation';
import ResusNavigation from 'Modules/Resuscitation/navigation';
import FebrileInfantNavigation from 'Modules/FebrileInfant/navigation';
import BrueNavigation from 'Modules/Brue/navigation';
import DiabetesNavigation from 'Modules/Diabetes/navigation';
import AntibioticsNavigation from 'Modules/Antibiotics/navigation';
import TrachestomyNavigation from 'Modules/Trachestomy/navigation';
import HeadInjuryNavigation from 'Modules/HeadInjury/navigation';

const Stack = createNativeStackNavigator();

const ModulesNavigator = React.memo(() => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none'
      }}
    >
      {AsthmaNavigation}
      {ResusNavigation}
      {FebrileInfantNavigation}
      {BrueNavigation}
      {DiabetesNavigation}
      {AntibioticsNavigation}
      {TrachestomyNavigation}
      {HeadInjuryNavigation}
    </Stack.Navigator>
  )
})

export default ModulesNavigator;
