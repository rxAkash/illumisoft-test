import { restartIc } from 'assets/img';
import { resusText } from 'Modules/Resuscitation/config/strings';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

interface Props {
  onReset: () => void;
  disabled: boolean | null | undefined;
}

const ResetCardHeader = React.memo(({onReset,disabled}: Props) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{resusText.newlyBorn.details}</Text>
      <TouchableOpacity disabled={disabled} style={styles.restartButton} onPress={onReset}>
        <Image source={restartIc} style={[styles.restartIcon,disabled?{tintColor:"#7C7C7C"}:{}]} />
        <Text style={[styles.restartText,disabled?{color:"#7C7C7C"}:{}]}>{resusText.newlyBorn.reset}</Text>
      </TouchableOpacity>
    </View>
  )
})

export default ResetCardHeader;
