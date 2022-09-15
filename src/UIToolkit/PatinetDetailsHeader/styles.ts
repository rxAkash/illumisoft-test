import { StyleSheet } from "react-native";
import { blackColor, grayColor, lightGray } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderTopColor: lightGray,
    borderBottomWidth: 0.5,
    borderBottomColor: lightGray,
    justifyContent: 'space-between',
    padding: 16
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: blackColor,
  },
  color: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 4
  },
  colorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  convertedText: {
    color: grayColor,
    fontWeight: '300'
  }
})

export default styles;
