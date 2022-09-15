import React, { useEffect } from 'react';
import Analytics from 'appcenter-analytics';
import { inject, observer } from 'mobx-react';
import { resusText } from 'Modules/Resuscitation/config/strings';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Card from 'UIToolkit/Card';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import styles from './styles';
import { ResuscitationStore } from 'Modules/Resuscitation/stores/ResuscitationStore';
import { NavigationProp } from '@react-navigation/core';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import { PATIENT_DETAILS } from 'Modules/Resuscitation/navigation/routes';
import ColorPicker from 'Modules/Resuscitation/components/ColorPicker';

interface Props {
  resuscitationStore: ResuscitationStore;
  navigation: NavigationProp<any>;
}

const ColorInput = inject('resuscitationStore')(observer(({
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
    Analytics.trackEvent('Picker Selection', {type: 'Peds Broselow Picker'})
    navigation.navigate(PATIENT_DETAILS)
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBackHeader showBPM border />
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <Card style={styles.card}>
            <Text style={styles.title}>{resusText.patientDetails.color}</Text>
            <ColorPicker
              value={resuscitationStore.color}
              onColorChange={value => resuscitationStore.setColor(value)}
            />
            <View style={styles.buttonContainer}>
              <FullWidthButton
                text={resusText.shared.continue}
                onPress={onNext}
                disabled={!resuscitationStore.color}
              />
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}))

export default ColorInput;
