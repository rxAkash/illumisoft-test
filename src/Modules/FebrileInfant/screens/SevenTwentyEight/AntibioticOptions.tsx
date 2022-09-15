import React from 'react';
import AntibioticDisplay from 'Modules/FebrileInfant/components/AntibioticDisplay';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import { Text } from 'react-native';
import styles from '../../styles';
import { EMPIRIC_OPTIONS } from './config';
import { ADMISSION_RECOMMENDATIONS } from './routes';
import SevenTwentyEightLayout from './SevenTwentyEightLayout';

const AntibioticOptions = React.memo(() => (
  <SevenTwentyEightLayout
    bottomButtonTitle={febrileText.sevenTwentyEight.admissionRecommendations}
    bottomButtonRoute={ADMISSION_RECOMMENDATIONS}
  >
    <>
      <Text style={styles.titleText}>{febrileText.sevenTwentyEight.antibioticOptions}</Text>
      <Text style={styles.centeredRegulatText}>{febrileText.sevenTwentyEight.cefotaxinePlusAmpicilin}</Text>
      <Text style={[styles.centerOrangeText, styles.boldText, styles.textMargin, {marginTop: 12}]}>{febrileText.sevenTwentyEight.or}</Text>
      <Text style={[styles.centeredRegulatText, styles.textMargin]}>{febrileText.sevenTwentyEight.ampicilinePlusGentamicin}</Text>
      <Text style={styles.titleText}>{febrileText.sevenTwentyEight.antibioticDosing}</Text>
      {EMPIRIC_OPTIONS.map(item => (
        <AntibioticDisplay item={item} key={item.code} />
      ))}
      <Text style={[styles.regularText, {marginTop: 12}]}>{febrileText.sevenTwentyEight.antibioticOptionsInfoFirst}</Text>
    </>
  </SevenTwentyEightLayout>
))

export default AntibioticOptions;
