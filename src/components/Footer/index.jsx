import React from 'react'
import {
  ContentContainer,
  CreditLockup,
  Grid,
  GridItem,
  Icon,
  SmartLink
} from '@newhighsco/chipset'
import icons from '../../images/icons'
import { homepage, version } from '../../../package.json'

const GithubSvg = icons('github')

const Footer = () => (
  <ContentContainer as="footer" role="contentinfo" fullWidth gutter>
    <Grid>
      <GridItem sizes={['one-half']}>
        <CreditLockup />
      </GridItem>
      <GridItem sizes={['one-half']} align="right">
        <SmartLink href={homepage}>
          v{version}{' '}
          <Icon width={24}>
            <GithubSvg />
          </Icon>
        </SmartLink>
      </GridItem>
    </Grid>
  </ContentContainer>
)

export default Footer
export { Footer }
