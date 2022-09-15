import { NavigationProp } from "@react-navigation/core";
import { trachText } from "Modules/Trachestomy/config/strings";
import React, { useState } from "react";
import { Text, SafeAreaView, ScrollView } from "react-native";
import GoBackHeader from "UIToolkit/GoBackHeader";
import QuestionsFlow from "UIToolkit/QuestionsFlow";
import ResultDisplayBottomPanel from "UIToolkit/ResultDisplayBottomPanel";
import { NON_RESPONSIVE_CHILD_NO_TRACH_ANSWER_SETS, NON_RESPONSIVE_CHILD_NO_TRACH_QUESTIONS } from "./conf";
import styles from "./styles";

interface Props {
  navigation: NavigationProp<any>;
}

const NonResponsiveChildNoTrach = React.memo(({ navigation }: Props) => {
  const [nextRoute, setNextRoute] = useState<string>();

  const onNext = () => {
    if(nextRoute) {
      navigation.navigate(nextRoute);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GoBackHeader />
      <Text style={styles.title}>{trachText.nonResponsiveChildNoTrach.title}</Text>
      <ScrollView style={styles.container}>
        <QuestionsFlow
          questions={NON_RESPONSIVE_CHILD_NO_TRACH_QUESTIONS}
          answerSets={NON_RESPONSIVE_CHILD_NO_TRACH_ANSWER_SETS}
          onResult={setNextRoute}
        />
      </ScrollView>
      <ResultDisplayBottomPanel
        buttonDisabled={!nextRoute}
        onNext={onNext}
      />
    </SafeAreaView>
  );
});

export default NonResponsiveChildNoTrach;
