import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import styles from '../../../styles';
import ExpandableSection from 'Modules/Antibiotics/components/ExpandableSection';
import { mildAntibioticsColor, strongAntibioticsColor } from 'UIToolkit/theme/colors';
import HomeButton from 'Modules/Antibiotics/components/HomeButton';
import TreatmentDisplay from 'Modules/Antibiotics/components/TreatmentDisplay';
import { MILD_PENICILLIN_ALLERGY_TREATMENT, SEVERE_PENICILLIN_ALLERGY_TREATMENT } from './conf';
import { NavigationProp } from '@react-navigation/native';
import { ACUTE_OTITIS_DRUG_DISPLAY, ACUTE_OTITIS_TREATMENT_PENICILLIN } from 'Modules/Antibiotics/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const TreatmentPenicillinAllergy = React.memo(({navigation}: Props) => {

  const onDrugPress = (drugInfo: any) => {
    navigation.navigate(ACUTE_OTITIS_DRUG_DISPLAY, {
      title: antibioticsText.acuteOtitis.treatmentPenicillinAllergy,
      drugConfig: drugInfo
    })
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.acuteOtitis.treatmentPenicillinAllergy}
    >
      <View style={styles.container}>
        <Text style={styles.smallGrayText}>{antibioticsText.shared.selectTreatment}</Text>
        <ExpandableSection
          title={antibioticsText.acuteOtitis.mildModeratePenicillinAllergy}
          backgroundColor={mildAntibioticsColor}
          analyticsScreenName={ACUTE_OTITIS_TREATMENT_PENICILLIN}
        >
          <TreatmentDisplay
            config={MILD_PENICILLIN_ALLERGY_TREATMENT}
            onDrugPress={onDrugPress}
          />
        </ExpandableSection>
        <ExpandableSection
          title={antibioticsText.acuteOtitis.severePenicillinAllergy}
          backgroundColor={strongAntibioticsColor}
          analyticsScreenName={ACUTE_OTITIS_TREATMENT_PENICILLIN}
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

export default TreatmentPenicillinAllergy;
