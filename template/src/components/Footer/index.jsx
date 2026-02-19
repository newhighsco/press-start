import {
  CreditLockup,
  FooterContainer,
  Grid,
  Icon,
  Navigation,
  SmartLink
} from '@newhighsco/chipset'
import React from 'react'

import config from '~config'
import footer from '~data/footer.json'

import styles from './Footer.module.scss'

const { name, socialLinks } = config
const iconLinks = [
  {
    href: socialLinks.github,
    text: `View ${name} on Github`,
    name: 'simple-icons:github',
    target: '_blank'
  }
]

const Footer = () => (
  <FooterContainer gutter theme={{ root: styles.root }}>
    <Grid valign="middle">
      <Grid.Item sizes={['one-half']}>
        <Navigation links={footer.links} theme={{ link: styles.link }} />
      </Grid.Item>
      <Grid.Item sizes={['one-half']} align="right">
        <Navigation
          links={iconLinks}
          renderLink={({ text, name, ...rest }) => (
            <SmartLink {...rest}>
              <Icon name={name} theme={{ root: styles.icon }} alt={text} />
            </SmartLink>
          )}
        />
      </Grid.Item>
      <Grid.Item className={styles.credits}>
        <CreditLockup />
      </Grid.Item>
    </Grid>
  </FooterContainer>
)

export default Footer
export { Footer }
