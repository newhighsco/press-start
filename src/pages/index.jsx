import React from 'react'
import PageContainer from '../components/PageContainer'

const meta = {
  schema: {
    '@context': 'http://schema.org',
    '@type': 'Organization'
    // name: constants.meta.name,
    // url: process.env.SITE_URL,
    // logo: `${LogoImage}`
  }
}

// if (constants.social.twitter) {
//   meta.schema.sameAs = [ constants.social.twitter ]
// }

const HomePage = () => <PageContainer meta={meta}>Homepage</PageContainer>

export default HomePage
