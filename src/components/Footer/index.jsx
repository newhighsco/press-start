import React from 'react'
import { ContentContainer, CreditLockup } from '@newhighsco/chipset'

const Footer = () => (
  <ContentContainer as="footer" role="contentinfo" fullWidth gutter>
    <CreditLockup />
  </ContentContainer>
)

Footer.propTypes = {}

export default Footer
export { Footer }
