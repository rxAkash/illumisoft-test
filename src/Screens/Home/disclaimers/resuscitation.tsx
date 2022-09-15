import { useNavigation } from '@react-navigation/core';
import { TERMS_OF_USE_SCREEN } from 'Navigation/routes';
import React from 'react';
import { Linking, Text, View } from 'react-native';
import styles from './styles';

interface Props {
  onClose: () => void;
}

const ResuscitationDisclaimer = ({ onClose }: Props) => {
  const navigation = useNavigation();

  const openReferencesUrl = () => {
    Linking.openURL("https://www.childrensmercy.org/health-care-providers/providers/provider-resources/apps-for-providers/PedsGuide-app/peds-guide-references/")
  }

  const openTermsOfUse = () => {
    onClose();
    navigation.navigate(TERMS_OF_USE_SCREEN as never);
  }

  return (
    <View>
      <Text style={styles.text}>
        <Text style={styles.title}>RESUSCITATION DISCLAIMER</Text>
        {'\n\n'}
        <Text>
          This module is designed to provide health care professionals with clinical decision support and education
          regarding cardiovascular and respiratory conditions as well as burn assessment and acute burn management.
          This module is only intended for use with pediatric populations, and in acute/emergent care by trained health
          care providers and emergency medical services personnel.  This module does not replace medical training or
          clinical judgment.{' '}
          <Text onPress={openTermsOfUse} style={styles.link}>Terms of Use</Text>
        </Text>
        {'\n\n'}
        <Text style={styles.strong}>
          By confirming estimated values, you acknowledge entered information and the risk therein.
        </Text>
        {'\n\n'}
        <Text>
          All drug references and warnings are written in the context of supporting acute/emergent care. This module
          does not address drug interactions/incompatibilities, allergies, treatment of adverse drug reactions, or
          warnings beyond the acute setting.  Drug calculations are weight based.  Restrictions of use based on age
          are included. It assumes that medications are prepared by trained personnel using standard techniques. Acute
          black box and Institute for Safe Medication Practices (ISMP) are labeled as such within Drug Dosing.  It does
          not include warnings for continued, ongoing or chronic use.   Please refer to a publicly available drug catalog
          for full drug information. All clinical indications of medications in this module are supported by medical
          evidence, but some widely used clinical indications are considered “off-label” as they are not FDA reviewed{' '}
          <Text onPress={openReferencesUrl} style={styles.link}>References</Text>
        </Text>
        {'\n\n'}
        <Text>
          For the premature and neonatal population, preservative-free products are preferred, and use caution as drug
          dosing and adverse reactions may be different in this population.
        </Text>
        {'\n\n'}
        <Text>
          Please indicate you accept in order to proceed.
        </Text>
        {'\n\n'}
      </Text>
    </View>
  )
}

export default ResuscitationDisclaimer;
