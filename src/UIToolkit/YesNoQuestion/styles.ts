import { StyleSheet } from "react-native";
import { blackColor, lightGray} from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    borderBottomColor: lightGray,
    borderBottomWidth: 0.5
  },
  text: {
    fontSize: 14,
    color: blackColor,
    fontWeight: '400'
  },
  boldText: {
    fontWeight: '600'
  },
  disabled: {
    opacity: 0.3
  }
})

export default styles;
