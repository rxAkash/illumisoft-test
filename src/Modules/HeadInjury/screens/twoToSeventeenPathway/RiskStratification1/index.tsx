import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "../styles";
import { NavigationProp, useFocusEffect} from "@react-navigation/native";
import HeadInjuryLayout from "Modules/HeadInjury/components/HeadInjuryLayout";
import ColoredNavButton from "UIToolkit/Buttons/ColoredNavButton";
import { headInjuryText } from "Modules/HeadInjury/config/strings";
import { primaryColor } from "UIToolkit/theme/colors";
import YesNoButtons from "UIToolkit/Inputs/YesNoButtons";
import {
   RISK_STRATIFICATION_ASSESSMENT_2_TEN, RISK_STRATIFICATION_ASSESSMENT_2_TWO,
} from "Modules/HeadInjury/navigation/routes";
import { RISK_STRATIFICATION_ASSESSMENT } from "./conf";

interface Props {
  navigation: NavigationProp<any>;
}

const RiskStarticationTwo = React.memo(({ navigation }: Props) => {
  const [ans, setAnswer] = useState<{ [key: string]: number }>({});

  const onNav = () => {
    navigation.navigate(RISK_STRATIFICATION_ASSESSMENT_2_TWO);
  };

  useFocusEffect(
    React.useCallback(() => {
      setAnswer({});
      return;
    }, [])
  );

  const onAnswer = (key: number, answers: number) => {
    const newAnswers = {
      ...ans,
      [key]: answers,
    };
    setAnswer(newAnswers);

  };

  const isCompleted = () => {

    if (Object.keys(ans).length < RISK_STRATIFICATION_ASSESSMENT.length) {
      return false;
    } else {
      return true;
    }
  };
  const renderScore = () => (
    <View>
      <Text style={styles.adittionalText}>{headInjuryText.zeroToNinePathway.GSC14}</Text>
    </View>
  );
  const renderBottomPanel = () => (
    <View style={styles.bottomContainer}>
      <ColoredNavButton
        title={headInjuryText.zeroToNinePathway.RiskStartication.btnTitle}
        backgroundColor={primaryColor}
        onPress={onNav}
        style={styles.navButton}
        disabled={isCompleted() === false && true}
      />
    </View>
  );

  return (
    <HeadInjuryLayout
      title={headInjuryText.twoToSeventeenPathway.RiskStartication.headerText}
      renderBottomPanel={renderBottomPanel}
      customElement={renderScore}
    >
      <>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {headInjuryText.twoToSeventeenPathway.RiskStartication.title}
          </Text>
          {RISK_STRATIFICATION_ASSESSMENT.map((value) => (
            <View style={styles.container} key={value.id}>
              <Text style={styles.descriptionText}>{value.question}</Text>
              <YesNoButtons
                onAnswer={(ans) => onAnswer(value.id, ans)}
                answer={ans[value.id]}
              />
            </View>
          ))}
        </View>
      </>
    </HeadInjuryLayout>
  );
});

export default RiskStarticationTwo;
