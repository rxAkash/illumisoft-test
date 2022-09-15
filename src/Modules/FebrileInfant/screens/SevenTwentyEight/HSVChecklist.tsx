import React, { useCallback, useState } from 'react';
import { Text } from 'react-native';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import styles from '../../styles';
import { HSV_ASSESMENT } from './config';
import CheckboxItem from 'Modules/FebrileInfant/components/CheckboxItem';
import { DIAGNOSTIC_TESTS_HIGH_RISK, URINALYSIS_QUESTIONS } from './routes';
import SevenTwentyEightLayout from './SevenTwentyEightLayout';
import { useFocusEffect } from '@react-navigation/native';

const HSVChecklist = React.memo(() => {
  const [checkedItems, setCheckedItems] = useState<any>({});
 
  useFocusEffect(
    React.useCallback(() => {
      const clear = ()=>{
        setCheckedItems({});
      }

      return () => clear();
    }, [])
  );


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
    if(Object.keys(checkedItems).length==0) {
      return URINALYSIS_QUESTIONS;
    } else {
      return DIAGNOSTIC_TESTS_HIGH_RISK;
    }
  }

  const buttonText = () => {
    if(Object.keys(checkedItems).length==0) {
      return febrileText.sevenTwentyEight.hsvEvaluation
    } else {
      return febrileText.sevenTwentyEight.hsvReccomendations
    }
  }

  return (
    <SevenTwentyEightLayout
      bottomButtonTitle={buttonText()}
      bottomButtonRoute={buttonRoute()}
    >
      <>
        <Text style={styles.titleText}>{febrileText.sevenTwentyEight.hsvChecklist}</Text>
        <Text style={[styles.regularText, styles.textMargin]}>{febrileText.sevenTwentyEight.hsvChecklistInfo}</Text>
        <Text style={styles.titleText}>{febrileText.sevenTwentyEight.assesment}</Text>
        {HSV_ASSESMENT.map(item => (
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

export default HSVChecklist;
