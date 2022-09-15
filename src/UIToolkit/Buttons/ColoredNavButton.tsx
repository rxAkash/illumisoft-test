import { nextArrowIc } from 'assets/img';
import React from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { getTestProps } from '../../utils/test.id.creator';

interface Props {
  title: string;
  backgroundColor: string;
  style?: any;
  onPress: () => void;
  disabled?: boolean;
  icon?: ImageSourcePropType;
  center?: boolean;
}

const ColoredNavButton = React.memo(({
  title,
  backgroundColor,
  style,
  onPress,
  disabled,
  icon,
  center
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.coloredButton, 
        {backgroundColor},
        style,
        disabled ? styles.disabled : null
      ]}
      activeOpacity={0.6}
      onPress={onPress}
      disabled={disabled}
    >
      {center && <View />}
      <View style={styles.coloredTextContainer}>
        {icon && (<Image source={icon} style={styles.coloredIcon} />)}
        <Text style={styles.coloredButtonText} { ...getTestProps(title) } >{title}</Text>
      </View>
      <Image source={nextArrowIc} style={styles.arrow} />
    </TouchableOpacity>
  )
})

export default ColoredNavButton;
