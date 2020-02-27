import React from 'react'
import { node } from 'prop-types'

import { wrapper } from './VisuallyHidden.module.scss'

const VisuallyHidden = ({ children }) => {
  if (!children) return null

  return <span className={wrapper}>{children}</span>
}

VisuallyHidden.propTypes = {
  children: node
}

export default VisuallyHidden
