import React from 'react';
import { Image, Text } from 'react-native';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import styles from '../../styles';
import { sevenTwentyEightDisclaimerIc } from 'assets/img/febrileInfant';
import { SEVEN_TWENTY_EIGHT_DIAGNOSTIC_TESTS } from './routes';
import SevenTwentyEightLayout from './SevenTwentyEightLayout';


const Disclaimer = React.memo(() => (
  <SevenTwentyEightLayout
    bottomButtonRoute={SEVEN_TWENTY_EIGHT_DIAGNOSTIC_TESTS}
    bottomButtonTitle={febrileText.appearsDisclaimers.diagnosticTests}
  >
    <Text style={styles.titleText}>{febrileText.sevenTwentyEight.disclaimer}</Text>
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.infoFirst}</Text>
    <Image source={sevenTwentyEightDisclaimerIc} style={styles.tallImage} resizeMode="contain" />
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.infoSecond}</Text>
  </SevenTwentyEightLayout>
))

export default Disclaimer;
