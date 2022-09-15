import { NavigationProp } from "@react-navigation/core";
import { trachText } from "Modules/Trachestomy/config/strings";
import React, { useState } from "react";
import { Text, SafeAreaView, ScrollView } from "react-native";
import BulletList from "UIToolkit/BulletList";
import Card from "UIToolkit/Card";
import GoBackHeader from "UIToolkit/GoBackHeader";
import QuestionsFlow from "UIToolkit/QuestionsFlow";
import ResultDisplayBottomPanel from "UIToolkit/ResultDisplayBottomPanel";
import { TRACH_TUBE_CHANGE_ANSWER_SETS, TRACH_TUBE_CHANGE_INFO, TRACH_TUBE_CHANGE_QUESTIONS } from "./conf";
import styles from "./styles";

interface Props {
  navigation: NavigationProp<any>;
}

const TrachestomyTubeChange = React.memo(({ navigation }: Props) => {
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
        {trachText.tracheostomyTubeChange.title}
      </Text>
      <ScrollView style={styles.container}>
        <Card style={styles.infoContainer}>
          <BulletList items={TRACH_TUBE_CHANGE_INFO} />
        </Card>
        <QuestionsFlow
          questions={TRACH_TUBE_CHANGE_QUESTIONS}
          answerSets={TRACH_TUBE_CHANGE_ANSWER_SETS}
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

export default TrachestomyTubeChange;
