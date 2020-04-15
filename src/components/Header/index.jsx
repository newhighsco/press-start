import React from 'react'
import Link from 'next/link'
import {
  ContentContainer,
  Icon,
  Landmark,
  SmartLink
} from '@newhighsco/chipset'
import { config } from '../../../site.config'

import theme from './theme.module.scss'
import styles from './styles.module.scss'
import LogoSvg from '../../images/logo.svg'

const Header = () => (
  <>
    <Landmark id="top">Top of page</Landmark>
    <ContentContainer as="header" role="banner" fullWidth gutter theme={theme}>
      <Link href="/" passHref>
        <SmartLink>
          <Icon alt={config.name} theme={{ wrapper: styles.logo }}>
            <LogoSvg />
          </Icon>
        </SmartLink>
      </Link>
    </ContentContainer>
  </>
)

Header.propTypes = {}

export default Header
export { Header }
