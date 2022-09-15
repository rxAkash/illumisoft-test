import { StyleSheet } from "react-native";
import { blackColor, grayColor, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  button: {
    elevation: 4,
    shadowColor: blackColor,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.2,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: whiteColor,
    marginBottom: 12
  },
  arrow: {
    width: 10,
    height: 20,
    tintColor: grayColor
  },
  text: {
    fontSize: 16,
    color: blackColor,
    fontWeight: '400'
  }
})

export default styles;
