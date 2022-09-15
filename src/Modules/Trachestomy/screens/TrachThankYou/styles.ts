import { StyleSheet } from "react-native";
import { blackColor, whiteColor, lightGray, primaryColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({ 
  title: {
    fontSize: 20,
    color: blackColor,
    marginLeft: 18,
    marginTop: 6,
    marginBottom: 12
  },
  container: {
    backgroundColor: whiteColor,
    borderTopWidth: 0.5,
    borderTopColor: lightGray,
    padding: 18,
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 22
  },
  infoContainer: {
    alignItems: "center",
    padding: 10,
  },
  thankYouText: {
    color: primaryColor,
    textAlign: "center",
    fontSize: 20,
  },
  infoList: {
    padding: 12,
    marginTop: 16,
  },
  btnContainer: {
    marginBottom: 10,
    backgroundColor: whiteColor,
    paddingHorizontal: 18
  }
})

export default styles;
