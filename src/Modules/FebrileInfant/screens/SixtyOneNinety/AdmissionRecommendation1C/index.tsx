import React from "react";
import { febrileText } from "Modules/FebrileInfant/config/strings";
import { Text } from "react-native";
import styles from "../../../styles";
import SixtyNineNinetyLayout from "../SixtyNineNinetyLayout";
import {  ADMISSION_RECOMMENDATIONS_LIST1C } from "./conf";

const AdmissionRecommedation1C = React.memo(() => (
  <>
    <SixtyNineNinetyLayout
    >
      <Text style={styles.titleText}>{febrileText.sixtyOneNinety.hospitalAdmissionRecommendation.headingTitle}</Text>
      <>
        {ADMISSION_RECOMMENDATIONS_LIST1C.map((value, i) => (
          <Text key={i} style={[styles.regularText]}>
            {value.text}
            {"\n"}
          </Text>
        ))}
      </>
    </SixtyNineNinetyLayout>
  </>
));

export default AdmissionRecommedation1C;
