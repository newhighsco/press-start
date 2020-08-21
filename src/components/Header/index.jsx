import React from 'react'
import Link from 'next/link'
import {
  ContentContainer,
  Grid,
  GridItem,
  Navigation,
  SmartLink
} from '@newhighsco/chipset'
import { LogoLockup } from '..'
import { links } from '../../data/header.json'

import styles from './Header.module.scss'

const Header = () => (
  <>
    <ContentContainer
      id="top"
      as="header"
      role="banner"
      gutter
      theme={{ wrapper: styles.wrapper }}
    >
      <Grid flex valign="middle">
        <GridItem className={styles.logo}>
          <Link href="/" passHref>
            <SmartLink>
              <LogoLockup />
            </SmartLink>
          </Link>
        </GridItem>
        <GridItem className={styles.links}>
          <Navigation
            links={links}
            renderLink={({ href, children, ...rest }) => (
              <Link href={href} as={href} passHref>
                <SmartLink {...rest}>{children}</SmartLink>
              </Link>
            )}
            theme={{ link: styles.link }}
          />
        </GridItem>
      </Grid>
    </ContentContainer>
  </>
)

Header.propTypes = {}

export default Header
export { Header }
