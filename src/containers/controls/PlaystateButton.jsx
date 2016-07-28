import { connect } from 'react-redux';
import PlaystateButtonComponent from '../../components/controls/PlaystateButton';
import { PLAYSTATE_INIT, PLAYSTATE_PLAYING, PLAYSTATE_PAUSED, PLAYSTATE_ENDED } from '../../constants/';

function getActionnablePlaystate (playstate) {
  switch (playstate) {
    case PLAYSTATE_INIT:
    case PLAYSTATE_PAUSED:
      return 'play';
    case PLAYSTATE_PLAYING:
      return 'pause';
    case PLAYSTATE_ENDED:
      return 'repeat';
  }
}

const mapStateToProps = (state) => {
  return {
    actionnablePlaystate: getActionnablePlaystate(state.get('playstate'))
  };
};

export default connect(mapStateToProps)(PlaystateButtonComponent);
