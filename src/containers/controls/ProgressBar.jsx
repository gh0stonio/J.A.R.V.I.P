import { connect } from 'react-redux';
import ProgressBarComponent from '../../components/controls/ProgressBar';

function computeProgressPercent (time, duration) {
  return time * 100 / duration;
}

const mapStateToProps = (state) => {
  // the data for the buffered progress is faked until the real buffer is handle
  return {
    playProgressPercent: computeProgressPercent(state.get('currentTime'), state.get('duration')),
    loadProgressPercent: 100
  };
};

export default connect(mapStateToProps)(ProgressBarComponent);
