import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import ExpandableSection from 'Modules/Antibiotics/components/ExpandableSection';
import { primaryColor, whiteColor } from 'UIToolkit/theme/colors';
import TreatmentDisplay from 'Modules/Antibiotics/components/TreatmentDisplay';
import { TREATMENT_NO_ALLERGY } from './conf';
import HomeButton from 'Modules/Antibiotics/components/HomeButton';
import { NavigationProp } from '@react-navigation/native';
import { ACUTE_OTITIS_DRUG_DISPLAY, ACUTE_OTITIS_TREATMENT_NO_ALLERGY } from 'Modules/Antibiotics/navigation/routes';
import styles from '../../../styles';

interface Props {
  navigation: NavigationProp<any>;
}

const TreatmentNoAllergy = React.memo(({navigation}: Props) => {
  const onDrugPress = (drug: any) => {
    navigation.navigate(ACUTE_OTITIS_DRUG_DISPLAY, {
      title: antibioticsText.acuteOtitis.treatmentRecentUse,
      drugConfig: drug
    })
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.acuteOtitis.treatmentNoAllergy}
    >
      <View style={styles.container}>
        <Text style={styles.smallGrayText}>{antibioticsText.shared.selectTreatment}</Text>
        <ExpandableSection
          title={antibioticsText.shared.firstLine}
          backgroundColor={primaryColor}
          colorOverride={whiteColor}
          autoOpen
          analyticsScreenName={ACUTE_OTITIS_TREATMENT_NO_ALLERGY}
        >
          <TreatmentDisplay
            config={TREATMENT_NO_ALLERGY}
            onDrugPress={onDrugPress}
          />
        </ExpandableSection>
        <HomeButton />
      </View>
    </AntibioticsLayout>
  )
})

export default TreatmentNoAllergy;
