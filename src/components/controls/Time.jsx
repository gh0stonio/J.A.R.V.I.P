import React, { PropTypes } from 'react';

const Time = ({ duration, currentTime }) => {
  return (
    <div className='control-display'>
      <span className='currentTime'>{currentTime}</span>
      <span className='divider'> / </span>
      <span className='duration'>{duration}</span>
    </div>
  );
};

Time.propTypes = {
  duration: PropTypes.string.isRequired,
  currentTime: PropTypes.string.isRequired
};

export default Time;
