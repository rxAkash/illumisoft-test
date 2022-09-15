import React from 'react';
import { Text, View } from 'react-native';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import styles from '../../styles';
import { OBSERVATION_TREATMENT } from './routes';
import { OPTIONAL_ANTIBIOTICS_CONFIG } from './config';
import TwentyNineSixtyLayout from './TwentyNineSixtyLayout';

const OptionalAntibioticOptions = React.memo(() => (
  <TwentyNineSixtyLayout
    bottomButtonRoute={OBSERVATION_TREATMENT}
    bottomButtonTitle={febrileText.twentyNineSixty.observationTreatment}
  >
    <>
      <Text style={styles.titleText}>{febrileText.twentyNineSixty.optionalAntibioticChoices}</Text>
      {OPTIONAL_ANTIBIOTICS_CONFIG.map((item, index) => item.or ? (
        <Text style={styles.centerOrangeText} key={index.toString()}>OR</Text>
      ) : (
        <View style={styles.antibioticRow} key={index.toString()}>
          <Text style={styles.regularText}>{item.title}</Text>
          <Text style={styles.regularText}>{item.dose}</Text>
          <Text style={styles.regularText}>{item.code}</Text>
        </View>
      ))}
      <Text style={[styles.regularText, {marginTop: 12}]}>{febrileText.twentyNineSixty.optionalAntibioticsInfo}</Text>
    </>
  </TwentyNineSixtyLayout>
))

export default OptionalAntibioticOptions;
