import { StyleSheet } from "react-native";
import { containerPadding } from "UIToolkit/theme/styles";

const styles = StyleSheet.create({
  container: {
    ...containerPadding,
  },
  card: {
    paddingHorizontal: 4,
    paddingBottom: 8,
    marginTop: 16
  }
})

export default styles;
