/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NavigationProp } from '@react-navigation/core';
import { electricaltherapyIc } from 'assets/img/resus';
import { inject, observer } from 'mobx-react';
import ElectricalTherapyButton from 'Modules/Resuscitation/components/ElectricalTherapyButton';
import { colorHexMap } from 'Modules/Resuscitation/config/sharedConf';
import { resusText } from 'Modules/Resuscitation/config/strings';
import { AIRWAY_AND_BREATHING, CIRCULATION, ELECTRICAL_THERAPY } from 'Modules/Resuscitation/navigation/routes';
import { ResuscitationStore } from 'Modules/Resuscitation/stores/ResuscitationStore';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import ColoredNavButton from 'UIToolkit/Buttons/ColoredNavButton';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import PatientDetailsHeader from 'UIToolkit/PatinetDetailsHeader';
import { primaryColor } from 'UIToolkit/theme/colors';
import { containerPadding } from 'UIToolkit/theme/styles';
import styles from './styles';

interface Props {
  resuscitationStore: ResuscitationStore;
  navigation: NavigationProp<any>;
}

const AdvancedLifeSupport = inject('resuscitationStore')(observer(({
  resuscitationStore,
  navigation
}: Props ) => {

  const onNav = (screen: string) => {
    navigation.navigate(screen, {extended: true});
  }
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <GoBackHeader
          showBPM
          customElement={() => <ElectricalTherapyButton />}
        />
        <PatientDetailsHeader
          ageDisplay={resuscitationStore.getAgeDisplay()}
          weight={resuscitationStore.weight}
          weightUnit={resuscitationStore.weightUnit}
          convertWeight
          color={resuscitationStore.color}
          //@ts-ignore
          colorHex={colorHexMap[resuscitationStore.color]}
        />
        <View style={containerPadding}>
          <ColoredNavButton
            backgroundColor={primaryColor}
            title={resusText.shared.airway}
            onPress={() => onNav(AIRWAY_AND_BREATHING)}
            style={styles.button}
          />
          <ColoredNavButton
            backgroundColor={primaryColor}
            title={resusText.shared.circulation}
            onPress={() => onNav(CIRCULATION)}
            style={styles.button}
          />
          <ColoredNavButton
            icon={electricaltherapyIc}
            backgroundColor={primaryColor}
            title={resusText.shared.electricalTherapy}
            onPress={() => onNav(ELECTRICAL_THERAPY)}
            style={styles.button}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}))

export default AdvancedLifeSupport;
