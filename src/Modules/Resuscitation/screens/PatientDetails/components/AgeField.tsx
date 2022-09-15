import React, { useState } from 'react';
import { resusText } from 'Modules/Resuscitation/config/strings';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './styles';
import { closeIc, pencilIc } from 'assets/img';
import AgePicker from 'Modules/Resuscitation/components/AgePicker';

interface Props {
  value: string;
  unit: string;
  onValueChange: (value?: string) => void;
  onUnitChange: (unit?: string) => void;
  display: string;
}

const AgeField = React.memo(({
  value,
  unit,
  onValueChange,
  onUnitChange,
  display
}: Props) => {
  const [showInput, setShowInput] = useState(false);

  return (
    <View style={styles.field}>
      <Text style={styles.label}>{resusText.patientDetails.age}</Text>
      {showInput ? (
        <View style={styles.editContainer}>
          <View style={{flex: 1}}>
            <AgePicker
              value={value}
              unit={unit}
              onAgeChange={onValueChange}
              onUnitChange={onUnitChange}
            />
          </View>
        </View>
      ) : (
        <View style={styles.fieldContainer}>
          <Text style={styles.valueText}>{display}</Text>
          <Pressable style={styles.editContainer} onPress={() => setShowInput(true)}>
            <Image source={pencilIc} style={styles.icon}/>
            <Text style={styles.editText}>Change</Text>
          </Pressable>
        </View>
      )}
      
    </View>
  )
})

export default AgeField;
