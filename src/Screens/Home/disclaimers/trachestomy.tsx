import { useNavigation } from '@react-navigation/native';
import { TERMS_OF_USE_SCREEN } from 'Navigation/routes';
import React from 'react';
import { Linking, Text, View } from 'react-native';
import styles from './styles';

interface Props {
  onClose: () => void;
}

const TrachDisclaimer = React.memo(({onClose}: Props) => {
  const navigation = useNavigation();
  
  const openTermsOfUse = () => {
    onClose();
    navigation.navigate(TERMS_OF_USE_SCREEN as never);
  }

  const openReferencesUrl = () => {
    Linking.openURL("https://www.childrensmercy.org/health-care-providers/providers/provider-resources/apps-for-providers/PedsGuide-app/peds-guide-references/")
  }

  return (
    <View>
      <Text style={styles.text}>
        <Text style={styles.title}>DKA DISCLAIMER</Text>
        {'\n\n'}
        The following resource is provided for reference purposes only, and provides clinical decision support and education regarding initial
        therapy in known and new-onset diagnoses of diabetes and diabetic ketoacidosis. This resource is only intended for use with pediatric
        populations, and in acute/emergent care by trained health care providers. This module is <Text style={styles.strong}>not</Text> intended for use in children {'<'} 2 years
        old or those who weigh less than 10 kilograms (kg). This information does not replace medical training or clinical judgement.
        <Text onPress={openTermsOfUse} style={styles.link}>Terms of Use</Text>
        {'\n\n'}
        <Text style={styles.strong}>This module relies on the information you enter into this module (e.g., weight, age range, etc.)</Text>{' '}
        in order to derive fluids and insulin dosing decision support.
        {'\n\n'}
        <Text style={styles.strong}>This routine insulin dosing module is programmed to round to the nearest 0.5 unit. Use caution for suggested doses of 0.0 units. </Text>
        Recommend consultation with pediatric pharmacists and/or pediatric endocrinologists for further guidance.
        The evidence base for management of diabetes and diabetic ketoacidosis continually evolves.  See the reference pages for further evidence-based information.{' '}
        <Text onPress={openReferencesUrl} style={styles.link}>References</Text> At your discretion, consult with a Pediatric Endocrinologist for ongoing management.
        {'\n\n'}
        <Text style={styles.strong}>Nothing contained in this content is intended to constitute professional advice for medical diagnosis or treatment.</Text>
        {'\n\n'}
        Please indicate that you accept in order to proceed.
        {'\n\n'}
      </Text>
    </View>
  )
})

export default TrachDisclaimer;
