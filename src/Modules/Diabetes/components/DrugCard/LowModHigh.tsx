import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface Props {
  conf: any;
}

const LowModHigh = React.memo(({conf}: Props) => {
  return (
    <View style={styles.sectionContainer}>
      {conf.suggestedLowDose !== undefined && (
        <View style={styles.lowModHighContainer}>
          <Text style={styles.dosageTitle}>Low</Text>
          <Text style={styles.regularText}>Suggested {conf.singleDose ? "one time " : ''}dose -{' '}
            <Text style={styles.dosage}>
              {conf.suggestedLowDose} {conf.units}
              {conf.max && conf.suggestedLowDose.toString() === conf.max.toString() && (" (Max)")}
            </Text>
          </Text>
          {!conf.singleDose && (
            <Text style={styles.regularText}>Suggested volume -{' '}
              <Text style={styles.dosage}>{conf.suggestLowVolume} mL</Text>
            </Text>
          )}
        </View>
      )}
      {conf.suggestedModerateDose !== undefined && (
        <View style={styles.lowModHighContainer}>
          <Text style={styles.dosageTitle}>Moderate</Text>
          <Text style={styles.regularText}>Suggested {conf.singleDose ? "one time " : ''}dose -{' '}
            <Text style={styles.dosage}>
              {conf.suggestedModerateDose} {conf.units}
              {conf.max && conf.suggestedModerateDose.toString() === conf.max.toString() && (" (Max)")}
            </Text>
          </Text>
          {!conf.singleDose && (
            <Text style={styles.regularText}>Suggested volume -{' '}
              <Text style={styles.dosage}>{conf.suggestModerateVolume} mL</Text>
            </Text>
          )}
        </View>
      )}
      {conf.suggestedHighDose !== undefined && (
        <View style={styles.lowModHighContainer}>
          <Text style={styles.dosageTitle}>High</Text>
          <Text style={styles.regularText}>Suggested {conf.singleDose ? "one time " : ''}dose -{' '}
            <Text style={styles.dosage}>{conf.suggestedHighDose} {conf.units}</Text>
          </Text>
          {!conf.singleDose && (
            <Text style={styles.regularText}>Suggested volume -{' '}
              <Text style={styles.dosage}>{conf.suggestHighVolume} mL</Text>
            </Text>
          )}
        </View>
      )}
    </View>
  )
})

export default LowModHigh;
