import { NavigationProp } from '@react-navigation/core';
import { asthmaText } from 'Modules/Asthma/config/strings';
import { INPATIENT_AGE_SELECT } from 'Modules/Asthma/navigation/routes';
import React from 'react';
import { View, ScrollView } from 'react-native';
import BulletList from 'UIToolkit/BulletList';
import Card from 'UIToolkit/Card';
import CardNavigationButton from 'UIToolkit/CardNavigationButton';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import { considerations, treatmentOptions } from './conf';
import styles from './styles';

interface Props {
  navigation: NavigationProp<any>;
}

const InpatientPathway = React.memo(({navigation}: Props) => {
  
  const onTreatmentPress = (item: any) => {
    navigation.navigate(INPATIENT_AGE_SELECT, {treatment: item.value, isInpatientPathway: true})
  }

  return (
    <ScrollView>
      <GoBackHeader border />
      <View style={styles.container}>
        <Card
          title={considerations.text}
          style={styles.card}
          collapsible
          hint={considerations.hint}
        >
          <BulletList items={considerations.subitems} numberRoot />
        </Card>
        <Card title={asthmaText.inpatientPath.selectTitle}>
          {treatmentOptions.map(item => (
            <CardNavigationButton
              key={item.value}
              title={item.text}
              onPress={() => onTreatmentPress(item)}
            />
          ))}
        </Card>
      </View>
    </ScrollView>
  )
})

export default InpatientPathway;
