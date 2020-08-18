import React from 'react'
import Link from 'next/link'
import { ContentContainer, Icon, SmartLink } from '@newhighsco/chipset'
import { config } from '../../../site.config'

import theme from './theme.module.scss'
import styles from './styles.module.scss'
import { ReactComponent as LogoSvg } from '../../images/logo.url.svg'

const Header = () => (
  <>
    <ContentContainer id="top" as="header" role="banner" gutter theme={theme}>
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
