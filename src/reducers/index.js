import { Map } from 'immutable';
import { ATTACH_DOM, SET_VIDEO_DURATION, UPDATE_CURRENTTIME, PLAY, PAUSE, END, MUTE_UNMUTE } from '../actions';
import { PLAYSTATE_INIT, PLAYSTATE_PLAYING, PLAYSTATE_PAUSED, PLAYSTATE_ENDED } from '../constants/';

const initialState = new Map({
  playstate: PLAYSTATE_INIT,
  duration: 0,
  currentTime: 0,
  buffer: 0,
  volume: 100,
  muted: false
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ATTACH_DOM: {
      return state.set('el', action.el);
    }
    case SET_VIDEO_DURATION: {
      return state.set('duration', action.duration);
    }
    case UPDATE_CURRENTTIME: {
      return state.set('currentTime', action.currentTime);
    }
    case PLAY: {
      state.get('el').play();
      return state.set('playstate', PLAYSTATE_PLAYING);
    }
    case PAUSE: {
      state.get('el').pause();
      return state.set('playstate', PLAYSTATE_PAUSED);
    }
    case END: {
      return state.set('playstate', PLAYSTATE_ENDED);
    }
    case MUTE_UNMUTE: {
      state.get('el').muted = action.muted;
      return state.set('muted', action.muted);
    }
    default: {
      return state;
    }
  }
};
