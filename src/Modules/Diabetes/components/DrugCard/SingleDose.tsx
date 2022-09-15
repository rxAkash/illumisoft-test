import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface Props {
  conf: any;
}

const SingleDose = React.memo(({conf}: Props) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.regularText}>Suggested dose -{' '}
        <Text style={[styles.dosage, {color: conf.administrationTypeColor}]}>
          {conf.suggestedDose} {conf.units}
          {conf.max && conf.suggestedDose === conf.max && (" (Max)")}
        </Text>
      </Text>
    </View>
  )
})

export default SingleDose;
