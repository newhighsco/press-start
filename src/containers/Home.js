import React, { PureComponent } from 'react'
import PageContainer from '../components/page-container/PageContainer'
import LogoImage from '../../static/favicon-512x512.png'

const constants = require('../utils/constants')

const meta = {
  schema: {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    name: constants.meta.name,
    url: process.env.SITE_URL,
    logo: `${LogoImage}`
  }
}

if (constants.social.twitter) {
  meta.schema.sameAs = [ constants.social.twitter ]
}

class HomeContainer extends PureComponent {
  render () {
    return (
      <PageContainer meta={meta}>
        Homepage
      </PageContainer>
    )
  }
}

export default HomeContainer
