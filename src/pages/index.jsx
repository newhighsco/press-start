import React from 'react'
import { SocialProfileJsonLd } from 'next-seo'
import { PageContainer } from '../components/PageContainer'
import { config, socialLinks } from '../../site.config'

// TODO:
// import LogoImage from '../../static/favicon-512x512.png'

const meta = {
  customTitle: true,
  title: config.title
}

const schema = {
  type: 'Organization',
  name: config.name,
  // TODO:
  url: 'http://TODO/'
  // logo: ''
}

if (socialLinks.twitter) {
  schema.sameAs = [socialLinks.twitter]
}

const HomePage = () => (
  <PageContainer meta={meta}>
    <SocialProfileJsonLd {...schema} />
    Homepage
  </PageContainer>
)

export default HomePage
