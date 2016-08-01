import React, { PropTypes } from 'react';

const PlaystateButton = ({ actionnablePlaystateClassName, updatePlaystateByClassName }) => {
  const playstateClass = 'glyphicon glyphicon-' + actionnablePlaystateClassName;

  return (
    <div className='play-control control' onClick={() => updatePlaystateByClassName(actionnablePlaystateClassName)}>
      <span className={playstateClass}></span>
    </div>
  );
};

PlaystateButton.propTypes = {
  updatePlaystateByClassName: PropTypes.func.isRequired,
  actionnablePlaystateClassName: PropTypes.string.isRequired
};

export default PlaystateButton;
