import { StyleSheet } from "react-native";
import { lightGray, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
 
  optionsBackdrop: {
    justifyContent: 'flex-end',
    flex: 1
  },
  optionsContainer: {
    backgroundColor: '#252726',
    marginHorizontal: -20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: -100,
    paddingBottom: 100,
    maxHeight: '100%'
  },
  optionsHeader: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: lightGray,
    borderBottomWidth: 0.5,
    paddingBottom: 16,
    backgroundColor: '#FC6B25',
    paddingTop: 18,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: whiteColor
  },
  picker: {
    width: 200,
    height: 180
  },
  pickerItem: {
    color: whiteColor,
    fontSize:26
  },
  pickersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

export default styles;
