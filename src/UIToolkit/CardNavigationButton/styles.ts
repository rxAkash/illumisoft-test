import { StyleSheet } from "react-native";
import { blackColor, grayColor, lightGray, primaryColorOpaque } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: lightGray,
    borderBottomWidth: 0.5,
    alignItems: 'center',
    paddingBottom: 16,
    padding: 10,
    paddingRight: 12,
    paddingLeft: 18,
    justifyContent: 'space-between',
  },
  icon: {
    width: 16,
    height: 16,
    tintColor: grayColor,
    marginTop: 4
  },
  textContainer: {
    flexShrink: 1,
    marginTop: 8
  },
  title: {
    fontSize: 16,
    color: blackColor,
    fontWeight: '400',
    marginBottom: 6
  },
  subtitle: {
    fontSize: 14,
    color: grayColor
  },
  buttonPressed: {
    backgroundColor: primaryColorOpaque
  },
})

export default styles;
