import React, { useEffect } from 'react';
import Analytics from 'appcenter-analytics';
import { inject, observer } from 'mobx-react';
import { resusText } from 'Modules/Resuscitation/config/strings';
import { ResuscitationStore } from 'Modules/Resuscitation/stores/ResuscitationStore';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Card from 'UIToolkit/Card';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import { AGE_DUMMY_OPTIONS, AGE_OPTIONS, WEIGHT_DUMMY_OPTIONS, WEIGHT_OPTIONS } from './conf';
import PickerField from './PickerField';
import ResetCardHeader from './ResetCardHeader';
import styles from './styles';
import ColoredNavButton from 'UIToolkit/Buttons/ColoredNavButton';
import { pinkColor } from 'UIToolkit/theme/colors';
import { NavigationProp } from '@react-navigation/core';
import { NEWLY_BORN_INFANT_HOME } from 'Modules/Resuscitation/navigation/routes';
import { NBI_EDITING_MODE } from 'Modules/Resuscitation/config/sharedConf';

interface Props {
  resuscitationStore: ResuscitationStore;
  navigation: NavigationProp<any>;
}

const NewlyBornInfant = inject('resuscitationStore')(observer(({
  resuscitationStore,
  navigation
}: Props) => {

  useEffect(() => {
    navigation.addListener('focus', () => {
      resuscitationStore.clear();
      resuscitationStore.setEstimationMode(NBI_EDITING_MODE);
    })
    return () => {
      resuscitationStore.clear();
    }
  }, [])

  const onChangeWeight = (value?: string) => {
    resuscitationStore.setWeight(value);
  }

  const onAgeChange = (value?: string) => {
    resuscitationStore.setAge(value);
  }

  const onNext = () => {
    if(resuscitationStore.weight) {
      Analytics.trackEvent('Picker Selection', {type: 'Gestational Weight Picker'})
    }
    if(resuscitationStore.age) {
      Analytics.trackEvent('Picker Selection', {type: 'Gestational Age Picker'})
    }
    navigation.navigate(NEWLY_BORN_INFANT_HOME)
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBackHeader showBPM border />
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.infoText}>{resusText.home.tellUs}</Text>
          <Card>
            <ResetCardHeader
              disabled={!(resuscitationStore.age.length>0 || resuscitationStore.weight.length>0)}
              onReset={() => resuscitationStore.clearNBI()}
            />
            <View style={styles.section}>
              <PickerField
                options={WEIGHT_OPTIONS}
                onChange={onChangeWeight}
                value={resuscitationStore.weight}
                placeholder={resusText.shared.weight}
                measure={resusText.shared.kg}
                convert
                secondaryOptions={WEIGHT_DUMMY_OPTIONS}
              />
            </View>
            <View style={styles.section}>
              <Text style={styles.hint}>{resusText.newlyBorn.hint}</Text>
              <PickerField
                options={AGE_OPTIONS}
                onChange={onAgeChange}
                value={resuscitationStore.age}
                placeholder={resusText.shared.age}
                measure={resusText.shared.weeks}
                secondaryOptions={AGE_DUMMY_OPTIONS}
              />
            </View>
          </Card>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <ColoredNavButton
          backgroundColor={pinkColor}
          title={resusText.newlyBorn.title}
          onPress={onNext}
          disabled={!resuscitationStore.nextEnabled}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  )
}))

export default NewlyBornInfant;
