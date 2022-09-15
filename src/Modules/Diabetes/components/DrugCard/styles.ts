import { StyleSheet } from "react-native";
import { blackColor, lightGray, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: lightGray,
    padding: 12,
    borderRadius: 4,
    borderLeftWidth: 4
  },
  indicationContainer: {
    padding: 4,
    borderRadius: 4,
    marginRight: 12
  },
  indicationText: {
    fontSize: 14,
    color: whiteColor,
    fontWeight: '600'
  },
  titleText: {
    fontSize: 16,
    color: blackColor,
    fontWeight: '600'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  dosageTitle: {
    fontSize: 14,
    fontWeight: '600'
  },
  lowModHighContainer: {
    borderWidth: 0.5,
    borderColor: lightGray,
    padding: 8,
    borderRadius: 4,
    marginVertical: 4
  },
  sectionContainer: {
    paddingVertical: 12,
    borderBottomColor: lightGray,
    borderBottomWidth: 0.5
  },
  regularText: {
    fontSize: 14,
    fontWeight: '400',
    marginVertical: 2
  },
  dosage: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4054B2'
  },
  concentrationContainer: {
    paddingVertical: 12,
    backgroundColor: '#EEEEFA',
    marginHorizontal: -12,
    paddingHorizontal: 12,
    marginTop: 12
  }
})

export default styles;
