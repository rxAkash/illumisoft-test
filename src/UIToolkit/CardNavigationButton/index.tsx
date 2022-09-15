import { nextArrowIc } from 'assets/img';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './styles';

interface Props {
  title: string | Element;
  subtitle?: string;
  onPress: () => void;
}

const CardNavigationButton = React.memo(({title, subtitle, onPress}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.container,
        pressed && styles.buttonPressed
      ]}
    >
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      <Image
        style={styles.icon}
        source={nextArrowIc}
      />
    </Pressable>
  )
})

export default CardNavigationButton;
