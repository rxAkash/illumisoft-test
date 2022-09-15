import React from 'react';
import { ScrollView, View } from 'react-native';
import Card from 'UIToolkit/Card';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import { smokeScreeningConf } from './conf';
import Section from './Section';
import styles from './styles';

const SmokingScreening = React.memo(() => {
  return (
    <ScrollView>
      <GoBackHeader border />
      <View style={styles.container}>
        {smokeScreeningConf.map((item, index) => (
          <Card key={index.toString()}>
            <Section {...item}/>
          </Card>
        ))}
      </View>
    </ScrollView>
  )
})

export default SmokingScreening;
