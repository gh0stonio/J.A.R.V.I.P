import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import VideoComponent from '../components/Video';
import { initPlayer } from '../actions/';

class VideoContainer extends Component {
  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(initPlayer(findDOMNode(this)));
  }

  render () {
    return (
      <VideoComponent />
    );
  }
}

export default connect()(VideoContainer);
