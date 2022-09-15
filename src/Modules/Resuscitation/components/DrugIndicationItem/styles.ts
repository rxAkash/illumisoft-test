import { StyleSheet } from "react-native";
import { blackColor, grayColor, primaryColor, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 14,
    backgroundColor: whiteColor
  },
  arrow: {
    width: 18,
    height: 18,
    marginRight: 6,
    tintColor: grayColor
  },
  text: {
    fontSize: 16,
    color: blackColor
  },
  iconActive: {
    transform: [{rotate: '180deg'}],
    tintColor: primaryColor
  },
})

export default styles;
