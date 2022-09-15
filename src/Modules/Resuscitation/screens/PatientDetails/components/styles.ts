import { StyleSheet } from "react-native";
import { blackColor, grayColor, lightGray, primaryColor, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container: {
    padding: 6
  },
  label: {
    color: grayColor,
    fontSize: 14,
    fontWeight: '300'
  },
  valueText: {
    color: blackColor,
    fontWeight: '400'
  },
  convertedText: {
    color: grayColor,
    fontWeight: '300'
  },
  icon: {
    width: 12,
    height: 12,
    tintColor: primaryColor,
    marginRight: 4
  },
  editText: {
    color: primaryColor,
    fontWeight: '600'
  },
  editContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1
  },
  fieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12
  },
  closeIcon: {
    width: 22,
    height: 22,
    marginLeft: 12,
    marginTop: 10,
    tintColor: primaryColor
  },
  closeButton: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  field: {
    marginTop: 12
  },
  colorIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
    borderWidth: 0.5,
    borderColor: lightGray
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalBody: {
    padding: 18,
    backgroundColor: whiteColor,
    borderRadius: 8
  },
  modalTitle: {
    fontWeight: '600',
    color: blackColor,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 18
  },
  button: {
    marginVertical: 8
  },
  modalBottomContainer: {
    borderTopWidth: 0.5,
    borderTopColor: lightGray,
    paddingTop: 18,
    marginTop: 12
  }
})

export default styles;
