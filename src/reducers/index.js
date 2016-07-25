import { Map } from 'immutable';
import { ATTACH_DOM } from '../actions';

const initialState = new Map({});

export default (state = initialState, action) => {
  switch (action.type) {
    case ATTACH_DOM: {
      return state.set('el', action.el);
    }
    default: {
      return state;
    }
  }
};
