import React, { useState } from 'react';
import { Text } from 'react-native';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import styles from '../../styles';
import { DISCARGE_ADMISSION_CHECKLIST } from './config';
import CheckboxItem from 'Modules/FebrileInfant/components/CheckboxItem';
import { FURTHER_RECOMENDATIONS_OBSERVATIONS } from './routes';
import TwentyNineSixtyLayout from './TwentyNineSixtyLayout';

const DischargeAdmissionChecklist = React.memo(() => {
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
      bottomButtonTitle={febrileText.twentyNineSixty.furtherObservation}
      bottomButtonRoute={FURTHER_RECOMENDATIONS_OBSERVATIONS}
    >
      <>
        <Text style={styles.titleText}>{febrileText.twentyNineSixty.dischargeAdmissionChecklist}</Text>
        <Text style={[styles.regularText, styles.textMargin]}>{febrileText.twentyNineSixty.dischargeAdmissionInfo}</Text>
        {DISCARGE_ADMISSION_CHECKLIST.map(item => (
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

export default DischargeAdmissionChecklist;
