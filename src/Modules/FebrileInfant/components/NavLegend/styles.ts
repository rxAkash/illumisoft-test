import { StyleSheet } from "react-native";
import { blackColor, lightGray, primaryColor, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  listicon:{
    right:-135,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: primaryColor
  },
  container: {
    backgroundColor: whiteColor,
    borderRadius: 6,
    padding: 8,
    maxHeight: '100%'
  },
  closeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  title: {
    color: primaryColor,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12
  },
  modalBody: {
    flex: 1,
    marginTop: 80
  },
  itemRow: {
    flexDirection: 'row',
    borderBottomColor: lightGray,
    borderBottomWidth: 0.5,
    padding: 12,
    justifyContent: 'space-between'
  },
  itemText: {
    color: blackColor,
    fontSize: 14,
    fontWeight: '600'
  },
  activeText: {
    color: primaryColor
  },
  subtext: {
    marginLeft: 24
  },
  blueText: {
    color: primaryColor,
    fontWeight: '600',
    fontSize: 14
  },
  returnButton: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12
  },
  arrow: {
    width: 20,
    height: 20
  }
})

export default styles;
