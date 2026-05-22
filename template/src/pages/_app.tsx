import '~styles/app.scss'

import { AppPage } from '@newhighsco/press-start'
import { type AppProps } from 'next/app'
import React, { type FC } from 'react'

import config from '~config'
import theme from '~theme'

const App: FC<AppProps> = props => (
  <AppPage {...props} theme={theme} config={config} />
)

export default App
