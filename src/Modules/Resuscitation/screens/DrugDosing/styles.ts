import { StyleSheet } from "react-native";
import { lightGray, primaryColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: primaryColor,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16
  },
  redWarning: {
    color: 'red',
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 16,
    marginBottom: 12
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    marginTop: 16
  },
  placeholder: {
    width: 18
  },
  searchIc: {
    width: 18,
    height: 18,
    tintColor: primaryColor
  },
  searchContainer: {
    borderColor: lightGray,
    borderRadius: 6,
    borderWidth: 0.5,
    padding: 12,
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 12,
    marginTop: 16
  },
  input: {
    flex: 1,
    fontSize: 16
  }
})

export default styles;
