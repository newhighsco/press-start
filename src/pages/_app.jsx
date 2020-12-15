import React from 'react'
import { func, object } from 'prop-types'
import { DefaultSeo } from 'next-seo'
import { SiteContainer, ThemeProvider } from '@newhighsco/chipset'
import { meta } from '../../site.config'
import theme from '../theme'

import './_app.scss'

const AppPage = ({ Component, pageProps }) => (
  <ThemeProvider themes={theme}>
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

export default AppPage
