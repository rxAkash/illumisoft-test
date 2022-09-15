import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import styles from './styles';
import { getTestProps } from '../../utils/test.id.creator';

interface Props {
  icon: ImageSourcePropType;
  title: string;
}

const ModuleLogo = React.memo(({icon, title}: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={icon}
        style={styles.image}
      />
      <Text style={styles.title} { ...getTestProps('module_logo_txt') } >{title}</Text>
    </View>
  )
})

export default ModuleLogo;
