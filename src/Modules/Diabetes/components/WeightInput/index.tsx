import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { grayColor } from 'UIToolkit/theme/colors';
import styles from './styles';

const DIGIT_DOT_REG = /\d.$/

interface Props {
  setWeight: (weight: string) => void;
  value: string;
}

const WeightInput = React.memo(({setWeight, value}: Props) => {

  const onChange = (text: string) => {
    if(parseFloat(text) || text === '' || text === '0' || DIGIT_DOT_REG.test(text)) {
      setWeight(text)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Weight (kg)'
        style={styles.value}
        placeholderTextColor={grayColor}
        value={value}
        keyboardType='numeric'
        onChangeText={onChange}
        maxLength={3}
      />
      {(value !== '') && (
        <Text style={styles.value}> kg</Text>
      )}
    </View>
  )
})

export default WeightInput;
