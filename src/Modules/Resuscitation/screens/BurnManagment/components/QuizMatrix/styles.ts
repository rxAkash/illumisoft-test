import { StyleSheet } from "react-native";
import { blackColor, grayColor, lightGray, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  row: {
    paddingLeft: 6,
    borderLeftWidth: 0.5,
    borderRightWidth: 1,
    borderColor: lightGray,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  header: {
    backgroundColor: whiteColor
  },
  text: {
    color: blackColor,
    fontSize: 16,
    fontWeight: '300'
  },
  answersContainer: {
    flexDirection: 'row'
  },
  optionButton: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: grayColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  optionContainer: {
    paddingHorizontal: 8,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: lightGray,
    paddingVertical: 12,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: grayColor
  },
  headerAnswerCell: {
    width: 35,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: lightGray,
    paddingVertical: 12,
    alignItems: 'center'
  },
  answerText: {
    fontSize: 12,
    fontWeight: '600',
    color: blackColor
  }
})

export default styles;
