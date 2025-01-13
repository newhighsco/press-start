import config from '@config'
import footer from '@data/footer.json'
import { ReactComponent as GithubIcon } from '@images/icons/github.svg'
import {
  CreditLockup,
  FooterContainer,
  Grid,
  Icon,
  Navigation,
  SmartLink
} from '@newhighsco/chipset'
import Link from 'next/link'
import React from 'react'

import styles from './Footer.module.scss'

const { name, socialLinks } = config
const iconLinks = [
  {
    href: socialLinks.github,
    text: `View ${name} on Github`,
    icon: GithubIcon,
    target: '_blank'
  }
]

const Footer = () => (
  <FooterContainer gutter theme={{ root: styles.root }}>
    <Grid valign="middle">
      <Grid.Item sizes={['one-half']}>
        <Navigation
          links={footer.links}
          renderLink={({ href, children, ...rest }) => (
            <Link href={href} passHref legacyBehavior>
              <SmartLink {...rest}>{children}</SmartLink>
            </Link>
          )}
          theme={{ link: styles.link }}
        />
      </Grid.Item>
      <Grid.Item sizes={['one-half']} align="right">
        <Navigation
          links={iconLinks}
          renderLink={({ text, icon: IconSvg, ...rest }) => (
            <SmartLink {...rest}>
              <Icon theme={{ root: styles.icon }} alt={text}>
                {IconSvg && <IconSvg />}
              </Icon>
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
