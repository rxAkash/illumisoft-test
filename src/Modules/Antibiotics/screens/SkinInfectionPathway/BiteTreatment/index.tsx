import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import styles from '../../../styles';
import ExpandableSection from 'Modules/Antibiotics/components/ExpandableSection';
import { mildAntibioticsColor, strongAntibioticsColor } from 'UIToolkit/theme/colors';
import TreatmentDisplay from 'Modules/Antibiotics/components/TreatmentDisplay';
import { SKIN_INFECTION_BITE, SKIN_INFECTION_DRUG_DISPLAY } from 'Modules/Antibiotics/navigation/routes';
import { NavigationProp } from '@react-navigation/native';
import HomeButton from 'Modules/Antibiotics/components/HomeButton';
import { FIRST_LINE, SEVERE_PENICILLIN_ALLERGY_TREATMENT } from './conf';

interface Props {
  navigation: NavigationProp<any>;
}

const BiteTreatment = React.memo(({navigation}: Props) => {
  const onDrugPress = (drugConf: any) => {
    navigation.navigate(SKIN_INFECTION_DRUG_DISPLAY, {
      title: antibioticsText.skinInfection.treatment,
      drugConfig: drugConf
    })
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.skinInfection.treatment}
    >
      <View style={styles.container}>
        <Text style={styles.smallGrayText}>{antibioticsText.shared.selectTreatment}</Text>
        <ExpandableSection
          title={antibioticsText.shared.firstLine}
          backgroundColor={mildAntibioticsColor}
          analyticsScreenName={SKIN_INFECTION_BITE}
        >
          <TreatmentDisplay
            config={FIRST_LINE}
            onDrugPress={onDrugPress}
          />
        </ExpandableSection>
        <ExpandableSection
          title={antibioticsText.skinInfection.penicillinAllergy}
          backgroundColor={strongAntibioticsColor}
          analyticsScreenName={SKIN_INFECTION_BITE}
        >
          <TreatmentDisplay
            config={SEVERE_PENICILLIN_ALLERGY_TREATMENT}
            onDrugPress={onDrugPress}
          />
        </ExpandableSection>
        <HomeButton />
      </View>
    </AntibioticsLayout>
  )
})

export default BiteTreatment;
