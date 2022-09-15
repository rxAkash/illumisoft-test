import React, { useState } from "react";
import { febrileText } from "Modules/FebrileInfant/config/strings";
import { Text, View } from "react-native";
import styles from "../../../styles";
import SixtyNineNinetyLayout from "../SixtyNineNinetyLayout";
import YesNoButtons from "UIToolkit/Inputs/YesNoButtons";
import { useFocusEffect } from "@react-navigation/native";
import { DISCHARGE_CHECKLIST, HOSPITAL_ADMISSION } from "../routes";

enum Operations {
  QUESTION_1 = "QUESTION_1",
}

const DispositionRecommendation1A = React.memo(() => {
  const [ans, setAnswer] = useState<{ [key: string]: number }>({});
  const onAnswer = (key: string, answers: number) => {
    const newAnswers = {
      ...ans,
      [key]: answers,
    };
    setAnswer(newAnswers);
  };

  /*useFocusEffect(() => {
    setAnswer({"1":1});

    return;
  });*/

  const onDecision = (ans: number, key: string) => {
    console.log(ans);
    switch (key) {
      case Operations.QUESTION_1:
        if (ans === 1) {
          onAnswer(Operations.QUESTION_1, ans);
        } else {
          onAnswer(Operations.QUESTION_1, ans);
        }
        break;
    }
  };

  return (
    <>
      <SixtyNineNinetyLayout
        bottomButtonTitle={
          ans[Operations.QUESTION_1] == 1
            ? "Proceed to Discharge Checklist"
            : "Proceed to Hospital Admission Recommendation"
        }
        bottomButtonRoute={
          ans[Operations.QUESTION_1] == 1
            ? DISCHARGE_CHECKLIST
            : HOSPITAL_ADMISSION
        }
      >
        <Text style={styles.titleText}>
          {febrileText.sixtyOneNinety.DISPOSITION_RECOMMENDATION_1A.heading}
        </Text>
        <Text style={styles.regularText}>
          {febrileText.sixtyOneNinety.DISPOSITION_RECOMMENDATION_1A.title}
        </Text>
        <Text style={styles.regularText}>
          {febrileText.sixtyOneNinety.DISPOSITION_RECOMMENDATION_1A.title1}
        </Text>
        <View>
          <View>
            <View style={styles.sectionHeadingContainer}>
              <Text style={styles.headingTextSection}>
                {febrileText.sixtyOneNinety.DISPOSITION_RECOMMENDATION_1A.Q1}
              </Text>
            </View>
            <View>
              <View style={styles.btnContainer}>
                <YesNoButtons
                  answerButtonStyle={styles.btnStyle}
                  onAnswer={(key) => onDecision(key, Operations.QUESTION_1)}
                  answer={ans[Operations.QUESTION_1]}
                />
              </View>
            </View>
          </View>
        </View>
      </SixtyNineNinetyLayout>
    </>
  );
});

export default DispositionRecommendation1A;
