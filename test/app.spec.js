// @flow

import Jarvip from '../src/app'

test('constructor should return config', () => {
  const config = {
    target: 'onsenfout',
    video: {
      url: 'onsenfout',
      poster: 'onsenfout'
    }
  }

  const player = new Jarvip(config)

  expect(player).toBe(config)
})
