import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import VideoComponent from '../components/Video';

class VideoContainer extends Component {
  componentDidMount () {
    const { actions } = this.props;

    var videoEl = findDOMNode(this);

    actions.attachDOM(videoEl);

    videoEl.addEventListener('canplay', function () {
      actions.setDuration(videoEl.duration);
    }, false);

    videoEl.addEventListener('timeupdate', function () {
      actions.updateCurrentTime(videoEl.currentTime);
    }, false);

    videoEl.addEventListener('ended', function () {
      actions.end();
    }, false);
  }

  render () {
    return (
      <VideoComponent />
    );
  }
}

VideoContainer.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps (state) {
  return {};
}

export default connect(mapStateToProps)(VideoContainer);
