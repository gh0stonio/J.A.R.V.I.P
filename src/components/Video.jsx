import React, { PropTypes } from 'react';

const Video = ({ video }) => {
  const style = {
    width: 600
  };

  return (
    <video style={style} src={video.url} poster={video.poster}></video>
  );
};

Video.propTypes = {
  video: PropTypes.object.isRequired
};

export default Video;
