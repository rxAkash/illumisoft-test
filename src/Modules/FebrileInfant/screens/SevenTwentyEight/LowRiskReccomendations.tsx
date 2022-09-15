import React from 'react';
import { Image, Text } from 'react-native';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import styles from '../../styles';
import { sevenTwentyEightLowRiskIc } from 'assets/img/febrileInfant';
import { LOW_ANTIBIOTIC_RECOMMENDATIONS } from './routes';
import SevenTwentyEightLayout from './SevenTwentyEightLayout';

const LowRiskReccomendations = React.memo(() => (
  <SevenTwentyEightLayout
    bottomButtonRoute={LOW_ANTIBIOTIC_RECOMMENDATIONS}
    bottomButtonTitle={febrileText.sevenTwentyEight.antibioticRecommendations}
  >
    <Text style={styles.titleText}>{febrileText.sevenTwentyEight.lowRiskReccomendations}</Text>
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.lowRiskInfoFirst}</Text>
    <Image source={sevenTwentyEightLowRiskIc} style={styles.tallImage} resizeMode="contain" />
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.lowRiskInfoSecond}</Text>
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.lowRiskInfoThird}</Text>
  </SevenTwentyEightLayout>
))

export default LowRiskReccomendations;
