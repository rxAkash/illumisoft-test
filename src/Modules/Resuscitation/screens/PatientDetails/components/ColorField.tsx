/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react';
import { resusText } from 'Modules/Resuscitation/config/strings';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './styles';
import ColorPicker from 'Modules/Resuscitation/components/ColorPicker';
import { pencilIc } from 'assets/img';
import { colorHexMap } from 'Modules/Resuscitation/config/sharedConf';

interface Props {
  value: string;
  onValueChange: (value?: string) => void;
}

const ColorField = React.memo(({value, onValueChange}: Props) => {
  const [showInput, setShowInput] = useState(false);

  const getColorCode = () => {
    //@ts-ignore
    return {backgroundColor: colorHexMap[value]}
  }

  return (
    <View style={styles.field}>
      <Text style={styles.label}>{resusText.patientDetails.color}</Text>
      {showInput ? (
        <View style={styles.editContainer}>
          <View style={{flex: 1}}>
            <ColorPicker
              value={value}
              onColorChange={onValueChange}
            />
          </View>
        </View>
      ) : (
        <View style={styles.fieldContainer}>
          <View style={styles.valueContainer}>
            <View style={[styles.colorIndicator, getColorCode()]} />
            <Text style={styles.valueText}>{value}</Text>
          </View>
          <Pressable style={styles.editContainer} onPress={() => setShowInput(true)}>
            <Image source={pencilIc} style={styles.icon}/>
            <Text style={styles.editText}>Change</Text>
          </Pressable>
        </View>
      )}
    </View>
  )
})

export default ColorField;
