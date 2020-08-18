import React from 'react'
import { func, object } from 'prop-types'
import Router from 'next/router'
import withGA from 'next-ga'
import { DefaultSeo } from 'next-seo'
import { SiteContainer, ThemeProvider } from '@newhighsco/chipset'
import { config, meta } from '../../site.config'
import theme from '../theme'

import './_app.scss'

const AppPage = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <SiteContainer>
      <DefaultSeo {...meta} />
      <Component {...pageProps} />
    </SiteContainer>
  </ThemeProvider>
)

AppPage.propTypes = {
  Component: func,
  pageProps: object
}

export default config.googleTrackingId
  ? withGA(config.googleTrackingId, Router)(AppPage)
  : AppPage
