import React, { ReactElement } from "react";
import { ScrollView, Text, SafeAreaView, Platform, View } from "react-native";
import KeyboardSpacer from "react-native-keyboard-spacer";
import GoBackHeader from "UIToolkit/GoBackHeader";
import { whiteColor } from "UIToolkit/theme/colors";
import styles from "./styles";

interface Props {
  title?: string;
  children: ReactElement;
  renderBottomPanel?: () => ReactElement;
  customElement?: () => Element;

}



const HeadInjuryLayout = React.memo(
  ({ title, children, renderBottomPanel,customElement }: Props) => {
    return (
      <SafeAreaView style={{ flex: 1}}>
        <GoBackHeader customElement={customElement} />
        {title && <Text style={styles.title}>{title}</Text>}
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}
          keyboardDismissMode="interactive"
        >
          {children}
        </ScrollView>
          {renderBottomPanel && renderBottomPanel()}
          {Platform.OS === "ios" && <KeyboardSpacer />}
      </SafeAreaView>
    );
  }
);

export default HeadInjuryLayout;
