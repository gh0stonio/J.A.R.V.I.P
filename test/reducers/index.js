/* global describe it */

import { Map, fromJS } from 'immutable';
import sinon from 'sinon';
import { expect } from 'chai';
import reducer from '../../src/reducers';

describe('reducer/index', () => {
  it('handles ATTACH_DOM', () => {
    const el = '<p>useless DOM</p>';
    const initialState = new Map();
    const action = {type: 'ATTACH_DOM', el};
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({el}));
  });

  it('handles SET_VIDEO_DURATION', () => {
    const duration = 50;
    const initialState = new Map();
    const action = {type: 'SET_VIDEO_DURATION', duration};
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({duration}));
  });

  it('handles SET_CURRENTTIME', () => {
    const currentTime = 20;
    const initialState = new Map();
    const action = {type: 'SET_CURRENTTIME', currentTime};
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({currentTime}));
  });

  it('handles TOGGLE_MUTE', () => {
    const muted = true;
    const el = '<p>useless DOM</p>';
    const initialState = new Map({el});
    const action = {type: 'TOGGLE_MUTE', muted};
    const nextState = reducer(initialState, action);

    sinon.stub(Map, 'get');
    Map.get.restore();

    expect(nextState).to.equal(fromJS({el, muted}));
    // expect(nextState).to.equal(fromJS({muted}));
  });
});
