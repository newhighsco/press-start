import React from 'react'
import { node, object } from 'prop-types'

import Meta from '../Meta'

import { wrapper, inner } from './PageContainer.module.scss'

const PageContainer = ({ children, meta }) => (
  <>
    <Meta {...meta} />
    {/* TODO: */}
    {/* <a id="top">
      <VisuallyHidden>Top of page</VisuallyHidden>
    </a> */}
    <main id="content" className={wrapper} role="main">
      <div className={inner}>{children}</div>
    </main>
  </>
)

PageContainer.propTypes = {
  children: node,
  meta: object
}

export default PageContainer
