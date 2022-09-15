import { NavigationProp } from "@react-navigation/core";
import { trachText } from "Modules/Trachestomy/config/strings";
import React, { useState } from "react";
import { Text, SafeAreaView, ScrollView } from "react-native";
import GoBackHeader from "UIToolkit/GoBackHeader";
import QuestionsFlow from "UIToolkit/QuestionsFlow";
import ResultDisplayBottomPanel from "UIToolkit/ResultDisplayBottomPanel";
import { INSERT_SAME_TUBE_ANSWER_SETS, INSERT_SAME_TUBE_QUESTIONS } from "./conf";
import styles from "./styles";

interface Props {
  navigation: NavigationProp<any>;
}

const InsertSameTube = React.memo(({ navigation }: Props) => {
  const [nextRoute, setNextRoute] = useState<string>();

  const onNext = () => {
    if(nextRoute) {
      navigation.navigate(nextRoute);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GoBackHeader />
      <Text style={styles.title}>
        {trachText.insertSameTube.title}
      </Text>
      <ScrollView style={styles.container}>
        <QuestionsFlow
          questions={INSERT_SAME_TUBE_QUESTIONS}
          answerSets={INSERT_SAME_TUBE_ANSWER_SETS}
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

export default InsertSameTube;
