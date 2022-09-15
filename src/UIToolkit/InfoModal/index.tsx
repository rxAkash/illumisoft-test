import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';

interface Props {
  title: string;
  info: string;
  onClose: () => void;
  visible: boolean;
}

const InfoModal = React.memo(({title, info, visible, onClose}: Props) => {
  return (
    <Modal
      isVisible={visible}
      onDismiss={onClose}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.info}>{info}</Text>
        <TouchableOpacity style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
})

export default InfoModal;
