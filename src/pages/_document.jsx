import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { config } from '../../site.config'

import logoUrl from '../images/logo.svg'

class DocumentPage extends Document {
  render() {
    return (
      <Html lang={config.lang}>
        <Head>
          <link rel="icon" href={logoUrl} />
          <link rel="sitemap" type="application/xml" href="sitemap.xml" />
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
