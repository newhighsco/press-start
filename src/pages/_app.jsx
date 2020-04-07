import React from 'react'
import { func, object } from 'prop-types'
import Router from 'next/router'
import withGA from 'next-ga'
import { SiteContainer, ThemeProvider } from '@newhighsco/chipset'
import { Meta } from '../components/Meta'
import { config, meta } from '../../site.config'
import theme from '../theme'

import './_app.scss'

const AppPage = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <SiteContainer>
      <Meta {...meta} />
      <Component {...pageProps} />
    </SiteContainer>
  </ThemeProvider>
)

AppPage.propTypes = {
  Component: func,
  pageProps: object
}

export default withGA(config.googleTrackingId, Router)(AppPage)
