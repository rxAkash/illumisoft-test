import { StyleSheet } from "react-native";
import { blackColor, grayColor, lightGray } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  sectionContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: lightGray,
    paddingVertical: 8
  },
  sectionLabel: {
    color: blackColor,
    fontSize: 14,
    marginBottom: 4
  },
  sectionText: {
    fontSize: 14,
    color: grayColor
  }
})

export default styles;
