import { StyleSheet } from "react-native";
import { blackColor, lightGray, primaryColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  title: {
    color: primaryColor,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 16
  },
  card: {
    padding: 14
  },
  description: {
    marginTop: 14
  },
  subtitle: {
    fontSize: 16,
    color: blackColor,
    marginVertical: 16,
    textAlign: 'center',
    fontWeight: '500'
  },
  redText: {
    color: 'red',
    fontWeight: '500'
  },
  sectionTitle: {
    fontSize: 16,
    color: blackColor,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 16
  },
  tracheostomyTitle: {
    marginBottom: 12,
    fontWeight: '600',
    color: blackColor
  },
  boldText: {
    fontWeight: '600',
    color: blackColor
  },
  drugCategory: {
    color: primaryColor,
    marginTop: 12,
    fontSize: 16,
    fontWeight: '500'
  },
  tracheostomySection: {
    borderBottomWidth: 0.5,
    borderBottomColor: lightGray,
    marginBottom: 8
  }
})

export default styles;
