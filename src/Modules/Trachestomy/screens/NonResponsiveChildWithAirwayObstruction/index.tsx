import { NavigationProp } from "@react-navigation/core";
import { trachText } from "Modules/Trachestomy/config/strings";
import { TRACHESTOMY_CPR_WITH_UPPER_AIRWAY_OBFUSCATION, TRACHESTOMY_RESCUE_BREATHING_WITH_AIRWAY_OBFUSCATION } from "Modules/Trachestomy/navigation/routes";
import React, { useState } from "react";
import { Text, SafeAreaView, ScrollView } from "react-native";
import GoBackHeader from "UIToolkit/GoBackHeader";
import ResultDisplayBottomPanel from "UIToolkit/ResultDisplayBottomPanel";
import YesNoQuestion from "UIToolkit/YesNoQuestion";
import styles from "./styles";

interface Props {
  navigation: NavigationProp<any>;
}

const NonResponsiveChildWithAirwayObstruction = React.memo(({ navigation }: Props) => {
  const [answer, setAnswer] = useState<number>();

  const onNext = () => {
    if(answer === 1) {
      navigation.navigate(TRACHESTOMY_CPR_WITH_UPPER_AIRWAY_OBFUSCATION);
    } else {
      navigation.navigate(TRACHESTOMY_RESCUE_BREATHING_WITH_AIRWAY_OBFUSCATION);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GoBackHeader />
      <Text style={styles.title}>{trachText.nonResponsiveChildAirwayObstruction.withTitle}</Text>
      <ScrollView style={styles.container}>
        <YesNoQuestion
          questionText={trachText.nonResponsiveChildAirwayObstruction.question}
          onAnswer={(_, number) => setAnswer(number)}
          id={1}
          answer={answer}
          answers={{
            first: trachText.nonResponsiveChildAirwayObstruction.btnTitle1,
            second: trachText.nonResponsiveChildAirwayObstruction.btnTitle2,
          }}
        />
      </ScrollView>
      <ResultDisplayBottomPanel
        buttonDisabled={answer === undefined}
        onNext={onNext}
      />
    </SafeAreaView>
  );
});

export default NonResponsiveChildWithAirwayObstruction;
