import React, { useLayoutEffect, useState } from "react";
import { febrileText } from "Modules/FebrileInfant/config/strings";
import { Text, View } from "react-native";
import styles from "../../../styles";
import SixtyNineNinetyLayout from "../SixtyNineNinetyLayout";
import CheckboxItem from "Modules/FebrileInfant/components/CheckboxItem";
import { HOSPITAL_ADMISSION_1D } from "../routes";
import { LOW_RISK_INFNANT, RECOMMENDATION } from "./conf";
import BulletList from "UIToolkit/BulletList";

const DischargeChecklistLowRisk = React.memo(() => {
  const [checkedItems, setCheckedItems] = useState<any>({});

  useLayoutEffect(
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

  const noItemsWasChecked = () => {
    return Object.keys(checkedItems).length === 0;
  };

  return (
    <>
      <SixtyNineNinetyLayout
        bottomButtonTitle={
          noItemsWasChecked()
            ? febrileText.sixtyOneNinety.lowRiskInfnant.buttonText1
            : ""
        }
        bottomButtonRoute={noItemsWasChecked() ? HOSPITAL_ADMISSION_1D : ""}
      >
        <View>
          <Text style={styles.titleText}>
            {febrileText.sixtyOneNinety.lowRiskInfnant.headingText}
          </Text>
          <Text style={styles.regularText}>
            {febrileText.sixtyOneNinety.lowRiskInfnant.info}
            {"\n"}
          </Text>
          <Text style={styles.titleText}>
            {febrileText.sixtyOneNinety.lowRiskInfnant.headingText2}
          </Text>
          <Text style={styles.regularText}>
            {febrileText.sixtyOneNinety.lowRiskInfnant.regularText}
            {"\n"}
          </Text>
          {LOW_RISK_INFNANT.map((value, i) => (
            <CheckboxItem
              key={i}
              item={value}
              onCheck={onCheck}
              checked={checkedItems[value.id] !== undefined}
            />
          ))}
          {Object.keys(checkedItems).length === 4 && (
            <>
              <Text style={[styles.regularText, { fontWeight: "600" }]}>
                Recommendation:
                {"\n"}
              </Text>

              <BulletList lightText largeText items={RECOMMENDATION} />
            </>
          )}
        </View>
      </SixtyNineNinetyLayout>
    </>
  );
});

export default DischargeChecklistLowRisk;
