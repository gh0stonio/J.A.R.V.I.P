import { connect } from 'react-redux';
import VolumeButtonComponent from '../../components/controls/VolumeButton';
import { toggleMute } from '../../actions/';

const mapStateToProps = (state) => {
  return {
    muted: state.get('muted'),
    volume: state.get('volume')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMute: () => dispatch(toggleMute())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VolumeButtonComponent);
