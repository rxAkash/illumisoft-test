import React, { useState } from "react";
import { Pressable, StyleProp, Text, View } from "react-native";
import { styles } from "./styles";

interface Props {
  title: string;
  onOkPress: () => void;
  width?: number;
  height?: number;
  infoMatic?: boolean;
  subText?: string
}

const GoButton = React.memo(({ title, onOkPress, width, height, infoMatic, subText }: Props) => {
  
  const [opacity, setOpacity] = useState<boolean>(true)
  const onBtnPress = () => {
    setOpacity(!opacity)
    onOkPress()
  }
  if(infoMatic) {
    return (
      <Pressable
        style={[
          styles.btnContainer,
          { width: width ? width : 340, height: height && height },
        ]}
        onPress={() => onBtnPress()}
      >
        <Text style={styles.textStyle}>{title}</Text>
        {subText && (
          <Text style={styles.subtext}>{subText}</Text>
        )}
      </Pressable>
    );
  } else {
    return (
      <Pressable
        style={[
          styles.btnContainer,
          { width: width ? width : 340, height: height && height, opacity: opacity ? 0.5 : 1 },
        ]}
        onPress={() => onBtnPress()}
      >
        <Text style={styles.textStyle}>{title}</Text>
        {subText && (
          <Text style={styles.subtext}>{subText}</Text>
        )}
      </Pressable>
    );
  }
  
});

export default GoButton;
