import { StyleSheet } from "react-native";
import { blackColor, grayColor, lightGray } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: lightGray,
    borderRadius: 4,
    flex: 1,
    padding: 8
  },
  arrowIc: {
    width: 12,
    height: 12,
    tintColor: grayColor
  },
  inputTitle: {
    fontSize: 16,
    color: blackColor,
    fontWeight: '300',
    flex: 1
  },
  drips: {
    marginTop: 16
  },
  boldTitle: {
    fontWeight: '600',
    color: blackColor,
    fontSize: 16,
    flex: 1
  },
  cover: {
    opacity: 0.5
  },
  value: {
    color: blackColor,
    fontSize: 16,
    fontWeight: '400'
  },
  formulaContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  formulaText: {
    color: '#FC6B25',
    fontSize: 12,
    fontWeight: '300'
  },
  dividerBorder: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#FC6B25',
    paddingBottom: 4,
    marginBottom: 4
  }
})

export default styles;
