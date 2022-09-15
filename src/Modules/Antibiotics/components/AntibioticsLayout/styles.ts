import { StyleSheet } from "react-native";
import { darkGray, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteColor
  },
  title: {
    fontSize: 22,
    color: darkGray,
    fontWeight: '500',
    marginLeft: 18,
    marginRight: 18,
    marginTop: 6
  }
})

export default styles;
