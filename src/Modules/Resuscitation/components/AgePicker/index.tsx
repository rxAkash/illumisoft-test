import { AGE_OPTIONS, AGE_UNIT_OPTIONS } from 'Modules/Resuscitation/config/sharedConf';
import { resusText } from 'Modules/Resuscitation/config/strings';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import WheelPicker from 'UIToolkit/Inputs/WheelPicker';
import styles from './styles';

interface Props {
  unit: string;
  onUnitChange: (unit?: string) => void;
  value: string;
  onAgeChange: (value?: string) => void;
}

const AgePicker = React.memo(({unit, onUnitChange, value, onAgeChange}: Props) => {
  const [showOptions, setShowOptions] = useState(false);

  const dismissOptions = () => {
    setShowOptions(false);
  }

  const onSubmit = (value?: string, secValue?: string) => {
    onUnitChange(secValue);
    onAgeChange(value);
    setShowOptions(false);
  }

  return (
    <View style={styles.inputContainer}>
      <Pressable onPress={() => setShowOptions(true)} style={styles.input}>
        {!value ? (
          <Text style={styles.placeholderText}>{resusText.patientDetails.age}</Text> 
        ) : (
          <Text style={styles.valueText}>{value} {unit}</Text>
        )}
      </Pressable>
      <WheelPicker
        options={AGE_OPTIONS}
        secondaryOptions={AGE_UNIT_OPTIONS}
        value={value}
        visible={showOptions}
        secValue={unit}
        onDismiss={dismissOptions}
        onSubmit={onSubmit}
      />
    </View>
  )
})

export default AgePicker;
