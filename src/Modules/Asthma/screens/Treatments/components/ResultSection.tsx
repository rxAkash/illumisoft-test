import { downArrowIc } from 'assets/img';
import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import BulletList from 'UIToolkit/BulletList';
import styles from './styles';

interface Props {
  item: any;
}

const ResultSection = React.memo(({item}: Props) => {
  const [collapsed, setCollapsed] = useState(item.collapsible ? true : false)

  return (
    <View style={styles.section}>
      <Pressable
        onPress={() => setCollapsed(!collapsed)}
        hitSlop={10}
        style={styles.headerRow}
        disabled={!item.collapsible}
      >
        <Text style={styles.sectionTitle}>{item.item}</Text>
        {item.collapsible && (
          <Image source={downArrowIc} style={collapsed ? styles.icDown : styles.icUp } />
        )}
      </Pressable>
      {!collapsed && (
        <View style={styles.collapsibleSection}>
          {item.subText && <Text style={styles.subtext}>{item.subText}</Text>}
          <BulletList
            items={item.list}
          />
        </View>
      )}
    </View>
  )
})

export default ResultSection;
