import React from 'react';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import { Text } from 'react-native';
import BulletList from 'UIToolkit/BulletList';
import styles from '../../../styles';
import { INCREASED_RISK_FOR_BACTERIAL_CONFIG } from './config';
import { DISPOSITION_RECOMMENDATIONS } from '../routes';
import TwentyNineSixtyLayout from '../TwentyNineSixtyLayout';

const IncreasedRiskForBacterialInfection = React.memo(() => (
  <TwentyNineSixtyLayout
    bottomButtonTitle={febrileText.sevenTwentyEight.dispositionRecommendations}
    bottomButtonRoute={DISPOSITION_RECOMMENDATIONS}
  >
    <Text style={styles.titleText}>{febrileText.twentyNineSixty.increasedRiskForBacterial}</Text>
    <Text style={styles.regularText}>{febrileText.twentyNineSixty.increasedRiskForBacterialInfoFirst}{'\n'}</Text>
    <Text style={styles.regularText}>{febrileText.twentyNineSixty.increasedRiskForBacterialInfoSecond}{'\n'}</Text>
    <BulletList
      lightText
      largeText
      items={INCREASED_RISK_FOR_BACTERIAL_CONFIG.map(item => ({text: item}))}
    />
  </TwentyNineSixtyLayout>
))

export default IncreasedRiskForBacterialInfection;
