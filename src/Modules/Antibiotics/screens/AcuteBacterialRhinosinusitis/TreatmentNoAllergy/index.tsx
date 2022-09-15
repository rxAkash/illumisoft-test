import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import ExpandableSection from 'Modules/Antibiotics/components/ExpandableSection';
import { mildAntibioticsColor, strongAntibioticsColor } from 'UIToolkit/theme/colors';
import TreatmentDisplay from 'Modules/Antibiotics/components/TreatmentDisplay';
import { SEVERE_NO_ALLERGY_TREATMENT,MILD_NO_ALLERGY_TREATMENT } from './conf';
import HomeButton from 'Modules/Antibiotics/components/HomeButton';
import { NavigationProp } from '@react-navigation/native';
import { ACUTE_BACTERIAL_DRUG_DISPLAY, ACUTE_BACTERIAL_TREATMENT_NO_ALLERGY } from 'Modules/Antibiotics/navigation/routes';
import styles from '../../../styles';

interface Props {
  navigation: NavigationProp<any>;
}

const TreatmentNoAllergyABR = React.memo(({navigation}: Props) => {
  const onDrugPress = (drug: any) => {
    navigation.navigate(ACUTE_BACTERIAL_DRUG_DISPLAY, {
      title: antibioticsText.acuteBacterial.treatmentNoAllergy,
      drugConfig: drug
    })
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.acuteBacterial.treatmentNoAllergy}
    >
      <View style={styles.container}>
        <Text style={styles.smallGrayText}>{antibioticsText.shared.selectTreatment}</Text>
        <ExpandableSection
          title={antibioticsText.acuteBacterial.treatmentMildNoAllergy}
          backgroundColor={mildAntibioticsColor}
          analyticsScreenName={ACUTE_BACTERIAL_TREATMENT_NO_ALLERGY}
        >
          <TreatmentDisplay
            config={MILD_NO_ALLERGY_TREATMENT}
            onDrugPress={onDrugPress}
          />
        </ExpandableSection>
        <ExpandableSection
          title={antibioticsText.acuteBacterial.treatmentSevereNoAllergy}
          backgroundColor={strongAntibioticsColor}
          analyticsScreenName={ACUTE_BACTERIAL_TREATMENT_NO_ALLERGY}
        >
          <TreatmentDisplay
            config={SEVERE_NO_ALLERGY_TREATMENT}
            onDrugPress={onDrugPress}
          />
        </ExpandableSection>
        <HomeButton />
      </View>
    </AntibioticsLayout>
  )
})

export default TreatmentNoAllergyABR;
