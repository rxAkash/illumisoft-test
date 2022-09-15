import { nextArrowIc } from 'assets/img';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { buttonPressed } from 'UIToolkit/theme/styles';
import styles from './styles';

interface Props {
  drugInfo: any;
  onDrugPress: (drugInfo: any) => void;
}

const DrugButton = React.memo(({drugInfo, onDrugPress}: Props) => {
  return (
    <View>
      {drugInfo.subtitle && (
        <Text style={[styles.boldText, styles.drugListTitle]}>{drugInfo.subtitle}</Text>
      )}
      <Pressable
        style={({pressed}) => [styles.drugButton, pressed && buttonPressed]}
        onPress={() => onDrugPress(drugInfo)}
        disabled={!drugInfo.notes}
      >
        <View>
          <Text style={styles.boldText}>{drugInfo.medicine}</Text>
          <Text style={styles.regularText}>{drugInfo.dose}</Text>
          {drugInfo.max && (<Text style={styles.regularText}>{drugInfo.max}</Text>)}
          {drugInfo.duration && (<Text style={styles.regularText}>{drugInfo.duration}</Text>)}
        </View>
        {drugInfo.notes && <Image source={nextArrowIc} style={styles.arrow} />}
      </Pressable>
    </View>
  )
})

export default DrugButton;
