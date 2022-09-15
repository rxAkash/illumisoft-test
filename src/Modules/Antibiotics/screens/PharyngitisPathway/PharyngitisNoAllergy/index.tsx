import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import styles from '../../../styles';
import ExpandableSection from 'Modules/Antibiotics/components/ExpandableSection';
import TreatmentDisplay from 'Modules/Antibiotics/components/TreatmentDisplay';
import { primaryColor, whiteColor } from 'UIToolkit/theme/colors';
import HomeButton from 'Modules/Antibiotics/components/HomeButton';
import { PHARYNGITIS_DRUG_DISPLAY, PHARYNGITIS_NO_ALLERGY } from 'Modules/Antibiotics/navigation/routes';
import { NavigationProp } from '@react-navigation/native';
import { TREATMENT_NO_ALLERGY_CONF } from './conf';

interface Props {
  navigation: NavigationProp<any>;
}

const PharyngitisNoAllergy = React.memo(({navigation}: Props) => {
  const onDrugPress = (drug: any) => {
    navigation.navigate(PHARYNGITIS_DRUG_DISPLAY, {
      title: antibioticsText.pharyngitis.noAllergy,
      drugConfig: drug
    })
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.pharyngitis.noAllergy}
    >
      <View style={styles.container}>
        <Text style={styles.smallGrayText}>{antibioticsText.shared.selectTreatment}</Text>
        <ExpandableSection
          title={antibioticsText.shared.firstLine}
          backgroundColor={primaryColor}
          colorOverride={whiteColor}
          autoOpen
          analyticsScreenName={PHARYNGITIS_NO_ALLERGY}
        >
          <TreatmentDisplay
            config={TREATMENT_NO_ALLERGY_CONF}
            onDrugPress={onDrugPress}
          />
        </ExpandableSection>
        <HomeButton />
      </View>
    </AntibioticsLayout>
  )
})

export default PharyngitisNoAllergy;
