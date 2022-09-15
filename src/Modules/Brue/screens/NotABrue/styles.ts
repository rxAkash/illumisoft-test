import { StyleSheet } from "react-native";
import { blackColor, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: whiteColor,
    padding: 16
  },
  regularText: {
    fontSize: 14,
    fontWeight: '400',
    color: blackColor
  },
  boldText: {
    fontWeight: '600'
  },
  textMargin: {
    marginBottom: 12
  },
  card: {
    padding: 12
  }
})

export default styles;
