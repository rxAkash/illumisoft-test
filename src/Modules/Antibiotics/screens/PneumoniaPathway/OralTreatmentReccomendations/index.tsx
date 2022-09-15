import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import styles from '../../../styles';
import ExpandableSection from 'Modules/Antibiotics/components/ExpandableSection';
import { primaryColor, whiteColor } from 'UIToolkit/theme/colors';
import TreatmentDisplay from 'Modules/Antibiotics/components/TreatmentDisplay';
import HomeButton from 'Modules/Antibiotics/components/HomeButton';
import { ORAL_TREATMENT_CONF } from './conf';
import { NavigationProp } from '@react-navigation/native';
import { PNEUMONIA_DRUG_DISPLAY, PNEUMONIA_ORAL_TREATMENT } from 'Modules/Antibiotics/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const OralTreatmentReccomendations = React.memo(({navigation}: Props) => {
  const onDrugPress = (drug: any) => {
    navigation.navigate(PNEUMONIA_DRUG_DISPLAY, {
      title: antibioticsText.pneumonia.oralTreatment,
      drugConfig: drug
    })
  }
  
  return (
    <AntibioticsLayout
      title={antibioticsText.pneumonia.oralTreatment}
    >
      <View style={styles.container}>
        <Text style={styles.smallGrayText}>{antibioticsText.shared.selectTreatment}</Text>
        <ExpandableSection
          title={antibioticsText.shared.firstLine}
          backgroundColor={primaryColor}
          colorOverride={whiteColor}
          autoOpen
          analyticsScreenName={PNEUMONIA_ORAL_TREATMENT}
        >
          <TreatmentDisplay
            config={ORAL_TREATMENT_CONF}
            onDrugPress={onDrugPress}
          />
        </ExpandableSection>
        <HomeButton />
      </View>
    </AntibioticsLayout>
  )
})

export default OralTreatmentReccomendations;
