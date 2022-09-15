import React from 'react';
import { Image, Text } from 'react-native';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import styles from '../../styles';
import { twentyNineSixtyDisclaimerIc } from 'assets/img/febrileInfant';
import { DIAGNOSTIC_TESTS } from './routes';
import TwentyNineSixtyLayout from './TwentyNineSixtyLayout';

const Disclaimer = React.memo(() => {
  return (
    <TwentyNineSixtyLayout
      bottomButtonRoute={DIAGNOSTIC_TESTS}
      bottomButtonTitle={febrileText.appearsDisclaimers.diagnosticTests}
    >
      <Text style={styles.titleText}>{febrileText.twentyNineSixty.disclaimer}</Text>
      <Text style={styles.regularText}>{febrileText.twentyNineSixty.disclaimerInfoFirst}</Text>
      <Image source={twentyNineSixtyDisclaimerIc} style={styles.tallImage} resizeMode="contain" />
      <Text style={styles.regularText}>{febrileText.twentyNineSixty.disclaimerInfoSecond}</Text>
    </TwentyNineSixtyLayout>
  )
})

export default Disclaimer;
