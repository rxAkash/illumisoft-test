import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Formula = React.memo(() => {
  return (
    <View style={styles.formulaContainer}>
      <Text style={styles.formulaText}>Rate (ml/hr) = </Text>
      <View>
        <View style={styles.dividerBorder}>
          <Text style={styles.formulaText}>
            Dose (mcg/kg/min) x weight (kg) x 60 (min/hr)
          </Text>
        </View>
        <Text style={styles.formulaText}>Concentration (mcg/mL)	</Text>
      </View>
    </View>
  )
});

export default Formula;
