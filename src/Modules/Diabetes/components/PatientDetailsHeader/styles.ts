import { StyleSheet } from "react-native";
import { blackColor, grayColor, lightGray, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: whiteColor,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderBottomColor: lightGray,
    borderBottomWidth: 0.5
  },
  icon: {
    width: 16,
    height: 16,
    tintColor: grayColor,
    marginRight: 8
  },
  ageContainer: {
    flexDirection: 'row'
  },
  glucose: {
    fontSize: 14,
    color: grayColor,
    fontWeight: '300'
  },
  value: {
    fontSize: 14,
    color: blackColor,
    fontWeight: '400'
  }
})

export default styles;
