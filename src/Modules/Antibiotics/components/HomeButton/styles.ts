import { StyleSheet } from "react-native";
import { blackColor, primaryColor, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: whiteColor,
    shadowColor: blackColor,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 3,
    alignItems: 'center',
    padding: 10,
    borderRadius: 4
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 6
  },
  text: {
    color: primaryColor,
    fontWeight: '400',
    fontSize: 14
  }
})

export default styles;
