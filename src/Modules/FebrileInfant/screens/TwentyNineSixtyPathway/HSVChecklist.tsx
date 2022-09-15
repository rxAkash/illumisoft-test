import React, { useState } from 'react';
import { Text } from 'react-native';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import styles from '../../styles';
import { HSV_CHECKLIST } from './config';
import CheckboxItem from 'Modules/FebrileInfant/components/CheckboxItem';
import { HSV_HIGH_RISK_RECOMMENDATIONS, HSV_LOW_RISK_RECOMMENDATIONS } from './routes';
import TwentyNineSixtyLayout from './TwentyNineSixtyLayout';

const HSVChecklist = React.memo(() => {
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
      return HSV_HIGH_RISK_RECOMMENDATIONS;
    } else {
      return HSV_LOW_RISK_RECOMMENDATIONS;
    }
  }

  const buttonText = () => {
    if(Object.keys(checkedItems).length) {
      return febrileText.twentyNineSixty.hsvHighRiskRecommendationsButton
    } else {
      return febrileText.twentyNineSixty.hsvLowRiskRecommendations
    }
  }

  return (
    <TwentyNineSixtyLayout
      bottomButtonTitle={buttonText()}
      bottomButtonRoute={buttonRoute()}
    >
      <>
        <Text style={styles.titleText}>{febrileText.sevenTwentyEight.hsvChecklist}</Text>
        <Text style={[styles.regularText, styles.textMargin]}>{febrileText.twentyNineSixty.hsvChecklistInfo}</Text>
        {HSV_CHECKLIST.map(item => (
          <CheckboxItem
            key={item.id.toString()}
            item={item}
            onCheck={onCheck}
            checked={checkedItems[item.id] !== undefined}
          />
        ))}
      </>
    </TwentyNineSixtyLayout>
  )
})

export default HSVChecklist;
