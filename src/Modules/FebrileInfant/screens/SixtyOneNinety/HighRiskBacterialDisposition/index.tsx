import React, { useState } from 'react';
import { Text, View } from 'react-native';
import SixtyNineNinetyLayout from "../SixtyNineNinetyLayout";
import styles from '../../../styles';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import { DISPOSITIONS_RECOMMENDATIONS_ANSWER_SETS, DISPOSITION_RECOMMENDATIONS_QUESTIONS } from './conf';
import QuestionsFlow from 'UIToolkit/QuestionsFlow';

const HighRiskDisposition1A = React.memo(() => {
  const [resultButton, setResultButton] = useState<any>()

  const onResult = (result: any) => {
    setResultButton(result)
  }

  return (
    
    <SixtyNineNinetyLayout
      hideButton={!resultButton}
      bottomButtonTitle={resultButton && resultButton.routeTitle}
      bottomButtonRoute={resultButton && resultButton.routeName}
    >
      <View>
        <Text style={styles.titleText}>{febrileText.sevenTwentyEight.dispositionRecommendations}</Text>
        <QuestionsFlow
          questions={DISPOSITION_RECOMMENDATIONS_QUESTIONS}
          answerSets={DISPOSITIONS_RECOMMENDATIONS_ANSWER_SETS}
          onResult={onResult}
        />
      </View>
    </SixtyNineNinetyLayout>
  )
})

export default HighRiskDisposition1A;

