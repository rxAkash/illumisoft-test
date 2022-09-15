import React, { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';

import Modal from "react-native-modal";
import styles from './styles';
import { SelectOption } from '../@types';
import Picker from './Picker';


interface Props {
  visible: boolean;
  onDismiss: () => void;
  options: SelectOption[];
  secondaryOptions?: SelectOption[];
  onSubmit: (item?: string, secItem?: string) => void;
  value?: string;
  secValue?: string;
  widePicker?: boolean;
}

const WheelPicker = React.memo(({
  visible,
  onDismiss,
  options,
  onSubmit,
  value,
  secValue,
  secondaryOptions,
  widePicker
}: Props) => {
  const [optionSelected, setOptionSelected] = useState<string | undefined>(value || undefined);
  const [secOptionSelected, setSecOptionSelected] = useState<string | undefined>(secValue || undefined);

  useEffect(() => {
    setOptionSelected(value || options[0].value)
  }, [visible])

  const onSave = () => {
    onSubmit(optionSelected, secOptionSelected);
  }

  return (
    <Modal
      isVisible={visible}
      onSwipeComplete={onDismiss}
      onBackdropPress={onDismiss}
      animationIn='slideInUp'
      backdropOpacity={0.6}
      propagateSwipe
    >
      <SafeAreaView style={styles.optionsBackdrop}>
        <View style={styles.optionsContainer}>
          <View style={styles.optionsHeader}>
            <Pressable onPress={onDismiss}>
              <Text style={styles.headerButtonText}>Cancel</Text>
            </Pressable>
            <Pressable onPress={onSave}>
              <Text style={styles.headerButtonText}>Confirm</Text>
            </Pressable>
          </View>
          <View style={styles.pickersContainer}>
            <Picker
              setOptionSelected={setOptionSelected}
              optionSelected={optionSelected}
              options={options}
              widePicker={widePicker}
            />
            {secondaryOptions && (
              <Picker
                setOptionSelected={setSecOptionSelected}
                optionSelected={secOptionSelected}
                options={secondaryOptions}
                widePicker={widePicker}
              />
            )}
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  )
})

export default WheelPicker;
