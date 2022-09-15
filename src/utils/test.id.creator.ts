import { Platform } from 'react-native';

export const getTestProps = (id?: string, isText = false) => {
  
  if (!id) {
    return {};
  } else {
    const testID = id.replace(/ /g, '');
    if (Platform.OS === 'ios') {
      if (isText) {
        return {
          testID,
          accessibilityLabel: testID,
          ID: testID,
        };
      } else {
        return {
          testID,
          accessible: false,
          ID: testID,
        };
      }
    }

    return {
      accessible: true,
      accessibilityLabel: testID,
      ID: testID,
    };
  }
};