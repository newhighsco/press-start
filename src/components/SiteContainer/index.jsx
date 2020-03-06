import React from 'react'
import { node } from 'prop-types'

import { wrapper } from './SiteContainer.module.scss'

const SiteContainer = ({ children }) => (
  <div className={wrapper}>{children}</div>
)

SiteContainer.propTypes = {
  children: node
}

export default SiteContainer
