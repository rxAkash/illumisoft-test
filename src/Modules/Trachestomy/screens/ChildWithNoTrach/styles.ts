import { StyleSheet } from "react-native";
import { blackColor, whiteColor, lightGray, emergencyColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({ 
  title: {
    fontSize: 20,
    color: blackColor,
    marginHorizontal: 18,
    marginTop: 6,
    marginBottom: 12
  },
  container: {
    backgroundColor: whiteColor,
    borderTopWidth: 0.5,
    borderTopColor: lightGray,
    padding: 12,
    flex: 1
  },
  warningTextContainer: {
    borderColor: emergencyColor,
    borderWidth: 1,
    padding: 12
  },
  warningText: {
    fontSize: 16,
    color: blackColor,
    fontWeight: '500'
  }
})

export default styles;
