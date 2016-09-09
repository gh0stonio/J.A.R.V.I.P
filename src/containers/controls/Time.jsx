import { connect } from 'react-redux';
import moment from 'moment';
import { Time } from '../../components/controls';

const formatTimeForDisplay = (time, unit) => {
  const duration = moment.duration(time, unit);
  return (duration.hours() ? duration.hours() + ':' : '') + moment.utc(duration.asMilliseconds()).format('mm:ss');
};

const mapStateToProps = (state) => {
  return {
    duration: formatTimeForDisplay(state.get('duration'), 'seconds'),
    currentTime: formatTimeForDisplay(state.get('currentTime'), 'seconds')
  };
};

export default connect(mapStateToProps)(Time);
