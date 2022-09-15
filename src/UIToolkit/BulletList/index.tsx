import React from 'react';
import { StyleProp, Text, TextStyle, View } from 'react-native';
import styles from './styles';

interface BulletListItem {
  text: string | Element;
  subitems?: BulletListItem[];
}

interface Props {
  items: BulletListItem[];
  numberRoot?: boolean;
  style?: any;
  largeText?: boolean;
  lightText?: boolean;
}

const BulletList = React.memo(({items, numberRoot, style, largeText, lightText}: Props) => {
  const textStyle = {
    ...styles.text,
    fontSize: largeText ? 16 : 14,
    fontWeight: lightText ? '300' : '400'
  } as StyleProp<TextStyle>

  return (
    <View style={style}>
      {items.map((item, index) => (
        <View key={index.toString()}>
          <View style={styles.textContainer}>
            {numberRoot ? (
              <Text style={styles.number}>{index + 1}. </Text>
            ) : (
              <Text style={styles.bullet}>•</Text>
            )}
            <Text style={textStyle}>{item.text}</Text>
          </View>
          {item.subitems && item.subitems.map((subitem, index) => (
            <View key={index.toString()} >
              <View style={styles.subtextContainer}>
                <Text style={styles.emptyBullet}>○</Text>
                <Text style={textStyle}>{subitem.text}</Text>
              </View>
              {subitem.subitems && subitem.subitems.map((subsubitem, index) => (
                <View key={index.toString()} style={styles.subSubtextContainer}>
                  <Text style={styles.emptyBullet}>■</Text>
                  <Text style={textStyle}>{subsubitem.text}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      ))}
    </View>
    
  )
})

export default BulletList