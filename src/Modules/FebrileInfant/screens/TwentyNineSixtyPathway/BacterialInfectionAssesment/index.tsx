import React, { useState } from 'react';
import { Text} from 'react-native';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import styles from '../../../styles';
import { BACTERIAL_INFECTION_CONFIG } from './config';
import CheckboxItem from 'Modules/FebrileInfant/components/CheckboxItem';
import { DISPOSITION_RECOMMENDATIONS_LOW, HIGH_RISK_FOR_BACTERIAL_INFECTION, LOW_RISK_BACTERIAL_RECOMMENDATIONS } from '../routes';
import TwentyNineSixtyLayout from '../TwentyNineSixtyLayout';

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
      return HIGH_RISK_FOR_BACTERIAL_INFECTION;
    } else {
      return DISPOSITION_RECOMMENDATIONS_LOW;
    }
  }

  const buttonText = () =>{
    if(Object.keys(checkedItems).length) {
      return febrileText.twentyNineSixty.increasedRiskForBacterial
    } else {
      return febrileText.twentyNineSixty.lowRiskBacterialReccomendations
    }
  }

  return (
    <TwentyNineSixtyLayout
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
    </TwentyNineSixtyLayout>
  )
})

export default BacterialInfectionAssesment;
