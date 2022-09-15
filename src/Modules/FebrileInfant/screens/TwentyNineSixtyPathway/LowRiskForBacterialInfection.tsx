import React from 'react';
import { Image, Text } from 'react-native';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import styles from '../../styles';
import { twentyNineSixtyLowRiskIc } from 'assets/img/febrileInfant';
import { DISCHARGE_CHECKLIST_LOW_RISK, DISPOSITION_RECOMMENDATIONS_LOW } from './routes';
import TwentyNineSixtyLayout from './TwentyNineSixtyLayout';
import { DISPOSITION_RECCOMENDATION } from '../SixtyOneNinety/routes';

const LowRiskForBacterialInfection = React.memo(() => (
  <TwentyNineSixtyLayout
    bottomButtonRoute={DISPOSITION_RECOMMENDATIONS_LOW}
    bottomButtonTitle={febrileText.twentyNineSixty.dischargeChecklistLowRisk}
  >
    <Text style={styles.titleText}>{febrileText.twentyNineSixty.lowRiskBacterialReccomendations}</Text>
    <Text style={styles.regularText}>{febrileText.twentyNineSixty.lowRiskBacterialInfoFirst}</Text>
    <Image source={twentyNineSixtyLowRiskIc} style={styles.tallImage} resizeMode="contain" />
    <Text style={styles.regularText}>{febrileText.twentyNineSixty.lowRiskBacterialInfoSecond}</Text>
  </TwentyNineSixtyLayout>
))

export default LowRiskForBacterialInfection;
