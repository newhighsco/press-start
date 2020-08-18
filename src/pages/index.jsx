import React from 'react'
import { object } from 'prop-types'
import { LogoJsonLd, SocialProfileJsonLd } from 'next-seo'
import urlJoin from 'url-join'
import { PageContainer } from '../components'
import { config, socialLinks } from '../../site.config'

const HomePage = ({ meta }) => (
  <PageContainer meta={meta}>
    <SocialProfileJsonLd
      type="Organization"
      name={config.name}
      url={config.url}
      sameAs={[socialLinks.twitter]}
    />
    <LogoJsonLd url={config.url} logo={config.logo} />
  </PageContainer>
)

HomePage.propTypes = {
  meta: object
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        canonical: urlJoin(config.url, '/'),
        customTitle: true,
        title: config.title
      }
    }
  }
}

export default HomePage
