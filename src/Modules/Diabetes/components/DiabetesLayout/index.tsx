import React, { ReactElement } from 'react';
import { ScrollView, Text, SafeAreaView, Platform } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import PatientDetailsHeader from '../PatientDetailsHeader';
import styles from './styles';

interface Props {
  title: string;
  children: ReactElement;
  renderBottomPanel?: () => ReactElement;
  showPatientDetailsHeader?: boolean;
}

const DiabetesLayout = React.memo(({title, children, renderBottomPanel, showPatientDetailsHeader}: Props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {showPatientDetailsHeader && (
        <PatientDetailsHeader />
      )}
      <GoBackHeader />
      <Text style={styles.title}>{title}</Text>
      <ScrollView style={styles.container} contentContainerStyle={styles.content} keyboardDismissMode='interactive'>
        {children}
      </ScrollView>
      {renderBottomPanel && renderBottomPanel()}
      {Platform.OS === 'ios' && (
        <KeyboardSpacer />
      )}
    </SafeAreaView>
  )
})

export default DiabetesLayout;
