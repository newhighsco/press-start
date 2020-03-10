import React from 'react'

import PageContainer from '../components/PageContainer'

const meta = {
  title: 'Page not found',
  description: 'Sorry, this page could not be found',
  noindex: true,
  nofollow: true
}

const NotFoundContainer = () => (
  <PageContainer meta={meta}>Page not found</PageContainer>
)

export default NotFoundContainer
