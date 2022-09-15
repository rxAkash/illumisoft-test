import { resusText } from 'Modules/Resuscitation/config/strings';
import React from 'react';
import { Alert, Text, View } from 'react-native';
import { getAgeInWeeks } from 'utils/ageConverter';
import styles from '../styles';

interface Props {
  age: string;
  unit: string;
}

const IntroSection = React.memo(({age, unit}: Props) => {
  const getDataRescus = () => {
    if (getAgeInWeeks(age, unit) <= 260) {
      return {
        title: '≤ 5 years',
        dosage: '125 mL/hr'
      }
    } else if (getAgeInWeeks(age, unit) > 60
      && getAgeInWeeks(age, unit) <= 730) {
      return {
        title: '6-14 years',
        dosage: '250 mL/hr'
      }
    } else {
      return {
        title: '15+ years',
        dosage: '500 mL/hr'
      }
    }
  }

  return (
    <View>
      <View style={styles.valueSection}>
        <Text style={styles.info}>
          <Text style={styles.infoTitle}>
            {resusText.burnManagment.burnsAirwayTitle}  
          </Text>
          {resusText.burnManagment.burnsAirwayInfo}
        </Text>
      </View>
      <View style={styles.valueSection}>
        <Text style={styles.info}>
          <Text style={styles.infoTitle}>
            {resusText.burnManagment.burnsFluidsTitle}  
          </Text>
          {resusText.burnManagment.burnsFluidsInfo}
        </Text>
        <Text style={[styles.info, {marginTop: 12}]}>
          {getDataRescus().title}{'\n'}
          <Text style={styles.medValue}>
            {getDataRescus().dosage}
          </Text>
        </Text>
      </View>
      <View style={styles.valueSection}>
        <Text style={styles.info}>
          <Text style={styles.infoTitle}>
            {resusText.burnManagment.burnsManagementTitle}  
          </Text>
          {resusText.burnManagment.burnsManagementInfo}
        </Text>
      </View>
    </View>
  )
})

export default IntroSection;
