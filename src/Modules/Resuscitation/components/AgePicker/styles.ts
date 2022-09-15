import { StyleSheet } from "react-native";
import { blackColor, grayColor, lightGray } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 12,
  },
  input: {
    padding: 12,
    borderColor: lightGray,
    borderWidth: 0.5,
    borderRadius: 8,
  },
  placeholderText: {
    fontSize: 14,
    color: grayColor,
    fontWeight: '400'
  },
  valueText: {
    fontSize: 14,
    color: blackColor,
    fontWeight: '400'
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: blackColor,
    marginBottom: 12
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
})

export default styles;
