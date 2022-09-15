import { StyleSheet } from "react-native";
import { blackColor, lightGray, primaryColor, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: whiteColor,
    width: '100%'
  },
  doseText: {
    fontStyle: 'italic',
    fontSize: 16,
    color: blackColor,
    marginVertical: 4
  },
  subdoseText: {
    fontSize: 16,
    marginVertical: 4,
    color: blackColor
  },
  blueText: {
    color: primaryColor,
    fontWeight: '600'
  },
  descriptionSection: {
    borderTopColor: lightGray,
    borderTopWidth: 0.5,
    paddingTop: 18,
    marginTop: 6
  },
  warning: {
    fontSize: 14,
    fontWeight: '600',
    color: blackColor
  },
  warningsButton: {
    borderColor: lightGray,
    borderWidth: 0.5,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 12,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 2
  },
  blackBoxButton: {
    backgroundColor: blackColor,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 12,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 2
  },
  warningIc: {
    width: 18,
    height: 18,
    marginRight: 8,
    marginLeft: -8
  },
  blackBoxIc: {
    width: 18,
    height: 18,
    marginRight: 8,
    marginLeft: -8,
    tintColor: whiteColor
  },
  warningsText: {
    color: 'red',
    fontSize: 14,
    fontWeight: '500'
  },
  blackButtonText: {
    color: whiteColor,
    fontSize: 14,
    fontWeight: '500'
  },
  doseContainer: {
    borderColor: lightGray,
    borderWidth: 0.5,
    padding: 8,
    marginVertical: 4
  },
  doseGradeText: {
    fontWeight: '600',
    color: blackColor
  }
})

export default styles;
