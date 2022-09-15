import { StyleSheet } from "react-native";
import { blackColor, whiteColor, lightGray } from "UIToolkit/theme/colors";

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
    padding: 12,
    flex:1,
  },
})

export default styles;
