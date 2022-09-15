import React from 'react';
import { Text } from 'react-native';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import styles from '../../styles';
import TwentyNineSixtyLayout from './TwentyNineSixtyLayout';

const FurtherObservationsReccomendations = React.memo(() => (
  <TwentyNineSixtyLayout restartButton>
    <Text style={styles.titleText}>{febrileText.twentyNineSixty.furtherObservation}</Text>
    <Text style={styles.regularText}>{febrileText.twentyNineSixty.furtherObservationInfoFirst}</Text>
  </TwentyNineSixtyLayout>
))

export default FurtherObservationsReccomendations;
