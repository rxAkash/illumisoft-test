import React from 'react';
import { Text } from 'react-native';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import styles from '../../styles';
import SevenTwentyEightLayout from './SevenTwentyEightLayout';

const AdmissionReccomendations = React.memo(() => (
  <SevenTwentyEightLayout restartButton>
    <Text style={styles.titleText}>{febrileText.sevenTwentyEight.admissionRecommendations}</Text>
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.admissionInfoFirst}{'\n'}</Text>
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.admissionInfoSecondText}{'\n'}</Text>
    <Text style={styles.blueText}>{febrileText.sevenTwentyEight.admissionSubHeader}</Text>
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.admissionAmpicillin}</Text>
    <Text style={styles.orangeText}>{febrileText.sevenTwentyEight.admissionPlus}</Text>
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.admissionCorG}{'\n'}</Text>
  
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.admissionAmpicillinDose}</Text>
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.admissionCeftazidimeDose}</Text>
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.admissionGentamicinDose}{'\n'}</Text>

    <Text style={styles.regularText}>
      <Text style={styles.underlineText}>{febrileText.sevenTwentyEight.admissionInfoThirdUnderline}</Text>
      {febrileText.sevenTwentyEight.admissionInfoThird}{'\n'}
    </Text>
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.admissionCultureInfo}{'\n'}</Text>
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.admissionPcp}{'\n'}</Text>
    
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.admissionInfoFourth}{'\n'}</Text>
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.admissionNote}</Text>
  </SevenTwentyEightLayout>
))

export default AdmissionReccomendations;
