import React from 'react';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import { Text } from 'react-native';
import styles from '../../styles';
import { HSV_CHECKLIST } from './routes';
import TwentyNineSixtyLayout from './TwentyNineSixtyLayout';

const DiagnosticTests = React.memo(() => {
  return (
    <TwentyNineSixtyLayout
      bottomButtonTitle={febrileText.sevenTwentyEight.proceedToHSVRiskAssessment}
      bottomButtonRoute={HSV_CHECKLIST}
    >
      <Text style={styles.titleText}>{febrileText.twentyNineSixty.diagnosticTests}</Text>
      <Text style={styles.regularText}>{febrileText.twentyNineSixty.diagnosticTestsInfo}{'\n'}</Text>
      <Text style={styles.regularText}>{febrileText.twentyNineSixty.initLab}{'\n'}</Text>
      <Text style={styles.regularText}>{febrileText.twentyNineSixty.urinSpec}{'\n'}</Text>
      <Text style={styles.regularText}>{febrileText.twentyNineSixty.CBCdiff}</Text>
      <Text style={styles.boldText}>{febrileText.twentyNineSixty.plus}</Text>
      <Text style={styles.regularText}>{febrileText.twentyNineSixty.cReact}{'\n'}</Text>
      <Text style={styles.regularText}>{febrileText.twentyNineSixty.bloodCulture}{'\n'}</Text>
      <Text style={styles.regularText}>{febrileText.twentyNineSixty.respViralTesting}{'\n'}</Text>
      <Text style={styles.regularText}>
        <Text style={styles.underlineText}>{febrileText.twentyNineSixty.chestXray}</Text>
        {febrileText.twentyNineSixty.chestXrayCon}{'\n'}
      </Text>
      <Text style={styles.regularText}>{febrileText.twentyNineSixty.nextAssess}{'\n'}</Text>
    </TwentyNineSixtyLayout>
      
  )
})

export default DiagnosticTests;
