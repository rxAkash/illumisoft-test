import React from 'react';
import { Text } from 'react-native';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import styles from '../../styles';
import { BACTERIAL_INFECTION_ASSESMENT } from './routes';
import TwentyNineSixtyLayout from './TwentyNineSixtyLayout';

const HSVLowRiskRecommendations = React.memo(() => (
  <TwentyNineSixtyLayout
    bottomButtonTitle={febrileText.twentyNineSixty.bacterialInfectionAssessment}
    bottomButtonRoute={BACTERIAL_INFECTION_ASSESMENT}
  >
    <Text style={styles.titleText}>{febrileText.twentyNineSixty.hsvLowRiskRecommendations}</Text>
    <Text style={styles.regularText}>{febrileText.twentyNineSixty.hsvLowRiskRecommendationsInfoFirst}{'\n'}</Text>
    <Text style={styles.regularText}>{febrileText.twentyNineSixty.hsvLowRiskRecommendationsInfoSecond}</Text>
  </TwentyNineSixtyLayout>
))

export default HSVLowRiskRecommendations;
