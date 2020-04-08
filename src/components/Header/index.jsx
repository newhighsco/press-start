import React from 'react'
import Link from 'next/link'
import { ContentContainer, SmartLink } from '@newhighsco/chipset'
import { config } from '../../../site.config'

import theme from './theme.module.scss'
import styles from './styles.module.scss'
import LogoSvg from '../../images/logo.svg'

const Header = () => (
  <ContentContainer is="header" role="banner" fullWidth gutter theme={theme}>
    <Link href="/" passHref>
      <SmartLink>
        <LogoSvg className={styles.logo} />
        {config.name}
      </SmartLink>
    </Link>
  </ContentContainer>
)

Header.propTypes = {}

export default Header
export { Header }
