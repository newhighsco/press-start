import React from 'react'
import { object } from 'prop-types'
import urlJoin from 'url-join'
import { LogoJsonLd, SocialProfileJsonLd } from 'next-seo'
import { Prose } from '@newhighsco/chipset'
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
    <Prose>
      <p>Get a theme-able Next.js site up and running quickly</p>
    </Prose>
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
