import '~styles/app.scss'

import { AppPage } from '@newhighsco/press-start'
import { type AppProps } from 'next/app'
import React, { type FC } from 'react'

import config from '~config'
import { default as fonts } from '~styles/font-faces.module.scss'
import theme from '~theme'

const App: FC<AppProps> = props => (
  <AppPage {...props} theme={theme} config={config} fonts={fonts} />
)

export default App
