import React from 'react'
import { bool, node, string } from 'prop-types'
import { NextSeo } from 'next-seo'

const Meta = ({
  children,
  slug,
  customTitle,
  title,
  titleTemplate,
  description,
  ...rest
}) => {
  // TODO:
  const canonical = slug ? `${'https://TBC'}${slug}` : null
  const meta = {
    title,
    titleTemplate: customTitle ? `%s` : titleTemplate,
    description,
    canonical,
    openGraph: {
      title,
      description,
      url: canonical
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
  slug: string,
  customTitle: bool,
  title: string,
  titleTemplate: string,
  description: string
}

export default Meta
