import React, { PureComponent } from 'react'
import { Head } from 'react-static'
import PropTypes from 'prop-types'

class Meta extends PureComponent {
  render () {
    const { children, title, description, canonicalUrl, robots, schema } = this.props

    return (
      <Head>
        {title && [
          <title key="title">{title}</title>,
          <meta key="ogTitle" property="og:title" content={title} />
        ]}
        {description && [
          <meta key="description" name="description" content={description} />,
          <meta key="ogDescription" property="og:description" content={description} />
        ]}
        {canonicalUrl && [
          <link key="canonical" rel="canonical" href={canonicalUrl} />,
          <meta key="ogUrl" property="og:url" content={canonicalUrl} />
        ]}
        {robots &&
          <meta name="robots" content={robots} />
        }
        {schema &&
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        }
        {children}
      </Head>
    )
  }
}

Meta.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  canonicalUrl: PropTypes.string,
  robots: PropTypes.string,
  schema: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ])
}

export default Meta
