import React from 'react';
import { Text, View } from 'react-native';
import Card from 'UIToolkit/Card';
import CardNavigationButton from 'UIToolkit/CardNavigationButton';
import { SelectOption } from '../@types';
import styles from './styles';

interface Props {
  title: string;
  options: SelectOption[];
  onOptionSelected: (option: SelectOption) => void;
}

const CardsSelect = React.memo(({title, options, onOptionSelected}: Props) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {options.map(item => (
        <Card key={item.value}>
          <CardNavigationButton
            title={item.title}
            onPress={() => onOptionSelected(item)}
          />
        </Card>
      ))}
    </View>
  )
})

export default CardsSelect;
