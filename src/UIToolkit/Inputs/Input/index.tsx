import React from 'react';
import { Text, View, TextInput, KeyboardTypeOptions } from 'react-native';
import { lightGray } from 'UIToolkit/theme/colors';
import styles from './styles';

interface Props {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  style?: any;
  maxLength?: number;
  keyboard?: KeyboardTypeOptions;
}

const Input = React.memo(({
  label,
  placeholder,
  style,
  maxLength,
  value,
  onChange,
  keyboard
}: Props) => {
  return (
    <View style={style}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        onChangeText={onChange}
        keyboardType={keyboard}
        placeholderTextColor={lightGray}
      />
    </View>
  )
})

export default Input;
