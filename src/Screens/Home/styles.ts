import {StyleSheet} from 'react-native';
import {blackColor, grayColor, whiteColor} from 'UIToolkit/theme/colors';

const styles = StyleSheet.create({
  container: {
    padding: 14,
    textAlign: 'center',
  },
  infoText: {
    textAlign: 'center',
    color: grayColor,
    marginTop: 16,
    fontWeight: '400',
  },
  card: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 18,
    backgroundColor: whiteColor,
    shadowColor: blackColor,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 4,
    flexDirection: 'row',
    elevation: 4
  },
  itemIcon: {
    width: 60,
    height: 60,
    marginRight: 14,
  },
  itemTitle: {
    fontSize: 18,
    color: blackColor,
    fontWeight: '600',
  },
  itemSubtitle: {
    fontSize: 14,
    color: grayColor,
    fontWeight: '400',
    maxWidth: '95%',
  },
  itemTextContainer: {
    justifyContent: 'center',
  },
  list: {
    paddingBottom: 40,
  },
  comingSoon: {
    position: 'absolute',
    top: -8,
    right: 0,
    height: 100,
    width: 100
  }
});

export default styles;
