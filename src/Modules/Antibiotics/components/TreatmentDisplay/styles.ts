import { StyleSheet } from "react-native";
import { blackColor, darkGray, lightGray } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  boldText: {
    fontSize: 14,
    fontWeight: '600',
    color: blackColor,
    marginBottom: 4
  },
  regularText: {
    fontSize: 14,
    fontWeight: '400',
    color: darkGray,
    marginBottom: 4
  },
  treatmentContainer: {
    paddingBottom: 12,
    borderBottomColor: lightGray,
    borderBottomWidth: 0.5,
    padding: 12
  },
  listContainer: {
    paddingVertical: 12,
    borderBottomColor: lightGray,
    borderBottomWidth: 0.5,
  },
  drugButton: {
    paddingVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12
  },
  drugListTitle: {
    marginHorizontal: 12
  },
  arrow: {
    width: 12,
    height: 18
  },
  secondary: {
    marginTop: 24
  },
  textContainer: {
    flexWrap: 'wrap'
  }
})

export default styles;
