import { StyleSheet } from "react-native";
import {
  blackColor,
  whiteColor,
  lightGray
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
    padding: 12,
    flex: 1,
  },
  btnContainer: {
    marginBottom: 10,
    backgroundColor: whiteColor,
    padding: 12
  },
  boldText: {
    fontWeight: "600",
    fontSize: 18
  },
  boldTextContainer: {
    paddingVertical: 14,
    flexDirection: 'row'
  },
  bullet: {
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 8,
    marginRight: 12,
    color: blackColor,
    lineHeight: 21
  },
  card: {
    padding: 12,
    marginTop: 12
  },
  infoText: {
    fontSize: 16,
    color: blackColor
  }
});

export default styles;
