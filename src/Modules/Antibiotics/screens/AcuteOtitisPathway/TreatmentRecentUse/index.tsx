import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import styles from '../../../styles';
import ExpandableSection from 'Modules/Antibiotics/components/ExpandableSection';
import { primaryColor, whiteColor } from 'UIToolkit/theme/colors';
import TreatmentDisplay from 'Modules/Antibiotics/components/TreatmentDisplay';
import { TREATMENT } from './conf';
import HomeButton from 'Modules/Antibiotics/components/HomeButton';
import { ACUTE_OTITIS_DRUG_DISPLAY, ACUTE_OTITIS_TREATMENT_RECENT_USE } from 'Modules/Antibiotics/navigation/routes';
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

const TreatmentRecentUse = React.memo(({navigation}: Props) => {

  const onDrugPress = (drug: any) => {
    navigation.navigate(ACUTE_OTITIS_DRUG_DISPLAY, {
      title: antibioticsText.acuteOtitis.treatmentRecentUse,
      drugConfig: drug
    })
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.acuteOtitis.treatmentRecentUse}
    >
      <View style={styles.container}>
        <Text style={styles.smallGrayText}>{antibioticsText.shared.selectTreatment}</Text>
        <ExpandableSection
          title={antibioticsText.shared.firstLine}
          backgroundColor={primaryColor}
          colorOverride={whiteColor}
          autoOpen
          analyticsScreenName={ACUTE_OTITIS_TREATMENT_RECENT_USE}
        >
          <TreatmentDisplay
            config={TREATMENT}
            onDrugPress={onDrugPress}
          />
        </ExpandableSection>
        <HomeButton />
      </View>
    </AntibioticsLayout>
  )
})

export default TreatmentRecentUse;
