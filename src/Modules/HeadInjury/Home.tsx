import { NavigationProp } from '@react-navigation/core';
import { trachIC } from 'assets/img';
import React from 'react';
import { ScrollView, View } from 'react-native';
import Card from 'UIToolkit/Card';
import CardNavigationButton from 'UIToolkit/CardNavigationButton';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import ModuleLogo from 'UIToolkit/ModuleLogo';
import { pathWays } from './conf';
import { headInjuryText } from './config/strings';

import styles from "./styles";

interface Props {
  navigation: NavigationProp<any>;
}

const HeadInjury = React.memo(({ navigation }: Props) => {
  const onNavPress = (screen: string) => {
    navigation.navigate(screen);
  };

  return(
    <ScrollView>
      <GoBackHeader />
      <View style={styles.container}>
        <ModuleLogo
          icon={trachIC}
          title={headInjuryText.home.title}
        />
        <Card
          title={headInjuryText.home.heading1}
        >
          {pathWays.map((value,i)=> (
            <CardNavigationButton
              key={i}
              title={value.title}
              onPress={() => onNavPress(value.route)}
            />
          ))}
        </Card>
      </View>
    </ScrollView>
  )
})

export default HeadInjury;
