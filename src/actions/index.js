import { PLAYSTATE_INIT, PLAYSTATE_PLAYING, PLAYSTATE_PAUSED, PLAYSTATE_ENDED } from '../constants';

export const ATTACH_DOM = 'ATTACH_DOM';
export const SET_VIDEO_DURATION = 'SET_VIDEO_DURATION';
export const SET_CURRENTTIME = 'SET_CURRENTTIME';
export const UPDATE_PLAYSTATE = 'UPDATE_PLAYSTATE';
export const TOGGLE_MUTE = 'TOGGLE_MUTE';
export const SEEK_BY_PERCENT = 'SEEK_BY_PERCENT';

export function initPlayer (el) {
  return dispatch => {
    dispatch({ type: ATTACH_DOM, el });

    el.addEventListener('canplay', function () {
      dispatch({ type: SET_VIDEO_DURATION, duration: el.duration });
    }, false);

    el.addEventListener('timeupdate', function () {
      dispatch({ type: SET_CURRENTTIME, currentTime: el.currentTime });
    }, false);

    el.addEventListener('ended', function () {
      dispatch(updatePlaystate(PLAYSTATE_ENDED));
    }, false);
  };
}

export const play = () => dispatch => {
  state.get('el').play();
  dispatch({ type: UPDATE_PLAYSTATE, PLAYSTATE_PLAYING });
}

export function updatePlaystate (playstate) {
  switch (playstate) {
    case PLAYSTATE_PLAYING:
      state.get('el').play();
      break;
    case PLAYSTATE_PAUSED:
      state.get('el').pause();
      break;
  }

  return { type: UPDATE_PLAYSTATE, playstate };
}

export function toggleMute (muted) {
  return { type: TOGGLE_MUTE, muted };
}

export function seekByPercent (percent) {
  return { type: SEEK_BY_PERCENT, percent };
}
