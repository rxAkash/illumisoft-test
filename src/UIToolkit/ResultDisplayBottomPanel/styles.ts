import { StyleSheet } from "react-native";
import { blackColor, grayColor, lightGray} from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  bottomPanelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 18,
    borderTopColor: lightGray,
    borderTopWidth: 0.5,
    alignItems: 'center'
  },
  column: {
    padding: 18,
    borderTopColor: lightGray,
    borderTopWidth: 0.5
  },
  bottomSubinfo: {
    fontSize: 12,
    color: grayColor,
    fontWeight: '300',
  },
  bottomText: {
    fontWeight: '600',
    color: blackColor,
    fontSize: 16,
    marginTop: 4,
  },
  infoText: {
    fontWeight: '400',
    color: blackColor,
    fontSize: 12,
    marginBottom: 12
  }
})

export default styles;
