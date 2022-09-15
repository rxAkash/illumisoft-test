import React from 'react';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import { Text } from 'react-native';
import styles from '../../styles';
import TwentyNineSixtyLayout from './TwentyNineSixtyLayout';
import BulletList from 'UIToolkit/BulletList';
import { HSV_HIGH_RISK_LIST } from './config';

const HSVHighRiskRecommendations = React.memo(() => (
  <TwentyNineSixtyLayout
    restartButton>
    <Text style={styles.titleText}>{febrileText.twentyNineSixty.hsvHighRiskRecommendations}</Text>
    <Text style={styles.regularText}>
      <Text style={styles.underlineText}>{febrileText.twentyNineSixty.hsvHighRiskRecommendationsInfoFirst}</Text>
      {febrileText.twentyNineSixty.followingUnder}{'\n'}
    </Text>
    <BulletList
      lightText
      largeText
      items={HSV_HIGH_RISK_LIST.map(item => ({text: item}))}
    />
    <Text style={styles.regularText}>{'\n'}{febrileText.twentyNineSixty.infantAdmitted2436}{'\n'}</Text>
    <Text style={styles.blueText}>{febrileText.twentyNineSixty.emprAntiv}</Text>
    <Text style={styles.regularText}>{febrileText.twentyNineSixty.acyclovir}</Text>
    <Text style={styles.regularText}>{febrileText.twentyNineSixty.pendingTestResults}{'\n'}</Text>
    <Text style={styles.blueText}>{febrileText.twentyNineSixty.emprAntivTr}</Text>
    <Text style={styles.regularText}>{febrileText.twentyNineSixty.cefriax}</Text>
    <Text style={styles.regularText}>{febrileText.twentyNineSixty.ivorim}</Text>
    <Text style={styles.blueText}>{febrileText.twentyNineSixty.addCaution}</Text>


  </TwentyNineSixtyLayout>
))

export default HSVHighRiskRecommendations;
