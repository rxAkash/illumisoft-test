import { StyleSheet } from "react-native";
import { blackColor, lightGray, primaryColor } from "UIToolkit/theme/colors";
import { containerPadding } from "UIToolkit/theme/styles";

const styles = StyleSheet.create({
  container: {
    ...containerPadding,
  },
  admitSection: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  admitText: {
    color: primaryColor,
    fontWeight: '500',
    marginLeft: 12
  },
  
  title: {
    fontSize: 18,
    color: blackColor,
    fontWeight: '600',
    opacity: 0.7,
    marginBottom: 12,
    marginTop: 16
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 14,
    borderTopWidth: 0.5,
    borderTopColor: lightGray
  },
  button: {
    marginHorizontal: 6
  },
  admitIcon: {
    width: 14,
    height: 14,
    tintColor: primaryColor
  },
  treatmentTitle: {
    padding: 16,
    fontSize: 18,
    paddingBottom: 8,
    fontWeight: '600',
    color: blackColor
  }
})

export default styles;
