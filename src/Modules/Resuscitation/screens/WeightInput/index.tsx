import { NavigationProp } from '@react-navigation/core';
import Analytics from 'appcenter-analytics';
import { inject, observer } from 'mobx-react';
import { resusText } from 'Modules/Resuscitation/config/strings';
import { PATIENT_DETAILS } from 'Modules/Resuscitation/navigation/routes';
import { ResuscitationStore } from 'Modules/Resuscitation/stores/ResuscitationStore';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import Card from 'UIToolkit/Card';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import SmartWeightInput from 'Modules/Resuscitation/components/SmartWeightInput';
import styles from './styles';

interface Props {
  resuscitationStore: ResuscitationStore;
  navigation: NavigationProp<any>;
}

const WeightInput = inject('resuscitationStore')(observer(({
  resuscitationStore,
  navigation
}: Props) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [showWarn, setShowWarn] = useState("");
  
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
    Analytics.trackEvent('Picker Selection', {type: 'Peds Weight Picker'})
    navigation.navigate(PATIENT_DETAILS)
  }

  const onChange = () =>  {
    if(resuscitationStore.weightUnit=='kg') {
      if(Number(resuscitationStore.weight) > 250) {
        setShowWarn("Weight can't exceed 250kgs");
        setIsDisabled(true);
      }
      else{ 
        setShowWarn("");
        setIsDisabled(false);
      }
    }
    else{
      if(Number(resuscitationStore.weight) > 551){
        setShowWarn("Weight can't exceed 551lbs");
        setIsDisabled(true);
      }
      else {
        setShowWarn("");
        setIsDisabled(false);
      }
    }
    if(!resuscitationStore.weight){
      setIsDisabled(true);
    }
  }

  const changeActiveUnit = (unit: string) => {
    resuscitationStore.setWeightUnit(unit);
    onChange();
  }
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBackHeader showBPM border />
      <ScrollView style={{flex: 1}} keyboardDismissMode="interactive">
        <View style={styles.container}>
          <Card style={styles.card}>
            <Text style={styles.title}>{resusText.shared.patientWeight}</Text>
            <SmartWeightInput
              unit={resuscitationStore.weightUnit}
              onUnitChange={changeActiveUnit}
              value={resuscitationStore.weight}
              onWeightChange={value => {
                resuscitationStore.setWeight(value);
                onChange();
              }}
            />
            <Text style={[ styles.text, { color: "red", marginLeft:0 } ]}>                 
              {showWarn}
            </Text>
            <View style={styles.nextButtonContainer}>
              <FullWidthButton
                text={resusText.shared.continue}
                onPress={onNext}
                disabled={isDisabled}
              />
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}))

export default WeightInput;
