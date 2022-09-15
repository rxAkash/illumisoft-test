import React from 'react';
import Analytics from 'appcenter-analytics';
import {Linking, Modal, Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';

const HEALTHCARE_PROVIDER_NUMBER = '1-800-466-3729';
const EMS_PROVIDER_NUMBER = '1-816-234-3430';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const ContactsDialog = React.memo(({visible, onClose}: Props) => {
  const call = (number: string) => {
    Analytics.trackEvent(`Direct Dial`, {dial: number})
    Linking.openURL(`tel:${number}`);
  };

  return (
    <Modal animationType="fade" visible={visible} transparent>
      <View style={styles.dialog}>
        <View style={styles.body}>
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => call(HEALTHCARE_PROVIDER_NUMBER)}>
            <Text style={styles.linkTitle}>Healthcare Provider</Text>
            <Text style={styles.linkSubtitle}>
              Call 1-800-GO-MERCY Transfer Center
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => call(EMS_PROVIDER_NUMBER)}>
            <Text style={styles.linkTitle}>EMS Provider</Text>
            <Text style={styles.linkSubtitle}>
              {"Call Children's Mercy Emergency Dept"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.cancelButton}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
});

export default ContactsDialog;
