import { NavigationProp } from "@react-navigation/core";
import { trachText } from "Modules/Trachestomy/config/strings";
import { TRACHESTOMY_NON_RESOPNSIVE_CHILD_WITH_TRACH, TRACHESTOMY_RESCUE_BREATHING } from "Modules/Trachestomy/navigation/routes";
import React, { useState } from "react";
import { Text, SafeAreaView, ScrollView } from "react-native";
import GoBackHeader from "UIToolkit/GoBackHeader";
import ResultDisplayBottomPanel from "UIToolkit/ResultDisplayBottomPanel";
import YesNoQuestion from "UIToolkit/YesNoQuestion";
import styles from "./styles";

interface Props {
  navigation: NavigationProp<any>;
}

const ChildWithRespiratoryDistress = React.memo(({ navigation }: Props) => {
  const [answer, setAnswer] = useState<number>();

  const onNext = () => {
    if(answer === 1) {
      navigation.navigate(TRACHESTOMY_RESCUE_BREATHING)
    } else {
      navigation.navigate(TRACHESTOMY_NON_RESOPNSIVE_CHILD_WITH_TRACH)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GoBackHeader />
      <Text style={styles.title}>{trachText.childWithPersistentDistress.title}</Text>
      <ScrollView style={styles.container}>
        <YesNoQuestion
          questionText={trachText.childWithPersistentDistress.question}
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

export default ChildWithRespiratoryDistress;
