import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import VideoComponent from '../components/Video';
import { attachDOM, setDuration, updateCurrentTime, updatePlaystate } from '../actions/';
import { PLAYSTATE_ENDED } from '../constants/';

class VideoContainer extends Component {
  componentDidMount () {
    const { dispatch } = this.props;

    var videoEl = findDOMNode(this);

    dispatch(attachDOM(videoEl));

    videoEl.addEventListener('canplay', function () {
      dispatch(setDuration(videoEl.duration));
    }, false);

    videoEl.addEventListener('timeupdate', function () {
      dispatch(updateCurrentTime(videoEl.currentTime));
    }, false);

    videoEl.addEventListener('ended', function () {
      dispatch(updatePlaystate(PLAYSTATE_ENDED));
    }, false);
  }

  render () {
    return (
      <VideoComponent />
    );
  }
}

export default connect()(VideoContainer);
