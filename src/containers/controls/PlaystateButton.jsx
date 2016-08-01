import { connect } from 'react-redux';
import PlaystateButtonComponent from '../../components/controls/PlaystateButton';
import { updatePlaystate } from '../../actions/';
import { PLAYSTATE_PLAYING, PLAYSTATE_PAUSED } from '../../constants/';

var actionnableStateClassNameAssocitations = {
  PLAYSTATE_INIT: 'play',
  PLAYSTATE_PAUSED: 'play',
  PLAYSTATE_PLAYING: 'pause',
  PLAYSTATE_ENDED: 'repeat'
};

var classNameActionnableStateAssocitations = {
  'play': PLAYSTATE_PLAYING,
  'repeat': PLAYSTATE_PLAYING,
  'pause': PLAYSTATE_PAUSED
};

function getClassNameByPlaystate (currentPlaystate) {
  return actionnableStateClassNameAssocitations[currentPlaystate];
}

function getPlaystateByClassName (className) {
  return classNameActionnableStateAssocitations[className];
}

const mapStateToProps = (state) => {
  return {
    actionnablePlaystateClassName: getClassNameByPlaystate(state.get('playstate'))
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePlaystateByClassName: (playstate) => { dispatch(updatePlaystate(getPlaystateByClassName(playstate))); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaystateButtonComponent);
