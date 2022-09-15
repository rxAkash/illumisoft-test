import React, { ReactElement } from 'react';
import { Modal, Pressable, ScrollView, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
  onAccept: () => void;
  children?: ReactElement;
  onClose: () => void;
  visible: boolean;
}

const DisclaimerDialog = React.memo(({children, onAccept, onClose, visible}: Props) => {
  return (
    <Modal transparent visible={visible}>
      <Pressable style={styles.container} onPress={onClose}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.content}
          contentContainerStyle={styles.scrollContainer}
        >
          <Pressable>
            {children}
            <TouchableOpacity
              onPress={onAccept}
              style={styles.acceptButton}
            >
              <Text style={styles.buttonText}>I Accept</Text>
            </TouchableOpacity>
          </Pressable>
        </ScrollView>
      </Pressable>
    </Modal>
  )
})

export default DisclaimerDialog;
