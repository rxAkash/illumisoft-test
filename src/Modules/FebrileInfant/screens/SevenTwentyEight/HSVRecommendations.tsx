import React from 'react';
import { Image, Text} from 'react-native';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import styles from '../../styles';
import { sevenTwentyEightHSVLowRiskIc } from 'assets/img/febrileInfant';
import { ANTIBIOTIC_OPTIONS } from './routes';
import SevenTwentyEightLayout from './SevenTwentyEightLayout';

const HSVRecommendations = React.memo(() => (
  <SevenTwentyEightLayout
    bottomButtonRoute={ANTIBIOTIC_OPTIONS}
    bottomButtonTitle={febrileText.sevenTwentyEight.antibioticOptions}
  >
    <Text style={styles.titleText}>{febrileText.sevenTwentyEight.hsvReccomendations}</Text>
    <Text style={styles.regularText}>
      {febrileText.sevenTwentyEight.hsvReccomendationsInfoFirst}
      <Text style={styles.blueText}>{febrileText.sevenTwentyEight.hsvReccomendationsInfoBlue}</Text>
    </Text>
    <Image source={sevenTwentyEightHSVLowRiskIc} style={styles.tallImage} resizeMode="contain" />
  </SevenTwentyEightLayout>
))

export default HSVRecommendations;
