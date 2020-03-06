import React from 'react'
import { func, object } from 'prop-types'
import Router from 'next/router'
import withGA from 'next-ga'

import SiteContainer from '../components/SiteContainer'
import Meta from '../components/Meta'
import { config, meta } from '../site.config'

import '../scss/index.module.scss'

const AppContainer = ({ Component, pageProps }) => (
  <SiteContainer>
    <Meta {...meta} />
    <Component {...pageProps} />
  </SiteContainer>
)

AppContainer.propTypes = {
  Component: func,
  pageProps: object
}

export default withGA(config.googleTrackingId, Router)(AppContainer)
