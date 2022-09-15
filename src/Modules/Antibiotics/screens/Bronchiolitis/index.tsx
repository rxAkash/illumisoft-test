import React from 'react';
import { Text, View } from 'react-native';
import Card from 'UIToolkit/Card';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import styles from '../../styles';

const Bronchiolitis = React.memo(() => {
  return (
    <AntibioticsLayout title={antibioticsText.bronchiolitis.info}>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text style={[styles.text, styles.textSection]}>
            <Text style={styles.boldUnderlineTitle}>
              {antibioticsText.shared.definition}
            </Text>
            {antibioticsText.bronchiolitis.definition}
          </Text>
          <Text style={[styles.text, styles.textSection]}>
            <Text style={styles.boldUnderlineTitle}>
              {antibioticsText.shared.signsAndSymptoms}
            </Text>
            {antibioticsText.bronchiolitis.signsAndSymptoms}
          </Text>
          <Text style={[styles.text, styles.textSection]}>
            <Text style={styles.boldUnderlineTitle}>
              {antibioticsText.shared.testing}
            </Text>
            {antibioticsText.bronchiolitis.testing}
          </Text>
          <Text style={[styles.text, styles.textSection]}>
            <Text style={styles.boldUnderlineTitle}>
              {antibioticsText.shared.treatment}
            </Text>
            {antibioticsText.bronchiolitis.treatment}
          </Text>
        </Card>
      </View>
    </AntibioticsLayout>
  )
})

export default Bronchiolitis;
