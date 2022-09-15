import React from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { getTestProps } from '../../utils/test.id.creator';

interface Props {
  text: string;
  onPress: () => void;
  style?: any;
  icon?: ImageSourcePropType;
}

const HollowButton = React.memo(({text, onPress, style, icon}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.hollowButton, style]}
    >
      {icon && <Image source={icon} style={[styles.icon, styles.hollowIcon]} />}
      <Text style={styles.hollowButtonText} { ...getTestProps(text) } >{text}</Text>
    </TouchableOpacity>
  )
})

export default HollowButton;
