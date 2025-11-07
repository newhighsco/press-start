import '~styles/app'

import { AppPage } from '@newhighsco/press-start'
import React from 'react'

import config from '~config'
import theme from '~theme'

const App = props => <AppPage {...props} theme={theme} config={config} />

export default App
