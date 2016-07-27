import React, { Component } from 'react';

export default class Video extends Component {
  render () {
    const style = {
      width: 600
    };
    const url = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';
    const poster = 'http://images.2803.fr/uploads/2008/06/big-buck-bunny-2.jpg';

    return (
      <video style={style} ref='videoDOM' src={url} poster={poster}></video>
    );
  }
}
