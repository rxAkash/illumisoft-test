import { StyleSheet } from "react-native";
import { blackColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 14,
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 25,
    color: blackColor,
    maxWidth: '80%'
  },
  textChecked: {
    color: '#F89027'
  }
})

export default styles;
