import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import { DrawerDescriptorMap, DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { DrawerNavigationState, ParamListBase } from '@react-navigation/core';
import { ABOUT_SCREEN, DEMOGRAPHICS_SURVEY_SCREEN, HOME_SCREEN, MODULES_NAVIGATOR, REFERENCES_SCREEN, TERMS_OF_USE_SCREEN } from 'Navigation/routes';
import { View } from 'react-native';

interface Props {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
}

const DrawerContent = React.memo((props: Props) => {
  const filteredProps = {
    ...props,
    state: {
      ...props.state,
      routes: props.state.routes.filter(item => item.name !== HOME_SCREEN && item.name !== MODULES_NAVIGATOR)
    }
  }

  const navigate = (route: string) => {
    props.navigation.navigate(route)
  }

  return (
    <DrawerContentScrollView {...filteredProps}>
      <View>
        <DrawerItem
          label="Demographic Survey"
          onPress={() => navigate(DEMOGRAPHICS_SURVEY_SCREEN)}
        />
        <DrawerItem
          label="About"
          onPress={() => navigate(ABOUT_SCREEN)}
        />
        <DrawerItem
          label="Terms Of Use"
          onPress={() => navigate(TERMS_OF_USE_SCREEN)}
        />
        <DrawerItem
          label="References"
          onPress={() => navigate(REFERENCES_SCREEN)}
        />
      </View>
    </DrawerContentScrollView>
  );
})

export default DrawerContent;
