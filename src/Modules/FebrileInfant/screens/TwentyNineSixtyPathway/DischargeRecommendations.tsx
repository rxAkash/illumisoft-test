import React from 'react';
import { NavigationProp } from '@react-navigation/core';
import { Text } from 'react-native';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import styles from '../../styles';
import { INCREASED_RISK_FOR_BACTERIAL_INFECTION } from './routes';
import TwentyNineSixtyLayout from './TwentyNineSixtyLayout';

interface Props {
  navigation: NavigationProp<any>;
}

const DischargeRecommendations = React.memo(({navigation}: Props) => {
  const openLink = () => {
    navigation.navigate(INCREASED_RISK_FOR_BACTERIAL_INFECTION);
  }

  return (
    <TwentyNineSixtyLayout restartButton>
      <Text style={styles.titleText}>{febrileText.twentyNineSixty.dischargeRecommendations}</Text>
      <Text style={styles.regularText}>{febrileText.twentyNineSixty.dischargeRecommendationsInfoFirst}{'\n'}</Text>
      <Text style={styles.regularText}>
        {febrileText.twentyNineSixty.dischargeRecommendationsInfoSecondStart}{' '}
        <Text style={styles.underlineText}>
          {febrileText.twentyNineSixty.dischargeRecommendationsInfoSecondUnderline}{' '}
        </Text>
        {febrileText.twentyNineSixty.dischargeRecommendationsInfoSecondCenter}{' '}
        <Text style={[styles.boldText, styles.underlineText]}>{febrileText.twentyNineSixty.dischargeRecommendationsInfoBoldUnderline}</Text>
        {febrileText.twentyNineSixty.dischargeRecommendationsInfoSecondFinish}{'\n\n'}
      </Text>
      <Text style={styles.regularText}>
        <Text style={styles.underlineText}>{febrileText.twentyNineSixty.dischargeRecommendationsInfoThirdUnderline}</Text>
        {febrileText.twentyNineSixty.dischargeRecommendationsInfoThird}
        <Text style={styles.blueText} onPress={openLink}>{febrileText.twentyNineSixty.dischargeRecommendationsInfoThirdLink}</Text>
      </Text>
    </TwentyNineSixtyLayout>
  )
})

export default DischargeRecommendations;
