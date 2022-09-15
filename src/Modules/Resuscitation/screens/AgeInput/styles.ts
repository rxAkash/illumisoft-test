import { StyleSheet } from "react-native";
import { blackColor, grayColor, lightGray } from "UIToolkit/theme/colors";
import { containerPadding } from "UIToolkit/theme/styles";

const styles = StyleSheet.create({
  container: {
    ...containerPadding
  },
  card: {
    padding: 12
  },
  input: {
    padding: 12,
    borderColor: lightGray,
    borderWidth: 0.5,
    borderRadius: 8,
  },
  placeholderText: {
    fontSize: 14,
    color: grayColor,
    fontWeight: '400'
  },
  valueText: {
    fontSize: 14,
    color: blackColor,
    fontWeight: '400'
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: blackColor,
    marginBottom: 12
  },
  buttonContainer: {
    paddingTop: 16,
    borderTopWidth: 0.5,
    borderTopColor: lightGray,
    marginTop: 16
  },
  colorIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
    borderWidth: 0.5,
    borderColor: lightGray
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  nextButtonContainer: {
    paddingTop: 16,
    borderTopWidth: 0.5,
    borderTopColor: lightGray,
    marginTop: 16
  }
})

export default styles;
