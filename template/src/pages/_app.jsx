import '@styles/app.scss'

import config from '@config'
import { AppPage } from '@newhighsco/press-start'
import theme from '@theme'
import React from 'react'

const App = props => <AppPage {...props} theme={theme} config={config} />

export default App
