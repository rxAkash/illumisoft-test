import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './styles';

const References = React.memo(() => {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <View style={{flex: 1}}>
      <WebView
        source={{uri: 'https://www.childrensmercy.org/health-care-providers/providers/provider-resources/apps-for-providers/PedsGuide-app/peds-guide-references/'}}
        onLoad={() => setShowLoading(false)}
      />
      {showLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator />
        </View>
      )}
    </View>
  )
});

export default References;
