import { downArrowIc } from 'assets/img';
import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { buttonPressed } from 'UIToolkit/theme/styles';
import { SelectOption } from '../@types';
import styles from './styles';

interface Props {
  options: SelectOption[];
  placeholder: string;
  onChange: (option: SelectOption) => void;
  selected?: SelectOption;
}

const InlineSelect = React.memo(({placeholder, options, onChange, selected}: Props) => {
  const [opened, setOpened] = useState(false);

  const onSelect = (item: SelectOption) => {
    setOpened(false);
    onChange(item)
  }

  const onOpen = () => {
    setOpened(true);
  }

  return (
    <View style={styles.container}>
      {opened ? (
        <>
          {options.map(item => (
            <Pressable
              style={({pressed}) => [styles.button, pressed && buttonPressed]}
              onPress={() => onSelect(item)}
              key={item.value}
            >
              <Text style={styles.text}>{item.title}</Text>
            </Pressable>
          ))}
        </>
      ) : (
        <Pressable
          style={({pressed}) => [styles.button, pressed && buttonPressed]}
          onPress={onOpen}
        >
          <Text style={styles.text}>{selected ? selected.title : placeholder}</Text>
          <Image source={downArrowIc} style={styles.arrow} />
        </Pressable>
      )}
      
    </View>
  )
})

export default InlineSelect;
