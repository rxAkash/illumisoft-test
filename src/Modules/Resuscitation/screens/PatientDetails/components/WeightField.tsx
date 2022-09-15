import React, { useState } from 'react';
import { resusText } from 'Modules/Resuscitation/config/strings';
import { Image, Text, View, Pressable } from 'react-native';
import styles from './styles';
import { getConvertedWeightValue } from 'utils/weightConverter';
import { closeIc, pencilIc } from 'assets/img';
import SmartWeightInput from 'Modules/Resuscitation/components/SmartWeightInput';

interface Props {
  value: string;
  unit: string;
  onValueChange: (value: string) => void;
  onUnitChange: (unit: string) => void;
}

const WeightField = React.memo(({value, unit, onUnitChange, onValueChange}: Props) => {
  const [showInput, setShowInput] = useState(false);
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{resusText.patientDetails.weight}</Text>
      {showInput ? (
        <View style={styles.editContainer}>
          <View style={{flex: 1}}>
            <SmartWeightInput
              unit={unit}
              value={value}
              onWeightChange={onValueChange}
              onUnitChange={onUnitChange}
            />
          </View>
        </View>
      ) : (
        <View style={styles.fieldContainer}>
          <Text style={styles.valueText}>{value} {unit}{' '}
            <Text style={styles.convertedText}>
              {getConvertedWeightValue(unit, value)}
            </Text>
          </Text>
          <Pressable style={styles.editContainer} onPress={() => setShowInput(true)}>
            <Image source={pencilIc} style={styles.icon}/>
            <Text style={styles.editText}>Change</Text>
          </Pressable>
        </View>
      )}
    </View>
  )
})

export default WeightField;
