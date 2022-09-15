import React from 'react';
import { Text, SafeAreaView, Pressable, FlatList} from 'react-native';
import Modal from "react-native-modal";
import { SelectOption } from '../@types';
import styles from './styles';

interface Props {
  visible: boolean;
  onDismiss: () => void;
  title: string;
  options: SelectOption[];
  onOptionPress: (item: SelectOption) => void;
}

const OptionsModal = React.memo(({
  visible,
  onDismiss,
  title,
  options,
  onOptionPress
}: Props) => {
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
        <Pressable onPress={onDismiss} style={styles.optionsBackdrop}>
          <Pressable style={styles.optionsContainer}>
            <Text style={styles.optionsTitle}>{title}</Text>
            <FlatList
              data={options}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <Pressable
                  onPress={() => onOptionPress(item)}
                  style={({pressed}) => [
                    styles.optionsItem,
                    pressed && styles.optionPressed
                  ]}
                >
                  <Text style={styles.value}>{item.title}</Text>
                </Pressable>
              )}
            />
          </Pressable>
        </Pressable>
      </SafeAreaView>
    </Modal>
  )
})

export default OptionsModal;
