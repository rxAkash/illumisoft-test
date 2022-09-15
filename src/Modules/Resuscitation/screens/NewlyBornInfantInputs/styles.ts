import { StyleSheet } from "react-native";
import { blackColor, grayColor, lightGray, primaryColor, whiteColor } from "UIToolkit/theme/colors";
import { containerPadding } from "UIToolkit/theme/styles";

const styles = StyleSheet.create({
  container: {
    ...containerPadding
  },
  infoText: {
    textAlign: 'center',
    color: blackColor,
    fontSize: 16,
    fontWeight: '400',
    opacity: 0.6,
    marginBottom: 12,
    marginTop: 8
  },
  titleContainer: {
    flexDirection: 'row',
    padding: 12,
    justifyContent: "space-between"
  },
  restartIcon: {
    width: 12,
    height: 12,
    marginRight: 6,
    tintColor: primaryColor
  },
  restartButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  restartText: {
    fontWeight: '600',
    color: primaryColor
  },
  title: {
    fontSize: 16,
    color: blackColor,
    fontWeight: '500',
    opacity: 0.8
  },
  section: {
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: lightGray
  },
  input: {
    padding: 12,
    borderColor: lightGray,
    borderWidth: 0.5,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  placeholder: {
    color: grayColor,
    fontSize: 16,
    fontWeight: '300'
  },
  measureContainer: {
    borderLeftWidth: 0.5,
    borderLeftColor: lightGray,
    paddingLeft: 12
  },
  measureText: {
    color: blackColor,
    fontWeight: '500'
  },
  hint: {
    color: grayColor,
    marginBottom: 12
  },
  bottomContainer: {
    padding: 16,
    backgroundColor: whiteColor,
    borderTopColor: lightGray,
    borderTopWidth: 0.5,
    paddingBottom: 96,
    marginBottom: -80
  },
  value: {
    color: blackColor
  },
  button: {
    paddingLeft: '30%'
  },
  convertedText: {
    color: grayColor,
    fontWeight: '300'
  }
})

export default styles;
