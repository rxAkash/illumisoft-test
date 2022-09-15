import { Dimensions, StyleSheet  } from "react-native";
import { blackColor, grayColor, whiteColor } from "UIToolkit/theme/colors";
import { containerPadding } from "UIToolkit/theme/styles";

const styles = StyleSheet.create({
  container: {
    ...containerPadding,
    backgroundColor: whiteColor,
    height: Dimensions.get("screen").height
    // flex: 1
  },
  background: {
    backgroundColor: whiteColor,
  },
  subtitleText: {
    fontSize: 16,
    color: blackColor 
  },
  inputContainer: {
    marginVertical: 32
  },
  row: {
    flexDirection: 'row'
  },
  scoreInfoContainer: {
    marginVertical: 42,
    flexDirection: 'row',
    alignItems: 'center'
  },
  score: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 0.5,
    borderColor: grayColor ,
    borderRadius: 4,
    marginLeft: 12
  },
  bottomContainer: {
    padding: 18,
    borderTopColor: grayColor,
    borderTopWidth: 0.5,
  }
})




export default styles