import React, { PropTypes } from 'react'

const VolumeButton = ({ toggleMute, muted, volume }) => {
  var volumeUpButton = <span className='glyphicon glyphicon-volume-up'></span>
  var volumeDownButton = <span className='glyphicon glyphicon-volume-down'></span>
  var mutedButton = <span className='glyphicon glyphicon-volume-off'></span>

  var volumeButton = muted ? mutedButton : volume > 0.5 ? volumeUpButton : volumeDownButton

  return (
    <button className='control-button' onClick={toggleMute}>
      {volumeButton}
    </button>
  )
}

VolumeButton.propTypes = {
  toggleMute: PropTypes.func.isRequired,
  muted: PropTypes.bool.isRequired,
  volume: PropTypes.number.isRequired
}

export default VolumeButton
