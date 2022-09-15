import { StyleSheet } from "react-native";
import { blackColor, grayColor, lightGray, primaryColor, whiteColor } from "UIToolkit/theme/colors";
import { containerPadding } from "UIToolkit/theme/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: whiteColor,
    ...containerPadding,
    flex: 1
  },
  title: {
    color: primaryColor,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center'
  },
  card: {
    padding: 12,
    marginTop: 16,
    flex: 1
  },
  sectionTitle: {
    color: blackColor,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12
  },
  info: {
    color: blackColor,
    fontWeight: '400'
  },
  subInfo: {
    color: blackColor,
    fontWeight: '400',
    fontSize: 12
  },
  infoTitle: {
    fontWeight: '600'
  },
  grayTitle: {
    color: grayColor,
    marginBottom: 4
  },
  valueSection: {
    marginTop: 8,
    borderBottomColor: lightGray,
    borderBottomWidth: 0.5,
    paddingBottom: 6,
    marginBottom: 12
  },
  infoSection: {
    borderBottomColor: lightGray,
    borderBottomWidth: 0.5,
    paddingBottom: 12,
    marginBottom: 12
  },
  medValue: {
    fontWeight: '500',
    color: primaryColor
  },
  value: {
    color: blackColor,
    fontWeight: '600'
  },
  scroll: {
    paddingBottom: 16,
    paddingTop: 22
  },
  resultsSection: {
    alignItems: 'center',
    marginTop: 16
  },
  warningBox: {

  },
  warning: {
    fontSize: 16,
    color: 'red',
    fontWeight: '600'
  },
  redText: {
    color: 'red',
    fontWeight: '600'
  },
  calculationHeader: {
    fontSize: 15,
    color: 'red',
    fontWeight: '600',
    marginVertical: 12,
    textAlign: 'center'
  },
  subwarning: {
    fontSize: 14,
    color: 'red',
    fontWeight: '500'
  },
  resultContainer: {
    width: '100%',
    backgroundColor: '#fff1f1',
    alignItems: 'center',
    paddingVertical: 8,
    marginTop: 24
  },
  resultText: {
    fontSize: 18,
    color: 'red',
    fontWeight: '600'
  },
  lowerText: {
    fontSize: 10
  },
  adjustedFluidsContainer: {
    marginTop: 16
  },
  injurySourceText: {
    fontSize: 16,
    fontWeight: '400',
    color: blackColor,
    marginTop: 12,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000",
    marginBottom: 8
  },
  bold: {
    fontWeight: '600'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  headerIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16
  },
  headerItem: {
    color: whiteColor,
    fontWeight: '500'
  },
  headerIconImage: {
    tintColor: whiteColor,
    width: 12,
    height: 12
  },
  nextButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 18
  },
  nextButton: {
    paddingHorizontal: 24
  },
  treatmentContainer: {
    marginTop: 24
  },
  treatmentBox: {
    borderColor: lightGray,
    padding: 14,
    borderWidth: 0.5,
    marginTop: 14
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16
  },
  headerDisabled: {
    backgroundColor: grayColor
  }
})

export default styles;
