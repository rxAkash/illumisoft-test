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
import { NEUROPROTECTIVE_IMPORTANT_LIST } from './conf';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import HollowButton from 'UIToolkit/Buttons/HollowButton';

interface Props {
    navigation: NavigationProp<any>;
  }


const NeuroprotectiveMeasuresRapid = React.memo(({ navigation }: Props) => {

  const renderScore = () => (
    <View>
      <Text style={styles.adittionalText}>{headInjuryText.zeroToNinePathway.GSC0}</Text>
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
        title={headInjuryText.zeroToNinePathway.NeuroprotectiveMeasuresRapid.btnTitle}
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
          {headInjuryText.zeroToNinePathway.NeuroprotectiveMeasuresRapid.title}
        </Text>
        <View style={styles.container}>
            <Text style={styles.regularText}>{'\n'}{headInjuryText.zeroToNinePathway.NeuroprotectiveMeasuresRapid.important}</Text>
            <BulletList
                items={NEUROPROTECTIVE_IMPORTANT_LIST}
            />
              <View>
                <HollowButton
                  text={headInjuryText.zeroToNinePathway.NeuroprotectiveMeasuresRapid.linkBtnTitle}
                  onPress={console.log}
                />
              </View>
        </View>    
      </View>
    </HeadInjuryLayout>
  )
})

export default NeuroprotectiveMeasuresRapid;
