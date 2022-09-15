import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from "../styles";

import HeadInjuryLayout from 'Modules/HeadInjury/components/HeadInjuryLayout';
import ColoredNavButton from 'UIToolkit/Buttons/ColoredNavButton';
import { NavigationProp } from '@react-navigation/native';
import { HEAD_INJURY_HOME } from 'Modules/HeadInjury/navigation/routes';
import { primaryColor } from 'UIToolkit/theme/colors';
import { headInjuryText } from 'Modules/HeadInjury/config/strings';
import { stringifyKey } from 'mobx/dist/internal';

interface Props {
    navigation: NavigationProp<any>;
  }


const DispositionRecommendationsHIM = React.memo(({ navigation }: Props) => {

  const renderScore = () => (
    <View>
      <Text style={styles.adittionalText}>{headInjuryText.zeroToNinePathway.GSC14}</Text>
    </View>
  );
  
const onRestart = () => {
  navigation.reset({
    routes: [{name: HEAD_INJURY_HOME}, {name: HEAD_INJURY_HOME}],
    routeNames: [HEAD_INJURY_HOME, HEAD_INJURY_HOME]
  })
}

  const renderBottomPanel = () => (
    <View style={styles.bottomContainer}>
      <ColoredNavButton
        title={headInjuryText.zeroToNinePathway.DisposistionRecommnedation.btnTitle}
        backgroundColor={primaryColor}
        onPress={onRestart}
      />
    </View>
  );

  return (
    <HeadInjuryLayout
    renderBottomPanel={renderBottomPanel}
    customElement={renderScore}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.blueTextTitile}>
          {headInjuryText.zeroToNinePathway.DisposistionRecommnedation.title}
        </Text>
        <Text style={styles.blueTextTitile}>
          {headInjuryText.zeroToNinePathway.DisposistionRecommnedation.months}
        </Text>
        <View style={styles.container}>
          <Text style={styles.regularText}>{headInjuryText.zeroToNinePathway.DisposistionRecommnedation.parag1}{'\n'}</Text>
          <Text style={styles.regularText}>{headInjuryText.zeroToNinePathway.DisposistionRecommnedation.parag2}{'\n'}</Text>
          <Text style={styles.regularText}>{headInjuryText.zeroToNinePathway.DisposistionRecommnedation.parag3}{'\n'}</Text>

        </View>    
      </View>
    </HeadInjuryLayout>
  )
})

export default DispositionRecommendationsHIM;
