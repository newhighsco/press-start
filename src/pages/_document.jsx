import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { config } from '../../site.config'
import loadConfig from 'next/dist/next-server/server/config'

import logoUrl from '../images/logo.url.svg'

class DocumentPage extends Document {
  render() {
    const { sitemap } = loadConfig()

    return (
      <Html lang={config.lang}>
        <Head>
          <link rel="icon" href={logoUrl} />
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
