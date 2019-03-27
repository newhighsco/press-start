import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './ResponsiveMedia.styl'

const ratioRegex = /^\d+:\d+$/

class ResponsiveMedia extends PureComponent {
  render () {
    const { children, ratio, className } = this.props

    if (!ratio) return children

    const ratioParts = ratio.split(':')
    const ratioPercentage = ratio && (ratioParts[1] / ratioParts[0]) * 100
    const ratioPercentageRounded = ratioPercentage && parseFloat(ratioPercentage.toFixed(4))

    return (
      <div
        className={classNames(styles['responsive-media'], className)}
        style={ratio && { paddingBottom: `${ratioPercentageRounded}%` }}
        >
        {children}
      </div>
    )
  }
}

ResponsiveMedia.propTypes = {
  children: PropTypes.node.isRequired,
  ratio: (props, propName, componentName) => {
    const ratio = props[propName]
    return !ratio || ratioRegex.exec(ratio) ? null : new Error(`${propName} (${props[propName]}) in ${componentName} is not in the expected format (e.g. 16:9)`)
  },
  className: PropTypes.string
}

export default ResponsiveMedia
