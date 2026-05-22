import {
  Grid,
  HeaderContainer,
  Navigation,
  SmartLink
} from '@newhighsco/chipset'
import React, { type FC } from 'react'

import LogoLockup from '~components/LogoLockup'
import header from '~data/header.json'

import styles from './Header.module.scss'

const Header: FC = () => (
  <HeaderContainer gutter theme={{ root: styles.root }}>
    <Grid flex valign="middle">
      <Grid.Item className={styles.logo}>
        <SmartLink href="/">
          <LogoLockup />
        </SmartLink>
      </Grid.Item>
      <Grid.Item className={styles.links}>
        <Navigation links={header.links} theme={{ link: styles.link }} />
      </Grid.Item>
    </Grid>
  </HeaderContainer>
)

export default Header
