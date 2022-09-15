import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import HeadInjuryLayout from 'Modules/HeadInjury/components/HeadInjuryLayout';
import { headInjuryText } from 'Modules/HeadInjury/config/strings';
import styles from '../../styles';
import Input from 'UIToolkit/Inputs/Input';
import ColoredNavButton from 'UIToolkit/Buttons/ColoredNavButton';
import { primaryColor } from 'UIToolkit/theme/colors';
import { NavigationProp } from '@react-navigation/native';
import { GLASGOW_COMA_SCORE_ASSISTANT, NEUROPROTECTIVE_MEASURES, NEUROPROTECTIVE_MEASURES_RAPID, NEUROPROTECTIVE_MEASURES_RAPID_TEN, NEUROPROTECTIVE_MEASURES_TEN, RISK_STRATIFICATION_ASSESSMENT, RISK_STRATIFICATION_ASSESSMENT_TEN, RISK_STRATIFICATION_ASSESSMENT_TWO } from 'Modules/HeadInjury/navigation/routes';
import { getFinalScoreForGCS } from './conf';

interface Props {
  navigation: NavigationProp<any>;
}

const GlasgowComaScoreInput = React.memo(({navigation}: Props) => {
  const [score, setScore] = useState<string>("");

  const onAssistantPress = () => {
    navigation.navigate(GLASGOW_COMA_SCORE_ASSISTANT)
  }
  
  const onNav = () => {
    const numberScore = parseInt(score);
    const routes = navigation.getState()?.routes;
    const prevRoute = routes[routes.length - 2]; 
    if(prevRoute.name.includes("TEN")){
      if(numberScore <= 8) {
        navigation.navigate(NEUROPROTECTIVE_MEASURES_RAPID);
      }
      if(numberScore >= 9 && numberScore < 14) {
        navigation.navigate(NEUROPROTECTIVE_MEASURES);
      }
      if(numberScore >= 14) {
        navigation.navigate(RISK_STRATIFICATION_ASSESSMENT_TEN);
      }
    }
    if(prevRoute.name.includes("TWO")){
      if(numberScore <= 8) {
        navigation.navigate(NEUROPROTECTIVE_MEASURES_RAPID);
      }
      if(numberScore >= 9 && numberScore < 14) {
        navigation.navigate(NEUROPROTECTIVE_MEASURES);
      }
      if(numberScore >= 14) {
        navigation.navigate(RISK_STRATIFICATION_ASSESSMENT_TWO);
      }
    }
    else{
      if(numberScore <= 8) {
        navigation.navigate(NEUROPROTECTIVE_MEASURES_RAPID);
      }
      if(numberScore >= 9 && numberScore < 14) {
        navigation.navigate(NEUROPROTECTIVE_MEASURES);
      }
      if(numberScore >= 14) {
        navigation.navigate(RISK_STRATIFICATION_ASSESSMENT);
      }
    }
  }


  const renderBottomPanel = () => (
    <View style={styles.bottomContainer}>
      <ColoredNavButton
        title={headInjuryText.pediatricGlasgowScore.next}
        backgroundColor={primaryColor}
        onPress={onNav}
        disabled={!score}
      />
    </View>
  )

  return (
    <HeadInjuryLayout
      title={headInjuryText.pediatricGlasgowScore.inputTitle}
      renderBottomPanel={renderBottomPanel}
    >
      <View style={styles.container}>
        <Text style={styles.subtitleText}>{headInjuryText.pediatricGlasgowScore.doYouKnowTheGCS}</Text>
        <View style={styles.inputContainer}>
          <Input
            value={score}
            onChange={setScore}
            label={headInjuryText.pediatricGlasgowScore.inputLabel}
            placeholder=""
            keyboard='numeric'
            maxLength={2}
          />
        </View>
        <ColoredNavButton
          backgroundColor={primaryColor}
          title={headInjuryText.pediatricGlasgowScore.assistantButton}
          onPress={onAssistantPress}
        />
        <View style={styles.scoreInfoContainer}>
          <Text style={styles.subtitleText}>{headInjuryText.pediatricGlasgowScore.scoreTitle}</Text>
          <View style={styles.score}>
            <Text style={styles.subtitleText}>{getFinalScoreForGCS(score)}</Text>
          </View>
        </View>
      </View>
    </HeadInjuryLayout>
  )
})

export default GlasgowComaScoreInput;
