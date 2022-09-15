import { StyleSheet } from "react-native";
import { blackColor, grayColor, lightGray } from "UIToolkit/theme/colors";
import { containerPadding } from "UIToolkit/theme/styles";

const styles = StyleSheet.create({
  container: {
    ...containerPadding
  },
  disclaimerContainer: {
    padding: 12,
    borderColor: '#780e08',
    borderWidth: 2
  },
  text: {
    fontSize: 14,
    color: blackColor,
    fontWeight: '400'
  },
  boldTitle: {
    fontWeight: '600'
  },
  boldUnderlineTitle: {
    fontWeight: '600',
    textDecorationLine: 'underline',
    textDecorationColor: blackColor
  },
  italic: {
    fontStyle: 'italic'
  },
  card: {
    padding: 12
  },
  textSection: {
    marginBottom: 12
  },
  bottomButtonContainer: {
    marginTop: 10,
    paddingTop: 14,
    borderTopWidth: 0.5,
    borderTopColor: lightGray
  },
  centeredTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: blackColor,
    textAlign: 'center'
  },
  rightButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16
  },
  submitButton: {
    paddingHorizontal: 32
  },
  smallGrayText: {
    fontSize: 12,
    color: grayColor,
    fontWeight: '500',
    marginBottom: 12
  },
  cardSection: {
    padding: 12,
    borderBottomColor: lightGray,
    borderBottomWidth: 0.5
  },
  button: {
    paddingVertical: 12,
    marginBottom: 12
  }
})

export default styles;
