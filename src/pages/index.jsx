import React from 'react'
import { SocialProfileJsonLd } from 'next-seo'

import PageContainer from '../components/PageContainer'
import { config, socialLinks } from '../site.config'

const meta = {
  customTitle: true,
  title: config.title
}

const schema = {
  type: 'Organization',
  name: config.name,
  // TODO:
  url: 'http://TODO/'
}

if (socialLinks.twitter) {
  schema.sameAs = [socialLinks.twitter]
}

const HomeContainer = () => (
  <PageContainer meta={meta}>
    <SocialProfileJsonLd {...schema} />
    Homepage
  </PageContainer>
)

export default HomeContainer
