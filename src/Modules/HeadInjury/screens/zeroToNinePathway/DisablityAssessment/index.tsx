import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "../styles";
import { NavigationProp, useFocusEffect } from "@react-navigation/native";
import HeadInjuryLayout from "Modules/HeadInjury/components/HeadInjuryLayout";
import ColoredNavButton from "UIToolkit/Buttons/ColoredNavButton";
import { headInjuryText } from "Modules/HeadInjury/config/strings";
import { primaryColor } from "UIToolkit/theme/colors";
import { DISABILITY_ASSESSMENT } from "./conf";
import YesNoButtons from "UIToolkit/Inputs/YesNoButtons";
import { GLASGOW_COMA_SCORE_INPUT } from "Modules/HeadInjury/navigation/routes";

interface Props {
  navigation: NavigationProp<any>;
}

const DisbalityAssessment = React.memo(({ navigation }: Props) => {
  const [ans, setAnswer] = useState<{ [key: string]: number }>({});

  const onNav = () => {
    navigation.navigate(GLASGOW_COMA_SCORE_INPUT,{pathway:'10'});
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
    if (Object.keys(ans).length < DISABILITY_ASSESSMENT.length) {
      return false;
    } else {
      return true;
    }
  };

  const renderBottomPanel = () => (
    <View style={styles.bottomContainer}>
      <ColoredNavButton
        title={headInjuryText.zeroToNinePathway.DisablityAssessment.btnTitle}
        backgroundColor={primaryColor}
        onPress={onNav}
        disabled={isCompleted() === false && true}
      />
    </View>
  );

  return (
    <HeadInjuryLayout renderBottomPanel={renderBottomPanel}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {headInjuryText.zeroToNinePathway.DisablityAssessment.title}
          </Text>
        </View>
        {DISABILITY_ASSESSMENT.map((value) => (
          <View style={styles.container} key={value.id}>
            <Text style={styles.descriptionText}>{value.question}</Text>
            <YesNoButtons
              onAnswer={(ans) => onAnswer(value.id, ans)}
              answer={ans[value.id]}
            />
          </View>
        ))}
      </View>
    </HeadInjuryLayout>
  );
});

export default DisbalityAssessment;
