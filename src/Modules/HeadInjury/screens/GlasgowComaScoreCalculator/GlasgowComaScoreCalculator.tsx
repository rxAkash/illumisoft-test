import HeadInjuryLayout from 'Modules/HeadInjury/components/HeadInjuryLayout';
import { headInjuryText } from 'Modules/HeadInjury/config/strings';
import React from 'react';
import { View } from 'react-native';
import GlasgowCommaCalculator from 'UIToolkit/GlasgowComaScore';
import styles from '../../styles';

const PEDIATRIC_GLASGOW_AGE = 5;

const GlasgowComaScoreCalculator = React.memo(() => {

  return (
    <HeadInjuryLayout
      title={headInjuryText.pediatricGlasgowScore.title}
    >
      <View style={styles.container}>
        <GlasgowCommaCalculator age={PEDIATRIC_GLASGOW_AGE} />
      </View>
    </HeadInjuryLayout> 
  )
})

export default GlasgowComaScoreCalculator;
