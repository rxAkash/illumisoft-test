import { StyleSheet } from "react-native";
import { blackColor, lightGray } from "UIToolkit/theme/colors";
import { containerPadding } from "UIToolkit/theme/styles";

const styles = StyleSheet.create({
  container: {
    ...containerPadding
  },
  card: {
    padding: 12
  },  
  text: {
    fontSize: 14,
    color: blackColor,
    fontWeight: '400'
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: blackColor
  },
  nextButtonContainer: {
    paddingTop: 16,
    borderTopWidth: 0.5,
    borderTopColor: lightGray,
    marginTop: 16
  }
})

export default styles;
