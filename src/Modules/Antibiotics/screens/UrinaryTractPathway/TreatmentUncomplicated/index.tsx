import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import styles from '../../../styles';
import ExpandableSection from 'Modules/Antibiotics/components/ExpandableSection';
import { mildAntibioticsColor, strongAntibioticsColor } from 'UIToolkit/theme/colors';
import TreatmentDisplay from 'Modules/Antibiotics/components/TreatmentDisplay';
import HomeButton from 'Modules/Antibiotics/components/HomeButton';
import { URINARY_TRACT_DRUG_INFO, URINARY_TRACT_TREATMENT_UNCOMPLICATED } from 'Modules/Antibiotics/navigation/routes';
import { NavigationProp } from '@react-navigation/native';
import { FIRST_LINE_CONF, SEVERE_ALLERGY_CONF } from './conf';

interface Props {
  navigation: NavigationProp<any>;
}

const TreatmentUncomplicated = React.memo(({navigation}: Props) => {
  const onDrugPress = (drugInfo: any) => {
    navigation.navigate(URINARY_TRACT_DRUG_INFO, {
      title: antibioticsText.urinaryTract.treatmentUncomplicated,
      drugConfig: drugInfo
    })
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.urinaryTract.treatmentUncomplicated}
    >
      <View style={styles.container}>
        <Text style={styles.smallGrayText}>{antibioticsText.shared.selectTreatment}</Text>
        <ExpandableSection
          title={antibioticsText.shared.firstLine}
          backgroundColor={mildAntibioticsColor}
          analyticsScreenName={URINARY_TRACT_TREATMENT_UNCOMPLICATED}
        >
          <TreatmentDisplay
            config={FIRST_LINE_CONF}
            onDrugPress={onDrugPress}
          />
        </ExpandableSection>
        <ExpandableSection
          title={antibioticsText.urinaryTract.severePenicillinAllergy}
          backgroundColor={strongAntibioticsColor}
          analyticsScreenName={URINARY_TRACT_TREATMENT_UNCOMPLICATED}
        >
          <TreatmentDisplay
            config={SEVERE_ALLERGY_CONF}
            onDrugPress={onDrugPress}
          />
        </ExpandableSection>
        <HomeButton />
      </View>
    </AntibioticsLayout>
  )
})

export default TreatmentUncomplicated;
