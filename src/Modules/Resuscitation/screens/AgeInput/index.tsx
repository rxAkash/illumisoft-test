import { NavigationProp } from '@react-navigation/native';
import { inject, observer } from 'mobx-react';
import Analytics from 'appcenter-analytics';
import AgePicker from 'Modules/Resuscitation/components/AgePicker';
import { resusText } from 'Modules/Resuscitation/config/strings';
import { PATIENT_DETAILS } from 'Modules/Resuscitation/navigation/routes';
import { ResuscitationStore } from 'Modules/Resuscitation/stores/ResuscitationStore';
import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import Card from 'UIToolkit/Card';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import styles from './styles';

interface Props {
  resuscitationStore: ResuscitationStore;
  navigation: NavigationProp<any>;
}

const AgeInput = inject('resuscitationStore')(observer(({
  resuscitationStore,
  navigation
}: Props) => {
  
  useEffect(() => {
    resuscitationStore.clear()
    navigation.addListener('focus', () => {
      resuscitationStore.clear()
    })
    return () => navigation.removeListener('focus', () => {
      //nothing
    })
  }, [])

  const onNext = () => {
    Analytics.trackEvent('Picker Selection', {type: 'Peds Age Picker'})
    resuscitationStore.convertAge();
    navigation.navigate(PATIENT_DETAILS);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBackHeader showBPM border />
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <Card style={styles.card}>
            <Text style={styles.title}>{resusText.patientDetails.age}</Text>
            <AgePicker
              value={resuscitationStore.age}
              unit={resuscitationStore.ageUnit}
              onAgeChange={value => resuscitationStore.setAge(value)}
              onUnitChange={unit => resuscitationStore.setAgeUnit(unit)}
            />
            <View style={styles.nextButtonContainer}>
              <FullWidthButton
                text={resusText.shared.continue}
                onPress={onNext}
                disabled={!resuscitationStore.age}
              />
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}))

export default AgeInput;
