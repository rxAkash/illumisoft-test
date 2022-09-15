import {StyleSheet} from 'react-native';
import { blackColor, lightGray, primaryColor, whiteColor } from 'UIToolkit/theme/colors';

const styles = StyleSheet.create({
  container: {
    padding: 32,
  },
  title: {
    color: blackColor,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 28,
  },
  disclaimer: {
    color: primaryColor,
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 28,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: blackColor,
    fontWeight: '300',
    opacity: 0.9,
    letterSpacing: 0.5,
    lineHeight: 22,
  },
  bottomButtonContainer: {
    padding: 12,
    borderTopColor: lightGray,
    borderTopWidth: 0.5,
    justifyContent: 'center',
  },
  acceptButton: {
    backgroundColor: primaryColor,
    padding: 14,
    borderRadius: 4,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12
  },
  acceptButtonText: {
    color: whiteColor,
    fontSize: 14,
    fontWeight: '500'
  },
  acceptButtonImage: {
    width: 12,
    height: 12
  }
});

export default styles;
