import React from 'react';
import AntibioticDisplay from 'Modules/FebrileInfant/components/AntibioticDisplay';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import { Text } from 'react-native';
import styles from '../../styles';
import { ANTIBIOTIC_RECCOMENDATIONS, EMPIRIC_OPTIONS } from './config';
import { ADMISSION_RECOMMENDATIONS } from './routes';
import SevenTwentyEightLayout from './SevenTwentyEightLayout';

const AntibioticRecommendations = React.memo(() => (
  <SevenTwentyEightLayout
    bottomButtonRoute={ADMISSION_RECOMMENDATIONS}
    bottomButtonTitle={febrileText.sevenTwentyEight.admissionRecommendations}
  >
    <>
      <Text style={styles.titleText}>{febrileText.sevenTwentyEight.antibioticAntiviral}</Text>
      {ANTIBIOTIC_RECCOMENDATIONS.map(item => (
        <AntibioticDisplay item={item} key={item.code} />
      ))}
      <Text style={[styles.centerOrangeText, styles.boldText, {marginTop: 12}]}>{febrileText.sevenTwentyEight.plus}</Text>
      <Text style={[styles.titleText, {marginTop: 12}]}>{febrileText.sevenTwentyEight.empiricAntibioticOptions}</Text>
      <Text style={styles.centeredRegulatText}>{febrileText.sevenTwentyEight.cefotaxinePlusAmpicilin}</Text>
      <Text style={[styles.centerOrangeText, styles.boldText, {marginTop: 12}]}>{febrileText.sevenTwentyEight.or}</Text>
      <Text style={[styles.centeredRegulatText, styles.textMargin]}>{febrileText.sevenTwentyEight.ampicilinePlusGentamicin}</Text>
      {EMPIRIC_OPTIONS.map(item => (
        <AntibioticDisplay item={item} key={item.code} />
      ))}
    </>
  </SevenTwentyEightLayout>
))

export default AntibioticRecommendations;
