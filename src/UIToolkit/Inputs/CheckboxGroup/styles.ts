import { StyleSheet } from "react-native";
import { blackColor, grayColor, lightGray, primaryColor, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container: {
    paddingTop: 16
  },
  title: {
    color: blackColor,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 16,
    marginLeft: 16
  },
  optionContainer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomColor: lightGray,
    borderBottomWidth: 0.5,
    alignItems: 'center'
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: grayColor
  },
  optionText: {
    fontSize: 14,
    color: blackColor,
    marginLeft: 12
  },
  checkboxSelected: {
    width: 20,
    height: 20,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: primaryColor,
    backgroundColor: primaryColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkboxIndicator: {
    width: 14,
    height: 14,
    tintColor: whiteColor
  },
  inactiveContainer: {
    opacity: 0.5
  }
})

export default styles;
