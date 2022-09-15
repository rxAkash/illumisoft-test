import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import styles from '../../../styles';
import ExpandableSection from 'Modules/Antibiotics/components/ExpandableSection';
import { mildAntibioticsColor, strongAntibioticsColor } from 'UIToolkit/theme/colors';
import TreatmentDisplay from 'Modules/Antibiotics/components/TreatmentDisplay';
import { FIRST_LINE_TREATMENT, SEVERE_PENICILLIN_ALLERGY_TREATMENT } from './conf';
import { SKIN_INFECTION_DRUG_DISPLAY, SKIN_INFECTION_IMPETIGO } from 'Modules/Antibiotics/navigation/routes';
import { NavigationProp } from '@react-navigation/native';
import HomeButton from 'Modules/Antibiotics/components/HomeButton';

interface Props {
  navigation: NavigationProp<any>;
}

const ImpetigoTreatment = React.memo(({navigation}: Props) => {
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
          analyticsScreenName={SKIN_INFECTION_IMPETIGO}
        >
          <TreatmentDisplay
            config={FIRST_LINE_TREATMENT}
            onDrugPress={onDrugPress}
          />
        </ExpandableSection>
        <ExpandableSection
          title={antibioticsText.skinInfection.severePenicillinAllergy}
          backgroundColor={strongAntibioticsColor}
          analyticsScreenName={SKIN_INFECTION_IMPETIGO}
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

export default ImpetigoTreatment;
