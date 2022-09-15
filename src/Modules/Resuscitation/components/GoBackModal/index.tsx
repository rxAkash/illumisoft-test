import React from 'react';
import { Text, View } from 'react-native';
import Modal from "react-native-modal";
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import HollowButton from 'UIToolkit/Buttons/HollowButton';
import styles from './styles';

interface Props {
  visible: boolean;
  onDismiss: () => void;
  onAccept: () => void;
}

const GoBackModal = React.memo(({visible, onDismiss, onAccept}: Props) => {
  return (
    <Modal
      isVisible={visible}
      onSwipeComplete={onDismiss}
      onBackdropPress={onDismiss}
      animationIn='slideInUp'
      backdropOpacity={0.7}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Are you sure?</Text>
        <Text style={styles.text}>By proceeding you will need to enter patient details again.</Text>
        <View style={styles.bottomContainer}>
          <HollowButton
            text="Cancel"
            onPress={onDismiss}
            style={[styles.button, styles.leftButton]}
          />
          <FullWidthButton
            text="Yes"
            onPress={onAccept}
            style={styles.button}
          />
        </View>
      </View>
    </Modal>
  )
})

export default GoBackModal;
