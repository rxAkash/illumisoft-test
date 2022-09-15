import { StyleSheet } from "react-native";
import { blackColor, grayColor, lightGray, primaryColor, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: lightGray,
    flexDirection: 'row',
    backgroundColor: whiteColor
  },
  title: {
    color: blackColor,
    fontSize: 16,
    fontWeight: '400'
  },
  arrow: {
    width: 18,
    height: 18,
    tintColor: grayColor,
    marginRight: 12
  },
  iconActive: {
    transform: [{rotate: '180deg'}],
    tintColor: primaryColor
  },
  detailsContainer: {
    marginLeft: 28,
    padding: 6,
    backgroundColor: whiteColor
  },
  paralytic: {
    color: 'red',
    fontWeight: '600'
  }
})

export default styles;
