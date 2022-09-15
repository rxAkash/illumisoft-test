import { StyleSheet } from "react-native";
import { blackColor, lightGray, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: blackColor,
    marginLeft: 18,
    marginTop: 6,
    marginBottom: 12
  },
  container: {
    backgroundColor: whiteColor,
    borderTopWidth: 0.5,
    borderTopColor: lightGray,
    padding: 12
  },
  noPaddingContainer: {
    backgroundColor: whiteColor,
    borderTopWidth: 0.5,
    borderTopColor: lightGray,
  },
  infoText: {
    fontSize: 14,
    color: blackColor,
    fontWeight: '600',
    marginBottom: 8
  },
  regularText: {
    fontSize: 14,
    color: blackColor,
    fontWeight: '400',
    marginBottom: 8,
    lineHeight: 22
  },
  recommendationsContainer: {
    marginTop: 12
  },
  cardSection: {
    paddingBottom: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: lightGray,
    padding: 12
  },
  button: {
    marginBottom: 12
  },
  contentContainer: {
    paddingBottom: 36
  },
  cardBody: {
    padding: 12,
    paddingTop: 0
  },
  card: {
    padding: 12
  },
  resultsSection: {
    marginTop: 12,
    paddingTop: 12,
    borderTopColor: lightGray,
    borderTopWidth: 0.5
  }
})

export default styles;
