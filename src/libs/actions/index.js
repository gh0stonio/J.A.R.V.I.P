import { PLAYSTATE_ENDED } from '../../constants'

export const ATTACH_DOM = 'ATTACH_DOM'
export const SET_VIDEO_DURATION = 'SET_VIDEO_DURATION'
export const UPDATE_CURRENTTIME = 'UPDATE_CURRENTTIME'
export const UPDATE_PLAYSTATE = 'UPDATE_PLAYSTATE'
export const TOGGLE_MUTE = 'TOGGLE_MUTE'
export const SEEK_BY_PERCENT = 'SEEK_BY_PERCENT'

export function initPlayer (el) {
  return dispatch => {
    dispatch(attachDOM(el))

    el.addEventListener('canplay', function () {
      dispatch(setDuration(el.duration))
    }, false)

    el.addEventListener('timeupdate', function () {
      dispatch(updateCurrentTime(el.currentTime))
    }, false)

    el.addEventListener('ended', function () {
      dispatch(updatePlaystate(PLAYSTATE_ENDED))
    }, false)
  }
}

export function attachDOM (el) {
  return { type: ATTACH_DOM, el }
}

export function setDuration (duration) {
  return { type: SET_VIDEO_DURATION, duration }
}

export function updateCurrentTime (currentTime) {
  return { type: UPDATE_CURRENTTIME, currentTime }
}

export function updatePlaystate (playstate) {
  return { type: UPDATE_PLAYSTATE, playstate }
}

export function toggleMute () {
  return { type: TOGGLE_MUTE }
}

export function seekByPercent (percent) {
  return { type: SEEK_BY_PERCENT, percent }
}
