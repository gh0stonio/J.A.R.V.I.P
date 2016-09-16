/* global describe it */

import { Map, fromJS } from 'immutable';
import { expect } from 'chai';
import reducer from '../../src/reducers';

describe('reducer/index', () => {
  it('has an default action', () => {
    const initialState = new Map();
    const nextState = reducer(initialState, {});
    expect(nextState).to.equal(fromJS(initialState));
  });

  it('handles SET_VIDEO_DURATION', () => {
    const duration = 50;
    const nextState = reducer(new Map(), {type: 'SET_VIDEO_DURATION', duration});

    expect(nextState).to.equal(fromJS({duration}));
  });

  it('handles UPDATE_CURRENTTIME', () => {
    const currentTime = 20;
    const nextState = reducer(new Map(), {type: 'UPDATE_CURRENTTIME', currentTime});

    expect(nextState).to.equal(fromJS({currentTime}));
  });

  it('handles UPDATE_PLAYSTATE', () => {
    const playstate = 'play';
    const nextState = reducer(new Map(), {type: 'UPDATE_PLAYSTATE', playstate});

    expect(nextState).to.equal(fromJS({playstate}));
  });

  it('handles TOGGLE_MUTE', () => {
    const muted = true;
    const nextState = reducer(new Map(), {type: 'TOGGLE_MUTE', muted});

    expect(nextState).to.equal(fromJS({muted}));
  });
});
