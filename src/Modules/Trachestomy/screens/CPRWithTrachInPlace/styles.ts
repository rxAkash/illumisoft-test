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
    marginLeft: 18,
    marginTop: 6,
    marginBottom: 12,
  },
  container: {
    backgroundColor: whiteColor,
    borderTopWidth: 0.5,
    borderTopColor: lightGray,
    padding: 16,
    flex: 1
  },
  redBoxContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderWidth: 0.5,
    borderColor: primaryColor,
    margin: 13,
  },
  thankYouText: {
    color: emergencyColor,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 20,
  },
  infoList: {
    padding: 14,
    marginTop: 12
  },
  secondContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    paddingBottom: 16,
    backgroundColor: whiteColor,
    paddingHorizontal: 16
  },
  boldText: {
    fontWeight: "600",
    fontSize: 18
  },
  boldTextContainer: {
    paddingVertical: 14,
  },
  infoCardContainer: {
    padding: 10
  },
  cardStyle: {
    padding: 10
  },
  sectionContainer: {
    paddingVertical: 8
  },
  sectionLabel: {
    color: blackColor,
    fontSize: 16,
    marginBottom: 4
  },
});

export default styles;
