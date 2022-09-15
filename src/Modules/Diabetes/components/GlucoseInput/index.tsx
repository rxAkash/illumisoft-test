import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { grayColor } from 'UIToolkit/theme/colors';
import styles from './styles';

interface Props {
  setGlucose: (glucose: string) => void;
  value: string;
}

const GlucoseInput = React.memo(({setGlucose, value}: Props) => {
  const onChange = (text: string) => {
    if(parseFloat(text) || text === '' || text === '0') {
      setGlucose(text)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='BG (mg/dL)'
        style={styles.value}
        placeholderTextColor={grayColor}
        value={value}
        keyboardType='numeric'
        onChangeText={onChange}
        maxLength={3}
      />
      {(value !== '') && (
        <Text style={styles.value}> mg/dL</Text>
      )}
    </View>
  )
})

export default GlucoseInput;
