import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface Props {
  lable: string | Element;
  text: string;
}

const SmallInfoSection = React.memo(({lable, text}: Props) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionLabel}>{lable}</Text>
      {text !== '' && <Text style={styles.sectionText}>{text}</Text>}
    </View>
  )
})

export default SmallInfoSection;
