import { StyleSheet } from "react-native";
import { blackColor } from "UIToolkit/theme/colors";
import { containerPadding } from "UIToolkit/theme/styles";

const styles = StyleSheet.create({
  container: {
    ...containerPadding
  },
  considerations: {
    padding: 12,
    paddingTop: 0
  },
  bullet: {
    fontSize: 24,
    fontWeight: '600',
    color: blackColor
  },
  card: {
    paddingBottom: 12,
    paddingVertical: 6,
    marginTop: 16
  }
})

export default styles;
