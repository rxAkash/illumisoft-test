import { StyleSheet } from "react-native";
import {
  blackColor,
  whiteColor,
  lightGray,
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
    // marginTop: 10
  },
  infoContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  redBoxContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    borderWidth: 0.5,
    borderColor: emergencyColor,
    marginVertical: 12,
  },
  thankYouText: {
    color: emergencyColor,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 18,
  },
  infoList: {
    padding: 12,
    marginVertical: 12,
  },
  btnContainer: {
    paddingVertical: 12,
    backgroundColor: whiteColor,
    paddingHorizontal: 18
  },
  contentContainer: {
    paddingBottom: 28
  }
});

export default styles;
