import React from 'react';
import { ScrollView, View } from 'react-native';
import Card from 'UIToolkit/Card';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import YoutubeVideo from 'UIToolkit/YoutubeVideo';
import { mdiVideos } from './conf';
import styles from './styles';

const MDIVideos = React.memo(() => {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <GoBackHeader border />
      <View style={styles.container}>
        {mdiVideos.map(item => (
          <Card
            title={item.text}
            key={item.yid}
          >
            <YoutubeVideo videoId={item.yid} />
          </Card>
        ))}
      </View>
    </ScrollView>
  )
})

export default MDIVideos;
