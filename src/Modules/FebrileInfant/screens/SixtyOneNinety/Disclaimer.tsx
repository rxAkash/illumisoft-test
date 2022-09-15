import React from 'react';
import { Image, Text } from 'react-native';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import styles from '../../styles';
import { sixtyOneNinetyIc } from 'assets/img/febrileInfant';
import { DIAGNOSTIC_TEST } from './routes';
import SixtyNineNinetyLayout from './SixtyNineNinetyLayout';

const Disclaimer = React.memo(() => (
  <SixtyNineNinetyLayout
    bottomButtonTitle={febrileText.sixtyOneNinety.diagnostic}
    bottomButtonRoute={DIAGNOSTIC_TEST}
  >
    <Text style={styles.titleText}>{febrileText.sixtyOneNinety.disclaimer}</Text>
    <Image source={sixtyOneNinetyIc} style={styles.tallImage} resizeMode="contain" />
    <Text style={styles.regularText}>{febrileText.sixtyOneNinety.disclaimerInfo}</Text>
  </SixtyNineNinetyLayout>
))

export default Disclaimer;
