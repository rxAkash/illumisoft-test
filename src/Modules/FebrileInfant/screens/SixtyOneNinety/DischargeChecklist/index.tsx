import { useFocusEffect } from '@react-navigation/native';
import CheckboxItem from 'Modules/FebrileInfant/components/CheckboxItem';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from "../../../styles";
import DischargeChecklist from '../../DischargeChecklist';
import { DISCHARGE_CHECKLIST_CONF, DISCHARGE_CHECKLIST_RECOMMENDATION } from '../../DischargeChecklist/conf';
import TwentyNineSixtyLayout from '../../TwentyNineSixtyPathway/TwentyNineSixtyLayout';
import { HOSPITAL_ADMISSION_1C, HOSPITAL_ADMISSION_1D } from '../routes';
import SixtyNineNinetyLayout from '../SixtyNineNinetyLayout';



interface Props {
  hospitalAdmissionRoute: string;
  infoText: string;
}

const DischargeChecklistTwentyNineSixty = React.memo(
  ({ hospitalAdmissionRoute, infoText }: Props) => {
    const [checkedItems, setCheckedItems] = useState<any>({});
    useFocusEffect(
      React.useCallback(() => {
        setCheckedItems({});
        return;
      }, [])
    );
    const onCheck = (item: any) => {
      const newItems = { ...checkedItems };
      if (checkedItems[item.id]) {
        delete newItems[item.id];
      } else {
        newItems[item.id] = item;
      }
      setCheckedItems(newItems);
    };

    const notAllItemsAreChecked = () => {
      return Object.keys(checkedItems).length !== 4;
    };

    return (
      <>
        <SixtyNineNinetyLayout
          bottomButtonTitle={
            notAllItemsAreChecked()
              ? "Proceed to Hospital Admission Recommendations"
              : ""
          }
          bottomButtonRoute={
            notAllItemsAreChecked() ? HOSPITAL_ADMISSION_1D : ""
          }
        >
          <View>
            <Text style={styles.titleText}>
              {febrileText.sixtyOneNinety.dischargeChecklist.headingTitle}
            </Text>
            <Text style={styles.regularText}>
            {febrileText.sixtyOneNinety.dischargeChecklist.info1}
              {"\n"}
            </Text>
            {DISCHARGE_CHECKLIST_CONF.map((value, i) => (
              <CheckboxItem
                key={i}
                item={value}
                onCheck={onCheck}
                checked={checkedItems[value.id] !== undefined}
              />
            ))}
            {!notAllItemsAreChecked() && (
              <View>
                <Text style={styles.regularText}>
                  {"Recommendations:"}
                  {"\n"}
                </Text>
                {DISCHARGE_CHECKLIST_RECOMMENDATION.map((value, i) => (
                  <Text key={i} style={styles.regularText}>
                    {value.text}
                  </Text>
                ))}
              </View>
            )}
          </View>
        </SixtyNineNinetyLayout>
      </>
    );
  }
);


export default DischargeChecklistTwentyNineSixty;
