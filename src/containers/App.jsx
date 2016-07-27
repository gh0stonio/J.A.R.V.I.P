import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Video from '../containers/Video';
import PlayerActions from '../actions';

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
              <div className='progress-control'>
                <div className='play-progress' style={{ width: '20%' }}></div>
                <div className='load-progress' style={{ width: '40%' }}></div>
                <div className='seek-handle' style={{ left: '20%' }}></div>
              </div>
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
                <div className='time-control'>
                  <span className='currentTime'>1:13:37</span>
                  <span className='divider'> / </span>
                  <span className='duration'>1:42:30</span>
                </div>
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
