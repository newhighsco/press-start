import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { config } from '../../site.config'
import loadConfig from 'next/dist/next-server/server/config'

class DocumentPage extends Document {
  render() {
    const { sitemapFileName } = loadConfig()

    return (
      <Html lang={config.lang}>
        <Head>
          {sitemapFileName && (
            <link
              rel="sitemap"
              type="application/xml"
              href={`/${sitemapFileName}`}
            />
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default DocumentPage
