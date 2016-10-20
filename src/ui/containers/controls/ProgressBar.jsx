import { connect } from 'react-redux'
import { seekByPercent } from '../../../libs/actions'
import { ProgressBar } from '../../components/controls'

const computeProgressPercent = (time, duration) => {
  return time * 100 / duration
}

const getSeekPositionPercent = (event) => {
  return (event.pageX - event.currentTarget.getBoundingClientRect().left) * 100 / event.currentTarget.offsetWidth
}

const mapStateToProps = (state) => {
  return {
    playProgressPercent: computeProgressPercent(state.get('currentTime'), state.get('duration')),
    loadProgressPercent: state.get('buffer')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    seek: (event) => dispatch(seekByPercent(getSeekPositionPercent(event)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar)
