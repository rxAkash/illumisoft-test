import React from "react";
import { febrileText } from "Modules/FebrileInfant/config/strings";
import { Text, View } from "react-native";
import BulletList from "UIToolkit/BulletList";
import styles from "../../../styles";
import SixtyNineNinetyLayout from "../SixtyNineNinetyLayout";
import { HIGH_RISK_BACKTERIAL_INFECTION, HIGH_RISK_BACKTERIAL_UAPATHWAY_INFECTION } from "../routes";
import { HIGH_RISK_REC_BULLET_POINTS } from "./conf";

const HighRiskRecommendation = React.memo(() => (
  <>
    <SixtyNineNinetyLayout
      bottomButtonTitle={"Next"}
      bottomButtonRoute={HIGH_RISK_BACKTERIAL_UAPATHWAY_INFECTION}
      routeParams={{question3:true}}
    >
      <Text style={styles.titleText}>{febrileText.sixtyOneNinety.highRiskRecommendation.heading}</Text>

      <Text style={styles.regularText}>
        {febrileText.sixtyOneNinety.highRiskRecommendation.Title}
        {"\n"}
      </Text>

      <BulletList
        lightText
        largeText
        items={HIGH_RISK_REC_BULLET_POINTS}
      />
    </SixtyNineNinetyLayout>
  </>
));

export default HighRiskRecommendation;
