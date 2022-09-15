import { NavigationProp } from '@react-navigation/core';
import { asthmaText } from 'Modules/Asthma/config/strings';
import { ED_AGE_SELECT } from 'Modules/Asthma/navigation/routes';
import React from 'react';
import { ScrollView, View } from 'react-native';
import BulletList from 'UIToolkit/BulletList';
import Card from 'UIToolkit/Card';
import CardNavigationButton from 'UIToolkit/CardNavigationButton';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import { SelectOption } from 'UIToolkit/Inputs/@types';
import { considerations, ED_HOUR_SELECTION } from './conf';
import styles from './styles';

interface Props {
  navigation: NavigationProp<any>;
}

const EmergencyDepartment = React.memo(({navigation}: Props) => {

  const onSelectOption = (item: SelectOption) => {
    navigation.navigate(ED_AGE_SELECT, {hourSelected: item});
  }

  return (
    <ScrollView>
      <GoBackHeader border />
      <View style={styles.container}>
        <Card title={asthmaText.edPathway.considerations} style={styles.card}>
          <BulletList items={considerations} />
        </Card>
        <Card title={ED_HOUR_SELECTION.title}>
          {ED_HOUR_SELECTION.options.map(item => (
            <CardNavigationButton
              key={item.value}
              title={item.title}
              onPress={() => onSelectOption(item)}
            />
          ))}
        </Card>
      </View>
    </ScrollView>
  )
})

export default EmergencyDepartment;
