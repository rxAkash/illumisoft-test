import { StyleSheet } from "react-native";
import { blackColor, grayColor, lightGray } from "UIToolkit/theme/colors";
import { containerPadding } from "UIToolkit/theme/styles";

const styles = StyleSheet.create({
  container: {
    ...containerPadding
  },
  card: {
    padding: 12
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: blackColor
  },
  info: {
    color: grayColor,
    fontSize: 14,
    fontWeight: '400',
    marginTop: 8,
    marginBottom: 8
  },
  innerCard: {
    borderWidth: 0.5,
    borderRadius: 6,
    borderColor: lightGray,
    marginVertical: 8
  },
  cardHeader: {
    backgroundColor: '#F2F2F2',
    borderBottomColor: lightGray,
    borderBottomWidth: 0.5,
    borderTopEndRadius: 6,
    borderTopStartRadius: 6,
    padding: 12
  },
  headerText: {
    fontSize: 12,
    fontWeight: '500',
    color: blackColor
  },
  cardBody: {
    padding: 12,
    paddingTop: 0
  },
  buttonsContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
    flex: 1
  },
  restartButton: {
    flex: 1,
    marginRight: 6
  },
  continueButton: {
    flex: 1,
    marginLeft: 6
  }
})

export default styles;
