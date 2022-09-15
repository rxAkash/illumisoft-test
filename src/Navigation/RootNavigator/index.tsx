import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  ABOUT_SCREEN,
  DEMOGRAPHICS_SURVEY_SCREEN,
  HOME_SCREEN,
  MODULES_NAVIGATOR,
  REFERENCES_SCREEN,
  TERMS_OF_USE_SCREEN,
} from '../routes';
import DemographicsSurvey from 'Screens/DemographicsSurvey';
import About from 'Screens/About';
import TermsOfUse from 'Screens/TermsOfUse';
import References from 'Screens/References';
import Header from 'UIToolkit/Header';
import Home from 'Screens/Home';
import DrawerContent from './DrawerContent';
import ModulesNavigator from 'Navigation/HomeNavigator';

const Drawer = createDrawerNavigator();

const RootNavigator = React.memo(() => {
  return (
    <Drawer.Navigator
      initialRouteName={HOME_SCREEN}
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        header: props => <Header {...props} />,
      }}>
      <Drawer.Screen
        name={HOME_SCREEN}
        component={Home}
        options={{
          title: 'PedsGuide'
        }}
      />
      <Drawer.Screen
        name={DEMOGRAPHICS_SURVEY_SCREEN}
        component={DemographicsSurvey}
      />
      <Drawer.Screen
        name={ABOUT_SCREEN}
        component={About}
      />
      <Drawer.Screen
        name={TERMS_OF_USE_SCREEN}
        component={TermsOfUse}
      />
      <Drawer.Screen
        name={REFERENCES_SCREEN}
        component={References}
      />
      <Drawer.Screen
        name={MODULES_NAVIGATOR}
        component={ModulesNavigator}
      />
    </Drawer.Navigator>
  );
});

export default RootNavigator;
