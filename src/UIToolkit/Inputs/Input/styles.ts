import { StyleSheet } from "react-native";
import { blackColor, lightGray } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  input: {
    borderColor: lightGray,
    borderWidth: 0.5,
    padding: 12,
    borderRadius: 4,
    fontSize: 16,
    color: blackColor
  },
  label: {
    color: blackColor,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10
  },
})

export default styles;
