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
const iconLinks = { GitHub: { icon: 'simple-icons:github', verb: 'View' } }

const Footer = () => (
  <FooterContainer gutter theme={{ root: styles.root }}>
    <Grid valign="middle">
      <Grid.Item sizes={['one-half']}>
        <Navigation links={footer.links} theme={{ link: styles.link }} />
      </Grid.Item>
      <Grid.Item sizes={['one-half']} align="right">
        <Navigation
          links={Object.values(iconLinks)}
          renderLink={(
            { href, icon, verb = 'Follow', preposition = 'on' },
            index
          ) => {
            const key = Object.keys(iconLinks).at(index)

            return (
              <SmartLink href={href ?? socialLinks[key]} target="_blank">
                <Icon
                  name={icon}
                  theme={{ root: styles.icon }}
                  alt={[verb, name, preposition, key].join(' ')}
                />
              </SmartLink>
            )
          }}
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
