import React, { PropTypes } from 'react';

const VolumeButton = ({ actions, muted, volume }) => {
  var volumeUpButton = <span className='glyphicon glyphicon-volume-up'></span>;
  var volumeDownButton = <span className='glyphicon glyphicon-volume-down'></span>;
  var mutedButton = <span className='glyphicon glyphicon-volume-off'></span>;

  var volumeButton = muted ? mutedButton : volume > 0.5 ? volumeUpButton : volumeDownButton;
  var onClickCallback = muted ? actions.unmute : actions.mute;

  return (
    <div className='volume-control control' onClick={onClickCallback}>
      {volumeButton}
    </div>
  );
};

VolumeButton.propTypes = {
  actions: PropTypes.object.isRequired,
  muted: PropTypes.bool.isRequired,
  volume: PropTypes.number.isRequired
};

export default VolumeButton;
