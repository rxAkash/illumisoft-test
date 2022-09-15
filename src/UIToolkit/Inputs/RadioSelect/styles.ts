import { StyleSheet } from "react-native";
import { blackColor, grayColor, lightGray, primaryColor } from "UIToolkit/theme/colors";

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
  additionalStepTitle: {
    color: blackColor,
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 16,
    marginLeft: 16,
    marginTop: 16
  },
  optionContainer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomColor: lightGray,
    borderBottomWidth: 0.5
  },
  optionIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: grayColor
  },
  optionIndicatorSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: primaryColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  optionIndicatorBullet: {
    width: 10,
    height: 10,
    position: 'absolute',
    backgroundColor: primaryColor,
    borderRadius: 5
  },
  optionText: {
    fontSize: 14,
    color: blackColor,
    marginLeft: 12
  },
  inactiveContainer: {
    opacity: 0.5
  }
})

export default styles;
