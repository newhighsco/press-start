import React from 'react'
import Link from 'next/link'
import {
  ContentContainer,
  CreditLockup,
  Grid,
  GridItem,
  Icon,
  List,
  SmartLink
} from '@newhighsco/chipset'
import icons from '../../images/icons'
import { config, socialLinks } from '../../../site.config'
import { links } from '../../data/footer.json'

import theme from './theme.module.scss'
import styles from './styles.module.scss'

const iconLinks = [
  {
    href: socialLinks.github,
    text: `View ${config.name} on Github`,
    icon: icons('github'),
    target: '_blank'
  }
]

const Footer = () => (
  <ContentContainer as="footer" role="contentinfo" theme={theme} gutter>
    <Grid valign="middle">
      <GridItem sizes={['one-half']}>
        {!!links && (
          <List className={styles.links} unstyled>
            {links.map(({ href, text, target }, i) => (
              <li key={i} className={styles.link}>
                {target ? (
                  <SmartLink href={href} target={target}>
                    {text}
                  </SmartLink>
                ) : (
                  <Link href="[...slug]" as={href} passHref>
                    <SmartLink>{text}</SmartLink>
                  </Link>
                )}
              </li>
            ))}
          </List>
        )}
      </GridItem>
      <GridItem sizes={['one-half']} align="right">
        {!!iconLinks.length && (
          <List className={styles.iconLinks} inline>
            {iconLinks.map(({ href, text, icon: IconSvg, target }, i) => (
              <li key={i}>
                <SmartLink
                  className={styles.iconLink}
                  href={href}
                  title={text}
                  target={target}
                >
                  <Icon theme={{ wrapper: styles.icon }} alt={text}>
                    {IconSvg && <IconSvg />}
                  </Icon>
                </SmartLink>
              </li>
            ))}
          </List>
        )}
      </GridItem>
      <GridItem className={styles.credits}>
        <CreditLockup />
      </GridItem>
    </Grid>
  </ContentContainer>
)

export default Footer
export { Footer }
