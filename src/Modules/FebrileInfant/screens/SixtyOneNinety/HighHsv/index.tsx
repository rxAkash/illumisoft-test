import React from "react";
import { febrileText } from "Modules/FebrileInfant/config/strings";
import { Text } from "react-native";
import BulletList from "UIToolkit/BulletList";
import styles from "../../../styles";
import SixtyNineNinetyLayout from "../SixtyNineNinetyLayout";
import { HOSPITAL_ADMISSION } from "../routes";
import { LIST_CONTENT } from "./conf";

const HighRiskHsv = React.memo(() => (
  <>
    <SixtyNineNinetyLayout
      bottomButtonTitle={"Proceed to Hospital Admission Recommendations "}
      bottomButtonRoute={HOSPITAL_ADMISSION}
    >
      <Text style={styles.titleText}>{febrileText.sixtyOneNinety.highRiskHsv.headingTitle}</Text>
      <Text style={[styles.regularText,{fontWeight:"700"}]}>
        {febrileText.sixtyOneNinety.highRiskHsv.secondaryTitle}
        {"\n"}
      </Text>

      <Text style={styles.regularText}>
        {febrileText.sixtyOneNinety.highRiskHsv.information1}
        {"\n"}
      </Text>

      <Text style={styles.regularText}>
        {febrileText.sixtyOneNinety.highRiskHsv.information2}
        {"\n"}
      </Text>

      <BulletList
        lightText
        largeText
        items={LIST_CONTENT}
      />
    </SixtyNineNinetyLayout>
  </>
));

export default HighRiskHsv;
