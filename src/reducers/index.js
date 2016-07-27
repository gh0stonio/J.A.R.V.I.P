import { Map } from 'immutable';
import { ATTACH_DOM, SET_VIDEO_DURATION, UPDATE_CURRENTTIME } from '../actions';

const initialState = new Map({
  duration: 0,
  currentTime: 0
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
    default: {
      return state;
    }
  }
};
