/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import Analytics from 'appcenter-analytics';
import { Image, Pressable, Text } from 'react-native';
import { antibioticsIc } from 'assets/img';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ANTIBIOTICS_HOME } from 'Modules/Antibiotics/navigation/routes';
import { buttonPressed } from 'UIToolkit/theme/styles';

const HomeButton = React.memo(() => {
  const navigation = useNavigation();

  const onPress = () => {
    Analytics.trackEvent(`Guideline Restart`, {guidline: 'Antibiotics'})
    navigation.reset({
      //@ts-ignore
      routes: [{name: ANTIBIOTICS_HOME}], routeNames: [ANTIBIOTICS_HOME]
    })
  }

  return (
    <Pressable style={({pressed}) => [styles.container, pressed && buttonPressed]} onPress={onPress}>
      <Image source={antibioticsIc} style={styles.icon} />
      <Text style={styles.text}>{antibioticsText.shared.home}</Text>
    </Pressable>
  )
})

export default HomeButton;
