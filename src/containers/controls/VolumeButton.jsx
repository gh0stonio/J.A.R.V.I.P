import { connect } from 'react-redux';
import VolumeButtonComponent from '../../components/controls/VolumeButton';

const mapStateToProps = (state) => {
  return {
    muted: state.get('muted'),
    volume: state.get('volume')
  };
};

export default connect(mapStateToProps)(VolumeButtonComponent);
