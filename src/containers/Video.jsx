import React, { Component, PropTypes } from 'react';
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
    const { video } = this.props;

    return (
      <VideoComponent video={video} />
    );
  }
}

VideoContainer.propTypes = {
  video: PropTypes.object.isRequired
};

export default connect()(VideoContainer);
