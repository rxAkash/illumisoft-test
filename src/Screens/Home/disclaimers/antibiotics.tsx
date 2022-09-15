import { useNavigation } from '@react-navigation/core';
import { TERMS_OF_USE_SCREEN } from 'Navigation/routes';
import React from 'react';
import { Linking, Text, View } from 'react-native';
import styles from './styles';

interface Props {
  onClose: () => void;
}

const AntibioticsDisclaimer = ({ onClose }: Props) => {
  const navigation = useNavigation();

  return (
    <View>
    <Text style={styles.text}>
      <Text style={styles.title}>ANTIBIOTICS DISCLAIMER</Text>
      {'\n\n'}
      <Text>
        These guides are designed to direct initial antibiotic therapy for immunocompetent patients and
        should not replace clinical judgment. Antibiotic selection should be guided by clinical response and local
        susceptibilities. Definitive therapy should be tailored to available culture results when available. Seek expert consultation for immunocompromised patients.
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

export default AntibioticsDisclaimer;
