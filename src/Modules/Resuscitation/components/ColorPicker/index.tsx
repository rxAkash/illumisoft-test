/* eslint-disable @typescript-eslint/ban-ts-comment */
import { colorHexMap, COLOR_OPTIONS } from 'Modules/Resuscitation/config/sharedConf';
import { resusText } from 'Modules/Resuscitation/config/strings';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import WheelPicker from 'UIToolkit/Inputs/WheelPicker';
import styles from './styles';


interface Props {
  value: string;
  onColorChange: (value?: string) => void;
}

const ColorPicker = React.memo(({value, onColorChange}: Props) => {
  const [showOptions, setShowOptions] = useState(false);
  
  const getColorCode = () => {
    //@ts-ignore
    return {backgroundColor: colorHexMap[value]}
  }

  const dismissOptions = () => {
    setShowOptions(false);
  }

  const onSubmit = (option?: string) => {
    if(option) {
      onColorChange(option)
    }
    setShowOptions(false);
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setShowOptions(true)} style={styles.input}>
        {value ? (
          <View style={styles.valueContainer}>
            <View style={[styles.colorIndicator, getColorCode()]} />
            <Text style={styles.valueText}>{value}</Text>
          </View>
        ) : (
          <Text style={styles.placeholderText}>{resusText.patientDetails.color}</Text>
        )}
      </Pressable>
      <WheelPicker
        options={COLOR_OPTIONS}
        value={value}
        visible={showOptions}
        onDismiss={dismissOptions}
        onSubmit={onSubmit}
      />
    </View>
  )
})

export default ColorPicker;
