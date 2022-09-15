import { StyleSheet } from "react-native";
import { blackColor, lightGray, primaryColor, whiteColor, yellowColor } from "UIToolkit/theme/colors";
import { containerPadding } from "UIToolkit/theme/styles";

const styles = StyleSheet.create({
  container: {
    ...containerPadding,
    paddingTop: 24,
    backgroundColor: whiteColor
  },
  homeContainer: {
    flex: 1,
    backgroundColor: whiteColor
  },
  divider: {
    height: 1,
    backgroundColor: primaryColor,
    flexDirection: 'row',
    flex: 1
  },
  dividerText: {
    color: primaryColor,
    fontWeight: '600',
    textAlign: 'center',
    flexShrink: 1,
    padding: 12
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  selectText: {
    fontSize: 16,
    color: blackColor,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 8
  },
  button: {
    marginVertical: 8
  },
  titleText: {
    color: primaryColor,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16
  },
  regularText: {
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 25,
    color: blackColor
  },
  yesNoButton:{
    width:150,
    backgroundColor: primaryColor,
  },
  centeredRegulatText: {
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 25,
    color: blackColor,
    textAlign: 'center'
  },
  boldText: {
    fontWeight: '600'
  },
  pathwayTitle: {
    fontSize: 18,
    color: blackColor,
    marginBottom: 16,
    fontWeight: '600',
    textAlign: 'center'
  },
  bottomContainer: {
    padding: 18,
    borderTopWidth: 0.5,
    borderTopColor: lightGray
  },
  contentContainer: {
    paddingBottom: 60
  },
  image: {
    maxWidth: '90%',
    maxHeight: '35%',
    alignSelf: 'center'
  },
  tallImage: {
    maxWidth: '90%',
    maxHeight: '50%',
    alignSelf: 'center'
  },
  underlineText: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000",
  },
  noUnderline: {
    textDecorationColor: 'transparent',
    textDecorationLine: 'none'
  },
  orangeText: {
    fontSize: 16,
    fontWeight: '300',
    color: '#F89027'
  },
  centerOrangeText: {
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 25,
    textAlign: 'center',
    color: '#F89027'
  },
  textMargin: {
    marginBottom: 12
  },
  blueText: {
    fontWeight: '600',
    color: primaryColor
  },
  antibioticRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 15,
    // marginTop: 40
  },
  headingTextSection: {
    fontSize: 16,
    textAlign: "left",
    color: blackColor,
    fontWeight:"600"
  },
  sectionHeadingContainer:{
    top:15,
    // width:240,
    padding:15
  },
  secondQuestionContainer: {
    borderWidth: 0.5,
    borderColor: primaryColor,
    padding:5,
    alignItems: "center"
  },
  btnStyle: {
    width: 150,
    height: 50
  },
  infoContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: yellowColor,
    padding: 10
  }
})

export default styles;
