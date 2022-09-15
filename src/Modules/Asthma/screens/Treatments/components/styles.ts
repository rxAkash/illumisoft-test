import { StyleSheet } from "react-native";
import { blackColor, lightGray } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  sectionTitle: {
    color: blackColor,
    fontWeight: '600',
    marginBottom: 4
  },
  section: {
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: lightGray
  },
  subtext: {
    color: blackColor,
    marginBottom: 4
  },
  collapsibleSection: {
    marginTop: 8
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icDown: {
    width: 14,
    height: 14
  },
  icUp: {
    width: 14,
    height: 14,
    transform: [{rotate: '180deg'}]
  },
  boldText: {
    fontWeight: '600',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    textDecorationColor: blackColor
  }
})

export default styles;
