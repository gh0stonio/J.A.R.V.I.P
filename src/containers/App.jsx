import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PlayerActions from '../actions';

// Containers / Components
import Video from '../containers/Video';
import Time from '../containers/controls/Time';
import ProgressBar from '../containers/controls/ProgressBar';

class App extends Component {
  render () {
    const { actions } = this.props;

    return (
      <div className='jarvip container-fluid'>
        <div className='row'>
          <div className='col-xs-12'>
            <Video actions={actions} />
          </div>
        </div>
        <div className='control-bar'>
          <div className='row'>
            <div className='col-xs-12'>
              <ProgressBar />
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-1'>
              <div className='play-control control'>
                <span className='fui-play'></span>
              </div>
            </div>
            <div className='col-xs-3'>
              <div className='control'>
                <Time />
              </div>
            </div>
            <div className='col-xs-6'></div>
            <div className='col-xs-1'>
              <div className='volume-control control'>
                <span className='fui-volume'></span>
              </div>
            </div>
            <div className='col-xs-1'>
              <div className='fullscreen-control control'>
                <span className='fui-resize'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired
};

export default connect(
  function mapStateToProps (state) {
    return {};
  },
  function mapDispatchToProps (dispatch) {
    return {
      actions: bindActionCreators(PlayerActions, dispatch)
    };
  }
)(App);
