import { Map } from 'immutable';
import { ATTACH_DOM, SET_VIDEO_DURATION, UPDATE_CURRENTTIME, UPDATE_PLAYSTATE, TOGGLE_MUTE, SEEK_BY_PERCENT } from '../actions';
import { PLAYSTATE_INIT, PLAYSTATE_PLAYING, PLAYSTATE_PAUSED } from '../constants/';

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
    case UPDATE_CURRENTTIME: {
      return state.set('currentTime', action.currentTime);
    }
    case UPDATE_PLAYSTATE: {
      switch (action.playstate) {
        case PLAYSTATE_PLAYING:
          state.get('el').play();
          break;
        case PLAYSTATE_PAUSED:
          state.get('el').pause();
          break;
      }

      return state.set('playstate', action.playstate);
    }
    case TOGGLE_MUTE: {
      var muted = !state.get('muted');

      state.get('el').muted = muted;
      return state.set('muted', muted);
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
