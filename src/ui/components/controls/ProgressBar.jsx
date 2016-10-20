import React, { PropTypes } from 'react'

const ProgressBar = ({ seek, playProgressPercent, loadProgressPercent }) => {
  return (
    <div className='progress-control' onClick={seek}>
      <div className='play-progress' style={{ width: playProgressPercent + '%' }}></div>
      <div className='load-progress' style={{ width: loadProgressPercent + '%' }}></div>
    </div>
  )
}

ProgressBar.propTypes = {
  seek: PropTypes.func.isRequired,
  playProgressPercent: PropTypes.number.isRequired,
  loadProgressPercent: PropTypes.number.isRequired
}

export default ProgressBar
