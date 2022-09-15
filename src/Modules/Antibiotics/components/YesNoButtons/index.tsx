import { nextArrowIc } from 'assets/img';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { buttonPressed } from 'UIToolkit/theme/styles';
import styles from './styles';

interface Props {
  onYes: () => void;
  onNo: () => void;
  yesOverride?: string;
  noOverride?: string;
}

const YesNoButtons = React.memo(({onNo, onYes, yesOverride, noOverride}: Props) => {
  return (
    <View>
      <Pressable
        style={({pressed}) => [styles.button, pressed && buttonPressed]}
        onPress={onYes}
      >
        <View />
        <Text style={styles.text}>{yesOverride ? yesOverride : 'Yes'}</Text>
        <Image source={nextArrowIc} style={styles.arrow} />
      </Pressable>
      <Pressable
        style={({pressed}) => [styles.button, pressed && buttonPressed]}
        onPress={onNo}
      >
        <View />
        <Text style={styles.text}>{noOverride ? noOverride : 'No'}</Text>
        <Image source={nextArrowIc} style={styles.arrow} />
      </Pressable>
    </View>
  )
})

export default YesNoButtons;
