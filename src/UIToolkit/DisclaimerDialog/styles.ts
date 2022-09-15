import { StyleSheet } from "react-native";
import { primaryColor, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    marginHorizontal: 36,
    backgroundColor: whiteColor,
    borderRadius: 6,
    flex: 0,
    flexGrow: 0,
    maxHeight: '70%'
  },
  scrollContainer: {
    padding: 24
  },
  acceptButton: {
    backgroundColor: primaryColor,
    padding: 10,
    borderRadius: 4,
    alignSelf: 'flex-end',
    paddingHorizontal: 32
  },
  buttonText: {
    color: whiteColor,
    fontSize: 14,
    fontWeight: '600'
  }
})

export default styles;
