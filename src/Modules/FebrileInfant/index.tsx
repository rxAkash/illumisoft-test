import { NavigationProp } from '@react-navigation/core';
import { febrileIc } from 'assets/img';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import ColoredNavButton from 'UIToolkit/Buttons/ColoredNavButton';
import ModuleLogo from 'UIToolkit/ModuleLogo';
import { primaryColor } from 'UIToolkit/theme/colors';
import { febrileText } from './config/strings';
import { INFANT_APPEARS_DISCLAIMERS, ZERO_SIX_DISCLAIMER } from './navigation/routes';
import { SEVEN_TWENTY_EIGHT_DISCLAIMER } from './screens/SevenTwentyEight/routes';
import { SIXTY_ONE_NINETY_DISCLAIMER } from './screens/SixtyOneNinety/routes';
import { TWENTY_NINE_SIXTY_DISCLAIMER } from './screens/TwentyNineSixtyPathway/routes';
import styles from './styles';

interface Props {
  navigation: NavigationProp<any>;
}

const FebrileInfant = React.memo(({navigation}: Props) => {

  const onNav = (screen: string) => {
    navigation.navigate(screen);
  }

  return (
    <ScrollView style={styles.homeContainer}>
      <View style={[styles.container, styles.homeContainer]}>
        <ModuleLogo
          icon={febrileIc}
          title={febrileText.home.title}
        />
        <ColoredNavButton
          backgroundColor={primaryColor}
          title={febrileText.home.infantAppears}
          onPress={() => onNav(INFANT_APPEARS_DISCLAIMERS)}
          style={styles.button}
        />
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.divider} />
        </View>
        <Text style={styles.selectText}>{febrileText.home.select}</Text>
        <ColoredNavButton
          backgroundColor={primaryColor}
          title={febrileText.home.zeroSix}
          onPress={() => onNav(ZERO_SIX_DISCLAIMER)}
          style={styles.button}
        />
        <ColoredNavButton
          backgroundColor={primaryColor}
          title={febrileText.home.sevenTwentyEight}
          onPress={() => onNav(SEVEN_TWENTY_EIGHT_DISCLAIMER)}
          style={styles.button}
        />
        <ColoredNavButton
          backgroundColor={primaryColor}
          title={febrileText.home.twentyNineSixty}
          onPress={() => onNav(TWENTY_NINE_SIXTY_DISCLAIMER)}
          style={styles.button}
        />
        <ColoredNavButton
          backgroundColor={primaryColor}
          title={febrileText.home.sixtyOneNinety}
          onPress={() => onNav(SIXTY_ONE_NINETY_DISCLAIMER)}
          style={styles.button}
        />
      </View>
    </ScrollView>
  )
})

export default FebrileInfant;
