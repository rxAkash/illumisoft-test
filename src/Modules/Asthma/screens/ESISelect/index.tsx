import { NavigationProp } from '@react-navigation/core';
import { asthmaText } from 'Modules/Asthma/config/strings';
import { ED_ESI_CALCULATOR, ED_TREATMENTS } from 'Modules/Asthma/navigation/routes';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Card from 'UIToolkit/Card';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import { SelectOption } from 'UIToolkit/Inputs/@types';
import { ESI_OPTIONS } from './conf';
import styles from './styles';

interface Props {
  navigation: NavigationProp<any>;
  route: {
    params: {
      age: SelectOption;
      hourSelected: SelectOption;
    }
  },
}

const ESISelect = React.memo(({navigation, route}: Props) => {

  const onSelect = (value: string) => {
    const {hourSelected} = route.params;
    navigation.navigate(ED_TREATMENTS, {esiScore: value, hourSelected})
  }

  const onCalculatePress = () => {
    const {hourSelected} = route.params;
    navigation.navigate(ED_ESI_CALCULATOR, {age: route.params.age, hourSelected})
  }

  return (
    <ScrollView>
      <GoBackHeader border />
      <View style={styles.container}>
        <Text style={[styles.title, styles.topGap]}>
          {asthmaText.esiSelect.title}
        </Text>
        <View style={styles.optionsContainer}>
          {ESI_OPTIONS.map(item => (
            <Card
              style={styles.optionButton}
              key={item.value}
              onPress={() => onSelect(item.value)}
            >
              <Text style={styles.optionText}>{item.text}</Text>
            </Card>
          ))}
        </View>
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.divider} />
        </View>
        <Text style={styles.title}>{asthmaText.esiSelect.dontHaveEsi}</Text>
        <Card style={styles.selectButton} onPress={onCalculatePress}>
          <Text style={styles.selectText}>{asthmaText.esiSelect.calculateScore}</Text>
        </Card>
      </View>
    </ScrollView>
  )
})

export default ESISelect;
