import { StyleSheet } from "react-native";
import {
  blackColor,
  whiteColor,
  lightGray,
  primaryColor,
  emergencyColor,
} from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: blackColor,
    marginHorizontal: 18,
    marginTop: 6,
    marginBottom: 12,
  },
  container: {
    backgroundColor: whiteColor,
    borderTopWidth: 0.5,
    borderTopColor: lightGray,
    padding: 12,
    flex: 1,
  },
  infoContainer: {
    padding: 14,
  },
  redBoxContainer: {
    padding: 5,
    borderWidth: 0.5,
    borderColor: emergencyColor,
    marginVertical: 13,
  },
  warningText: {
    color: emergencyColor,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 18,
  },
  infoList: {
    padding: 10,
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: primaryColor,
  },
  btnContainer: {
    paddingBottom: 10,
    backgroundColor: whiteColor,
    paddingHorizontal: 16
  }
});

export default styles;
