import { NavigationProp } from "@react-navigation/core";
import { trachText } from "Modules/Trachestomy/config/strings";
import { TRACHESTOMY_TUBE_CHANGE } from "Modules/Trachestomy/navigation/routes";
import React, { useState } from "react";
import { Text, SafeAreaView, ScrollView } from "react-native";
import Card from "UIToolkit/Card";
import GoBackHeader from "UIToolkit/GoBackHeader";
import QuestionsFlow from "UIToolkit/QuestionsFlow";
import ResultDisplayBottomPanel from "UIToolkit/ResultDisplayBottomPanel";
import { ATTEMPT_TO_PASS_CATHETER_ANSWER_SETS, ATTEMPT_TO_PASS_CATHETER_QUESTIONS } from "./conf";
import styles from "./styles";

interface Props {
  navigation: NavigationProp<any>;
}

const AttemptToPassSuctionCatheter = React.memo(({ navigation }: Props) => {
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
        {trachText.attemptToPassSuctionCatheter.title}
      </Text>
      <ScrollView style={styles.container}>
        <QuestionsFlow
          questions={ATTEMPT_TO_PASS_CATHETER_QUESTIONS}
          answerSets={ATTEMPT_TO_PASS_CATHETER_ANSWER_SETS}
          onResult={setNextRoute}
        />
        {nextRoute === TRACHESTOMY_TUBE_CHANGE && (
          <Card style={styles.infoBox}>
            <Text>{trachText.attemptToPassSuctionCatheter.noText}</Text>
          </Card>
        )}
      </ScrollView>
      <ResultDisplayBottomPanel
        buttonDisabled={!nextRoute}
        onNext={onNext}
      />
    </SafeAreaView>
  );
});

export default AttemptToPassSuctionCatheter;
