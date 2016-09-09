import { connect } from 'react-redux';
import { PlaystateButton } from '../../components/controls';
import { updatePlaystate } from '../../actions';
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

const getClassNameByPlaystate = (currentPlaystate) => {
  return actionnableStateClassNameAssocitations[currentPlaystate];
};

const getPlaystateByClassName = (className) => {
  return classNameActionnableStateAssocitations[className];
};

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

export default connect(mapStateToProps, mapDispatchToProps)(PlaystateButton);
