import React from 'react';
import AntibioticDisplay from 'Modules/FebrileInfant/components/AntibioticDisplay';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import { Text } from 'react-native';
import styles from '../../styles';
import { OPTIONAL_EMPIRIC_OPTIONS } from './config';
import { ADMISSION_RECOMMENDATIONS } from './routes';
import SevenTwentyEightLayout from './SevenTwentyEightLayout';

const LowAntibioticRecommendations = React.memo(() => {
  return (
    <SevenTwentyEightLayout
      bottomButtonTitle={febrileText.sevenTwentyEight.admissionRecommendations}
      bottomButtonRoute={ADMISSION_RECOMMENDATIONS}
    >
      <>
        <Text style={styles.titleText}>{febrileText.sevenTwentyEight.antibioticRecommendations}</Text>
        <Text style={[styles.regularText, styles.textMargin]}>{febrileText.sevenTwentyEight.antibioticRecommendations}</Text>
        <Text style={[styles.regularText, styles.textMargin]}>
          {febrileText.sevenTwentyEight.antibioticRecommendationsInfoFirst}
          <Text style={styles.underlineText}> {febrileText.sevenTwentyEight.not} </Text>
          {febrileText.sevenTwentyEight.reqired}
        </Text>
        <Text style={[styles.regularText, styles.textMargin]}>{febrileText.sevenTwentyEight.antibioticRecommendationsInfoSecond}</Text>

        <Text style={[styles.titleText, {marginTop: 12}]}>{febrileText.sevenTwentyEight.optionalEmpiricAntibioticOptions}</Text>
        <Text style={styles.centeredRegulatText}>{febrileText.sevenTwentyEight.cefotaxinePlusAmpicilin}</Text>
        <Text style={[styles.centerOrangeText, styles.boldText, styles.textMargin, {marginTop: 12}]}>{febrileText.sevenTwentyEight.or}</Text>
        <Text style={[styles.centeredRegulatText, styles.textMargin]}>{febrileText.sevenTwentyEight.ampicilinePlusGentamicin}</Text>
        {OPTIONAL_EMPIRIC_OPTIONS.map(item => (
          <AntibioticDisplay item={item} key={item.code} />
        ))}
      </>
    </SevenTwentyEightLayout>
  )
})

export default LowAntibioticRecommendations;
