import React from 'react';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import { INFANT_APPEARS_TESTS } from 'Modules/FebrileInfant/navigation/routes';
import { Text } from 'react-native';
import styles from '../../styles';
import InfantAppearsIllLayout from '../InfantAppearsIll/InfantAppearsIllLayout';

const InfantAppearsDisclaimers = React.memo(() => {
  return (
    <InfantAppearsIllLayout
      bottomButtonTitle={febrileText.appearsDisclaimers.diagnosticTests}
      bottomButtonRoute={INFANT_APPEARS_TESTS}
    >
      <Text style={styles.pathwayTitle}>{febrileText.home.infantAppears}</Text>
      <Text style={styles.titleText}>{febrileText.appearsDisclaimers.title}</Text>
      <Text style={styles.regularText}>{febrileText.appearsDisclaimers.infoFirst}{' '}
        <Text style={styles.boldText}>{febrileText.appearsDisclaimers.infoFirstBold}</Text>
      </Text>
      <Text style={[styles.regularText, styles.boldText]}>{'\n'}{febrileText.appearsDisclaimers.infoSecond}</Text>
    </InfantAppearsIllLayout>
  )
})

export default InfantAppearsDisclaimers;
