import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { config } from '../../site.config'
import loadConfig from 'next/dist/next-server/server/config'

class DocumentPage extends Document {
  render() {
    const { sitemap } = loadConfig()

    return (
      <Html lang={config.lang}>
        <Head>
          {sitemap && (
            <link
              rel="sitemap"
              type="application/xml"
              href={`/${sitemap.filename}`}
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
