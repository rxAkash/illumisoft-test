import { StyleSheet } from "react-native";
import { blackColor, grayColor, lightGray } from "UIToolkit/theme/colors";
import { buttonPressed } from "UIToolkit/theme/styles";

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: lightGray,
    borderBottomWidth: 0
  },
  answerRow: {
    ...buttonPressed
  },
  questionContainer: {
    marginVertical: 12
  },
  title: {
    flex: 0.6,
    paddingLeft: 8
  },
  section: {
    flex: 0.2,
    borderLeftWidth: 1,
    borderLeftColor: lightGray,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 14,
    fontWeight: '600',
    color: blackColor
  },
  headerCell: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  hiddenText: {
    color: 'transparent'
  },
  calculatorContainer: {
    marginTop: 16,
    borderTopWidth: 0.5,
    borderTopColor: lightGray,
    paddingTop: 16,
  },
  calculatorTitle: {
    color: 'red',
    fontSize: 16,
    fontWeight: '600'
  },
  questionText: {
    fontSize: 15,
    fontWeight: '400',
    color: blackColor
  },
  lastRow: {
    borderBottomWidth: 1,
    borderBottomColor: lightGray
  },
  answerButton: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: grayColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: grayColor
  },
  resultContainer: {
    paddingVertical: 8,
    paddingHorizontal: 36,
    borderWidth: 0.5,
    borderColor: lightGray,
    borderRadius: 4,
    marginTop: 24,
    alignSelf: 'center'
  },
  resultText: {
    fontSize: 18,
    color: 'red',
    fontWeight: '600'
  },
})

export default styles;
