import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import styles from '../../../styles';
import ExpandableSection from 'Modules/Antibiotics/components/ExpandableSection';
import { mildAntibioticsColor, strongAntibioticsColor } from 'UIToolkit/theme/colors';
import HomeButton from 'Modules/Antibiotics/components/HomeButton';
import TreatmentDisplay from 'Modules/Antibiotics/components/TreatmentDisplay';
import { MILD_ALLERGY_TREATMENT, SEVERE_ALLERGY_TREATMENT } from './conf';
import { NavigationProp } from '@react-navigation/native';
import { ACUTE_BACTERIAL_DRUG_DISPLAY, ACUTE_BACTERIAL_TREATMENT_ALLERGY } from 'Modules/Antibiotics/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const TreatmentAllergyABR = React.memo(({navigation}: Props) => {

  const onDrugPress = (drugInfo: any) => {
    navigation.navigate(ACUTE_BACTERIAL_DRUG_DISPLAY, {
      title: antibioticsText.acuteOtitis.treatmentPenicillinAllergy,
      drugConfig: drugInfo
    })
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.acuteBacterial.treatmentPenicillinAllergy}
    >
      <View style={styles.container}>
        <Text style={styles.smallGrayText}>{antibioticsText.shared.selectTreatment}</Text>
        <ExpandableSection
          title={antibioticsText.acuteBacterial.mildModeratePenicillinAllergy}
          backgroundColor={mildAntibioticsColor}
          analyticsScreenName={ACUTE_BACTERIAL_TREATMENT_ALLERGY}
        >
          <TreatmentDisplay
            config={MILD_ALLERGY_TREATMENT}
            onDrugPress={onDrugPress}
          />
        </ExpandableSection>
        <ExpandableSection
          title={antibioticsText.acuteBacterial.severePenicillinAllergy}
          backgroundColor={strongAntibioticsColor}
          analyticsScreenName={ACUTE_BACTERIAL_TREATMENT_ALLERGY}
        >
          <TreatmentDisplay
            config={SEVERE_ALLERGY_TREATMENT}
            onDrugPress={onDrugPress}
          />
        </ExpandableSection>
        <HomeButton />
      </View>
    </AntibioticsLayout>
  )
})

export default TreatmentAllergyABR;
