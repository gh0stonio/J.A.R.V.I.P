export const ATTACH_DOM = 'ATTACH_DOM';
export const SET_VIDEO_DURATION = 'SET_VIDEO_DURATION';
export const UPDATE_CURRENTTIME = 'UPDATE_CURRENTTIME';

export default {
  attachDOM: (el) => {
    return { type: ATTACH_DOM, el };
  },
  setDuration: (duration) => {
    return { type: SET_VIDEO_DURATION, duration };
  },
  updateCurrentTime: (currentTime) => {
    return { type: UPDATE_CURRENTTIME, currentTime };
  }
};
