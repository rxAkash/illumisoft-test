import { StyleSheet } from "react-native";
import { blackColor, grayColor, primaryColor } from "UIToolkit/theme/colors";
import { containerPadding } from "UIToolkit/theme/styles";

const styles = StyleSheet.create({
  container: {
    ...containerPadding,
  },
  button: {
    marginVertical: 4
  },
  infoText: {
    textAlign: 'center',
    color: blackColor,
    fontSize: 16,
    fontWeight: '400',
    opacity: 0.6,
    marginBottom: 4,
    marginTop: 8
  },
  divider: {
    height: 1,
    backgroundColor: primaryColor,
    flexDirection: 'row',
    flex: 1
  },
  dividerText: {
    color: primaryColor,
    fontWeight: '600',
    textAlign: 'center',
    flexShrink: 1,
    padding: 12
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  note: {
    fontSize: 14,
    color: grayColor,
    fontWeight: '300',
    marginTop: 12,
    marginBottom: 4
  }
})

export default styles;
