import React from 'react'
import { object } from 'prop-types'
import Link from 'next/link'
import { SmartLink } from '@newhighsco/chipset'
import { PageContainer } from '../components/PageContainer'

const NotFoundPage = ({ meta }) => (
  <PageContainer meta={meta}>
    <h1>Page not found</h1>
    <p>We’re sorry but we couldn’t find the page you were looking for.</p>
    <p>
      Please try another address or{' '}
      <Link href="/" passHref>
        <SmartLink>visit the homepage</SmartLink>
      </Link>
      .
    </p>
  </PageContainer>
)

NotFoundPage.propTypes = {
  meta: object
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: 'Page not found',
        description: 'Sorry, this page could not be found',
        noindex: true,
        nofollow: true
      }
    }
  }
}

export default NotFoundPage
