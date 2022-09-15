import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "../styles";
import { NavigationProp, useFocusEffect, useNavigation } from "@react-navigation/native";
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

const DisbalityAssessmentTWO = React.memo(({ navigation }: Props) => {
  const [ans, setAnswer] = useState<{ [key: string]: number }>({});
  const [amountOfQuestions, setAmountOfQuestions] = useState<number>(4);


  const onNav = () => {
    navigation.navigate(GLASGOW_COMA_SCORE_INPUT,{pathway:'2'});
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
    if(key == 2) {
      if(answers == 0){
        setAmountOfQuestions(8);
      }
      if(answers == 1){
        setAmountOfQuestions(4);
      }
    }
    setAnswer(newAnswers);
  };

  const isCompleted = () => {
    if (Object.keys(ans).length < amountOfQuestions) {
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
        {DISABILITY_ASSESSMENT.slice(0,amountOfQuestions).map((value) => (
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

export default DisbalityAssessmentTWO;
