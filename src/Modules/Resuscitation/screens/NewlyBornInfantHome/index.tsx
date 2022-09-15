import { NavigationProp } from '@react-navigation/core';
import { inject, observer } from 'mobx-react';
import { resusText } from 'Modules/Resuscitation/config/strings';
import { AIRWAY_AND_BREATHING, COMPRESSIONS, MEDICATIONS_AND_FLUIDS } from 'Modules/Resuscitation/navigation/routes';
import { ResuscitationStore } from 'Modules/Resuscitation/stores/ResuscitationStore';
import React from 'react';
import { View } from 'react-native';
import ColoredNavButton from 'UIToolkit/Buttons/ColoredNavButton';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import PatientDetailsHeader from 'UIToolkit/PatinetDetailsHeader';
import { pinkColor } from 'UIToolkit/theme/colors';
import { containerPadding } from 'UIToolkit/theme/styles';
import styles from './styles';

interface Props {
  resuscitationStore: ResuscitationStore;
  navigation: NavigationProp<any>;
}


const NewlyBornInfantHome = inject('resuscitationStore')(observer(({
  resuscitationStore,
  navigation
}: Props ) => {

  const onNav = (page: string) => {
    navigation.navigate(page, {fromNewlyBorn: true})
  }

  return (
    <View>
      <GoBackHeader showBPM />
      <PatientDetailsHeader
        ageDisplay={resuscitationStore.getAgeDisplay()}
        weight={resuscitationStore.weight}
        weightUnit={resusText.shared.kg}
      />
      <View style={containerPadding}>
        <ColoredNavButton
          backgroundColor={pinkColor}
          title={resusText.shared.airway}
          onPress={() => onNav(AIRWAY_AND_BREATHING)}
          style={styles.button}
        />
        <ColoredNavButton
          backgroundColor={pinkColor}
          title={resusText.shared.comp}
          onPress={() => onNav(COMPRESSIONS)}
          style={styles.button}
        />
        <ColoredNavButton
          backgroundColor={pinkColor}
          title={resusText.drugDosing.medicationsAndFluids}
          onPress={() => onNav(MEDICATIONS_AND_FLUIDS)}
          style={styles.button}
        />
      </View>
    </View>
  )
}))

export default NewlyBornInfantHome;
