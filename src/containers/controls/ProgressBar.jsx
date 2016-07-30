import { connect } from 'react-redux';
import { seekByPercent } from '../../actions/';
import ProgressBarComponent from '../../components/controls/ProgressBar';

function computeProgressPercent (time, duration) {
  return time * 100 / duration;
}

function getSeekPositionPercent (event) {
  return (event.pageX - event.currentTarget.getBoundingClientRect().left) * 100 / event.currentTarget.offsetWidth;
}

const mapStateToProps = (state) => {
  return {
    playProgressPercent: computeProgressPercent(state.get('currentTime'), state.get('duration')),
    loadProgressPercent: state.get('buffer')
  };
};

function mapDispatchToProps (dispatch) {
  return {
    seek: (event) => dispatch(seekByPercent(getSeekPositionPercent(event)))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBarComponent);
