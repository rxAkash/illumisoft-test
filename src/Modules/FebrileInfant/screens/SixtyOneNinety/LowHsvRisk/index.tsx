import React, { useState } from "react";
import { febrileText } from "Modules/FebrileInfant/config/strings";
import { Text, View } from "react-native";
import styles from "../../../styles";
import SixtyNineNinetyLayout from "../SixtyNineNinetyLayout";
import CheckboxItem from "Modules/FebrileInfant/components/CheckboxItem";
import {
  HIGH_RISK_BACKTERIAL_INFECTION,
  HIGH_RISK_BACTERIAL_DISPOSITION,
} from "../routes";
import { LOW_RISK_HSV_ASSESSMENT } from "./conf";
import { useFocusEffect } from "@react-navigation/native";

const LowHsvRisk = React.memo(() => {
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

  useFocusEffect(
    React.useCallback(() => {
      setCheckedItems({});
      return;
    }, [])
  );

  const noItemsWasChecked = () => {
    return Object.keys(checkedItems).length === 0;
  };

  return (
    <>
      <SixtyNineNinetyLayout
        bottomButtonTitle={
          noItemsWasChecked()
            ? "Next"
            : "Proceed to High-Risk Bacterial Infection Recommendations"
        }
        bottomButtonRoute={
          noItemsWasChecked()
            ? HIGH_RISK_BACTERIAL_DISPOSITION
            : HIGH_RISK_BACKTERIAL_INFECTION
        }
      >
        <View>
          <Text style={styles.titleText}>
            {
              febrileText.sixtyOneNinety.bacterialInfectionAssesment
                .headingTitle
            }
          </Text>
          <Text style={styles.regularText}>
            {
              febrileText.sixtyOneNinety.bacterialInfectionAssesment
                .headingSubText
            }
            {"\n"}
          </Text>

          {LOW_RISK_HSV_ASSESSMENT.map((value, i) => (
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

export default LowHsvRisk;
