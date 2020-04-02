import React from 'react'
import { object } from 'prop-types'
import urlJoin from 'url-join'
import { LogoJsonLd, SocialProfileJsonLd } from 'next-seo'
import { PageContainer } from '../components/PageContainer'
import { config, socialLinks } from '../../site.config'

const HomePage = ({ meta }) => (
  <PageContainer meta={meta}>
    <SocialProfileJsonLd
      type="Organization"
      name={config.name}
      url={config.url}
      sameAs={[socialLinks.twitter]}
    />
    <LogoJsonLd
      url={config.url}
      logo={urlJoin(config.url, 'images/meta/logo.png')}
    />
    Homepage
  </PageContainer>
)

HomePage.propTypes = {
  meta: object
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        customTitle: true,
        slug: '/',
        title: config.title
      }
    }
  }
}

export default HomePage
