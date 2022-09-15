import { StyleSheet } from "react-native";
import { blackColor, primaryColor } from "UIToolkit/theme/colors";
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
    marginBottom: 12
  },
  sectionTitle: {
    color: blackColor,
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 12
  },
  description: {
    color: blackColor,
    fontSize: 14,
    marginBottom: 4,
    marginTop: 6
  }
})

export default styles;
