import React, { Component } from 'react';

export default class Video extends Component {
  render () {
    const url = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';
    const poster = 'http://images.2803.fr/uploads/2008/06/big-buck-bunny-2.jpg';

    return (
      <div className='jarvip container-fluid'>
        <div className='row'>
          <div className='col-xs-12'>
            <video ref='videoDOM' src={url} poster={poster}></video>
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
