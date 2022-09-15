import { StyleSheet } from "react-native";
import { blackColor, grayColor, lightGray, primaryColor, whiteColor } from "UIToolkit/theme/colors";
import { containerPadding } from "UIToolkit/theme/styles";

const styles = StyleSheet.create({
  container: {
    ...containerPadding
  },
  blueText:{
    color: primaryColor,
    fontWeight: '600'
  },
  blueTextTitile:{
    color: primaryColor,
    fontWeight: '600',
    fontSize: 22
  },
  adittionalText: {
    fontWeight: '600',
    fontSize: 14,
    color: primaryColor,
    marginLeft:210
  },
  regularText: {
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 25,
    color: blackColor
  },
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

    flex: 1,
    padding:20
  },
  descriptionText:{
    fontSize: 14,
    color: blackColor,
    fontWeight: "500"
  },
  info: {
    padding: 16,
    paddingBottom: 8,
    opacity: 0.6
  },
  bottomContainer: {
    padding: 18,
    borderTopColor: grayColor,
    borderTopWidth: 0.5,
  },
  calculatedScore: {
    color: blackColor,
    opacity: 1,
    fontWeight: '600'
  },
  navButton: {
    // width: 300
  }
})

export default styles;
