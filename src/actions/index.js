export const ATTACH_DOM = 'ATTACH_DOM';
export const SET_VIDEO_DURATION = 'SET_VIDEO_DURATION';
export const UPDATE_CURRENTTIME = 'UPDATE_CURRENTTIME';
export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';
export const END = 'END';

export default {
  attachDOM: (el) => {
    return { type: ATTACH_DOM, el };
  },
  setDuration: (duration) => {
    return { type: SET_VIDEO_DURATION, duration };
  },
  updateCurrentTime: (currentTime) => {
    return { type: UPDATE_CURRENTTIME, currentTime };
  },
  play: () => {
    return { type: PLAY };
  },
  pause: () => {
    return { type: PAUSE };
  },
  repeat: () => {
    return { type: PLAY };
  },
  end: () => {
    return { type: END };
  }
};
