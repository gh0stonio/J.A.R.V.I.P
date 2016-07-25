import React, { Component } from 'react';

export default class Video extends Component {
  render () {
    const style = {
      width: 700,
      height: 400
    };
    const url = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';
    const poster = 'https://www.filmfestival.nl/FionaAssets/000001/00000136/scaled/13667.jpg';

    return (
      <video style={style} ref='videoDOM' src={url} poster={poster} controls></video>
    );
  }
}
