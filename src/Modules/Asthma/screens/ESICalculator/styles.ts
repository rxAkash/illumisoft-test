import { StyleSheet } from "react-native";
import { blackColor, grayColor, lightGray, whiteColor } from "UIToolkit/theme/colors";
import { containerPadding } from "UIToolkit/theme/styles";

const styles = StyleSheet.create({
  titleContainer: {
    padding: 16
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: blackColor,
    opacity: 0.7,
    marginTop: 16
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: grayColor
  },
  content: {
    backgroundColor: whiteColor,
    borderTopColor: lightGray,
    borderTopWidth: 0.5,
    borderBottomColor: lightGray,
    borderBottomWidth: 0.5,
    flex: 1
  },
  info: {
    padding: 16,
    paddingBottom: 8,
    opacity: 0.6
  },
  bottomContainer: {
    ...containerPadding,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  calculatedScore: {
    color: blackColor,
    opacity: 1,
    fontWeight: '600'
  }
})

export default styles;
