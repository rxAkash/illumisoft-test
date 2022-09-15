import { StyleSheet } from "react-native";
import { lightGray, whiteColor } from "UIToolkit/theme/colors";
import { containerPadding } from "UIToolkit/theme/styles";

const styles = StyleSheet.create({
  container: {
    ...containerPadding,
    paddingTop: 24,
    backgroundColor: whiteColor
  },
  contentContainer: {
    paddingBottom: 60
  },
  bottomContainer: {
    padding: 18,
    borderTopWidth: 0.5,
    borderTopColor: lightGray
  },
})

export default styles;
