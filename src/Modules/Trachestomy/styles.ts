import { StyleSheet , Dimensions } from "react-native";
import { blackColor, primaryColor, whiteColor } from "UIToolkit/theme/colors";
import { containerPadding } from "UIToolkit/theme/styles";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({ 
  container: {
    ...containerPadding,
    // flex:1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  redText: {
    color: whiteColor,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center"

  },
  firstContainer: {
    // justifyContent: "center",
    // alignItems: "center",
    // padding: 5,
    width:340,

  },
  hollowText:{
    textAlign: "left"
  },
  secondSection: {
    width: windowWidth - 50,
    // justifyContent: "center",
    // alignItems: "center",
    // padding: 5,
    marginTop: 25,
  },
  secondTitle: {
    fontSize:22,
    fontWeight:"bold",
    color:blackColor
  },
 
})

export default styles;
