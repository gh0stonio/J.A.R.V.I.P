import React, { Component } from 'react';
import { connect } from 'react-redux';

// Containers / Components
import Video from '../containers/Video';
import Time from '../containers/controls/Time';
import ProgressBar from '../containers/controls/ProgressBar';
import PlaystateButton from '../containers/controls/PlaystateButton';
import VolumeButton from '../containers/controls/VolumeButton';

class App extends Component {
  render () {
    return (
      <div className='jarvip container-fluid'>
        <div className='row'>
          <div className='col-xs-12'>
            <Video />
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
              <PlaystateButton />
            </div>
            <div className='col-xs-3'>
              <div className='control'>
                <Time />
              </div>
            </div>
            <div className='col-xs-7'></div>
            <div className='col-xs-1'>
              <VolumeButton />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(App);
