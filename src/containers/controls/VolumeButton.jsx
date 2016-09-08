import { connect } from 'react-redux';
import { VolumeButton } from '../../components/controls';
import { toggleMute } from '../../actions';

const mapStateToProps = (state) => {
  return {
    muted: state.get('muted'),
    volume: state.get('volume')
  };
};

export default connect(mapStateToProps, { toggleMute })(VolumeButton);
