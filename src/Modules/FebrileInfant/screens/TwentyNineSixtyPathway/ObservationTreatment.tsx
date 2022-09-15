import React from 'react';
import { Text } from 'react-native';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import styles from '../../styles';
import { DISCHARGE_RECOMMENDATIONS } from './routes';
import TwentyNineSixtyLayout from './TwentyNineSixtyLayout';

const ObservationTreatment = React.memo(() => (
  <TwentyNineSixtyLayout
    bottomButtonTitle={febrileText.twentyNineSixty.dischargeRecommendations}
    bottomButtonRoute={DISCHARGE_RECOMMENDATIONS}
  >
    <Text style={styles.titleText}>{febrileText.twentyNineSixty.observationTreatment}</Text>
    <Text style={styles.regularText}>
      {febrileText.twentyNineSixty.observationTreatmentInfoFirst}
      <Text style={styles.underlineText}>
        {febrileText.twentyNineSixty.observationTreatmentUnderline}
      </Text>
      {febrileText.twentyNineSixty.observationTreatmentInfoSecond}
    </Text>
  </TwentyNineSixtyLayout>
))

export default ObservationTreatment;
