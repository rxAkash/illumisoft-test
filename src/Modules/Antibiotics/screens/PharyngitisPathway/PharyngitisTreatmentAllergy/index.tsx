import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import styles from '../../../styles';
import ExpandableSection from 'Modules/Antibiotics/components/ExpandableSection';
import { mildAntibioticsColor, strongAntibioticsColor } from 'UIToolkit/theme/colors';
import TreatmentDisplay from 'Modules/Antibiotics/components/TreatmentDisplay';
import { PHARYNGITIS_DRUG_DISPLAY, PHARYNGITIS_TREATMENT_ALLERGY } from 'Modules/Antibiotics/navigation/routes';
import { NavigationProp } from '@react-navigation/native';
import HomeButton from 'Modules/Antibiotics/components/HomeButton';
import { FIRST_LINE_CONF, SEVERE_TREATMENT_CONF } from './conf';

interface Props {
  navigation: NavigationProp<any>;
}

const PharyngitisTreatmentAllergy = React.memo(({navigation}: Props) => {
  const onDrugPress = (drug: any) => {
    navigation.navigate(PHARYNGITIS_DRUG_DISPLAY, {
      title: antibioticsText.pharyngitis.treatmentAllergy,
      drugConfig: drug
    })
  }
  
  return (
    <AntibioticsLayout
      title={antibioticsText.pharyngitis.treatmentAllergy}
    >
      <View style={styles.container}>
        <Text style={styles.smallGrayText}>{antibioticsText.shared.selectTreatment}</Text>
        <ExpandableSection
          title={antibioticsText.shared.firstLine}
          backgroundColor={mildAntibioticsColor}
          analyticsScreenName={PHARYNGITIS_TREATMENT_ALLERGY}
        >
          <TreatmentDisplay
            config={FIRST_LINE_CONF}
            onDrugPress={onDrugPress}
          />
        </ExpandableSection>
        <ExpandableSection
          title={antibioticsText.pharyngitis.severePenicillinAllergy}
          backgroundColor={strongAntibioticsColor}
          analyticsScreenName={PHARYNGITIS_TREATMENT_ALLERGY}
        >
          <TreatmentDisplay
            config={SEVERE_TREATMENT_CONF}
            onDrugPress={onDrugPress}
          />
        </ExpandableSection>
        <HomeButton />
      </View>
    </AntibioticsLayout>
  )
})

export default PharyngitisTreatmentAllergy;
