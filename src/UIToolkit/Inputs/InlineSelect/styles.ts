import { StyleSheet } from "react-native";
import { blackColor, grayColor, lightGray } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: lightGray,
    borderRadius: 4
  },
  button: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    color: blackColor,
    fontSize: 16,
    fontWeight: '300'
  },
  arrow: {
    width: 14,
    height: 14,
    tintColor: grayColor
  }
})

export default styles;
