import React, { useState } from 'react';
import { Text } from 'react-native';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import styles from '../../styles';
import CheckboxItem from 'Modules/FebrileInfant/components/CheckboxItem';
import { LOW_RISK_ADMISSION_RECOMMENDATIONS } from './routes';
import { DISCHARGE_CHECKLIST_LOW_RISK } from './config';
import TwentyNineSixtyLayout from './TwentyNineSixtyLayout';

const DischargeChecklistLowRisk = React.memo(() => {
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

  return (
    <TwentyNineSixtyLayout
      bottomButtonTitle={febrileText.twentyNineSixty.lowRiskReccomendations}
      bottomButtonRoute={LOW_RISK_ADMISSION_RECOMMENDATIONS}
    >
      <>
        <Text style={styles.titleText}>{febrileText.twentyNineSixty.dischargeChecklistLowRisk}</Text>
        <Text style={[styles.regularText, styles.textMargin]}>{febrileText.twentyNineSixty.dischargeChecklistLowRiskInfo}</Text>
        {DISCHARGE_CHECKLIST_LOW_RISK.map(item => (
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

export default DischargeChecklistLowRisk;
