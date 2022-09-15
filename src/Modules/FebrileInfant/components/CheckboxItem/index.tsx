import { checkboxCheckedIc, checkboxUncheckedIc } from 'assets/img/febrileInfant';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './styles';

interface Props {
  item: {
    id: number,
    question: string,
    ga: string
  };
  checked: boolean;
  onCheck: (item: any) => void;
}

const CheckboxItem = React.memo(({item, checked, onCheck}: Props) => {
  
  return (
    <View style={styles.container}>
      <Text style={[styles.text, checked && styles.textChecked]}>{item.question}</Text>
      <Pressable onPress={() => onCheck(item)}>
        <Image source={checked ? checkboxCheckedIc : checkboxUncheckedIc}/>
      </Pressable>
    </View>
  )
})

export default CheckboxItem;
