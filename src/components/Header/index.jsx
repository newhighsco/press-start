import React from 'react'
import Link from 'next/link'
import {
  ContentContainer,
  Grid,
  GridItem,
  List,
  SmartLink
} from '@newhighsco/chipset'
import { LogoLockup } from '..'
import { links } from '../../data/header.json'

import theme from './theme.module.scss'
import styles from './styles.module.scss'

const Header = () => (
  <>
    <ContentContainer id="top" as="header" role="banner" gutter theme={theme}>
      <Grid flex valign="middle">
        <GridItem className={styles.logo}>
          <Link href="/" passHref>
            <SmartLink>
              <LogoLockup />
            </SmartLink>
          </Link>
        </GridItem>
        <GridItem className={styles.links}>
          {!!links && (
            <List unstyled>
              {links.map(({ href, text, target }, i) => (
                <li key={i} className={styles.link}>
                  {target ? (
                    <SmartLink href={href} target={target}>
                      {text}
                    </SmartLink>
                  ) : (
                    <Link href={href} as={href} passHref>
                      <SmartLink>{text}</SmartLink>
                    </Link>
                  )}
                </li>
              ))}
            </List>
          )}
        </GridItem>
      </Grid>
    </ContentContainer>
  </>
)

Header.propTypes = {}

export default Header
export { Header }
