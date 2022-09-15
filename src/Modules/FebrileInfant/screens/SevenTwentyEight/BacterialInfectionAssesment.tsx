import React, { useState } from 'react';
import { Text } from 'react-native';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import styles from '../../styles';
import { BACTERIAL_INFECTION_CONFIG } from './config';
import CheckboxItem from 'Modules/FebrileInfant/components/CheckboxItem';
import { HIGN_RISK_RECCOMENDATIONS, URINALYSIS_QUESTIONS } from './routes';
import SevenTwentyEightLayout from './SevenTwentyEightLayout';

const BacterialInfectionAssesment = React.memo(() => {
  const [checkedItems, setCheckedItems] = useState<any>({});

  const onCheck = (item: any) => {
    const newItems = {...checkedItems};
    if(checkedItems[item.id]) {
      delete newItems[item.id]
    } else {
      newItems[item.id] = item
    }
    setCheckedItems(newItems);
  }

  const buttonRoute = () => {
    if(Object.keys(checkedItems).length) {
      return HIGN_RISK_RECCOMENDATIONS
    } else {
      return URINALYSIS_QUESTIONS
    }
  }

  const buttonText = () =>{
    if(Object.keys(checkedItems).length) {
      return febrileText.sevenTwentyEight.highRiskReccomendations
    } else {
      return febrileText.sevenTwentyEight.urinalysisQuestions
    }
  }

  return (
    <SevenTwentyEightLayout
      bottomButtonTitle={buttonText()}
      bottomButtonRoute={buttonRoute()}
    >
      <>
        <Text style={styles.titleText}>{febrileText.sevenTwentyEight.bacterialInfectionAssesment}</Text>
        <Text style={[styles.regularText, styles.textMargin]}>{febrileText.sevenTwentyEight.bacterialInfectionInfo}</Text>
        {BACTERIAL_INFECTION_CONFIG.map(item => (
          <CheckboxItem
            key={item.id.toString()}
            item={item}
            onCheck={onCheck}
            checked={checkedItems[item.id] !== undefined}
          />
        ))}
      </>
    </SevenTwentyEightLayout>
  )
})

export default BacterialInfectionAssesment;
