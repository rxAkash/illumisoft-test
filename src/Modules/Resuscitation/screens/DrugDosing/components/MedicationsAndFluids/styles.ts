import { StyleSheet } from "react-native";
import { blackColor, primaryColor } from "UIToolkit/theme/colors";
import { containerPadding } from "UIToolkit/theme/styles";

const styles = StyleSheet.create({
  container: {
    ...containerPadding
  },
  title: {
    fontSize: 18,
    color: primaryColor,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16
  },
  subtitle: {
    fontSize: 16,
    color: blackColor,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 18
  }
})

export default styles;
