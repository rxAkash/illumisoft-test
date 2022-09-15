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
import BulletList from 'UIToolkit/BulletList';
import { NEUROPROTECTIVE_ACTIONS_LIST, NEUROPROTECTIVE_LIST } from './conf';

interface Props {
    navigation: NavigationProp<any>;
  }


const NeuroprotectiveMeasures = React.memo(({ navigation }: Props) => {

  const renderScore = () => (
    <View>
      <Text style={styles.adittionalText}>{headInjuryText.zeroToNinePathway.GSC9}</Text>
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
        title={headInjuryText.zeroToNinePathway.NeuroprotectiveMeasures.btnTitle}
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
          {headInjuryText.zeroToNinePathway.NeuroprotectiveMeasures.title}
        </Text>
        <View style={styles.container}>
            <BulletList
                items={NEUROPROTECTIVE_LIST}
            />
            <Text style={styles.regularText}>{'\n'}{headInjuryText.zeroToNinePathway.NeuroprotectiveMeasures.actions}</Text>
            <BulletList
                items={NEUROPROTECTIVE_ACTIONS_LIST}
            />
        </View>    
      </View>
    </HeadInjuryLayout>
  )
})

export default NeuroprotectiveMeasures;
