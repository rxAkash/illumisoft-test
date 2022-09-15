import { StyleSheet } from "react-native";
import { blackColor, primaryColor } from "UIToolkit/theme/colors";
import { containerPadding } from "UIToolkit/theme/styles";

const styles = StyleSheet.create({
  container: {
    ...containerPadding
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    opacity: 0.7,
    color: blackColor,
    textAlign: 'center',
    marginBottom: 12,
  },
  topGap: {
    marginTop: '20%'
  },
  optionsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around'
  },
  optionButton: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  optionText: {
    fontSize: 24,
    color: primaryColor,
    fontWeight: '600'
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
  selectButton: {
    alignItems: 'center',
    padding: 18
  },
  selectText: {
    fontSize: 14,
    color: primaryColor,
    fontWeight: '600'
  }
})

export default styles;
