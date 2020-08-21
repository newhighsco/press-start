import React from 'react'
import { object } from 'prop-types'
import { Prose } from '@newhighsco/chipset'
import { PageContainer } from '../components'

const NotFoundPage = ({ meta }) => (
  <PageContainer meta={meta}>
    <Prose>
      <h1>{meta.title}</h1>
      <p>We’re sorry but we couldn’t find the page you were looking for</p>
    </Prose>
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
