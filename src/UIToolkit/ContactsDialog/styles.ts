import {StyleSheet} from 'react-native';
import {secondaryColor, transparentBlack, whiteColor} from '../theme/colors';

const styles = StyleSheet.create({
  dialog: {
    backgroundColor: transparentBlack,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: whiteColor,
    padding: 12,
    borderRadius: 12,
  },
  linkTitle: {
    color: secondaryColor,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 4,
  },
  linkSubtitle: {
    color: secondaryColor,
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 2,
    paddingHorizontal: 12,
  },
  linkButton: {
    borderBottomColor: secondaryColor,
    borderBottomWidth: 1,
    paddingVertical: 8,
  },
  cancelButton: {
    color: secondaryColor,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    padding: 18,
    paddingBottom: 10,
  },
});

export default styles;
