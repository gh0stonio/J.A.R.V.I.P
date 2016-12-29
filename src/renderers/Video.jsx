// @flow

import React from 'react'
import type { videoType } from '../types'

type params = { video: videoType }

export default ({ video }: params) => <video src={video.url} poster={video.poster} controls />
