import React from 'react';
import { Text } from 'react-native';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import styles from '../../styles';
import { DISCHARGE_ADMISSION_CHECKLIST } from './routes';
import TwentyNineSixtyLayout from './TwentyNineSixtyLayout';

const InpatientObservations = React.memo(() => (
  <TwentyNineSixtyLayout
    bottomButtonTitle={febrileText.twentyNineSixty.dischargeAdmissionChecklist}
    bottomButtonRoute={DISCHARGE_ADMISSION_CHECKLIST}
  >
    <Text style={styles.titleText}>{febrileText.twentyNineSixty.inpatinetObservations}</Text>
    <Text style={styles.regularText}>{febrileText.twentyNineSixty.inpatinetObservationsInfoFirst}{'\n'}</Text>
    <Text style={styles.regularText}>
      <Text style={styles.underlineText}>{febrileText.twentyNineSixty.inpatinetObservationsInfoSecondUnderline}</Text>
      {febrileText.twentyNineSixty.inpatinetObservationsInfoSecond}{'\n'}
    </Text>
    <Text style={styles.regularText}>
      <Text style={styles.underlineText}>{febrileText.twentyNineSixty.inpatinetObservationsInfoThirdUnderline}</Text>
      {febrileText.twentyNineSixty.inpatinetObservationsInfoThird}{'\n'}
    </Text>
    <Text style={styles.regularText}>{febrileText.twentyNineSixty.inpatinetObservationsInfoFouth}{'\n'}</Text>
    <Text style={styles.regularText}>{febrileText.twentyNineSixty.inpatinetObservationsNote}</Text>
  </TwentyNineSixtyLayout>
))

export default InpatientObservations;
