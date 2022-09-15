import { StyleSheet } from "react-native";
import { blackColor, lightGray, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteColor,
    borderTopWidth: 0.5,
    borderTopColor: lightGray
  },
  content: {
    paddingBottom: 40
  },
  bottomContainer: {
    padding: 18,
    borderTopWidth: 0.5,
    borderTopColor: lightGray
  },
  title: {
    fontSize: 20,
    color: blackColor,
    marginLeft: 18,
    marginTop: 6,
    marginBottom: 12
  }
})

export default styles;
