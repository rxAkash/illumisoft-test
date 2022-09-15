import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface Antibiotic {
  title: string;
  dose: string;
  subdose?: string;
  code: string;
  subcode?: string;
}

interface Props {
  item: Antibiotic;
}

const AntibioticDisplay = React.memo(({item}: Props) => {
  return (
    <View key={item.title} style={styles.antibioticContainer}>
      <Text style={[styles.regularText, {textAlign: 'center'}]}>{item.title}</Text>
      <View style={styles.infoRow}>
        <Text style={styles.regularText}>{item.dose}</Text>
        <Text style={styles.smallInfoText}>{item.subdose}</Text>
        <View style={styles.codeContainer}>
          <Text style={[styles.regularText, {textAlign: 'right'}]}>{item.code}</Text>
          <Text style={styles.subcodeText}>{item.subcode}</Text>
        </View>
      </View>
    </View>
  )
})

export default AntibioticDisplay;
