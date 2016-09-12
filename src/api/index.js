class PlayerAPI {
  constructor (el) {
    this.el = el;
  }
  play () {
    this.el.play();
  }
  pause () {
    this.el.pause();
  }
  seek (position) {
    this.el.currentTime = position;
  }
  isMuted () {
    return this.el.muted;
  }
  toggleMute () {
    this.el.muted = !this.el.muted;
  }
  getDuration () {
    return this.el.duration;
  }
  getCurrentTime () {
    return this.el.currentTime;
  }
}

export default PlayerAPI;
