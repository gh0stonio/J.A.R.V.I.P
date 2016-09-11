import React, { PropTypes } from 'react';

const Video = ({ video }) => {
  return (
    <video src={video.url} poster={video.poster}></video>
  );
};

Video.propTypes = {
  video: PropTypes.object.isRequired
};

export default Video;
