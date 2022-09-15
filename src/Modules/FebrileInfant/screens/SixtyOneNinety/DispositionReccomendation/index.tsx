import React from "react";
import { febrileText } from "Modules/FebrileInfant/config/strings";
import { Text, View } from "react-native";
import styles from "../../../styles";
import SixtyNineNinetyLayout from "../SixtyNineNinetyLayout";
import { DISCHARGE_CHECKLIST } from "../routes";

const DispositionReccomendation = React.memo(() => (
  <>
    <SixtyNineNinetyLayout
      bottomButtonTitle="Proceed to Discharge Checklist"
      bottomButtonRoute={DISCHARGE_CHECKLIST}
    >
      <Text style={styles.titleText}>{febrileText.sixtyOneNinety.dispositionRecommendation.headingTitle}</Text>
      <>
        <Text  style={ [styles.regularText, {fontWeight:'600'}]}>
          {febrileText.sixtyOneNinety.dispositionRecommendation.info1}
          {"\n"}
        </Text>
        <View style={styles.infoContainer}>
          <Text  style={[styles.regularText]}>
            {febrileText.sixtyOneNinety.dispositionRecommendation.info2}
            {"\n"}
          </Text>
        </View>

        <Text  style={[styles.regularText, {marginTop: 30, fontWeight:'600'}]}>
          {febrileText.sixtyOneNinety.dispositionRecommendation.info3}
          {"\n"}
        </Text>
      </>
    </SixtyNineNinetyLayout>
  </>
));

export default DispositionReccomendation;
