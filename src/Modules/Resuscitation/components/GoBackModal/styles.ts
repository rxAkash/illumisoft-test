import { StyleSheet } from "react-native";
import { blackColor, primaryColor, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: whiteColor,
    borderRadius: 6,
    padding: 16
  },
  title: {
    fontSize: 18,
    color: primaryColor,
    fontWeight: '500',
    marginBottom: 24
  },
  text: {
    fontSize: 16,
    color: blackColor,
    marginBottom: 24
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    flex: 1
  },
  leftButton: {
    marginRight: 12
  }
})

export default styles;
