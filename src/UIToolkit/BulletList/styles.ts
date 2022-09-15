import { StyleSheet } from "react-native";
import { blackColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    marginBottom: 4,
    flexShrink: 1
  },
  subtextContainer: {
    flexDirection: 'row',
    marginBottom: 4,
    marginLeft: 32
  },
  subSubtextContainer: {
    flexDirection: 'row',
    marginBottom: 4,
    marginLeft: 52
  },
  bullet: {
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 8,
    marginRight: 12,
    color: blackColor,
    lineHeight: 21
  },
  emptyBullet: {
    fontSize: 6,
    fontWeight: '600',
    marginRight: 12,
    color: blackColor,
    marginTop: 4
  },
  text: {
    fontSize: 14,
    color: blackColor,
    flexShrink: 1
  },
  number: {
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 12,
    marginRight: 12,
    color: blackColor,
    lineHeight: 18
  }
})

export default styles;
