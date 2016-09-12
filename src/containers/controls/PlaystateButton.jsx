import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { PlaystateButton } from '../../components/controls';
import { play, pause } from '../../actions';
import { PLAYSTATE_INIT, PLAYSTATE_PLAYING, PLAYSTATE_PAUSED, PLAYSTATE_ENDED } from '../../constants/';

class PlayButtonContainer extends Component {
  getActionnableClassName () {
    let { playstate } = this.props;

    switch (playstate) {
      case PLAYSTATE_PLAYING:
        return 'pause';
      case PLAYSTATE_INIT:
      case PLAYSTATE_PAUSED:
        return 'play';
      case PLAYSTATE_ENDED:
        return 'repeat';
    }
  }
  getActionnableAction () {
    let { playstate } = this.props;

    switch (playstate) {
      case PLAYSTATE_PLAYING:
        return pause;
      case PLAYSTATE_INIT:
      case PLAYSTATE_PAUSED:
      case PLAYSTATE_ENDED:
        return play;
    }
  }
  render () {
    let { onClick } = this.props;
    return <PlaystateButton actionnableClassName={this.getActionnableClassName()} actionnableAction={this.getActionnableAction()} onClick={onClick} />;
  }
}

PlayButtonContainer.propTypes = {
  playstate: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    playstate: state.get('playstate')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (action) => dispatch(action())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayButtonContainer);
