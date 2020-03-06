import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class DocumentContainer extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  // TODO: sitemap, manifest.json

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default DocumentContainer
