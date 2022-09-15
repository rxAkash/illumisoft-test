import { downArrowIc } from 'assets/img';
import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { buttonPressed } from 'UIToolkit/theme/styles';
import styles from './styles';

interface Props {
  title?: string;
  children?: JSX.Element | JSX.Element[];
  style?: any;
  onPress?: () => void;
  collapsible?: boolean;
  hint?: string;
  blackTitle?: boolean
}

const Card = React.memo(({title, children, style, onPress, collapsible, hint, blackTitle}: Props) => {
  const [collapsed, setCollapsed] = useState(collapsible);

  return (
    <Pressable
      disabled={!onPress}
      style={({pressed}) => [styles.container, style, pressed && buttonPressed]}
      onPress={onPress}
    >
      {collapsible ? (
        <View style={styles.collapsibleHeader}>
          <Pressable style={styles.collapsibleTitle} onPress={() => setCollapsed(!collapsed)}>
            <Text style={[styles.titleWhenCollapsible, blackTitle && styles.blackTitle]}>{title}</Text>
            <Image source={downArrowIc} style={[styles.collapseIcon, !collapsed && styles.iconCollapsed]} />
          </Pressable>
          {collapsed && hint && <Text style={styles.hint}>{hint}</Text>}
        </View>
      ) : title ? (
        <Text style={[styles.title, blackTitle && styles.blackTitle]}>
          {title}
        </Text>
      ) : null}
      {!collapsed && (
        <View>
          {children}
        </View>
      )}
    </Pressable>
  )
})

export default Card;
