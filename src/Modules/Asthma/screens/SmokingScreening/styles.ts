import { StyleSheet } from "react-native";
import { blackColor, primaryColor } from "UIToolkit/theme/colors";
import { containerPadding } from "UIToolkit/theme/styles";

const styles = StyleSheet.create({
  container: {
    ...containerPadding
  },
  sectionContainer: {
    padding: 16
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: blackColor
  },
  textContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    flexShrink: 1,
    alignItems: 'center'
  },
  bullet: {
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 8,
    marginRight: 16,
    color: blackColor
  },
  text: {
    fontSize: 14,
    color: blackColor,
    flexShrink: 1
  },
  link: {
    color: primaryColor,
    fontWeight: '600'
  }
})

export default styles;
