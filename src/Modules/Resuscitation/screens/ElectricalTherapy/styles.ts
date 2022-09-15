import { StyleSheet } from "react-native";
import { blackColor, primaryColor } from "UIToolkit/theme/colors";
import { containerPadding } from "UIToolkit/theme/styles";

const styles = StyleSheet.create({
  container: {
    ...containerPadding
  },
  sectionTitle: {
    color: primaryColor,
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 12,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: blackColor,
    textAlign: 'center'
  },
  card: {
    padding: 12
  },
  infoText: {
    fontSize: 14,
    color: blackColor,
    fontWeight: '400',
    marginVertical: 12
  },
  title: {
    color: primaryColor,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 12
  },
  warning: {
    marginTop: 8,
    color: '#B61111',
    marginBottom: 16
  }
})

export default styles;
