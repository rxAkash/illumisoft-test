/* eslint-disable @typescript-eslint/ban-ts-comment */
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {getHeaderTitle} from '@react-navigation/elements';
import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {callIc, homeIc, menuIc} from 'assets/img';
import {HOME_SCREEN} from 'Navigation/routes';
import ContactsDialog from '../ContactsDialog';
import styles from './styles';
import { getFocusedRouteNameFromRoute } from '@react-navigation/core';
import { titleOverrides } from 'Navigation/titleOverrides';
import { getTestProps } from '../../utils/test.id.creator';

interface Props {
  navigation: DrawerNavigationProp<any>;
  route: any;
  layout: any;
  options: any;
}

const Header = React.memo(({route, options, navigation}: Props) => {
  const [showContactsDialog, setShowContactsDialog] = useState(false);

  const getTitle = () => {
    if(route.params && route.params.screen ) {
      return getFocusedRouteNameFromRoute(route)
    }
    return getHeaderTitle(options, route.name);
  }

  const applyTitleOverrides = (title: string): string => {
    const keys = Object.keys(titleOverrides);
    const overrideIndex = keys.findIndex(item => item === title);
    if(overrideIndex >= 0) {
      const key = keys[overrideIndex]
      //@ts-ignore
      return titleOverrides[key];
    } else {
      return title;
    }
  }

  //@ts-ignore
  const title = applyTitleOverrides(getTitle())
  
  const onGoHome = () => {
    navigation.reset({
      routes: [{name: HOME_SCREEN}]
    })
  }

  return (
    <>
      <View style={styles.header}>
        {route.name === HOME_SCREEN ? (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={menuIc} style={styles.icon} resizeMode="contain" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onGoHome}>
            <Image source={homeIc} style={styles.icon} resizeMode="contain" { ...getTestProps('home_img') } />
          </TouchableOpacity>
        )}
        <Text style={styles.title} { ...getTestProps('screen_header_text') } >{title}</Text>
        <TouchableOpacity onPress={() => setShowContactsDialog(true)}>
          <Image source={callIc} style={styles.icon} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      <ContactsDialog
        visible={showContactsDialog}
        onClose={() => setShowContactsDialog(false)}
      />
    </>
  );
});

export default Header;
