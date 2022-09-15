import React from 'react';
import AntibioticDisplay from 'Modules/FebrileInfant/components/AntibioticDisplay';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import { Text } from 'react-native';
import styles from '../../styles';
import { ADMISSION_ANTIBIOTIC_RECOMMENDATIONS } from './config';
import { INPAINET_OBSERVATIONS } from './routes';
import TwentyNineSixtyLayout from './TwentyNineSixtyLayout';

const AdmissionAntibioticRecommendations = React.memo(() => (
  <TwentyNineSixtyLayout
    bottomButtonTitle={febrileText.twentyNineSixty.inpatinetObservations}
    bottomButtonRoute={INPAINET_OBSERVATIONS}
  >
    <>
      <Text style={styles.titleText}>{febrileText.twentyNineSixty.admissionAntibioticRecommendations}</Text>
      <Text style={[styles.centeredRegulatText, {marginTop: 12}]}>{febrileText.sevenTwentyEight.empiricAntibioticOptions}:</Text>
      <Text style={[styles.centeredRegulatText, {marginTop: 12}]}>{febrileText.sevenTwentyEight.cefotaxinePlusAmpicilin}</Text>
      <Text style={[styles.centerOrangeText, styles.boldText, {marginTop: 12}]}>{febrileText.sevenTwentyEight.or}</Text>
      <Text style={styles.centeredRegulatText}>{febrileText.twentyNineSixty.ceftriaxonePlusAmpicilin}</Text>
      <Text style={[styles.centerOrangeText, styles.boldText, {marginTop: 12}]}>{febrileText.sevenTwentyEight.or}</Text>
      <Text style={[styles.centeredRegulatText, styles.textMargin]}>{febrileText.sevenTwentyEight.ampicilinePlusGentamicin}</Text>
      {ADMISSION_ANTIBIOTIC_RECOMMENDATIONS.map(item => (
        <AntibioticDisplay item={item} key={item.code} />
      ))}
    </>
  </TwentyNineSixtyLayout>
))

export default AdmissionAntibioticRecommendations;
