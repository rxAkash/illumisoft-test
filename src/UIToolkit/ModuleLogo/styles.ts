import { StyleSheet } from "react-native";
import { blackColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 16,
    color: blackColor
  },
  image: {
    width: 60,
    height: 60
  }
})

export default styles;
