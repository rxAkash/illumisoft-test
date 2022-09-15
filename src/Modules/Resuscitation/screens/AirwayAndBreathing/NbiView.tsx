import React from 'react';
import { Text } from 'react-native';
import BulletList from 'UIToolkit/BulletList';
import Card from 'UIToolkit/Card';
import SmallInfoSection from 'UIToolkit/SmallInfoSection';
import { STATIC_INFO } from './conf';
import styles from './styles';

interface Props {
  config: any;
}

const NbiView = React.memo(({config}: Props) => {
  return (
    <Card style={styles.card}>
      {config && config.content.map((item: any) => (
        <SmallInfoSection
          key={item.lable}
          lable={item.lable}
          text={item.text}
        />
      ))}
      {config && (
        <BulletList
          items={config.description.map((item: string) => ({text: item}))}
          style={styles.description}
        />
      )}
      <Text style={styles.subtitle}>{STATIC_INFO.title}</Text>
      {STATIC_INFO.content.map(item => (
        <SmallInfoSection
          key={item.lable}
          {...item}
        />
      ))}
    </Card>
  )
})

export default NbiView;
