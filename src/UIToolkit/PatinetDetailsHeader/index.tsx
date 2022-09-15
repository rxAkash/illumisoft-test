import React from 'react';
import { Text, View } from 'react-native';
import { getConvertedWeightValue } from 'utils/weightConverter';
import styles from './styles';
import { getTestProps } from '../../utils/test.id.creator';

interface Props {
  weight: string;
  weightUnit: string;
  ageDisplay: string;
  color?: string;
  colorHex?: string;
  convertWeight?: boolean;
}

const PatientDetailsHeader = React.memo(({
  weight,
  weightUnit,
  ageDisplay,
  color,
  colorHex,
  convertWeight
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{weight} {weightUnit} {convertWeight && (
        <Text style={styles.convertedText} { ...getTestProps('patient_details_weight') } >{getConvertedWeightValue(weightUnit, weight)}</Text>
      )}</Text>
      <Text style={[styles.text, {textAlign: 'center', marginLeft: -12}]} { ...getTestProps('patient_details_age') } >{ageDisplay}</Text>
      {color ? (
        <View style={styles.colorContainer}>
          <View style={[styles.color, {backgroundColor: colorHex}]} />
          <Text style={styles.text} numberOfLines={1} { ...getTestProps('patient_details_color') } >{color}</Text>
        </View>
      ) : (
        <Text style={[styles.text, {textAlign: 'right'}]}>--</Text>  
      )}
      
    </View>
  )
})

export default PatientDetailsHeader;
