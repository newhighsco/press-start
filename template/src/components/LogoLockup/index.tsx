import { classNames, Icon } from '@newhighsco/chipset'
import React, { type FC } from 'react'

import config from '~config'
import { ReactComponent as LogoSvg } from '~images/logo.svg'

import styles from './LogoLockup.module.scss'

const { name } = config

type Props = { className?: string }

const LogoLockup: FC<Props> = ({ className }) => (
  <div className={classNames(styles.root, className)}>
    <Icon alt={name} theme={{ root: styles.icon }}>
      <LogoSvg />
    </Icon>
  </div>
)

export default LogoLockup
