import React from 'react'
import { node, object } from 'prop-types'
import { PageContainer as ThemedPageContainer } from '@newhighsco/chipset'
import { Meta } from '../Meta'

const PageContainer = ({ meta, children }) => (
  <ThemedPageContainer is="main" id="content" role="main">
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
