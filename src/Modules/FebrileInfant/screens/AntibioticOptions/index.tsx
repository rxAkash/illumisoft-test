import React from 'react';
import AntibioticDisplay from 'Modules/FebrileInfant/components/AntibioticDisplay';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import { Text, View } from 'react-native';
import styles from '../../styles';
import { ANTIBIOTICS } from './config';

const AntibioticOptions = React.memo(() => {
  return (
    <View style={{flex: 1}}>
      <Text style={styles.titleText}>{febrileText.antibioticOptions.title}</Text>
      <Text style={styles.regularText}>{febrileText.antibioticOptions.infoTitle}</Text>
      {ANTIBIOTICS.map(item => (
        <AntibioticDisplay item={item} key={item.code} />
      ))}
      <Text style={[styles.regularText, {marginTop: 12}]}>{febrileText.antibioticOptions.note}</Text>
    </View>
  )
})

export default AntibioticOptions;
