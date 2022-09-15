import { StyleSheet } from "react-native";
import { lightGray, grayColor, primaryColor, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  answer: {
    borderColor: lightGray,
    borderWidth: 0.5,
    width: 80,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center'
  },
  answerText: {
    color: grayColor
  },
  answerAnswered: {
    backgroundColor: primaryColor
  },
  answeredText: {
    color: whiteColor
  },
  leftAnswer: {
    marginRight: 12
  },
})

export default styles;
