import React from 'react'
import { string } from 'prop-types'
import classNames from 'classnames'
import { Icon } from '@newhighsco/chipset'
import { config } from '../../../site.config'

import styles from './styles.module.scss'
import { ReactComponent as LogoSvg } from '../../images/logo.url.svg'

const LogoLockup = ({ className }) => (
  <div className={classNames(styles.wrapper, className)}>
    <Icon alt={config.name} theme={{ wrapper: styles.icon }}>
      <LogoSvg />
    </Icon>
  </div>
)

LogoLockup.propTypes = {
  className: string
}

export default LogoLockup
export { LogoLockup }
