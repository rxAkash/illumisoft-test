import { NavigationProp } from "@react-navigation/core";
import GoButton from "Modules/Trachestomy/components/Button/Button";
import { resusText } from "Modules/Trachestomy/config/strings";
import { TRACHESTOMY_EMERGENCY_ALGORITHM_INTERFACE_12, TRACHESTOMY_EMERGENCY_ALGORITHM_INTERFACE_4 } from "Modules/Trachestomy/navigation/routes";
import React, { useState } from "react";
import { Text, View, SafeAreaView } from "react-native";
import YesNoButtons from "UIToolkit/Inputs/YesNoButtons";
import styles from "./styles";

interface Props {
  navigation: NavigationProp<any>;
  onAns?: (key?: string, answers?: number) => void
}


const OngoingRespComponent = React.memo(({ navigation, onAns }: Props) => {
  const [secondQ, setSecondQ] = useState<boolean>(false);
  const [answer, setAnswer] = useState<number>()

  const onDecision = (condition: number) => {
    if(onAns) {
      onAns("",condition)
    }
    if (condition === 1) {
      navigation.navigate(TRACHESTOMY_EMERGENCY_ALGORITHM_INTERFACE_4);
    } else {
      navigation.navigate(TRACHESTOMY_EMERGENCY_ALGORITHM_INTERFACE_12);
    }
       
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
  
      <>
        <View style={styles.sectionHeadingContainer}>
          <Text style={styles.headingTextSection}>
            {resusText.interface1B.Q3}
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <YesNoButtons
            answer={answer}
            onAnswer={(key) => onDecision(key)}
            answerButtonStyle={styles.btnStyle}
          />
        </View>
      </>
    </SafeAreaView>
  );
});

export default OngoingRespComponent;
