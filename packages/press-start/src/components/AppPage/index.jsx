// import { LinkProvider, SiteContainer, ThemeProvider } from '@newhighsco/chipset'
// import Link from 'next/link'
// import { DefaultSeo } from 'next-seo'
import { func, object } from 'prop-types'
import React from 'react'
import urlJoin from 'url-join'

// const renderLink = props => <Link {...props} />

const AppPage = ({ Component, pageProps, theme, config, meta }) => {
  const {
    name,
    titleTemplate = name => `%s | ${name}`,
    description,
    openGraphImage,
    twitterHandle,
    themeColor,
    logo,
    url
  } = config
  const icon = logo?.vector || logo?.bitmap

  meta = {
    ...meta,
    titleTemplate: name && titleTemplate(name),
    description,
    openGraph: {
      site_name: name,
      type: 'website',
      ...(openGraphImage && { images: [{ url: urlJoin(url, openGraphImage) }] })
    },
    twitter: twitterHandle && {
      cardType: 'summary',
      site: `@${twitterHandle}`,
      handle: `@${twitterHandle}`
    },
    additionalMetaTags: [
      ...(meta?.additionalMetaTags || []),
      themeColor && { name: 'theme-color', content: themeColor }
    ].filter(Boolean),
    additionalLinkTags: [
      ...(meta?.additionalLinkTags || []),
      icon && {
        rel: 'icon',
        href: icon
      },
      {
        rel: 'sitemap',
        type: 'application/xml',
        href: '/sitemap.xml'
      }
    ].filter(Boolean)
  }

  return (
    <>
      {/* <DefaultSeo {...meta} /> */}
      <Component {...pageProps} />
    </>
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
