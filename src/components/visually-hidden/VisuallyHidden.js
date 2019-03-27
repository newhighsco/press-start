import React, { PureComponent } from 'react'
import { node } from 'prop-types'
import styles from './VisuallyHidden.styl'

const baseClassName = 'visually-hidden'

class VisuallyHidden extends PureComponent {
  render () {
    const { children } = this.props

    if (!children) return null

    return (
      <span className={styles[baseClassName]}>{children}</span>
    )
  }
}

VisuallyHidden.propTypes = {
  children: node
}

export default VisuallyHidden
