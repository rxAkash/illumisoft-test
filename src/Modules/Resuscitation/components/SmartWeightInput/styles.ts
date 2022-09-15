import { Platform, StyleSheet } from "react-native";
import { blackColor, grayColor, lightGray, primaryColor, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  textInput: {
    fontSize: 14,
    fontWeight: '400',
    color: blackColor,
    padding: 0,
    marginRight: Platform.select({
      android: -35,
      ios: 4
    })
  },
  unitText: {
    fontSize: 14,
    fontWeight: '400',
    color: grayColor
  },
  blackText: {
    color: blackColor
  },
  pseudoInput: {
    padding: Platform.select({
      ios: 10,
      android: 0
    }),
    paddingLeft: 10,
    borderColor: lightGray,
    borderWidth: 0.5,
    borderRadius: 6,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputContainer: {
    marginTop: 12,
    flexDirection: 'row'
  },
  unitButton: {
    padding: 12,
    borderColor: lightGray,
    borderWidth: 0.5,
    borderRadius: 6,
    marginLeft: 8
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: grayColor
  },
  buttonActive: {
    backgroundColor: primaryColor
  },
  textActive: {
    color: whiteColor
  }
})

export default styles;
