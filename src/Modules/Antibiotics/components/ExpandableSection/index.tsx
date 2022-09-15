/* eslint-disable @typescript-eslint/ban-ts-comment */
import { reportDrawerToggled } from 'analytics';
import { downArrowIc } from 'assets/img';
import React, { useState } from 'react';
import { Image, LayoutAnimation, Pressable, Text, View } from 'react-native';
import styles from './styles';

interface Props {
  title: string;
  backgroundColor: string;
  children: React.ReactElement;
  colorOverride?: string;
  autoOpen?: boolean;
  analyticsScreenName: string;
}

const ExpandableSection = React.memo(({title, backgroundColor, children, colorOverride, autoOpen, analyticsScreenName}: Props) => {
  const [expanded, setExpanded] = useState(autoOpen ? true : false);
  
  const onPress = async () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const newExpanded = !expanded;
    setExpanded(newExpanded)
    await reportDrawerToggled(analyticsScreenName, {
      'Drawer Name': title,
      'Drawer Status': newExpanded ? 'Opened' : 'Closed'
    })
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.header, {backgroundColor}, expanded && styles.headerExpanded]}
        onPress={onPress}
      >
        {/*@ts-ignore*/}
        <Text style={[styles.title, colorOverride && {color: colorOverride}]}>{title}</Text>
        <Image
          source={downArrowIc}
          style={[
            styles.arrow,
            expanded && {transform: [{rotate: '180deg'}]},
            //@ts-ignore
            colorOverride && {tintColor: colorOverride}
          ]}
        />
      </Pressable>
      {expanded && (
        <View style={styles.content}>
          {children}
        </View>
      )}
    </View>
  )
})

export default ExpandableSection;
