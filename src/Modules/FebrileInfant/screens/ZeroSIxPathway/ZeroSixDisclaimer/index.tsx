import { zeroSixDaysDisclaimerIc } from 'assets/img/febrileInfant';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import { ZERO_SIX_DIAGNOSTIC_TEST } from 'Modules/FebrileInfant/navigation/routes';
import React from 'react';
import { Image, Text } from 'react-native';
import styles from '../../../styles';
import ZeroSixLayout from '../ZeroSixLayout';

const ZeroSixDisclaimer = React.memo(() => {
  return (
    <ZeroSixLayout
      bottomButtonTitle={febrileText.appearsDisclaimers.diagnosticTests}
      bottomButtonRoute={ZERO_SIX_DIAGNOSTIC_TEST}
      routeParams={{zeroSix: true}}
    >
      <Text style={styles.titleText}>{febrileText.zeroSix.disclaimer}</Text>
      <Text style={styles.regularText}>{febrileText.zeroSix.infoFirst}</Text>
      <Image source={zeroSixDaysDisclaimerIc} style={styles.image} resizeMode="contain" />
      <Text style={[styles.regularText, styles.boldText]}>{'\n'}{febrileText.zeroSix.infoSecond}</Text>
    </ZeroSixLayout>
  )
})

export default ZeroSixDisclaimer;
