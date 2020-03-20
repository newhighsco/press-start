import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { config } from '../../site.config'

class DocumentPage extends Document {
  // TODO: sitemap, manifest.json

  render() {
    return (
      <Html lang={config.lang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default DocumentPage
