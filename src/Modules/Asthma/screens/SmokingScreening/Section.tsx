import React from 'react';
import { Image, ImageSourcePropType, Linking, Text, View } from 'react-native';
import styles from './styles';

interface Option {
  text: string;
  link?: string;
}

interface Props {
  icon: ImageSourcePropType;
  title: string;
  options: Option[];
}

const Section = React.memo(({icon, title, options}: Props) => {

  const onLinkPress = (link?: string) => {
    if(link) {
      Linking.openURL(link);
    } 
  }

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.headerContainer}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        {options.map(item => (
          <View key={item.text} style={styles.textContainer}>
            <Text style={styles.bullet}>•</Text>
            <Text
              style={[styles.text, item.link ? styles.link : null]}
              onPress={item.link ? () => onLinkPress(item.link) : undefined}
            >
              {item.text}
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
})

export default Section;
