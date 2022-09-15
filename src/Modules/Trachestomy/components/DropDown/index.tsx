/* eslint-disable @typescript-eslint/ban-ts-comment */
import { downArrowIc } from "assets/img";
import React, { useState } from "react";
import { Image, LayoutAnimation, Pressable, Text, View } from "react-native";
import Info from "../Info";
import styles from "./styles";

interface Props {
  title: string;
  backgroundColor: string;
  info: string;
  colorOverride?: string;
  autoOpen?: boolean;
}

const DropDown = React.memo(
  ({ title, backgroundColor, info, colorOverride, autoOpen }: Props) => {
    const [expanded, setExpanded] = useState(autoOpen ? true : false);

    const onPress = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setExpanded(!expanded);
    };

    return (
      <View style={styles.container}>
        <Pressable
          style={[
            styles.header,
            { backgroundColor },
            expanded && styles.headerExpanded,
          ]}
          onPress={onPress}
        >
          <Text style={[styles.title]}>
            {title}
          </Text>
          <Image
            source={downArrowIc}
            style={[
              styles.arrow,
              expanded && { transform: [{ rotate: "180deg" }] },
              //@ts-ignore
              colorOverride && { tintColor: colorOverride },
            ]}
          />
        </Pressable>
        {expanded && (
          <View style={styles.content}>
            <Info questionText={info} />
          </View>
        )}
      </View>
    );
  }
);

export default DropDown;
