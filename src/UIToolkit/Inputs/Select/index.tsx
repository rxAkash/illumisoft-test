import { downArrowIc } from 'assets/img';
import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { SelectOption } from '../@types';
import OptionsModal from './OptionsModal';
import styles from './styles';

interface Props {
  label: string;
  placeholder: string;
  options: SelectOption[];
  onOptionPress: (item: SelectOption) => void;
  value?: string;
  style?: any;
}

const Select = React.memo(({
  label,
  placeholder,
  options,
  onOptionPress,
  value,
  style
}: Props) => {
  const [showOptions, setShowOptions] = useState(false);

  const onShowOptions = () => {
    setShowOptions(true);
  }

  const onHideOptions = () => {
    setShowOptions(false);
  }

  const onOption = (item: SelectOption) => {
    setShowOptions(false);
    onOptionPress(item);
  }

  return (
    <View style={style}>
      <Text style={styles.label}>{label}</Text>
      <Pressable style={styles.select} onPress={onShowOptions}>
        {!value && <Text style={styles.placeholder}>{placeholder}</Text>}
        {value && <Text style={styles.value}>{value}</Text>}
        <Image source={downArrowIc} style={styles.icon} />
      </Pressable>
      <OptionsModal
        onDismiss={onHideOptions}
        visible={showOptions}
        title={label}
        options={options}
        onOptionPress={onOption}
      />
    </View>
  )
})

export default Select;