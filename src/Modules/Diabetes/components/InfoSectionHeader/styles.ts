import { StyleSheet } from "react-native";
import { blackColor, grayColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sectionTitle: {
    fontSize: 16,
    color: blackColor,
    fontWeight: '500'
  },
  info: {
    width: 16,
    height: 16,
    tintColor: grayColor,
    marginLeft: 8
  }
})

export default styles;
