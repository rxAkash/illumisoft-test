import { StyleSheet } from "react-native";
import { blackColor , whiteColor, lightGray} from "UIToolkit/theme/colors";
import { containerPadding } from "UIToolkit/theme/styles";

const styles = StyleSheet.create({ 
  container: {
    backgroundColor: whiteColor,
    borderTopWidth: 0.5,
    borderTopColor: lightGray,
    padding: 12,
    flex:1,
    // marginTop: 10
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginTop: 40
  },
  headingTextSection: {
    fontSize: 20,
    textAlign: "left",
    color: blackColor,
    fontWeight:"600"
  },
  sectionHeadingContainer: {
    top:30,
    // width:240,
    padding:15
  },
  btnStyle: {
    width: 150,
    height: 50,
  },
})

export default styles;
