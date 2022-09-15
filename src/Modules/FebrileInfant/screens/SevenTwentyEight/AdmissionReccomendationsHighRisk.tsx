import React from 'react';
import { Text } from 'react-native';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import styles from '../../styles';
import SevenTwentyEightLayout from './SevenTwentyEightLayout';

const AdmissionReccomendationsHighRisk = React.memo(() => (
  <SevenTwentyEightLayout restartButton>
    <Text style={styles.titleText}>{febrileText.sevenTwentyEight.admissionRecommendations}</Text>
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.admissionInfoFirstHR}{'\n'}</Text>
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.admissionInfoSecondTextHR}{'\n'}</Text>
  
    <Text style={styles.blueText}>{febrileText.sevenTwentyEight.admissionEmpiricAntivirals}</Text>
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.admissionAcyclovir}</Text>
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.admissionPendingRes}</Text>
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.admissionPlus}{'\n'}</Text>
  
  
    <Text style={styles.blueText}>{febrileText.sevenTwentyEight.admissionSubHeader}</Text>
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.admissionAmpicillinHR}</Text>
    <Text style={styles.orangeText}>{febrileText.sevenTwentyEight.admissionOR}</Text>
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.admissionCorGHR}{'\n'}</Text>
  
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.admissionAmpicillinDose}</Text>
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.admissionCeftazidimeDose}</Text>
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.admissionGentamicinDose}{'\n'}</Text>

    <Text style={styles.regularText}>
      {febrileText.sevenTwentyEight.admissionCultureInfoHR}{'\n'}
    </Text>    
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.admissionInfoFourthHR}{'\n'}</Text>
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.admissionNoteHR}</Text>
  </SevenTwentyEightLayout>
))

export default AdmissionReccomendationsHighRisk;
