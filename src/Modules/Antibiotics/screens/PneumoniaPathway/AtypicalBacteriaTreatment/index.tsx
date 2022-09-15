import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import styles from '../../../styles';
import ExpandableSection from 'Modules/Antibiotics/components/ExpandableSection';
import { primaryColor, whiteColor } from 'UIToolkit/theme/colors';
import TreatmentDisplay from 'Modules/Antibiotics/components/TreatmentDisplay';
import { PNEUMONIA_ATYPICAL_BACTERIA_TREATMENT, PNEUMONIA_DRUG_DISPLAY } from 'Modules/Antibiotics/navigation/routes';
import { NavigationProp } from '@react-navigation/native';
import HomeButton from 'Modules/Antibiotics/components/HomeButton';
import { ATYPICAL_TREATMENT } from './conf';

interface Props {
  navigation: NavigationProp<any>;
}

const AtypicalBacteriaTreatment = React.memo(({navigation}: Props) => {
  const onDrugPress = (drug: any) => {
    navigation.navigate(PNEUMONIA_DRUG_DISPLAY, {
      title: antibioticsText.pneumonia.atypicalBacteriaTreatment,
      drugConfig: drug
    })
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.pneumonia.atypicalBacteriaTreatment}
    >
      <View style={styles.container}>
        <Text style={styles.smallGrayText}>{antibioticsText.shared.selectTreatment}</Text>
        <ExpandableSection
          title={antibioticsText.shared.firstLine}
          backgroundColor={primaryColor}
          colorOverride={whiteColor}
          autoOpen
          analyticsScreenName={PNEUMONIA_ATYPICAL_BACTERIA_TREATMENT}
        >
          <TreatmentDisplay
            config={ATYPICAL_TREATMENT}
            onDrugPress={onDrugPress}
          />
        </ExpandableSection>
        <HomeButton />
      </View>
    </AntibioticsLayout>
  )
})

export default AtypicalBacteriaTreatment;
