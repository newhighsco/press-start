import { Icon } from '@newhighsco/chipset'
import classNames from 'classnames'
import { string } from 'prop-types'
import React from 'react'

import config from '~config'
import { ReactComponent as LogoSvg } from '~images/logo.svg'

import styles from './LogoLockup.module.scss'

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
