import React, { PropTypes } from 'react';

const ProgressBar = ({playProgressPercent, loadProgressPercent}) => {
  return (
    <div className='progress-control'>
      <div className='play-progress' style={{ width: playProgressPercent + '%' }}></div>
      <div className='load-progress' style={{ width: loadProgressPercent + '%' }}></div>
    </div>
  );
};

ProgressBar.propTypes = {
  playProgressPercent: PropTypes.number.isRequired,
  loadProgressPercent: PropTypes.number.isRequired
};

export default ProgressBar;
