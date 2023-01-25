import LogoLockup from '@components/LogoLockup'
import header from '@data/header.json'
import {
  Grid,
  HeaderContainer,
  Navigation,
  SmartLink
} from '@newhighsco/chipset'
import Link from 'next/link'
import React from 'react'

import styles from './Header.module.scss'

const Header = () => (
  <>
    <HeaderContainer gutter theme={{ root: styles.root }}>
      <Grid flex valign="middle">
        <Grid.Item className={styles.logo}>
          <Link href="/" passHref>
            <SmartLink>
              <LogoLockup />
            </SmartLink>
          </Link>
        </Grid.Item>
        <Grid.Item className={styles.links}>
          <Navigation
            links={header.links}
            renderLink={({ href, children, ...rest }) => (
              <Link href={href} passHref>
                <SmartLink {...rest}>{children}</SmartLink>
              </Link>
            )}
            theme={{ link: styles.link }}
          />
        </Grid.Item>
      </Grid>
    </HeaderContainer>
  </>
)

Header.propTypes = {}

export default Header
export { Header }
