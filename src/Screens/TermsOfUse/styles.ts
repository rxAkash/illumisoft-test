import {StyleSheet} from 'react-native';
import {blackColor, primaryColor} from 'UIToolkit/theme/colors';

const styles = StyleSheet.create({
  container: {
    padding: 32,
    paddingTop: 26
  },
  title: {
    color: primaryColor,
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 28,
    textAlign: 'center',
  },
  strong: {
    color: blackColor,
    opacity: 1,
    fontWeight: '600',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  text: {
    fontSize: 16,
    color: blackColor,
    fontWeight: '300',
    opacity: 0.9,
    letterSpacing: 0.5,
    lineHeight: 22,
  },
});

export default styles;
