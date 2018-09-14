import React from 'react'
import { Router } from 'react-static'
import { configure, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

import '../src/stylus/index.styl'
import './storybook.styl'

const constants = require('../src/utils/constants')
const req = require.context('../src/components', true, /\.stories\.js$/)

function loadStories () {
  req.keys().forEach((filename) => req(filename))
}

addDecorator(story => (
  <div className="storybook-preview-container">
    <Router>
      {story()}
    </Router>
  </div>
))

setOptions({
  name: constants.meta.name,
  url: '/',
  showAddonPanel: false
})

configure(loadStories, module)
