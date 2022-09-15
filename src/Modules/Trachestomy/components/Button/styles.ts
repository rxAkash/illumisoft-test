import { StyleSheet, Platform } from "react-native";
import { primaryColor, whiteColor } from "UIToolkit/theme/colors";

export const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    backgroundColor: primaryColor,
  },
  textStyle: {
    color: whiteColor,
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
  },
  subtext: {
    marginTop: 5,
    color: whiteColor,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  }
});
