import { StyleSheet } from "react-native";
import { blackColor, grayColor, lightGray, primaryColorOpaque, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  icon: {
    width: 18,
    height: 18,
    tintColor: grayColor
  },
  select: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: lightGray,
    borderWidth: 0.5,
    padding: 12,
    borderRadius: 4
  },
  label: {
    color: blackColor,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10
  },
  placeholder: {
    color: lightGray,
    fontSize: 16,
    fontWeight: '400'
  },
  optionsBackdrop: {
    justifyContent: 'flex-end',
    flex: 1
  },
  optionsContainer: {
    backgroundColor: whiteColor,
    marginHorizontal: -20,
    paddingTop: 18,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: -100,
    paddingBottom: 100,
    maxHeight: '100%'
  },
  optionsItem: {
    paddingVertical: 12,
    borderTopColor: lightGray,
    borderTopWidth: 0.5,
    paddingLeft: 22
  },
  optionsTitle: {
    fontSize: 14,
    color: blackColor,
    fontWeight: '500',
    marginBottom: 18,
    textAlign: 'center'
  },
  optionPressed: {
    backgroundColor: primaryColorOpaque
  },
  value: {
    color: blackColor
  }
})

export default styles;
