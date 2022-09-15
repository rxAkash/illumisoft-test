/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NavigationProp } from '@react-navigation/core';
import Analytics from 'appcenter-analytics';
import { inject, observer } from 'mobx-react';
import GoBackModal from 'Modules/Resuscitation/components/GoBackModal';
import { colorHexMap } from 'Modules/Resuscitation/config/sharedConf';
import { resusText } from 'Modules/Resuscitation/config/strings';
import { ADVANCED_LIFE_SUPPORT, BASIC_LIFE_SUPPORT, BURN_MANAGEMENT, DRUG_DOSING, EQUIPMENT_SIZES, NEWLY_BORN_INFANT_HOME, RESUS_HOME, VITAL_SIGNS } from 'Modules/Resuscitation/navigation/routes';
import { ResuscitationStore } from 'Modules/Resuscitation/stores/ResuscitationStore';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import ColoredNavButton from 'UIToolkit/Buttons/ColoredNavButton';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import PatientDetailsHeader from 'UIToolkit/PatinetDetailsHeader';
import { primaryColor } from 'UIToolkit/theme/colors';
import styles from './styles';

const NEWLY_BORN_WEIGHT_KG = 6;
const NEWLY_BORN_WEIGHT_LBS = 13.2

interface Props {
  resuscitationStore: ResuscitationStore;
  navigation: NavigationProp<any>;
}

const ResusPathways = inject('resuscitationStore')(observer(({
  resuscitationStore,
  navigation
}: Props) => {
  const [showBackWarning, setShowBackWarning] = useState(false);

  const onBackAccept = () => {
    setShowBackWarning(false);
    Analytics.trackEvent("Guideline Restart", {guideline: 'Resuscitation'})
    navigation.reset({
      routes: [{name: RESUS_HOME}],
      routeNames: [RESUS_HOME]
    })
  }

  const onBackDismiss = () => {
    setShowBackWarning(false);
  }

  const onBack = () => {
    setShowBackWarning(true);
  }

  const onNav = (screen: string) => {
    navigation.navigate(screen);
  }

  const shouldShowNewlyBorn = () => {
    if(resuscitationStore.weightUnit === resusText.shared.kg) {
      return parseFloat(resuscitationStore.weight) <= NEWLY_BORN_WEIGHT_KG
    } else {
      return parseFloat(resuscitationStore.weight) <= NEWLY_BORN_WEIGHT_LBS
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBackHeader showBPM customOnBack={onBack} />
      <PatientDetailsHeader
        ageDisplay={resuscitationStore.getAgeDisplay()}
        weight={resuscitationStore.weight}
        weightUnit={resuscitationStore.weightUnit}
        convertWeight
        color={resuscitationStore.color}
        //@ts-ignore
        colorHex={colorHexMap[resuscitationStore.color]}
      />
      <ScrollView style={{flex: 1}} keyboardDismissMode="interactive">
        <View style={styles.container}>
          {shouldShowNewlyBorn() && (
            <ColoredNavButton
              backgroundColor={primaryColor}
              title={resusText.resusPathways.newlyBornInfant}
              onPress={() => onNav(NEWLY_BORN_INFANT_HOME)}
              style={styles.button}
            />
          )}
          <ColoredNavButton
            backgroundColor={primaryColor}
            title={resusText.resusPathways.basicLifeSupport}
            onPress={() => onNav(BASIC_LIFE_SUPPORT)}
            style={styles.button}
          />
          <ColoredNavButton
            backgroundColor={primaryColor}
            title={resusText.resusPathways.advancedLifeSupport}
            onPress={() => onNav(ADVANCED_LIFE_SUPPORT)}
            style={styles.button}
          />
          <ColoredNavButton
            backgroundColor={primaryColor}
            title={resusText.resusPathways.burnManagment}
            onPress={() => onNav(BURN_MANAGEMENT)}
            style={styles.button}
          />
          <ColoredNavButton
            backgroundColor={primaryColor}
            title={resusText.resusPathways.vitalSigns}
            onPress={() => onNav(VITAL_SIGNS)}
            style={styles.button}
          />
          <ColoredNavButton
            backgroundColor={primaryColor}
            title={resusText.resusPathways.drugDosing}
            onPress={() => onNav(DRUG_DOSING)}
            style={styles.button}
          />
          <ColoredNavButton
            backgroundColor={primaryColor}
            title={resusText.resusPathways.equipemntSizes}
            onPress={() => onNav(EQUIPMENT_SIZES)}
            style={styles.button}
          />
        </View>
      </ScrollView>
      <GoBackModal
        visible={showBackWarning}
        onAccept={onBackAccept}
        onDismiss={onBackDismiss}
      />
    </SafeAreaView>
  )
}))

export default ResusPathways;
