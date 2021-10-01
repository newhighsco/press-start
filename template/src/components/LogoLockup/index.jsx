import React from 'react'
import { string } from 'prop-types'
import classNames from 'classnames'
import { Icon } from '@newhighsco/chipset'
import config from '@config'

import styles from './LogoLockup.module.scss'
import { ReactComponent as LogoSvg } from '@images/logo.svg'

const { name } = config

const LogoLockup = ({ className }) => (
  <div className={classNames(styles.root, className)}>
    <Icon alt={name} theme={{ root: styles.icon }}>
      <LogoSvg />
    </Icon>
  </div>
)

LogoLockup.propTypes = {
  className: string
}

export default LogoLockup
export { LogoLockup }
