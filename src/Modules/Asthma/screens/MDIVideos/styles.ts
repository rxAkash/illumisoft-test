import { StyleSheet } from "react-native";
import { containerPadding } from "UIToolkit/theme/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...containerPadding
  },
  content: {
    paddingBottom: 30
  }
})

export default styles;
