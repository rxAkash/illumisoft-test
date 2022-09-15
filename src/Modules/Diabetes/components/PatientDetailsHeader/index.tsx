import React from 'react';
import { Image, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { profileUserIc } from 'assets/img';
import { DiabetesStore } from 'Modules/Diabetes/stores/DiabetesStore';
import styles from './styles';

interface Props {
  diabetesStore?: DiabetesStore;
}

const PatientDetailsHeader = inject('diabetesStore')(observer(({
  diabetesStore
}: Props) => {

  const renderAgeOrInsulin = () => {
    if(diabetesStore?.age) {
      return (
        <View style={styles.ageContainer}>
          <Image source={profileUserIc} style={styles.icon} />
          <Text style={styles.value}>{diabetesStore.age}</Text>
        </View> 
      )
    }
    if(diabetesStore?.insulin) {
      return (
        <View style={styles.ageContainer}>
          <Image source={profileUserIc} style={styles.icon} />
          <Text style={styles.glucose}>TDD: 
            <Text style={styles.value}> {diabetesStore.insulin}</Text>
          </Text>
        </View>
      )
    }
    if(diabetesStore?.basalInsulin) {
      return (
        <View style={styles.ageContainer}>
          <Image source={profileUserIc} style={styles.icon} />
          <Text style={styles.glucose}>Basal insulin dose: 
            <Text style={styles.value}> {diabetesStore.basalInsulin} units</Text>
          </Text>
        </View>
      )
    }
    return null;
  }
  
  return diabetesStore && (
    diabetesStore.weight
    || diabetesStore.age
    || diabetesStore.glucose
    || diabetesStore.insulin
    || diabetesStore.basalInsulin) ? (
      <View style={styles.container}>
        {renderAgeOrInsulin()}
        {diabetesStore.weight ? (
          <Text style={styles.value}>{diabetesStore.weight} kg</Text>
        ) : null}
        {diabetesStore.glucose !== '' && (
          <Text style={styles.glucose}>
          Glucose:
            <Text style={styles.value}> {diabetesStore.glucose} mg/dL</Text>
          </Text>
        )}
      </View>
    ) : null
}))

export default PatientDetailsHeader;
