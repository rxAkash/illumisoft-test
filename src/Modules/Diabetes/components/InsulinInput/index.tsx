import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { grayColor } from 'UIToolkit/theme/colors';
import styles from './styles';

interface Props {
  setInsulin: (insulin: string) => void;
  value: string;
  fullWidth?: boolean;
}

const InsulinInput = React.memo(({setInsulin, value, fullWidth}: Props) => {
  const onChange = (text: string) => {
    if(parseFloat(text) || text === '' || text === '0') {
      setInsulin(text)
    }
  }

  return (
    <View style={[styles.container, fullWidth && {width: '100%'}]}>
      <TextInput
        placeholder='units'
        style={styles.value}
        placeholderTextColor={grayColor}
        value={value}
        keyboardType='numeric'
        onChangeText={onChange}
        maxLength={3}
      />
      {(value !== '') && (
        <Text style={styles.value}> units</Text>
      )}
    </View>
  )
})

export default InsulinInput;
