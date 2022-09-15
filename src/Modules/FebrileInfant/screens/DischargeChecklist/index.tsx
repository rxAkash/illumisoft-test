import React, { useState } from "react";
import { febrileText } from "Modules/FebrileInfant/config/strings";
import { Text, View } from "react-native";
import styles from "../../styles";
import SixtyNineNinetyLayout from "../SixtyOneNinety/SixtyNineNinetyLayout";
import CheckboxItem from "Modules/FebrileInfant/components/CheckboxItem";
import {
  DISCHARGE_CHECKLIST_CONF,
  DISCHARGE_CHECKLIST_RECOMMENDATION,
} from "./conf";
import { useFocusEffect } from "@react-navigation/native";
import TwentyNineSixtyLayout from "../TwentyNineSixtyPathway/TwentyNineSixtyLayout";

interface Props {
  hospitalAdmissionRoute: string;
  infoText: string;
}

const DischargeChecklist = React.memo(
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
        <TwentyNineSixtyLayout
          bottomButtonTitle={
            notAllItemsAreChecked()
              ? "Proceed to Hospital Admission Recommendations"
              : ""
          }
          bottomButtonRoute={
            notAllItemsAreChecked() ? hospitalAdmissionRoute : ""
          }
        >
          <View>
            <Text style={styles.titleText}>
              {febrileText.sixtyOneNinety.dischargeChecklist.headingTitle}
            </Text>
            <Text style={styles.regularText}>
              {infoText}
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
        </TwentyNineSixtyLayout>
      </>
    );
  }
);

export default DischargeChecklist;
