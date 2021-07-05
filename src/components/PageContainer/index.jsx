import React from 'react'
import { node, object } from 'prop-types'
import { PageContainer as ThemedPageContainer } from '@newhighsco/chipset'
import { Footer, Header, Meta } from '..'

import logoUrl from '../../images/logo.svg'

const PageContainer = ({ meta, children }) => (
  <ThemedPageContainer
    as="main"
    id="content"
    role="main"
    header={<Header />}
    footer={<Footer />}
    gutter
  >
    <Meta
      {...meta}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: logoUrl
        },
        {
          rel: 'sitemap',
          type: 'application/xml',
          href: '/sitemap.xml'
        }
      ]}
    />
    {children}
  </ThemedPageContainer>
)

PageContainer.propTypes = {
  meta: object,
  children: node
}

export default PageContainer
export { PageContainer }
