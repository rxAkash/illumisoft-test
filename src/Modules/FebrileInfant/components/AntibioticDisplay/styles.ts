import { StyleSheet } from "react-native";
import { lightGray, blackColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  antibioticContainer: {
    borderBottomColor: lightGray,
    borderBottomWidth: 0.5,
    marginTop: 6
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8
  },
  smallInfoText: {
    fontSize: 14,
    fontWeight: '300',
    color: blackColor,
    lineHeight: 22
  },
  subcodeText: {
    fontSize: 14,
    fontWeight: '300',
    color: blackColor,
    lineHeight: 22,
    maxWidth: '80%',
    textAlign: 'right',
    marginBottom: 6
  },
  codeContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  regularText: {
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 25,
    color: blackColor
  },
})

export default styles;