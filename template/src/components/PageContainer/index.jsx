import React from 'react'
import { node, object } from 'prop-types'
import { PageContainer as ThemedPageContainer } from '@newhighsco/chipset'
import { Meta } from '@newhighsco/press-start'
import Footer from '@components/Footer'
import Header from '@components/Header'

const PageContainer = ({ meta, children }) => (
  <ThemedPageContainer header={<Header />} footer={<Footer />} gutter>
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
