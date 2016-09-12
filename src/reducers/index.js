import { Map } from 'immutable';
import { SET_VIDEO_DURATION, UPDATE_CURRENTTIME, UPDATE_PLAYSTATE, TOGGLE_MUTE } from '../actions';
import { PLAYSTATE_INIT } from '../constants/';

const initialState = new Map({
  playstate: PLAYSTATE_INIT,
  duration: 0,
  currentTime: 0,
  buffer: 100,
  volume: 100,
  muted: false
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_VIDEO_DURATION: {
      return state.set('duration', action.duration);
    }
    case UPDATE_CURRENTTIME: {
      return state.set('currentTime', action.currentTime);
    }
    case UPDATE_PLAYSTATE: {
      return state.set('playstate', action.playstate);
    }
    case TOGGLE_MUTE: {
      return state.set('muted', action.muted);
    }
    default: {
      return state;
    }
  }
};
