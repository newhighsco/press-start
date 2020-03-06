import React from 'react'

import PageContainer from '../components/PageContainer'

const meta = {
  title: 'Page not found',
  description: 'Sorry, this page could not be found',
  noindex: true,
  nofollow: true
}

const ErrorContainer = () => (
  <PageContainer meta={meta}>Page not found</PageContainer>
)

ErrorContainer.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default ErrorContainer
