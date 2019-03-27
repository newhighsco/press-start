import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import Meta from '../meta/Meta'
import VisuallyHidden from '../visually-hidden/VisuallyHidden'
import styles from './PageContainer.styl'

const baseClassName = 'page-container'

class PageContainer extends PureComponent {
  render () {
    const { children, meta } = this.props

    return (
      <Fragment>
        <Meta {...meta} />
        <a id="top">
          <VisuallyHidden>Top of page</VisuallyHidden>
        </a>
        <main id="content" className={styles[baseClassName]} role="main">
          <div className={styles[`${baseClassName}__inner`]}>
            {children}
          </div>
        </main>
      </Fragment>
    )
  }
}

PageContainer.propTypes = {
  children: PropTypes.node,
  meta: PropTypes.object
}

export default PageContainer
