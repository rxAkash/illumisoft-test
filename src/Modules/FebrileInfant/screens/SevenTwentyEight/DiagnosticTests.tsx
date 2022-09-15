import React from 'react';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import { Text } from 'react-native';
import BulletList from 'UIToolkit/BulletList';
import styles from '../../styles';
import { DIAGNOSTIC_TESTS } from './config';
import { HSV_CHECKLIST } from './routes';
import SevenTwentyEightLayout from './SevenTwentyEightLayout';

const DiagnosticTests = React.memo(() => (
  <SevenTwentyEightLayout
    bottomButtonTitle={febrileText.sevenTwentyEight.proceedToHSVRiskAssessment}
    bottomButtonRoute={HSV_CHECKLIST}
  >
    <Text style={styles.titleText}>{febrileText.sevenTwentyEight.diagnosticTests}</Text>
    <Text style={styles.boldText}>{febrileText.sevenTwentyEight.testsInfoFirst}{'\n'}</Text>
    <BulletList
      lightText
      largeText
      items={DIAGNOSTIC_TESTS.map(item => ({text: item}))}
    />
  </SevenTwentyEightLayout>
))

export default DiagnosticTests;
