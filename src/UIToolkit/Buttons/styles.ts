import { StyleSheet } from "react-native";
import { blackColor, primaryColor, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  fullWidthButton: {
    backgroundColor: primaryColor,
    padding: 12,
    borderRadius: 4,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  fullWidthButtonText: {
    color: whiteColor,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center'
  },
  hollowButton: {
    backgroundColor: whiteColor,
    borderColor: primaryColor,
    borderWidth: 1,
    padding: 12,
    borderRadius: 4,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  hollowButtonText: {
    color: primaryColor,
    fontSize: 16,
    fontWeight: '500',
  },
  icon:{ 
    width: 14,
    height: 14,
    marginRight: 8
  },
  bigIcon: {
    width: 24,
    height: 24
  },
  hollowIcon: {
    tintColor: primaryColor
  },
  primaryIcon: {
    tintColor: whiteColor
  },
  coloredButton: {
    padding: 16,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: blackColor,
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: {
      width: 2,
      height: 2
    }
  },
  coloredButtonText: {
    color: whiteColor,
    fontWeight: '400',
    fontSize: 16
  },
  coloredTextContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  coloredIcon: {
    width: 20,
    height: 20,
    marginRight: 6
  },
  arrow: {
    width: 16,
    height: 16,
    tintColor: whiteColor
  },
  disabled: {
    opacity: 0.5
  }
})

export default styles;
