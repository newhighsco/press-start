import React from 'react'
import {
  ContentContainer,
  CreditLockup,
  Grid,
  GridItem,
  Icon,
  List,
  SmartLink
} from '@newhighsco/chipset'
import icons from '../../images/icons'
import { homepage, version } from '../../../package.json'

import styles from './styles.module.scss'

const GithubSvg = icons('github')

const Footer = () => (
  <ContentContainer as="footer" role="contentinfo" fullWidth gutter>
    <Grid valign="middle">
      <GridItem sizes={['one-half']}>
        <CreditLockup />
      </GridItem>
      <GridItem sizes={['one-half']} align="right">
        <List inline>
          <li>
            <SmartLink href={homepage} className={styles.link}>
              v{version}
            </SmartLink>
          </li>
          <li>
            <SmartLink href={homepage} className={styles.link}>
              <Icon theme={{ wrapper: styles.icon }}>
                <GithubSvg />
              </Icon>
            </SmartLink>
          </li>
        </List>
      </GridItem>
    </Grid>
  </ContentContainer>
)

export default Footer
export { Footer }
