import React from 'react'
import {
  ContentContainer,
  CreditLockup,
  Grid,
  GridItem
} from '@newhighsco/chipset'
import { version } from '../../../package.json'

const Footer = () => (
  <ContentContainer as="footer" role="contentinfo" fullWidth gutter>
    <Grid>
      <GridItem sizes={['one-half']}>
        <CreditLockup />
      </GridItem>
      <GridItem sizes={['one-half']} align="right">
        v{version}
      </GridItem>
    </Grid>
  </ContentContainer>
)

export default Footer
export { Footer }
