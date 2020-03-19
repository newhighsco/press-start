import React from 'react'
import { PageContainer } from '@newhighsco/chipset'
import Meta from '../components/Meta'

const meta = {
  title: 'Page not found',
  description: 'Sorry, this page could not be found',
  noindex: true,
  nofollow: true
}

const NotFoundContainer = () => (
  <PageContainer Header={() => null} Footer={() => null}>
    <Meta {...meta} />
    Page not found
  </PageContainer>
)

export default NotFoundContainer
