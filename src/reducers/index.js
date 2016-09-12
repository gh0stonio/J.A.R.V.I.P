import { Map } from 'immutable';
import { ATTACH_DOM, SET_VIDEO_DURATION, SET_CURRENTTIME, UPDATE_PLAYSTATE, TOGGLE_MUTE, SEEK_BY_PERCENT } from '../actions';
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
    case ATTACH_DOM: {
      return state.set('el', action.el);
    }
    case SET_VIDEO_DURATION: {
      return state.set('duration', action.duration);
    }
    case SET_CURRENTTIME: {
      return state.set('currentTime', action.currentTime);
    }
    case UPDATE_PLAYSTATE: {
      return state.set('playstate', action.playstate);
    }
    case TOGGLE_MUTE: {
      state.get('el').muted = action.muted;
      return state.set('muted', action.muted);
    }
    case SEEK_BY_PERCENT: {
      var duration = state.get('duration');
      var newCurrentTime = duration * action.percent / 100;

      state.get('el').currentTime = newCurrentTime;
      return state.set('currentTime', newCurrentTime);
    }
    default: {
      return state;
    }
  }
};
