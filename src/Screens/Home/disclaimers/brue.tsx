import { useNavigation } from '@react-navigation/native';
import { TERMS_OF_USE_SCREEN } from 'Navigation/routes';
import React from 'react';
import { Linking, Text, View } from 'react-native';
import styles from './styles';

interface Props {
  onClose: () => void;
}

const BrueDisclaimer = ({onClose}: Props) => {
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
        <Text style={styles.title}>BRUE DISCLAIMER</Text>
        {'\n\n'}
        <Text>
          The following resource is intended to provide health care professionals with clinical decision support and education 
          for reference purposes only in the care of children who may have experienced a Brief Resolved Unexplained Event (BRUE). 
          This resource is only intended for use with pediatric populations, and in acute/emergent care by trained health care providers. 
          This resource does not replace medical training or clinical judgement. <Text onPress={openTermsOfUse} style={styles.link}>Terms of Use</Text>
        </Text>
        {'\n\n'}
        <Text>
          The evidence base for BRUE evaluation continually evolves. See the references page for further evidence-based information. <Text onPress={openReferencesUrl} style={styles.link}>References</Text>
        </Text>
        {'\n\n'}
        <Text style={styles.strong}>
          Nothing contained in the content is intended to constitute professional advice for medical diagnosis or treatment.
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

export default BrueDisclaimer;
