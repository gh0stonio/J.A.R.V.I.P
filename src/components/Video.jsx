import React from 'react';

const Video = () => {
  const style = {
    width: 600
  };
  const url = 'http://www.html5videoplayer.net/videos/toystory.mp4';
  const poster = 'http://i2.wp.com/smallthings.fr/wp-content/uploads/2016/05/toy_story_wallpaper_by_artifypics-d5gss19.jpg?resize=640%2C360';

  return (
    <video style={style} src={url} poster={poster}></video>
  );
};

export default Video;
