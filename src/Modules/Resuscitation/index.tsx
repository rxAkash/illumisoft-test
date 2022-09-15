import { NavigationProp } from '@react-navigation/core';
import Analytics from 'appcenter-analytics';
import { resusIc } from 'assets/img';
import { inject, observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import { player } from 'UIToolkit/BPMPlayer';
import ColoredNavButton from 'UIToolkit/Buttons/ColoredNavButton';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import ModuleLogo from 'UIToolkit/ModuleLogo';
import { pinkColor, primaryColor } from 'UIToolkit/theme/colors';
import { resusText } from './config/strings';
import { AGE_INPUT, COLOR_INPUT, NEWLY_BORN_INFANT_INPUTS, WEIGHT_INPUT } from './navigation/routes';
import { ResuscitationStore } from './stores/ResuscitationStore';
import styles from './styles';

interface Props {
  navigation: NavigationProp<any>;
  resuscitationStore: ResuscitationStore;
}

const Resuscitation = inject('resuscitationStore')(observer(({
  resuscitationStore,
  navigation
}: Props) => {

  useEffect(() => {
    resuscitationStore.clear();
    return () => {
      player.stop();
    }
  }, [])

  const onNav = (screen: any) => {
    if(screen === NEWLY_BORN_INFANT_INPUTS) {
      Analytics.trackEvent(`NBI`, {name: 'NBI Button'})
    }
    navigation.navigate(screen);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBackHeader showBPM hideBack border />
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <ModuleLogo
            icon={resusIc}
            title={resusText.home.title}
          />
          <Text style={styles.infoText}>{resusText.home.tellUs}</Text>
          <ColoredNavButton
            title={resusText.home.newlyBornButton}
            backgroundColor={pinkColor}
            style={styles.button}
            onPress={() => onNav(NEWLY_BORN_INFANT_INPUTS)}
          />
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.divider} />
          </View>
          <ColoredNavButton
            title={resusText.home.weightButton}
            backgroundColor={primaryColor}
            style={styles.button}
            onPress={() => onNav(WEIGHT_INPUT)}
          />
          <Text style={styles.note}>{resusText.home.note}</Text>
          <ColoredNavButton
            title={resusText.home.ageButton}
            backgroundColor={primaryColor}
            style={styles.button}
            onPress={() => onNav(AGE_INPUT)}
          />
          <ColoredNavButton
            title={resusText.home.colorButton}
            backgroundColor={primaryColor}
            style={styles.button}
            onPress={() => onNav(COLOR_INPUT)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}))

export default Resuscitation;
