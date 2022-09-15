import { downArrowIc } from 'assets/img';
import { NA_VALUE } from 'Modules/Resuscitation/config/drugConfig';
import React, { useState } from 'react';
import { Image, LayoutAnimation, Pressable, Text, View } from 'react-native';
import { buttonPressed } from 'UIToolkit/theme/styles';
import styles from './styles';

interface Props {
  indication: string;
  children: any;
}

const DrugIndicationItem = React.memo(({indication, children}: Props) => {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.easeInEaseOut();
    setExpand(!expand);
  }

  return indication !== NA_VALUE ? (
    <View>
      <Pressable
        style={({pressed}) => [styles.container, pressed && buttonPressed]}
        onPress={toggleExpand}
      >
        <Image source={downArrowIc} style={[styles.arrow, expand && styles.iconActive]} />
        <Text style={styles.text}>{indication}</Text>
      </Pressable>
      {expand && children}
    </View>
  ) : children
})

export default DrugIndicationItem;
