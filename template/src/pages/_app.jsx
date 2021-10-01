import React from 'react'
import { AppPage } from '@newhighsco/press-start'
import config from '@config'
import theme from '@theme'

import '@styles/app.scss'

const App = props => <AppPage {...props} theme={theme} config={config} />

export default App
