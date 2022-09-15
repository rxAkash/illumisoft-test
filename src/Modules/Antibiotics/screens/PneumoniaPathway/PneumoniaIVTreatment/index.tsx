import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import ExpandableSection from 'Modules/Antibiotics/components/ExpandableSection';
import { primaryColor, whiteColor } from 'UIToolkit/theme/colors';
import TreatmentDisplay from 'Modules/Antibiotics/components/TreatmentDisplay';
import HomeButton from 'Modules/Antibiotics/components/HomeButton';
import { NavigationProp } from '@react-navigation/native';
import { PNEUMONIA_DRUG_DISPLAY, PNEUMONIA_IV_TREATMENT } from 'Modules/Antibiotics/navigation/routes';
import styles from '../../../styles';
import { IV_TREATMENT } from './conf';

interface Props {
  navigation: NavigationProp<any>;
}

const PneumoniaIVTreatment = React.memo(({navigation}: Props) => {
  const onDrugPress = (drug: any) => {
    navigation.navigate(PNEUMONIA_DRUG_DISPLAY, {
      title: antibioticsText.pneumonia.ivTreatment,
      drugConfig: drug
    })
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.pneumonia.ivTreatment}
    >
      <View style={styles.container}>
        <Text style={styles.smallGrayText}>{antibioticsText.shared.selectTreatment}</Text>
        <ExpandableSection
          title={antibioticsText.shared.firstLine}
          backgroundColor={primaryColor}
          colorOverride={whiteColor}
          autoOpen
          analyticsScreenName={PNEUMONIA_IV_TREATMENT}
        >
          <TreatmentDisplay
            config={IV_TREATMENT}
            onDrugPress={onDrugPress}
          />
        </ExpandableSection>
        <HomeButton />
      </View>
    </AntibioticsLayout>
  )
})

export default PneumoniaIVTreatment;
