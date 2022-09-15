import React from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { getTestProps } from '../../utils/test.id.creator';

interface Props {
  onPress: () => void;
  text: string;
  style?: any;
  icon?: ImageSourcePropType;
  disabled?: boolean;
  bigIcon?: boolean;
}

const FullWidthButton = React.memo(({onPress, text, style, icon, disabled, bigIcon}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.fullWidthButton, style, disabled && styles.disabled]}
      activeOpacity={0.6}
      onPress={onPress}
      disabled={disabled}
    >
      {icon && <Image source={icon} style={[styles.icon, styles.primaryIcon, bigIcon && styles.bigIcon]} />}
      <Text style={styles.fullWidthButtonText} { ...getTestProps(text) } >{text}</Text>
    </TouchableOpacity>
  )
})

export default FullWidthButton;
