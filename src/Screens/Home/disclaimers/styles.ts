import { StyleSheet } from "react-native";
import { blackColor, primaryColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  title: {
    color: primaryColor,
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 28,
  },
  text: {
    fontSize: 16,
    color: blackColor,
    fontWeight: '400',
    textAlign: 'left'
  },
  strong: {
    color: blackColor,
    opacity: 1,
    fontWeight: '600',
  },
  link: {
    color: primaryColor,
    fontWeight: '600',
  }
})

export default styles;
