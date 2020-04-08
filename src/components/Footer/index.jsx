import React from 'react'
import { ContentContainer, CreditLockup } from '@newhighsco/chipset'

const Footer = () => (
  <ContentContainer is="footer" role="contentinfo" fullWidth gutter>
    <CreditLockup is="span" />
  </ContentContainer>
)

Footer.propTypes = {}

export default Footer
export { Footer }
