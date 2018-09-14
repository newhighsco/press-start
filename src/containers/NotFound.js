import React, { PureComponent } from 'react'
import PageContainer from '../components/page-container/PageContainer'

const meta = {
  title: 'Page not found',
  description: 'Sorry, this page could not be found',
  robots: 'noindex,nofollow'
}

class NotFoundContainer extends PureComponent {
  render () {
    return (
      <PageContainer {...meta}>
        Page not found
      </PageContainer>
    )
  }
}

export default NotFoundContainer
