import { StyleSheet } from "react-native";
import { blackColor, primaryColor, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container: {
    padding: 22,
    borderRadius: 8,
    backgroundColor: whiteColor,
    alignItems: 'flex-start'
  },
  title: {
    color: primaryColor,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 18
  },
  info: {
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 20,
    color: blackColor,
    marginBottom: 18
  },
  button: {
    paddingHorizontal: 28,
    paddingVertical: 8,
    backgroundColor: primaryColor,
    borderRadius: 4
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: whiteColor
  }
});

export default styles;
