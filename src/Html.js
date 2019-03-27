import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'

const constants = require('./utils/constants')
const urlBuilder = require('./utils/url-builder')

const { name, handle, themeColor } = constants.meta

class Html extends PureComponent {
  render () {
    const { Html, Head, Body, children, routeInfo } = this.props
    const canonicalPath = routeInfo && routeInfo.path !== '404' ? (routeInfo.path.match(/\/$/) ? routeInfo.path : `${routeInfo.path}/`) : null
    const canonicalUrl = `${process.env.SITE_URL}${canonicalPath === urlBuilder.rootUrl ? canonicalPath : `/${canonicalPath}`}`

    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
          <link rel="manifest" href="/manifest.webmanifest" />
          <meta name="theme-color" content={themeColor} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={name} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:domain" content={process.env.SITE_URL} />
          {handle &&
            <Fragment>
              <meta name="twitter:site" content={handle} />
              <meta name="twitter:creator" content={handle} />
            </Fragment>
          }
          {canonicalPath &&
            <Fragment>
              <link rel="canonical" href={canonicalUrl} />
              <meta property="og:url" key="ogUrl" content={canonicalUrl} />
            </Fragment>
          }
        </Head>
        <Body>
          {children}
        </Body>
      </Html>
    )
  }
}

Html.propTypes = {
  Html: PropTypes.func,
  Head: PropTypes.func,
  Body: PropTypes.func,
  children: PropTypes.node,
  routeInfo: PropTypes.object
}

export default Html
