import React from 'react'
import { node, object } from 'prop-types'
import { PageContainer as ThemedPageContainer } from '@newhighsco/chipset'
import { Footer, Header, Meta } from '..'

const PageContainer = ({ meta, children }) => (
  <ThemedPageContainer
    as="main"
    id="content"
    role="main"
    header={<Header />}
    footer={<Footer />}
    gutter
  >
    <Meta {...meta} />
    {children}
  </ThemedPageContainer>
)

PageContainer.propTypes = {
  meta: object,
  children: node
}

export default PageContainer
export { PageContainer }
