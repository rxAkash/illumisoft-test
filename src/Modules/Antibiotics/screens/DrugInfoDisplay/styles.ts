import { StyleSheet } from "react-native";
import { blackColor, darkGray, lightGray } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  boldText: {
    fontSize: 14,
    fontWeight: '600',
    color: blackColor,
    marginBottom: 4
  },
  regularText: {
    fontSize: 14,
    fontWeight: '400',
    color: darkGray,
    marginBottom: 4
  },
  treatmentContainer: {
    paddingBottom: 12,
    borderBottomColor: lightGray,
    borderBottomWidth: 0.5
  },
  list: {
    marginTop: 14
  }
})

export default styles;
