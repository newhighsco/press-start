import { Prose } from '@newhighsco/chipset'
import type { NextPage } from 'next'
import { LogoJsonLd, SocialProfileJsonLd } from 'next-seo'
import React from 'react'

import PageContainer from '~components/PageContainer'
import config from '~config'
import { canonicalUrl } from '~utils/url'

const { name, title, description, logo, socialLinks, url } = config
const meta = { canonical: canonicalUrl(), customTitle: true, title }

const HomePage: NextPage = () => (
  <PageContainer meta={meta}>
    <SocialProfileJsonLd
      type="Organization"
      name={name}
      url={url}
      sameAs={Object.values(socialLinks)}
    />
    {logo?.bitmap && <LogoJsonLd url={url} logo={canonicalUrl(logo.bitmap)} />}
    <Prose>
      <p>{description}</p>
    </Prose>
  </PageContainer>
)

export default HomePage
