import { NavigationProp } from '@react-navigation/core';
import React from 'react';
import { Text } from 'react-native';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import styles from '../../styles';
import { INCREASED_RISK_FOR_BACTERIAL_INFECTION, OPTIONAL_ANTIBIOTICS_OPTIONS } from './routes';
import TwentyNineSixtyLayout from './TwentyNineSixtyLayout';
interface Props {
  navigation: NavigationProp<any>;
}

const LowRiskAdmissionRecommendations = React.memo(({navigation}: Props) => {
  const openLink = () => {
    navigation.navigate(INCREASED_RISK_FOR_BACTERIAL_INFECTION);
  }

  return (
    <TwentyNineSixtyLayout
      bottomButtonTitle={febrileText.twentyNineSixty.optionalAntibioticChoices}
      bottomButtonRoute={OPTIONAL_ANTIBIOTICS_OPTIONS}
    >
      <Text style={styles.titleText}>{febrileText.twentyNineSixty.lowRiskReccomendations}</Text>
      <Text style={styles.regularText}>{febrileText.twentyNineSixty.lowRiskReccomendationsInfoFirst}{'\n'}</Text>
      <Text style={styles.regularText}>
        <Text style={styles.underlineText}>{febrileText.twentyNineSixty.lowRiskReccomendationsInfoUnderline}</Text>
        {febrileText.twentyNineSixty.lowRiskReccomendationsInfoSecond}{'\n'}
        <Text style={styles.blueText} onPress={openLink}>
          ({febrileText.twentyNineSixty.lowRiskReccomendationsInfoLink})
        </Text>
      </Text>
    </TwentyNineSixtyLayout>
  )
})

export default LowRiskAdmissionRecommendations;
