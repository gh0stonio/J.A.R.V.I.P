import React, { PropTypes } from 'react';

const PlaystateButton = ({ actionnablePlaystate, actions }) => {
  const playstateClassname = 'glyphicon glyphicon-' + actionnablePlaystate;

  return (
    <div className='play-control control' onClick={actions[actionnablePlaystate]}>
      <span className={playstateClassname}></span>
    </div>
  );
};

PlaystateButton.propTypes = {
  actions: PropTypes.object.isRequired,
  actionnablePlaystate: PropTypes.string.isRequired
};

export default PlaystateButton;
