import React from 'react';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import { Text } from 'react-native';
import BulletList from 'UIToolkit/BulletList';
import styles from '../../styles';
import { DIAGNOSTIC_TESTS_HIGH_RISK } from './config';
import { HSV_CHECKLIST, URINALYSIS_QUESTIONS_HIGH_RISK } from './routes';
import SevenTwentyEightLayout from './SevenTwentyEightLayout';

const DiagnosticTestsHighRisk = React.memo(() => (
  <SevenTwentyEightLayout
    bottomButtonTitle={febrileText.sevenTwentyEight.urinalysisProcced}
    bottomButtonRoute={URINALYSIS_QUESTIONS_HIGH_RISK}
  >
    <Text style={styles.titleText}>{febrileText.sevenTwentyEight.diagnosticTests}</Text>
    <Text style={styles.boldText}>{febrileText.sevenTwentyEight.increasedHsv}{'\n'}</Text>
    <Text style={styles.boldText}>{febrileText.sevenTwentyEight.additionalTests}{'\n'}</Text>
    <BulletList
      lightText
      largeText
      items={DIAGNOSTIC_TESTS_HIGH_RISK.map(item => ({text: item}))}
    />
  </SevenTwentyEightLayout>
))

export default DiagnosticTestsHighRisk;
