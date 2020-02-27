import React from 'react'
import { node, string, object, array, oneOfType } from 'prop-types'
import Head from 'next/head'

const Meta = ({
  children,
  title,
  description,
  canonicalUrl,
  robots,
  schema
}) => (
  <Head>
    {title && [
      <title key="title">{title}</title>,
      <meta key="ogTitle" property="og:title" content={title} />
    ]}
    {description && [
      <meta key="description" name="description" content={description} />,
      <meta
        key="ogDescription"
        property="og:description"
        content={description}
      />
    ]}
    {canonicalUrl && [
      <link key="canonical" rel="canonical" href={canonicalUrl} />,
      <meta key="ogUrl" property="og:url" content={canonicalUrl} />
    ]}
    {robots && <meta name="robots" content={robots} />}
    {schema && (
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    )}
    {children}
  </Head>
)

Meta.propTypes = {
  children: node,
  title: string,
  description: string,
  canonicalUrl: string,
  robots: string,
  schema: oneOfType([object, array])
}

export default Meta
