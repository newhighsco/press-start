import React from 'react'
import Link from 'next/link'
import {
  ContentContainer,
  CreditLockup,
  Grid,
  Icon,
  SmartLink,
  Navigation
} from '@newhighsco/chipset'
import { ReactComponent as GithubIcon } from '../../images/icons/github.svg'
import { config, socialLinks } from '../../../site.config'
import footer from '../../data/footer.json'

import styles from './Footer.module.scss'

const iconLinks = [
  {
    href: socialLinks.github,
    text: `View ${config.name} on Github`,
    icon: GithubIcon,
    target: '_blank'
  }
]

const Footer = () => (
  <ContentContainer
    as="footer"
    role="contentinfo"
    theme={{ root: styles.root }}
    gutter
  >
    <Grid valign="middle">
      <Grid.Item sizes={['one-half']}>
        <Navigation
          links={footer.links}
          renderLink={({ href, children, ...rest }) => (
            <Link href={href} passHref>
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
  </ContentContainer>
)

export default Footer
export { Footer }
