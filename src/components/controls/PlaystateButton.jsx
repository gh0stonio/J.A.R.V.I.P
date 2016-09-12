import React, { PropTypes } from 'react';

const PlaystateButton = ({ actionnableClassName, actionnableAction, onClick }) => {
  return (
    <button className='control-button play-button' onClick={() => onClick(actionnableAction)}>
      <span className={'glyphicon glyphicon-' + actionnableClassName}></span>
    </button>
  );
};

PlaystateButton.propTypes = {
  actionnableClassName: PropTypes.string.isRequired,
  actionnableAction: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default PlaystateButton;
