import React from "react";
import { febrileText } from "Modules/FebrileInfant/config/strings";
import { Text } from "react-native";
import BulletList from "UIToolkit/BulletList";
import styles from "../../../styles";
import SixtyNineNinetyLayout from "../SixtyNineNinetyLayout";
import { HSV_CHECKLIST } from "../routes";
import { DIAGNOSTIC_INFO } from "./conf";

const DiagnosticTests = React.memo(() => (
  <SixtyNineNinetyLayout
    bottomButtonTitle={"Proceed to HSV Risk Assessment "}
    bottomButtonRoute={HSV_CHECKLIST}>
    <Text style={styles.titleText}>{febrileText.diagnosticTests.title}</Text>
    <Text style={styles.regularText}>
      {febrileText.sixtyOneNinety.diagnosticDisclaimer.info}
      {"\n"}
    </Text>
    <BulletList
      lightText
      largeText
      items={DIAGNOSTIC_INFO}
    />
  </SixtyNineNinetyLayout>
));

export default DiagnosticTests;
