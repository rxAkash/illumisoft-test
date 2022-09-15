import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "../styles";
import { NavigationProp, useFocusEffect } from "@react-navigation/native";
import HeadInjuryLayout from "Modules/HeadInjury/components/HeadInjuryLayout";
import ColoredNavButton from "UIToolkit/Buttons/ColoredNavButton";
import { headInjuryText } from "Modules/HeadInjury/config/strings";
import { primaryColor } from "UIToolkit/theme/colors";
import YesNoButtons from "UIToolkit/Inputs/YesNoButtons";
import { PHYSICAL_EXAM, PHYSICAL_EXAM_TEN } from "Modules/HeadInjury/navigation/routes";
import { RISK_STRATIFICATION_ASSESSMENT } from "./conf";
interface Props {
  navigation: NavigationProp<any>;
}

const RiskStartication2Ten = React.memo(({ navigation }: Props) => {
  const [ans, setAnswer] = useState<{ [key: string]: number }>({});

  const onNav = () => {
    navigation.navigate(PHYSICAL_EXAM_TEN);
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
  const renderScore = () => (
    <View>
      <Text style={styles.adittionalText}>{headInjuryText.zeroToNinePathway.GSC14}</Text>
    </View>
  );
  const isCompleted = () => {
    if (Object.keys(ans).length < RISK_STRATIFICATION_ASSESSMENT.length) return false;
    return true;
  };

  const renderBottomPanel = () => (
    <View style={styles.bottomContainer}>
      <ColoredNavButton
        title={headInjuryText.tenToTwentyThreePathway.RiskStartication2.btnTitle}
        backgroundColor={primaryColor}
        onPress={onNav}
        disabled={isCompleted() === false && true}
        style={styles.navButton}
      />
    </View>
  );

  return (
    <HeadInjuryLayout
      title={headInjuryText.tenToTwentyThreePathway.RiskStartication2.headerText}
      renderBottomPanel={renderBottomPanel}
      customElement={renderScore}
    >
      <>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {headInjuryText.zeroToNinePathway.RiskStartication.title}
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

export default RiskStartication2Ten;
