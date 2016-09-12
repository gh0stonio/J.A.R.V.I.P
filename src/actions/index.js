import { PLAYSTATE_PLAYING, PLAYSTATE_PAUSED, PLAYSTATE_ENDED } from '../constants/';
import Api from '../api';

export const SET_VIDEO_DURATION = 'SET_VIDEO_DURATION';
export const UPDATE_CURRENTTIME = 'UPDATE_CURRENTTIME';
export const UPDATE_PLAYSTATE = 'UPDATE_PLAYSTATE';
export const TOGGLE_MUTE = 'TOGGLE_MUTE';

var player;

export const initPlayer = el => dispatch => {
  player = new Api(el);

  el.addEventListener('canplay', function () {
    dispatch(setDuration(player.getDuration()));
  }, false);

  el.addEventListener('timeupdate', function () {
    dispatch(updateCurrentTime(player.getCurrentTime()));
  }, false);

  el.addEventListener('ended', function () {
    dispatch({ type: UPDATE_PLAYSTATE, playstate: PLAYSTATE_ENDED });
  }, false);
};

export const setDuration = duration => {
  return { type: SET_VIDEO_DURATION, duration };
};

export const updateCurrentTime = currentTime => {
  return { type: UPDATE_CURRENTTIME, currentTime };
};

export const play = () => {
  player.play();
  return { type: UPDATE_PLAYSTATE, playstate: PLAYSTATE_PLAYING };
};

export const pause = () => {
  player.pause();
  return { type: UPDATE_PLAYSTATE, playstate: PLAYSTATE_PAUSED };
};

export const toggleMute = () => {
  player.toggleMute();
  return { type: TOGGLE_MUTE, muted: player.isMuted() };
};

export const seekByPercent = percent => {
  let position = player.getDuration() * percent / 100;
  player.seek(position);

  return updateCurrentTime(position);
};
