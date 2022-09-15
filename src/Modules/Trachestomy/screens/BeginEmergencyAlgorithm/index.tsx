import { NavigationProp } from "@react-navigation/core";
import { trachText } from "Modules/Trachestomy/config/strings";
import { TRACHESTOMY_ATTEMPT_PASS_CATHETER, TRACHESTOMY_INSERT_SAME_TUBE } from "Modules/Trachestomy/navigation/routes";
import React, { useState } from "react";
import { Text, SafeAreaView, ScrollView } from "react-native";
import GoBackHeader from "UIToolkit/GoBackHeader";
import ResultDisplayBottomPanel from "UIToolkit/ResultDisplayBottomPanel";
import YesNoQuestion from "UIToolkit/YesNoQuestion";
import styles from "./styles";

interface Props {
  navigation: NavigationProp<any>;
}

const BeginEmergencyAlgorithm = React.memo(({ navigation }: Props) => {
  const [answer, setAnswer] = useState<number>();

  const onNext = () => {
    if(answer === 1) {
      navigation.navigate(TRACHESTOMY_ATTEMPT_PASS_CATHETER)
    } else {
      navigation.navigate(TRACHESTOMY_INSERT_SAME_TUBE)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GoBackHeader />
      <Text style={styles.title}>{trachText.emergencyAlgorithm.title}</Text>
      <ScrollView style={styles.container}>
        <YesNoQuestion
          questionText={trachText.emergencyAlgorithm.question}
          onAnswer={(_, number) => setAnswer(number)}
          id={1}
          answer={answer}
        />
      </ScrollView>
      <ResultDisplayBottomPanel
        buttonDisabled={answer === undefined}
        onNext={onNext}
      />
    </SafeAreaView>
  );
});

export default BeginEmergencyAlgorithm;
