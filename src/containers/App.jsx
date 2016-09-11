import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Video from '../containers/Video';
import { Time, ProgressBar, PlaystateButton, VolumeButton } from '../containers/controls';
import { PLAYSTATE_PLAYING } from '../constants';

class App extends Component {
  handleHideShowMenu () {
    let { playstate } = this.props;
    let jarvipDOM = this.refs.jarvip;
    let controlsDOM = this.refs.controls;

    jarvipDOM.onmouseover = () => {
      controlsDOM.classList.remove('hidden');
    };
    jarvipDOM.onmouseout = () => {
      if (playstate === PLAYSTATE_PLAYING) {
        controlsDOM.classList.add('hidden');
      }
    };
  }
  componentDidMount () {
    this.handleHideShowMenu();
  }
  componentDidUpdate () {
    this.handleHideShowMenu();
  }
  render () {
    const { video } = this.props;

    return (
      <div className='jarvip' ref='jarvip'>
        <div className='video-container'>
          <Video video={video} />
        </div>
        <div className='controls-bar' ref='controls'>
          <div className='progress-container'>
            <ProgressBar />
          </div>
          <div className='controls-container'>
            <div className='left-controls'>
              <button className='control-button' title='previous'>
                <span className='glyphicon glyphicon-step-backward'></span>
              </button>
              <PlaystateButton />
              <button className='control-button'>
                <span className='glyphicon glyphicon-step-forward'></span>
              </button>
              <Time />
            </div>
            <div className='right-controls'>
              <VolumeButton />
              <button className='control-button'>
                <span className='glyphicon glyphicon-comment' title='subtitles'></span>
              </button>
              <button className='control-button'>
                <span className='glyphicon glyphicon-resize-full' title='expand'></span>
              </button>
              <button className='control-button'>
                <span className='glyphicon glyphicon-fullscreen' title='fullscreen'></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  video: PropTypes.object.isRequired,
  playstate: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    playstate: state.get('playstate')
  };
};

export default connect(mapStateToProps)(App);
