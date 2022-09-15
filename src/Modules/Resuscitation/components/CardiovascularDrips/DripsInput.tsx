import { downArrowIc } from 'assets/img';
import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { SelectOption } from 'UIToolkit/Inputs/@types';
import WheelPicker from 'UIToolkit/Inputs/WheelPicker';
import styles from './styles';

interface Props {
  value: string;
  onValueChange: (value: string) => void;
  title: string;
  options?: SelectOption[];
  secondaryOptions?: SelectOption[];
  wideInput?: boolean;
  unit?: string;
  disabled?: boolean;
}

const DripsInput = React.memo(({
  value,
  onValueChange,
  title,
  options,
  secondaryOptions,
  wideInput,
  unit,
  disabled
}: Props) => {
  const [showOptions, setShowOptions] = useState(false);

  const onSubmit = (value?: string) => {
    if(value) {
      onValueChange(value);
    }
    setShowOptions(false);
  }

  const onDismiss = () => {
    setShowOptions(false);
  }

  const showPicker = () => {
    if(!disabled) {
      setShowOptions(true)
    }
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputTitle}>{title}</Text>
      <Pressable
        style={[styles.input, !options && styles.cover]}
        disabled={!options}
        onPress={showPicker}
      >
        <Text style={styles.value}>{value} {value !== '' && unit && (
          <Text>{unit}</Text>
        )}</Text>
        <Image source={downArrowIc} style={styles.arrowIc} />
      </Pressable>
      {options && (
        <WheelPicker
          options={options}
          onSubmit={onSubmit}
          onDismiss={onDismiss}
          visible={showOptions}
          widePicker={wideInput}
          secondaryOptions={secondaryOptions}
        />
      )}
    </View>
  )
})

export default DripsInput;
