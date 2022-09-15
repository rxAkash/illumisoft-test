import React from 'react';
import { Linking, Text, View } from 'react-native';
import styles from './styles';

const AshtmaDisclaimer = () => {

  const openGINAUrl = () => {
    Linking.openURL("https://ginasthma.org/")
  }

  const openNHLBIUrl = () => {
    Linking.openURL("https://www.nhlbi.nih.gov/health-topics/guidelines-for-diagnosis-management-of-asthma")
  }
  
  return (
    <View>
      <Text style={styles.text}>
        <Text style={styles.title}>Disclaimer</Text>
        {'\n\n'}
        <Text>
          The following resource is provided for reference purposes only to assist in the care of children with asthma ages 2 years and above. The evidence base for acute asthma care continually evolves. Below are key references from which the content of various treatment pathways have been derived:{' '}
          <Text style={styles.link} onPress={openGINAUrl}>GINA</Text> and <Text style={styles.link} onPress={openNHLBIUrl}>NHLBI EPR-3</Text>
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

export default AshtmaDisclaimer;
