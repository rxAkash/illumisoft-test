import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import styles from './styles';

interface Props {
  icon: ImageSourcePropType;
  title: string;
  text: string;
}

const AboutSection = React.memo(({icon, title, text}: Props) => {
  return (
    <View>
      <View style={styles.sectionTitleContainer}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      <Text style={styles.sectionText}>{text}</Text>
    </View>
  )
})

export default AboutSection;
