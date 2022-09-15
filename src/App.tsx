/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useRef, useState } from 'react';
import SplashScreen from 'react-native-splash-screen'
import {enableScreens} from 'react-native-screens';
import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native';
import {ActivityIndicator, Platform, StatusBar, UIManager, View} from 'react-native';
import RootNavigator from './Navigation/RootNavigator';
import { getDataFromLS, storeDataInLS } from 'data/localStorage';
import { FIRST_APP_OPEN } from 'data/localStorage/keys';
import Welcome from 'Screens/About/Welcome';
import { whiteColor } from 'UIToolkit/theme/colors';
import ResuscitationProvider from 'Modules/Resuscitation/stores/ResuscitationProvider';
import DiabetesProvider from 'Modules/Diabetes/stores/DiabetesProvider';
import { reportScreenAccess } from 'analytics';

enableScreens(true);

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

const App = () => {
  const [firstAppOpen, setFirstAppOpen] = useState<boolean | null>(null);

  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<string>();

  useEffect(() => {
    getDataFromLS(FIRST_APP_OPEN).then((res) => {
      if(res && res.value !== undefined) {
        setFirstAppOpen(res.value)
      } else {
        setFirstAppOpen(true)
      }
      if(Platform.OS === 'android') {
        SplashScreen.hide();
      }
    })
  }, [])

  const onAcceptDisclaimer = () => {
    storeDataInLS(FIRST_APP_OPEN, {value: false}).then(() => {
      setFirstAppOpen(false);
    })
  }

  if(firstAppOpen === null) {
    return (
      <View style={{flex: 1, backgroundColor: whiteColor}}>
        <ActivityIndicator />
      </View>
    )
  }

  const onNavStateChange = async () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef?.getCurrentRoute()?.name;

    if (previousRouteName !== currentRouteName && currentRouteName) {
      await reportScreenAccess(currentRouteName);
    }
    routeNameRef.current = currentRouteName;
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef?.getCurrentRoute()?.name;
      }}
      onStateChange={onNavStateChange}
    >
      <StatusBar barStyle={'light-content'} />
      {firstAppOpen ? (
        <Welcome onAccept={onAcceptDisclaimer} />
      ) : (
        <ResuscitationProvider>
          <DiabetesProvider>
            <RootNavigator />
          </DiabetesProvider>
        </ResuscitationProvider>
      )}
    </NavigationContainer>
  );
};

export default App;
