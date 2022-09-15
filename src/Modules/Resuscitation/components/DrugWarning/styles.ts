import { StyleSheet } from "react-native";
import { blackColor, primaryColor, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: whiteColor,
    borderRadius: 6,
    padding: 16,
    maxHeight: '80%'
  },
  contentContainer: {
    paddingBottom: 26
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  closeIc: {
    width: 18,
    height: 18
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: primaryColor
  },
  placeholder: {
    width: 18
  },
  subtitleContainer: {
    flexDirection: 'row'
  },
  warningIc: {
    width: 18,
    height: 18,
    marginRight: 6
  },
  warningText: {
    color: 'red',
    fontWeight: '500',
    fontSize: 16
  },
  blackBoxText: {
    color: blackColor,
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 16
  },
  sectionTitle: {
    color: blackColor,
    fontWeight: '600',
    marginVertical: 12,
    fontSize: 16
  },
  text: {
    color: blackColor,
    marginBottom: 6
  }
})

export default styles;
