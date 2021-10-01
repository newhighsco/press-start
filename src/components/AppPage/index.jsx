import React from 'react'
import { func, object } from 'prop-types'
import urlJoin from 'url-join'
import { DefaultSeo } from 'next-seo'
import { SiteContainer, ThemeProvider } from '@newhighsco/chipset'

const AppPage = ({ Component, pageProps, theme, config, meta }) => {
  const { name, description, openGraphImage, twitterHandle, themeColor, logo } =
    config
  const url = process.env.NEXT_PUBLIC_SITE_URL

  meta = {
    ...meta,
    titleTemplate: `%s | ${name}`,
    description,
    openGraph: {
      site_name: name,
      type: 'website',
      images: [{ url: urlJoin(url, openGraphImage) }]
    },
    twitter: {
      cardType: 'summary',
      site: `@${twitterHandle}`,
      handle: `@${twitterHandle}`
    },
    additionalMetaTags: [
      ...(meta?.additionalMetaTags || []),
      { name: 'theme-color', content: themeColor }
    ],
    additionalLinkTags: [
      ...(meta?.additionalLinkTags || []),
      {
        rel: 'icon',
        href: logo.vector
      },
      {
        rel: 'sitemap',
        type: 'application/xml',
        href: '/sitemap.xml'
      }
    ]
  }

  return (
    <ThemeProvider themes={theme}>
      <SiteContainer>
        <DefaultSeo {...meta} />
        <Component {...pageProps} />
      </SiteContainer>
    </ThemeProvider>
  )
}

AppPage.propTypes = {
  Component: func,
  pageProps: object,
  theme: object,
  config: object,
  meta: object
}

export default AppPage
