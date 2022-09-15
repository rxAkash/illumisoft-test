import { useNavigation } from '@react-navigation/native';
import Analytics from 'appcenter-analytics';
import { restartIc } from 'assets/img';
import React from 'react';
import { View } from 'react-native';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import { BRUE_HOME } from '../navigation/routes';
import styles from './styles';

const BottomRestart = React.memo(() => {
  const navigation = useNavigation<any>();

  const onRestart = () => {
    Analytics.trackEvent("Guideline Restart", {guideline: 'Brue'})
    navigation.reset({
      routes: [{name: BRUE_HOME}],
      routeNames: [BRUE_HOME]
    })
  }

  return (
    <View style={styles.restartContainer}>
      <FullWidthButton
        text='Restart Pathway'
        icon={restartIc}
        onPress={onRestart}
      />
    </View>
  )
})

export default BottomRestart;
