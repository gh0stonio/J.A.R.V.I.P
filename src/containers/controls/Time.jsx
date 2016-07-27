import { connect } from 'react-redux';
import moment from 'moment';
import TimeComponent from '../../components/controls/Time';

function formatTimeForDisplay (time, unit) {
  var duration = moment.duration(time, unit);

  return (duration.hours() ? duration.hours() + ':' : '') + moment.utc(duration.asMilliseconds()).format('mm:ss');
}

const mapStateToProps = (state) => {
  return {
    duration: formatTimeForDisplay(state.get('duration'), 'seconds'),
    currentTime: formatTimeForDisplay(state.get('currentTime'), 'seconds')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TimeComponent);

export default VisibleTodoList;
