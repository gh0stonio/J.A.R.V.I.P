import { Map } from 'immutable'

const initialState = new Map()

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state
    }
  }
}
