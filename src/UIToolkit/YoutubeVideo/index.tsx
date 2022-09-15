import React from 'react';
import YoutubePlayer from "react-native-youtube-iframe";

interface Props {
  videoId: string;
}

const YoutubeVideo = React.memo(({videoId}: Props) => {
  return (
    <YoutubePlayer
      videoId={videoId}
      height={220}
    />
  )
})

export default YoutubeVideo;
