import { StyleSheet } from "react-native";
import { lightGray, primaryColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  icon: {
    width: 16,
    height: 16,
    tintColor: primaryColor,
    marginLeft: 8
  },
  button: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  border: {
    borderBottomWidth: 0.5,
    borderBottomColor: lightGray
  },
  backText: {
    fontWeight: '600',
    fontSize: 14,
    color: primaryColor,
    marginLeft: 6
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default styles;
