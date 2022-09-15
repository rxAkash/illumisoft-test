import { StyleSheet } from "react-native";
import { blackColor, grayColor, lightGray, primaryColor, whiteColor } from "UIToolkit/theme/colors";
import { containerPadding } from "UIToolkit/theme/styles";

const styles = StyleSheet.create({
  container: {
    ...containerPadding
  },
  sectionTitle: {
    color: primaryColor,
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 12,
    textAlign: 'center'
  },
  section: {
    marginTop: 12
  },
  fluidsInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: lightGray,
    paddingBottom: 10,
    marginTop: 16
  },
  fluidsTitle: {
    fontWeight: '600',
    color: blackColor,
    fontSize: 16
  },
  fluidValue: {
    color: grayColor,
    fontWeight: '300'
  },
  staticText: {
    fontWeight: '300',
    color: blackColor,
    fontSize: 16,
    lineHeight: 22
  },
  redText: {
    fontWeight: '600',
    color: 'red'
  },
  staticTextContainer: {
    borderTopWidth: 36,
    borderTopColor: primaryColor,
    backgroundColor: whiteColor,
    shadowColor: blackColor,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    padding: 8,
    marginTop: 26,
    elevation: 5
  }
})

export default styles;
