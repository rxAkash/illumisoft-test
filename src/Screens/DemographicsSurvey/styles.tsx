import { StyleSheet } from "react-native";
import { blackColor, lightGray, primaryColor, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container: {
    padding: 24
  },
  title: {
    fontSize: 24,
    color: blackColor,
    fontWeight: '400',
    marginBottom: 18
  },
  input: {
    marginBottom: 24
  },
  bottomButtonContainer: {
    padding: 12,
    borderTopColor: lightGray,
    borderTopWidth: 0.5,
    justifyContent: 'center',
  },
  acceptButton: {
    backgroundColor: primaryColor,
    padding: 14,
    borderRadius: 4,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12
  },
  acceptButtonText: {
    color: whiteColor,
    fontSize: 14,
    fontWeight: '500'
  },
})

export default styles;
