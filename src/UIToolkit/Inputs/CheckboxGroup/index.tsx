import { checkIc } from 'assets/img';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { buttonPressed } from 'UIToolkit/theme/styles';
import { SelectOption } from '../@types';
import styles from './styles';

interface Props {
  title?: string;
  values?: string[];
  options: SelectOption[];
  onChange: (values: string[]) => void;
  active?: any;
}

const CheckboxGroup = React.memo(({title, values, options, onChange, active}: Props) => {

  const onSelect = (value: string) => {
    if(!active) return;
    
    let newValues: string[] = [];
    if(values) {
      newValues = [...values]
    }
    if(values && values.includes(value)) {
      const index = values.findIndex((item) => item === value);
      newValues.splice(index, 1)
    } else {
      newValues.push(value);
    }
    onChange(newValues);
  }

  const renderContent = () => (
    <View style={styles.container}>
      {title !== undefined && <Text style={styles.title}>{title}</Text>}
      <View>
        {options.map(item => (
          <Pressable
            style={({pressed}) => [styles.optionContainer, pressed && buttonPressed]}
            key={item.value}
            onPress={() => onSelect(item.value)}
          >
            {values && values.includes(item.value) ? (
              <View style={styles.checkboxSelected}>
                <Image source={checkIc} style={styles.checkboxIndicator} />
              </View>
            ) : (
              <View style={styles.checkbox} />
            )}
            <Text style={styles.optionText}>{item.title}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  )

  return active ? renderContent() : (
    <Pressable style={styles.inactiveContainer} onPress={(e) => {e.stopPropagation()}}>
      {renderContent()}
    </Pressable>
  )
})

export default CheckboxGroup;
