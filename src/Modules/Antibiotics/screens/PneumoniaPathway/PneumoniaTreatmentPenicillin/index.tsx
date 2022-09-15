import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import styles from '../../../styles';
import TreatmentDisplay from 'Modules/Antibiotics/components/TreatmentDisplay';
import ExpandableSection from 'Modules/Antibiotics/components/ExpandableSection';
import { mildAntibioticsColor, strongAntibioticsColor } from 'UIToolkit/theme/colors';
import { PNEUMONIA_DRUG_DISPLAY, PNEUMONIA_TREATMENT_PENICILLIN } from 'Modules/Antibiotics/navigation/routes';
import { NavigationProp } from '@react-navigation/native';
import HomeButton from 'Modules/Antibiotics/components/HomeButton';
import { MILD_EFFUSION_TEATMENT, MILD_TREATMENT, SEVERE_EFFUSION_TREATMENT, SEVERE_TREATMENT } from './conf';

interface Props {
  navigation: NavigationProp<any>;
  route: {
    params?: {
      effusion?: boolean;
    }
  }
}

const PneumoniaTreatmentPenicillin = React.memo(({navigation, route}: Props) => {
  const onDrugPress = (drugInfo: any) => {
    navigation.navigate(PNEUMONIA_DRUG_DISPLAY, {
      title: antibioticsText.pneumonia.treatmentPenicillin,
      drugConfig: drugInfo
    })
  }

  return (
    <AntibioticsLayout
      title={antibioticsText.pneumonia.treatmentPenicillin}
    >
      <View style={styles.container}>
        <Text style={styles.smallGrayText}>{antibioticsText.shared.selectTreatment}</Text>
        <ExpandableSection
          title={antibioticsText.acuteOtitis.mildModeratePenicillinAllergy}
          backgroundColor={mildAntibioticsColor}
          analyticsScreenName={PNEUMONIA_TREATMENT_PENICILLIN}
        >
          <TreatmentDisplay
            config={route.params?.effusion ? MILD_EFFUSION_TEATMENT : MILD_TREATMENT}
            onDrugPress={onDrugPress}
          />
        </ExpandableSection>
        <ExpandableSection
          title={antibioticsText.pneumonia.severePenicillinAllergy}
          backgroundColor={strongAntibioticsColor}
          analyticsScreenName={PNEUMONIA_TREATMENT_PENICILLIN}
        >
          <TreatmentDisplay
            config={route.params?.effusion ? SEVERE_EFFUSION_TREATMENT : SEVERE_TREATMENT}
            onDrugPress={onDrugPress}
          />
        </ExpandableSection>
        <HomeButton />
      </View>
    </AntibioticsLayout>
  )
})

export default PneumoniaTreatmentPenicillin;
