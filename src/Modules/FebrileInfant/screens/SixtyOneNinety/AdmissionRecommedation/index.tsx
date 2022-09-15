import React from "react";
import { febrileText } from "Modules/FebrileInfant/config/strings";
import { Text } from "react-native";
import styles from "../../../styles";
import SixtyNineNinetyLayout from "../SixtyNineNinetyLayout";
import { ADMISSION_RECOMMENDATIONS_LIST } from "./conf";

const AdmissionRecommedation = React.memo(() => (
  <>
    <SixtyNineNinetyLayout
    >
      <Text style={styles.titleText}>{febrileText.sixtyOneNinety.hospitalAdmissionRecommendation.headingTitle}</Text>
      <>
        {ADMISSION_RECOMMENDATIONS_LIST.map((value, i) => (
          <Text key={i} style={[styles.regularText]}>
            {value.text}
            {"\n"}
          </Text>
        ))}
      </>
    </SixtyNineNinetyLayout>
  </>
));

export default AdmissionRecommedation;
