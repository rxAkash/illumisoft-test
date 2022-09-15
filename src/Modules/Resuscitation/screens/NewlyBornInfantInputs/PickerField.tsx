import { KG } from 'Modules/Resuscitation/config/sharedConf';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { SelectOption } from 'UIToolkit/Inputs/@types';
import WheelPicker from 'UIToolkit/Inputs/WheelPicker';
import { getConvertedWeightValue } from 'utils/weightConverter';
import styles from './styles';

interface Props {
  placeholder: string;
  options: SelectOption[];
  secondaryOptions: SelectOption[];
  onChange: (item?: string, secItem?: string) => void;
  value?: string;
  displayValue?: string;
  measure?: string;
  convert?: boolean;
}

const PickerField = React.memo(({
  placeholder,
  options,
  onChange,
  value,
  measure,
  convert,
  secondaryOptions
}: Props) => {
  const [showModal, setShowModal] = useState(false);

  const onShow = () => {
    setShowModal(true);
  }

  const onHide = () => {
    setShowModal(false);
  }

  const onSubmit = (value?: string) => {
    onHide();
    onChange(value);
  }

  return (
    <>
      <Pressable
        style={styles.input}
        onPress={onShow}
      >
        {value ? (
          <Text style={styles.value}>
            {options.find(item => item.value === value)?.title}
            {convert && (<Text style={styles.convertedText}> {getConvertedWeightValue(KG, value)}</Text>)}
          </Text>
        ): (
          <Text style={styles.placeholder}>{placeholder}</Text>
        )}
        {measure && (
          <View style={styles.measureContainer}>
            <Text style={styles.measureText}>{measure}</Text>
          </View>
        )}
      </Pressable>
      <WheelPicker
        visible={showModal}
        onDismiss={onHide}
        options={options}
        onSubmit={onSubmit}
        value={value}
        secondaryOptions={secondaryOptions}
      />
    </>
  )
});

export default PickerField;
