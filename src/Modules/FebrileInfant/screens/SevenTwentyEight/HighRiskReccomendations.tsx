import React from 'react';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import { Text } from 'react-native';
import BulletList from 'UIToolkit/BulletList';
import styles from '../../styles';
import { HIGN_RISK_LIST } from './config';
import { HSV_CHECKLIST } from './routes';
import SevenTwentyEightLayout from './SevenTwentyEightLayout';

const HighRiskReccomendations = React.memo(() => (
  <SevenTwentyEightLayout
    bottomButtonTitle={febrileText.sevenTwentyEight.hsvChecklist}
    bottomButtonRoute={HSV_CHECKLIST}
  >
    <Text style={styles.titleText}>{febrileText.sevenTwentyEight.highRiskReccomendations}</Text>
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.hignRiskInfoFirst}{'\n'}</Text>
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.hignRiskInfoSecond}{'\n'}</Text>
    <BulletList
      lightText
      largeText
      items={HIGN_RISK_LIST.map(item => ({text: item}))}
    />
  </SevenTwentyEightLayout>
))

export default HighRiskReccomendations;
