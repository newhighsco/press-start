import React from 'react'
import { object } from 'prop-types'
import { PageContainer } from '../components/PageContainer'

const NotFoundPage = ({ meta }) => <PageContainer meta={meta} />

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
