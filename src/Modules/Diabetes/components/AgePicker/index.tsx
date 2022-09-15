import { downArrowIc } from 'assets/img';
import React, { useState } from 'react';
import { Image, Pressable, Text } from 'react-native';
import { SelectOption } from 'UIToolkit/Inputs/@types';
import WheelPicker from 'UIToolkit/Inputs/WheelPicker';
import { buttonPressed } from 'UIToolkit/theme/styles';
import styles from './styles';

interface Props {
  options: SelectOption[];
  selectedOption?: string;
  onSelect: (option?: string) => void;
}

const AgePicker = React.memo(({selectedOption, options, onSelect}: Props) => {
  const [showPicker, setShowPicker] = useState(false);

  const submit = (option?: string) => {
    setShowPicker(false);
    onSelect(option);
  }

  return (
    <>
      <Pressable
        style={({pressed}) => [styles.container, pressed && buttonPressed]}
        onPress={() => setShowPicker(true)}
      >
        {!selectedOption ? (
          <Text style={styles.placeholderText}>Age</Text>
        ) : (
          <Text style={styles.value}>{selectedOption}</Text>
        )}
        <Image source={downArrowIc} style={styles.icon} />
      </Pressable>
      <WheelPicker
        options={options}
        value={selectedOption}
        visible={showPicker}
        onDismiss={() => setShowPicker(false)}
        onSubmit={submit}
        widePicker
      />
    </>
  )
})

export default AgePicker;
