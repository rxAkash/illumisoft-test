import { StyleSheet } from "react-native";
import { blackColor, primaryColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  title: {
    color: primaryColor,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 16
  },
  card: {
    padding: 14
  },
  description: {
    marginTop: 14
  },
  subtitle: {
    fontSize: 16,
    color: blackColor,
    marginVertical: 16,
    textAlign: 'center',
    fontWeight: '500'
  },
  bold: {
    fontWeight: '600'
  }
})

export default styles;
