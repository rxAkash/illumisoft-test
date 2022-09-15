import {Platform, StyleSheet} from 'react-native';
import {primaryColor, whiteColor} from '../theme/colors';

const styles = StyleSheet.create({
  header: {
    backgroundColor: primaryColor,
    height: Platform.OS === 'ios' ? 80 : 50,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingBottom: 12,
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 14,
    color: whiteColor,
    fontWeight: '500',
    textAlign: "center"
  },
  icon: {
    width: 18,
    height: 18,
    tintColor: whiteColor,
    marginBottom: 4
  },
});

export default styles;
