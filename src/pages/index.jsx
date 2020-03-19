import React from 'react'
import { SocialProfileJsonLd } from 'next-seo'
import { PageContainer } from '@newhighsco/chipset'
import Meta from '../components/Meta'
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
  <PageContainer Header={() => null} Footer={() => null}>
    <Meta {...meta} />
    <SocialProfileJsonLd {...schema} />
    Homepage
  </PageContainer>
)

export default HomeContainer
