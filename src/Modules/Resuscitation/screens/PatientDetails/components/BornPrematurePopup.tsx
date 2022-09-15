import { GEST_AGE_22_28, GEST_AGE_29_36 } from 'Modules/Resuscitation/config/sharedConf';
import { resusText } from 'Modules/Resuscitation/config/strings';
import React from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';
import ColoredNavButton from 'UIToolkit/Buttons/ColoredNavButton';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import { primaryColor } from 'UIToolkit/theme/colors';
import styles from './styles';

interface Props {
  onFinish: (age?: string) => void;
  onClose: () => void;
  isVisible: boolean;
}

const BornPrematurePopup = React.memo(({isVisible, onClose, onFinish}: Props) => {
  return (
    <Modal
      isVisible={isVisible}
      onDismiss={onClose}
      onSwipeComplete={onClose}
      animationIn="slideInUp"
      animationOut="slideOutDown"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalBody}>
          <Text style={styles.modalTitle}>{resusText.patientDetails.wasPatientBornPremature}</Text>
          <ColoredNavButton
            backgroundColor={primaryColor}
            title={resusText.patientDetails.btnNo}
            onPress={() => onFinish()}
            style={styles.button}
          />
          <ColoredNavButton
            backgroundColor={primaryColor}
            title={resusText.patientDetails.yesGestAge2228}
            onPress={() => onFinish(GEST_AGE_22_28)}
            style={styles.button}
          />
          <ColoredNavButton
            backgroundColor={primaryColor}
            title={resusText.patientDetails.yesGestAge2936}
            onPress={() => onFinish(GEST_AGE_29_36)}
            style={styles.button}
          />
          <View style={styles.modalBottomContainer}>
            <FullWidthButton
              text='Cancel'
              onPress={onClose}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
})

export default BornPrematurePopup;
