import React from 'react';
import { View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import styles from '../../../styles';
import Card from 'UIToolkit/Card';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import CardNavigationButton from 'UIToolkit/CardNavigationButton';
import { INFECTIONS } from './conf';
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

const InfectionSelect = React.memo(({navigation}: Props) => {

  const onNav = (screen: string) => {
    navigation.navigate(screen);
  }

  return (
    <AntibioticsLayout>
      <View style={styles.container}>
        <Card title={antibioticsText.skinInfection.selectInfection}>
          {INFECTIONS.map(item => (
            <CardNavigationButton
              title={item.name}
              subtitle={item.description}
              key={item.key}
              onPress={() => onNav(item.key)}
            />
          ))}
        </Card>
      </View>
    </AntibioticsLayout>
  )
})

export default InfectionSelect;
