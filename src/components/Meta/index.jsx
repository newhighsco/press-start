import React from 'react'
import { array, bool, node, object, string } from 'prop-types'
import { NextSeo } from 'next-seo'

const Meta = ({
  children,
  canonical,
  customTitle,
  title,
  titleTemplate,
  description,
  images,
  openGraph,
  ...rest
}) => {
  const meta = {
    title,
    titleTemplate: customTitle ? `%s` : titleTemplate,
    description,
    canonical,
    openGraph: {
      ...openGraph,
      title,
      description,
      url: canonical,
      images
    }
  }

  return (
    <>
      <NextSeo {...meta} {...rest} />
      {children}
    </>
  )
}

Meta.propTypes = {
  children: node,
  canonical: string,
  customTitle: bool,
  title: string,
  titleTemplate: string,
  description: string,
  images: array,
  openGraph: object
}

export default Meta
export { Meta }
