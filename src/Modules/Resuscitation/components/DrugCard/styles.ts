import { StyleSheet } from "react-native";
import { blackColor, grayColor, lightBlueColor, primaryColor, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container: {
    borderLeftWidth: 3,
    elevation: 3,
    shadowColor: blackColor,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    backgroundColor: whiteColor,
    marginVertical: 4,
    alignItems: 'flex-start'
  },
  drugIndicatorContainer: {
    padding: 5,
    borderRadius: 3,
    marginRight: 6
  },
  drugIndicator: {
    color: whiteColor,
    fontSize: 14,
    fontWeight: '700'
  },
  drugName: {
    fontSize: 16,
    color: blackColor,
    fontWeight: '500',
    marginVertical: 6,
    paddingHorizontal: 12
  },
  arrow: {
    width: 16,
    height: 16,
    tintColor: grayColor,
    marginRight: 6
  },
  arrowActive: {
    transform: [{rotate: '180deg'}],
    tintColor: primaryColor
  },
  concentrationExpandContainer: {
    justifyContent: 'center',
    paddingVertical: 16,
    width: '100%',
    paddingHorizontal: 12
  },
  concentrationRow: {
    flexDirection: 'row',
  },
  text: {
    color: blackColor,
    fontSize: 16
  },
  bold: {
    fontWeight: '600'
  },
  drugTitleContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingTop: 12
  },
  concentrationExpanded: {
    backgroundColor: lightBlueColor
  },
  admText: {
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 22,
    color: blackColor
  },
  warning: {
    color: 'red',
    fontWeight: '600',
    padding: 12
  },
  warningBox: {
    borderWidth: 0.5,
    borderColor: 'red',
    borderRadius: 2,
    margin: 12
  }
})

export default styles;
