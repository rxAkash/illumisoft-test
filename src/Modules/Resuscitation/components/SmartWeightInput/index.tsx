import React, { useRef, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { roundToNearestHalf } from 'utils/numberUtils';
import { getConvertedWeightValue } from 'utils/weightConverter';
import styles from './styles';

const KG = 'kg';
const LBS = 'lbs';
const DIGIT_DOT_REG = /\d.$/

interface Props {
  unit: string;
  value: string;
  onUnitChange: (unit: string) => void;
  onWeightChange: (value: string) => void;
  autofocus?: boolean;
  onBlur?: () => void;
}

const SmartWeightInput = React.memo(({
  unit,
  value,
  onUnitChange,
  onWeightChange,
  autofocus,
  onBlur
}: Props) => {
  const [inputInFocus, setInputInFocus] = useState(false);
  const [weight, setWeight] = useState(value);
  const inputRef = useRef<any>(null);

  const onChange = (text: string) => {
    if(parseFloat(text) || text === '' || text === '0' || DIGIT_DOT_REG.test(text)) {
      if(text === '' || text === '0' || DIGIT_DOT_REG.test(text)) {
        setWeight(text)
      } else {
        if(parseFloat(text) > 6) {
          setWeight(Math.round(parseFloat(text)).toString())
        } else {
          setWeight(roundToNearestHalf(text).toString());
        }
      }
    }
  }

  const focusInput = () => {
    if(inputRef) {
      inputRef.current.focus()
    }
  }

  const handleBlur = () => {
    setInputInFocus(false)
    onWeightChange(weight);
    if(onBlur) {
      onBlur();
    }
  }

  return (
    <View style={styles.inputContainer}>
      <Pressable style={styles.pseudoInput} onPress={focusInput}>
        <TextInput
          ref={inputRef}
          autoFocus={autofocus}
          style={styles.textInput}
          placeholder={`Weight ${unit}`}
          keyboardType='numeric'
          onChangeText={onChange}
          value={weight}
          onFocus={() => setInputInFocus(true)}
          onBlur={handleBlur}
          maxLength={3}
        />
        {!inputInFocus && value !== '' && (
          <Text style={styles.unitText}>
            <Text style={styles.blackText}>{unit}</Text>
            <Text> {getConvertedWeightValue(unit, value)}</Text>
          </Text>
        )}
      </Pressable>
      <Pressable
        style={[
          styles.unitButton,
          unit === KG && styles.buttonActive
        ]}
        onPress={() => onUnitChange(KG)}
      >
        <Text style={[
          styles.buttonText,
          unit === KG && styles.textActive
        ]}>{KG}</Text>
      </Pressable>
      <Pressable
        style={[
          styles.unitButton,
          unit === LBS && styles.buttonActive
        ]}
        onPress={() => onUnitChange(LBS)}
      >
        <Text style={[
          styles.buttonText,
          unit === LBS && styles.textActive
        ]}>{LBS}</Text>
      </Pressable>
    </View>
  )
})

export default SmartWeightInput;
