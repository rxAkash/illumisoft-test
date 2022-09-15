import { StyleSheet } from "react-native";
import { blackColor, grayColor, primaryColor, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container: {
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowRadius: 4,
    backgroundColor: whiteColor,
    marginVertical: 8,
    borderRadius: 2,
    elevation: 4
  },
  blackTitle: {
    color: blackColor
  },
  title: {
    fontSize: 16,
    color: primaryColor,
    fontWeight: '500',
    marginBottom: 18,
    margin: 12
  },
  collapseIcon: {
    width: 16,
    height: 16,
    tintColor: grayColor,
  },
  iconCollapsed: {
    transform: [{rotate: '180deg'}]
  },
  collapsibleHeader: {
    margin: 12
  },
  collapsibleTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleWhenCollapsible: {
    fontSize: 16,
    color: primaryColor,
    fontWeight: '500',
  },
  hint: {
    color: grayColor,
    fontWeight: '500',
    marginTop: 4
  }
})

export default styles;
