import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

interface Props {
  questionText: string;
  leadText?: string;
  disabled?: boolean;
}

const Info = React.memo(({ questionText, leadText, disabled }: Props) => {
  return (
    <View style={[styles.container, disabled && styles.disabled]}>
      <Text style={styles.text}>
        {leadText ? <Text style={styles.boldText}>{leadText} </Text> : null}
        {questionText}
      </Text>
    </View>
  );
});

export default Info;
