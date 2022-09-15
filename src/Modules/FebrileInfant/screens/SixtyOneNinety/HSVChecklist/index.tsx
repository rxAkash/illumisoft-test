import React, { useState } from "react";
import { febrileText } from "Modules/FebrileInfant/config/strings";
import { Text, View } from "react-native";
import styles from "../../../styles";
import SixtyNineNinetyLayout from "../SixtyNineNinetyLayout";
import CheckboxItem from "Modules/FebrileInfant/components/CheckboxItem";
import { HIGH_RISK_HSV, LOW_HSV_RISK } from "../routes";
import { HSV_ASSESMENTS } from "./conf";
import { useFocusEffect } from "@react-navigation/native";

const HSV_Checklist = React.memo(() => {
  const [checkedItems, setCheckedItems] = useState<any>({});

  const onCheck = (item: any) => {
    const newItems = { ...checkedItems };
    if (checkedItems[item.id]) {
      delete newItems[item.id];
    } else {
      newItems[item.id] = item;
    }
    setCheckedItems(newItems);
  };

  const noItemsWasChecked = () => {
    return Object.keys(checkedItems).length === 0
  }

  useFocusEffect( React.useCallback(() => {
    setCheckedItems({})
    return;
  }, []))

  return (
    <>
      <SixtyNineNinetyLayout
        bottomButtonTitle={noItemsWasChecked()
          ? febrileText.sixtyOneNinety.hsvChecklist.btnLowRisk
          : febrileText.sixtyOneNinety.hsvChecklist.btnHighRisk}
        bottomButtonRoute={noItemsWasChecked() ? LOW_HSV_RISK  : HIGH_RISK_HSV}
      >
        <View>
          <Text style={styles.titleText}>
            {febrileText.sixtyOneNinety.hsvChecklist.headingText}
          </Text>
          <Text style={styles.regularText}>
            {febrileText.sixtyOneNinety.hsvChecklist.Text1}
            {"\n"}
          </Text>
          <Text style={styles.titleText}>
            {febrileText.sixtyOneNinety.hsvChecklist.headingText2}
          </Text>
          {HSV_ASSESMENTS.map((value, i) => (
            <CheckboxItem
              key={i}
              item={value}
              onCheck={onCheck}
              checked={checkedItems[value.id] !== undefined}
            />
          ))}
        </View>
      </SixtyNineNinetyLayout>
    </>
  );
});

export default HSV_Checklist;
