import { StyleSheet } from "react-native";
import { primaryColor } from "UIToolkit/theme/colors";
import { containerPadding } from "UIToolkit/theme/styles";

const styles = StyleSheet.create({
  container: {
    ...containerPadding
  },
  title: {
    color: primaryColor,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12,
    marginTop: 14
  },
})

export default styles;