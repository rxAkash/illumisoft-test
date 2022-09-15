import { useNavigation } from '@react-navigation/core';
import { electricaltherapyIc } from 'assets/img/resus';
import { ELECTRICAL_THERAPY } from 'Modules/Resuscitation/navigation/routes';
import React from 'react';
import { Image, Pressable } from 'react-native';
import styles from './styles';

const ElectricalTherapyButton = React.memo(() => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate(ELECTRICAL_THERAPY as any);
  }

  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Image source={electricaltherapyIc} style={styles.icon} />
    </Pressable>
  )
})

export default ElectricalTherapyButton;
