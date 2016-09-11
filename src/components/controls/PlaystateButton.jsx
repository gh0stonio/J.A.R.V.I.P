import React, { PropTypes } from 'react';

const PlaystateButton = ({ actionnablePlaystateClassName, updatePlaystateByClassName }) => {
  const playstateClass = 'glyphicon glyphicon-' + actionnablePlaystateClassName;

  return (
    <button className='control-button play-button' onClick={() => updatePlaystateByClassName(actionnablePlaystateClassName)}>
      <span className={playstateClass}></span>
    </button>
  );
};

PlaystateButton.propTypes = {
  updatePlaystateByClassName: PropTypes.func.isRequired,
  actionnablePlaystateClassName: PropTypes.string.isRequired
};

export default PlaystateButton;
