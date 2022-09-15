import { Platform, StyleSheet } from "react-native";
import { blackColor, grayColor, lightGray } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container: {
    borderColor: lightGray,
    borderWidth: 0.5,
    borderRadius: 4,
    padding: Platform.select({
      ios: 8,
      android: 6
    }),
    flexDirection: "row",
    alignItems: 'center',
    marginTop: 10
  },
  icon: {
    width: 14,
    height: 14,
    tintColor: grayColor
  },
  placeholderText: {
    fontSize: 16,
    color: grayColor,
    fontWeight: '300'
  },
  value: {
    fontSize: 15,
    color: blackColor,
    fontWeight: '300',
    padding: 0
  }
})

export default styles;
